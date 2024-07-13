"use client";
import { useState } from "react";
import useSWR from "swr";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { IoMdArrowBack } from "react-icons/io";
import { FaStar, FaRegStar } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import Footer from "@/components/Footer";
import PrimaryButton from "@/components/PrimaryButton";

const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

const page = ({ params }: any) => {
  const router = useRouter();
  const productId = params.product;

  const { data, isLoading, error } = useSWR(
    `https://timbu-get-single-product.reavdev.workers.dev/${productId}?organization_id=3bde8322367d4d9a86665d223bd2d4f8&Appid=9BY9K0GZHTS2WEV&Apikey=530a32ca4ea14d5ab0e2d02841e8985020240712125048146690`,
    fetcher
  );

  console.log(data);

  return (
    <section>
      <Navbar />
      <div className="mx-[5.7%]">
        <div
          className="flex flex-row items-center gap-4 text-2xl cursor-pointer"
          onClick={() => router.back()}
        >
          <IoMdArrowBack />
          <p className="text-grey">
            Product/
            <span className="text-secondary-black">
              {data.name.split("-").pop()}
            </span>
          </p>
        </div>
        <div className="mt-4 w-full flex md:flex-row flex-col items-start md:space-y-0 md:space-x-8 space-y-10">
          <div className="md:w-[50%] w-full">
            <Image
              src={data.photos[0].url}
              alt={data.name}
              className="w-full"
            />
          </div>
          <div className="md:w-[50%]">
            <span className="md:text-2xl text-sm uppercase text-grey font-normal">
              {data.name.split("-").pop()}
            </span>
            <h2 className="font-light md:text-[2rem] md:leading-[3.12625rem]  text-xl md:mt-0 mt-2.5">
              {data.name.split(" - ").slice(0, -1).join(" - ")}
            </h2>
            <span className="text-2xl font-bold">
              ${data.current_price[0].USD}
            </span>
            <p className="text-sm font-normal text-[rgba(79,79,79,0.72)] md:mt-[1.125rem] mt-1">
              {data.description}
            </p>
            <div className="flex flex-row items-center space-x-2.5 mt-4">
              <FaStar className="w-6 h-6 text-primary-orange" />
              <FaStar className="w-6 h-6 text-primary-orange" />
              <FaStar className="w-6 h-6 text-primary-orange" />
              <FaStar className="w-6 h-6 text-primary-orange" />
              <FaRegStar className="w-6 h-6 text-grey" />
            </div>
            <div className="md:mt-8 mt-4 ">
              <p className="font-light text-xl">Quantity</p>
              <div className="md:mt-4 mt-2.5 text-xl grid grid-cols-3 text-grey border border-solid border-grey rounded-[4px] divide-y w-fit">
                <button
                  className="py-[5px] px-[15px] text-grey"
                  // onClick={decreaseQuantity}
                >
                  -
                </button>
                <span className="py-[5px] px-[15px] text-grey ">1</span>
                <button
                  className="py-[5px] px-[15px] text-grey"
                  // onClick={increaseQuantity}
                >
                  +
                </button>
              </div>
            </div>
            {/* <div className="md:mt-8 mt-4">
              <p className="font-light text-xl">Colours</p>
              <div className="md:mt-4 mt-2.5 flex flex-row space-x-2">
                <button className="h-[2.125rem] w-[2.125rem] rounded-[4px] border border-transparent bg-[#069B10]"></button>
                <button className="h-[2.125rem] w-[2.125rem] rounded-[4px] border border-transparent bg-[#BC0957]"></button>
                <button className="h-[2.125rem] w-[2.125rem] rounded-[4px] border border-transparent bg-[#0B069B]"></button>
                <button className="h-[2.125rem] w-[2.125rem] rounded-[4px] border border-transparent bg-[#BD3706]"></button>
              </div>
            </div> */}
            {/* <div className="md:mt-8 mt-4">
              <p className="font-light text-xl">Select Size</p>
              <div className="md:mt-4 mt-2.5 flex flex-row space-x-2">
                <button className="h-[2.125rem] w-[2.125rem] rounded-[4px] border border-grey border-solid bg-white text-grey">
                  S
                </button>
                <button className="h-[2.125rem] w-[2.125rem] rounded-[4px] border border-transparent bg-primary-orange text-white">
                  M
                </button>
                <button className="h-[2.125rem] w-[2.125rem] rounded-[4px] border border-grey border-solid bg-white text-grey">
                  L
                </button>
                <button className="h-[2.125rem] w-[2.125rem] rounded-[4px] border border-grey border-solid bg-white text-grey">
                  XL
                </button>
              </div>
            </div> */}
            <div className="mt-[2.6875rem] flex flex-row items-center space-x-4">
              <PrimaryButton>Add to Cart</PrimaryButton>
              <div className="p-[14.77px] border border-solid border-grey rounded-[4px]">
                <FaRegHeart className="h-4 w-4 text-grey cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[11.125rem]">
        <Footer />
      </div>
    </section>
  );
};

export default page;
