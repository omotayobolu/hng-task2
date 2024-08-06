"use client";
import { useState } from "react";
import useSWR from "swr";
import { useRouter, useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { IoMdArrowBack } from "react-icons/io";
import { FaStar, FaRegStar } from "react-icons/fa6";
import Footer from "@/components/Footer";
import PrimaryButton from "@/components/PrimaryButton";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useCart from "@/hooks/useCart";

const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};
export type ProductType = {
  id: string;
  title: string;
  price: number;
  image: string;
  category: {
    name: string;
    image: string;
  };
  description: string;
};

const page = () => {
  const router = useRouter();
  const params = useParams();
  const productId = params.productId;

  const { dispatch, REDUCER_ACTIONS } = useCart();

  const [quantityToAdd, setQuantityToAdd] = useState<number>(1);

  const handleDecrease = () => {
    if (quantityToAdd > 1) {
      setQuantityToAdd((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantityToAdd((prevQuantity) => prevQuantity + 1);
  };

  const onAddToCart = () => {
    dispatch({
      type: REDUCER_ACTIONS.ADD,
      payload: { ...data, quantity: quantityToAdd },
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

  const { data, isLoading, error } = useSWR(
    `https://api.escuelajs.co/api/v1/products/${productId}`,
    fetcher
  );

  const price = new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(data?.price);

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
            <span className="text-secondary-black">{data?.title}</span>
          </p>
        </div>
        {isLoading && <p className="text-center">Loading....</p>}
        {error && (
          <p className="text-center text-red-600">
            An error occured. Try again
          </p>
        )}
        {data && (
          <div className="mt-4 w-full flex md:flex-row flex-col items-start md:space-y-0 md:space-x-8 space-y-10">
            <div className="md:w-[50%] w-full md:h-[500px] h-[300px] relative">
              <Image
                src={data?.category.image}
                alt={data?.title}
                fill
                className="max-w-full object-cover"
              />
            </div>
            <div className="md:w-[50%]">
              <span className="md:text-xl text-sm uppercase text-grey font-normal">
                {data?.category.name}
              </span>
              <h2 className="font-light md:text-[2rem] md:leading-[3.12625rem]  text-xl md:mt-0 mt-2.5">
                {data?.title}
              </h2>
              <span className="text-2xl font-bold">{price}</span>
              <p className="text-sm font-normal text-[rgba(79,79,79,0.72)] md:mt-[1.125rem] mt-1">
                {data?.description}
              </p>
              <div className="md:mt-8 mt-4 ">
                <p className="font-light text-xl">Quantity</p>
                <div className="md:mt-4 mt-2.5 text-xl grid grid-cols-3 text-grey border border-solid border-grey rounded-[4px] divide-y w-fit">
                  <button
                    className="py-[5px] px-[15px] text-grey"
                    onClick={handleDecrease}
                  >
                    -
                  </button>
                  <span className="py-[5px] px-[15px] text-grey ">
                    {quantityToAdd}
                  </span>
                  <button
                    className="py-[5px] px-[15px] text-grey"
                    onClick={handleIncrease}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="mt-[2.6875rem]">
                <PrimaryButton onClick={onAddToCart}>Add to Cart</PrimaryButton>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="mt-[11.125rem]">
        <Footer />
      </div>
    </section>
  );
};

export default page;
