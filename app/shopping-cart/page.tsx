"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { IoMdArrowBack } from "react-icons/io";
import Footer from "@/components/Footer";
import PrimaryButton from "@/components/PrimaryButton";
import cartData from "@/public/data/cartProducts";
import { CartType } from "@/public/data/cartProducts";
import { Icon } from "@iconify-icon/react";

const page = () => {
  const router = useRouter();

  const [cartItems, setCartItems] = useState<CartType[]>(cartData);

  const handleQuantityChange = (id: string, change: number) => {
    setCartItems((prevCartData) =>
      prevCartData.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  return (
    <section>
      <Navbar />
      <div className="mt-8 lg:mx-[5.8%] mx-[6.7%] text-primary-black">
        <button
          className="flex flex-row items-center space-x-1 text-2xl"
          onClick={() => router.back()}
        >
          <IoMdArrowBack /> Back
        </button>
        <div className="w-full flex lg:flex-row flex-col items-start lg:space-y-0 space-y-[3.6875rem] space-x-0 lg:space-x-[1.375rem] mt-8">
          <div className="lg:w-[55%] w-full flex flex-col space-y-[22px]">
            {cartItems.map((item) => (
              <div className="md:px-[7px] md:py-[15px] py-[] border border-solid border-[rgba(79,79,79,0.27)] rounded">
                <div className="flex flex-row space-x-[0.8125rem]">
                  <Image
                    src={item.image}
                    alt=""
                    width={154}
                    height={141}
                    className="border border-transparent rounded max-w-full"
                  />
                  <div className="flex flex-col justify-between md:pr-9 pr-6 pt-2.5 pb-2">
                    <div className="flex md:flex-row flex-col items-start md:space-x-[2.6875rem]">
                      <p className="md:text-xl text-sm">{item.product}</p>
                      <div className="md:w-auto w-full flex flex-row items-center md:space-x-[2.6875rem] md:justify-normal justify-between">
                        <div className="md:mt-4 mt-2.5 text-xl flex flex-row items-center text-grey">
                          <button
                            className="md:py-[5px] md:px-3 px-1 text-grey bg-[rgba(185,179,179,0.04)] border-[0.5px] border-solid border-grey rounded-l"
                            onClick={() => handleQuantityChange(item.id, -1)}
                          >
                            -
                          </button>
                          <span className="md:py-[5px] md:px-3 px-1.5 py-0 text-grey border-y-[0.5px] border-x-0 border-solid border-grey">
                            {item.quantity}
                          </span>
                          <button
                            className="bg-[rgba(185,179,179,0.04)] text-grey md:py-[5px] md:px-[11px] px-[3px] border-[0.5px] border-solid border-grey rounded-r"
                            onClick={() => handleQuantityChange(item.id, 1)}
                          >
                            +
                          </button>
                        </div>
                        <p className="font-bold mt-3">
                          ${item.price * item.quantity}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
                      <div className="flex flex-col md:space-y-2 space-y-1">
                        <span className="text-sm font-light">
                          Size: {item.size}
                        </span>
                        <span className="text-sm font-light">
                          Colour: {item.color}
                        </span>
                      </div>
                      <button className="flex flex-row items-center text-[#B82707]">
                        <Icon icon="mdi-light:delete" />
                        <p className="text-sm font-light">Remove</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:w-[45%] w-full pt-[1.3125rem] pb-[2rem] border-[0.5px] border-solid border-[rgba(79,79,79,0.3)] rounded">
            <div className="px-6">
              <p className="font-medium text-2xl">Order Summary</p>
              <div className="mt-8 mb-[1.375rem] flex flex-col space-y-6">
                <div className="flex flex-row items-center justify-between">
                  <p className="text-xl">Items Subtotal</p>
                  <p className="text-xl">$500</p>
                </div>
                <div className="flex flex-row items-center justify-between">
                  <p className="text-xl">Tax</p>
                  <p className="text-xl">$500</p>
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
                  $500
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
      </div>
      <div className="mt-[20.4375rem]">
        <Footer />
      </div>
    </section>
  );
};

export default page;
