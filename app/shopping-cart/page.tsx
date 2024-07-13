"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { IoMdArrowBack } from "react-icons/io";
import Footer from "@/components/Footer";
import PrimaryButton from "@/components/PrimaryButton";
import useCart from "@/hooks/useCart";
import CartItem from "@/components/CartItem";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Icon } from "@iconify-icon/react";

const page = () => {
  const router = useRouter();

  const { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart } = useCart();

  // const handleQuantityChange = (id: string, change: number) => {
  //   setCartItems((prevCartData) =>
  //     prevCartData.map((item) =>
  //       item.id === id
  //         ? { ...item, quantity: Math.max(1, item.quantity + change) }
  //         : item
  //     )
  //   );
  // };

  const clearCart = () => {
    dispatch({
      type: REDUCER_ACTIONS.CLEAR_ALL,
    });

    toast("Cart Successfully Cleared", {
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
    <section>
      <Navbar />
      <div className="mt-8 lg:mx-[5.8%] mx-[6.7%] text-primary-black">
        <div className="md:w-1/2 w-full flex flex-row items-center justify-between">
          <button
            className="flex flex-row items-center space-x-1 text-2xl"
            onClick={() => router.back()}
          >
            <IoMdArrowBack /> Back
          </button>
          {cart.length ? (
            <button
              className="flex flex-row items-center text-[#B82707]"
              onClick={clearCart}
            >
              <Icon icon="mdi-light:delete" />
              <p className="text-base font-light">Clear Cart</p>
            </button>
          ) : null}
        </div>
        {cart.length ? (
          <div className="w-full flex lg:flex-row flex-col items-start lg:space-y-0 space-y-[3.6875rem] space-x-0 lg:space-x-[1.375rem] mt-8">
            <div className="lg:w-[55%] w-full flex flex-col space-y-[22px]">
              {cart.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  REDUCER_ACTIONS={REDUCER_ACTIONS}
                  dispatch={dispatch}
                />
              ))}
            </div>
            <div className="lg:w-[45%] w-full pt-[1.3125rem] pb-[2rem] border-[0.5px] border-solid border-[rgba(79,79,79,0.3)] rounded">
              <div className="px-6">
                <p className="font-medium text-2xl">Order Summary</p>
                <div className="mt-8 mb-[1.375rem] flex flex-col space-y-6">
                  <div className="flex flex-row items-center justify-between">
                    <p className="text-xl">Items Subtotal</p>
                    <p className="text-xl">${totalPrice - 50}</p>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <p className="text-xl">Tax</p>
                    <p className="text-xl">$50</p>
                  </div>
                </div>
              </div>
              <hr className="bg-[rgba(79,79,79,0.26)] h-[1px]" />
              <div className="pt-3.5 px-6">
                <div className="flex flex-row items-center justify-between">
                  <p className="text-[2rem] leading-[3.12625rem] font-medium">
                    Total
                  </p>
                  <p className="text-[2rem] leading-[3.12625rem] font-medium">
                    {totalPrice}
                  </p>
                </div>
                <div className="mt-[2.375rem]">
                  <PrimaryButton>
                    <Link
                      href="/shopping-cart/checkout"
                      className="text-white text-xl"
                    >
                      Check Out
                    </Link>
                  </PrimaryButton>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p className="md:text-xl text-base text-center">Cart is empty</p>
        )}
      </div>
      <div className="mt-[20.4375rem]">
        <Footer />
      </div>
    </section>
  );
};

export default page;
