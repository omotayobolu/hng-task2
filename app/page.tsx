"use client";
import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import Navbar from "@/components/Navbar";
import { IoChevronBack } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";
import Footer from "@/components/Footer";
import useCart from "@/hooks/useCart";
import Product from "@/components/Product";
import Link from "next/link";

export type ProductType = {
  id: string;
  title: string;
  category: {
    name: string;
    image: string;
  };
  price: number;
  image: string;
};

type CategoryType = {
  id: number;
  name: string;
};

const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

export default function Home() {
  const { dispatch, REDUCER_ACTIONS } = useCart();
  const searchParams = useSearchParams();
  const offsetValue = searchParams.get("offset");
  const categoryValue = searchParams.get("category");
  const offset = Number(offsetValue);

  const [selectedCategory, setSelectedCategory] =
    useState<string>("All Products");

  const { data: categories } = useSWR(
    "https://api.escuelajs.co/api/v1/categories",
    fetcher
  );

  const {
    data: products,
    isLoading: loadingProducts,
    error: productsError,
  } = useSWR(
    `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=10`,
    fetcher
  );

  const filteredProducts = products?.filter((product: ProductType) => {
    if (selectedCategory === "All Products" && categoryValue === null) {
      return true;
    }
    return product.category.name === categoryValue;
  });

  return (
    <main className="bg-white text-primary-black">
      <Navbar />
      <div className=" bg-cover bg-center h-[279px] w-full hero-bg bg-blend-overlay"></div>
      <div className="mt-[2rem]">
        <div className="flex lg:flex-row flex-col lg:items-center lg:space-y-0 space-y-6 items-start justify-between md:mx-[3.75%] mx-[4.2%]">
          <div className="flex flex-row items-center lg:space-x-8 space-x-2">
            <Link
              href="/"
              className={`md:text-xl text-sm ${
                selectedCategory === "All Products" && categoryValue === null
                  ? "font-medium text-primary-orange"
                  : "font-light text-secondary-black"
              }`}
              onClick={() => setSelectedCategory("All Products")}
            >
              All Products
            </Link>
            {categories?.slice(0, 5).map((category: CategoryType) => (
              <Link
                href={`?offset=${offset}&limit=10&category=${category.name}`}
                key={category.id}
                className={`md:text-xl text-xs ${
                  categoryValue === category.name
                    ? "font-medium text-primary-orange"
                    : "font-light text-secondary-black"
                }`}
              >
                {category.name}
              </Link>
            ))}
          </div>
          <p className="font-light lg:block hidden">
            <span className="font-normal">Showing </span>
            {offset + 1} -{offset + 10} of 20 results
          </p>
        </div>
      </div>
      <div className="mt-[2.5rem] md:mx-[3.125%] mx-[6%] flex flex-row gap-[2.0625rem]">
        <div className="flex flex-col w-full">
          {filteredProducts?.length === 0 && !loadingProducts && (
            <p className="text-center">No products! Check back later.</p>
          )}
          {loadingProducts && <p className="text-center">Loading....</p>}
          {productsError && (
            <p className="text-center text-red-600">
              Something went wrong. Try again
            </p>
          )}
          <div className="grid gap-x-[1.4375rem] gap-y-[1.125rem] grid-cols-[repeat(auto-fill,minmax(279px,1fr))] place-items-center">
            {filteredProducts?.map((product: ProductType) => (
              <Product
                product={product}
                dispatch={dispatch}
                key={product.id}
                REDUCER_ACTIONS={REDUCER_ACTIONS}
              />
            ))}
          </div>
          {filteredProducts?.length > 9 && (
            <div className="mt-[4.3125rem] flex flex-row items-center justify-center gap-5 w-full">
              <Link
                href={`?offset=${offset - 10}&limit=10`}
                className={`w-[3.125rem] h-[3.125rem] rounded-md border border-solid border-grey px-5 py-4 ${
                  offset === 0 && "opacity-20 cursor-not-allowed"
                }`}
                onClick={(e) => {
                  if (offset === 0) {
                    e.preventDefault();
                  }
                }}
              >
                <IoChevronBack />
              </Link>
              <Link
                href={`?offset=0&limit=10`}
                className={`w-[3.125rem] h-[3.125rem] rounded-md  px-5 py-4 ${
                  offset === 0
                    ? "bg-primary-orange text-[#fdfdfd]"
                    : "border border-solid border-grey"
                } `}
              >
                1
              </Link>
              <Link
                href={`?offset=10&limit=10`}
                className={`w-[3.125rem] h-[3.125rem] rounded-md  px-5 py-4 ${
                  offset === 10
                    ? "bg-primary-orange text-[#fdfdfd]"
                    : "border border-solid border-grey"
                } `}
              >
                2
              </Link>
              <Link
                href={`?offset=${offset + 10}&limit=10`}
                className={`w-[3.125rem] h-[3.125rem] rounded-md border border-solid border-grey px-5 py-4 ${
                  offset === 10 && "opacity-20 cursor-not-allowed"
                } `}
              >
                <IoChevronForward />
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="mt-[5.5625rem]">
        <Footer />
      </div>
    </main>
  );
}
