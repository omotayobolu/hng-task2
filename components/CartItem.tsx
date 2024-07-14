import React from "react";
import Image from "next/image";
import { CartItemType } from "../context/CartProvider";
import { ReducerAction } from "../context/CartProvider";
import { ReducerActionType } from "../context/CartProvider";
import { Icon } from "@iconify-icon/react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type PropsType = {
  item: CartItemType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
};

const CartItem = ({ item, REDUCER_ACTIONS, dispatch }: PropsType) => {
  const lineTotal: string = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(item.quantity * item.current_price);

  const handleDecrease = () => {
    if (item.quantity > 1) {
      dispatch({
        type: REDUCER_ACTIONS.QUANTITY,
        payload: {
          ...item,
          quantity: item.quantity - 1,
        },
      });
    }
  };

  const handleIncrease = () => {
    dispatch({
      type: REDUCER_ACTIONS.QUANTITY,
      payload: {
        ...item,
        quantity: item.quantity + 1,
      },
    });
  };

  const onRemoveFromCart = () => {
    dispatch({
      type: REDUCER_ACTIONS.REMOVE,
      payload: item,
    });

    toast("Item removed from cart", {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      type: "success",
    });
  };

  return (
    <div className="md:px-[7px] md:py-[15px] py-[] border border-solid border-[rgba(79,79,79,0.27)] rounded">
      <div className="flex flex-row space-x-[0.8125rem]">
        {/* <Image
          src={image}
          alt=""
          width={154}
          height={141}
          className="border border-transparent rounded max-w-full"
        /> */}
        <div className="flex flex-col justify-between md:pr-9 pr-6 pt-2.5 pb-2">
          <div className="flex md:flex-row flex-col items-start md:space-x-[2.6875rem]">
            <p className="md:text-xl text-sm">
              {item.name.split(" - ").slice(0, -1).join(" - ")}
            </p>
            <div className="md:w-auto w-full flex flex-row items-center md:space-x-[2.6875rem] md:justify-normal justify-between">
              <div className="md:mt-4 mt-2.5 text-xl flex flex-row items-center text-grey">
                <button
                  className="md:py-[5px] md:px-3 px-1 text-grey bg-[rgba(185,179,179,0.04)] border-[0.5px] border-solid border-grey rounded-l"
                  onClick={handleDecrease}
                >
                  -
                </button>
                <span className="md:py-[5px] md:px-3 px-1.5 py-0 text-grey border-y-[0.5px] border-x-0 border-solid border-grey">
                  {item.quantity}
                </span>
                <button
                  className="bg-[rgba(185,179,179,0.04)] text-grey md:py-[5px] md:px-[11px] px-[3px] border-[0.5px] border-solid border-grey rounded-r"
                  onClick={handleIncrease}
                >
                  +
                </button>
              </div>
              <p className="font-bold mt-3">{lineTotal}</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between w-full">
            <div className="flex flex-col md:space-y-2 space-y-1">
              <span className="text-sm font-light">Size: Medium</span>
              <span className="text-sm font-light">Colour: Black</span>
            </div>
            <button
              className="flex flex-row items-center text-[#B82707]"
              onClick={onRemoveFromCart}
            >
              <Icon icon="mdi-light:delete" />
              <p className="text-sm font-light">Remove</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
