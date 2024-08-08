"use client";

import {
  useReducer,
  useMemo,
  createContext,
  ReactElement,
  ReactNode,
} from "react";

export type CartItemType = {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
};

type CartStateType = { cart: CartItemType[] };

const isBrowser = typeof window !== "undefined";

const getCartStateFromLocalStorage = (): CartStateType => {
  if (isBrowser) {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : { cart: [] };
  }
  return { cart: [] };
};

const initCartState = getCartStateFromLocalStorage();

const REDUCER_ACTION_TYPE = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  QUANTITY: "QUANTITY",
  CLEAR_ALL: "CLEAR_ALL",
};

export type ReducerActionType = typeof REDUCER_ACTION_TYPE;

export type ReducerAction = {
  type: string;
  payload?: CartItemType;
};

const saveCartToLocalStorage = (state: CartStateType) => {
  localStorage.setItem("cart", JSON.stringify(state));
};

const reducer = (
  state: CartStateType,
  action: ReducerAction
): CartStateType => {
  let newState: CartStateType;

  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD: {
      if (!action.payload) {
        throw new Error("action.payload missing in add action");
      }
      const { id, title, price, image, quantity } = action.payload;
      const filteredCart: CartItemType[] = state.cart.filter(
        (item) => item.id !== id
      );

      const itemExists: CartItemType | undefined = state.cart.find(
        (item) => item.id === id
      );

      const updatedQuantity: number = itemExists
        ? itemExists.quantity + quantity
        : quantity;
      newState = {
        ...state,
        cart: [
          ...filteredCart,
          { id, title, price, quantity: updatedQuantity, image },
        ],
      };
      break;
    }
    case REDUCER_ACTION_TYPE.REMOVE: {
      if (!action.payload) {
        throw new Error("action.payload missing in remove action");
      }
      const { id } = action.payload;
      const filteredCart: CartItemType[] = state.cart.filter(
        (item) => item.id !== id
      );

      newState = { ...state, cart: [...filteredCart] };
      break;
    }
    case REDUCER_ACTION_TYPE.QUANTITY: {
      if (!action.payload) {
        throw new Error("action.payload missing in quantity action");
      }
      const { id, quantity } = action.payload;

      const itemExists: CartItemType | undefined = state.cart.find(
        (item) => item.id === id
      );

      if (!itemExists) {
        throw new Error("item must exist to update quantity");
      }

      const updatedItem: CartItemType = { ...itemExists, quantity };

      const filteredCart: CartItemType[] = state.cart.filter(
        (item) => item.id !== id
      );

      newState = { ...state, cart: [...filteredCart, updatedItem] };
      break;
    }
    case REDUCER_ACTION_TYPE.CLEAR_ALL: {
      newState = { ...state, cart: [] };
      break;
    }
    default:
      throw new Error("Unidentified reducer action type");
  }
  saveCartToLocalStorage(newState);
  return newState;
};

const useCartContext = (initCartState: CartStateType) => {
  const [state, dispatch] = useReducer(reducer, initCartState);

  const REDUCER_ACTIONS = useMemo(() => {
    return REDUCER_ACTION_TYPE;
  }, []);

  const totalItems: number = state.cart.reduce((previousValue, cartItem) => {
    return previousValue + cartItem.quantity;
  }, 0);

  const totalPrice: string = new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(
    state.cart.reduce((previousValue, cartItem) => {
      return previousValue + cartItem.quantity * cartItem.price;
    }, 0)
  );

  const cart = state.cart;

  return { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart };
};

export type UseCartContextType = ReturnType<typeof useCartContext>;

const initCartContextState: UseCartContextType = {
  dispatch: () => {},
  REDUCER_ACTIONS: REDUCER_ACTION_TYPE,
  totalItems: 0,
  totalPrice: "",
  cart: [],
};

export const CartContext =
  createContext<UseCartContextType>(initCartContextState);

type ChildrenType = { children?: ReactElement | ReactElement[] | ReactNode };

export const CartProvider = ({ children }: ChildrenType): ReactNode => {
  return (
    <CartContext.Provider value={useCartContext(initCartState)}>
      {children}
    </CartContext.Provider>
  );
};
