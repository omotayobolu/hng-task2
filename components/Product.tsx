"use client";
import React, { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "./PrimaryButton";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProductType } from "@/app/page";
import { ReducerActionType, ReducerAction } from "../context/CartProvider";

type PropsType = {
  product: ProductType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
};

const Product = ({
  product,
  dispatch,
  REDUCER_ACTIONS,
}: PropsType): ReactElement => {
  const onAddToCart = () => {
    dispatch({
      type: REDUCER_ACTIONS.ADD,
      payload: { ...product, quantity: 1 },
    });
    toast("Item added to cart", {
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
    <div key={product.id} className="relative w-full">
      <Image
        src={`https://api.timbu.cloud/images/${product.photos[0]?.url}`}
        alt={product.name}
        width={297}
        height={313}
        className="w-full"
      />
      <div className="pt-2 pr-2.5 pb-[1.125rem] pl-3.5 border-[0.5px] border-solid border-[rgba(79,79,79,0.31)] rounded-[0.5px]">
        <span className="text-xs uppercase text-grey">
          {product.name.split("-").pop()}
        </span>
        <Link href={`products/${product.id}`}>
          <p className="mt-1">
            {product.name.split(" - ").slice(0, -1).join(" - ")}
          </p>
        </Link>
        <p className="font-bold mt-3">${product.current_price[0].USD}</p>
        <div className="mt-5">
          <PrimaryButton onClick={onAddToCart}>Add to Cart</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Product;
