"use client";
import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import ProductsData, { ProductType } from "@/public/data/ProductsData";
import { IoChevronBack } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";
import Footer from "@/components/Footer";
import PrimaryButton from "@/components/PrimaryButton";

export default function Home() {
  const [selectedCategory, setSelectedCategory] =
    useState<string>("All Products");

  const filteredProducts =
    selectedCategory === "All Products"
      ? ProductsData
      : ProductsData.filter(
          (product) =>
            product.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <main className="bg-white text-primary-black">
      <Navbar />
      <div className=" bg-cover bg-center h-[279px] w-full hero-bg bg-blend-overlay"></div>
      <div className="mt-[2rem]">
        <div className="flex lg:flex-row flex-col lg:items-center lg:space-y-0 space-y-6 items-start justify-between md:mx-[3.75%] mx-[4.2%]">
          <div className="flex flex-row items-center space-x-[1.625rem]">
            <p>Sort by:</p>
            <select
              name="sort"
              id="sort"
              className="py-[0.625rem] px-[0.5625rem] pr-[1.1875rem] border-[0.5px] border-solid border-[rgba(79,79,79,0.27)] rounded-lg text-secondary-black"
            >
              <option value="Low to High">Low to High</option>
              <option value="High to Low">High to Low</option>
            </select>
          </div>
          <div className="flex flex-row items-center lg:space-x-8 space-x-4">
            <button
              className={`md:text-xl text-sm ${
                selectedCategory === "All Products"
                  ? "font-medium text-primary-orange"
                  : "font-light text-secondary-black"
              }`}
              onClick={() => setSelectedCategory("All Products")}
            >
              All Products
            </button>
            <button
              className={`md:text-xl text-sm ${
                selectedCategory === "Dresses"
                  ? "font-medium text-primary-orange"
                  : "font-light text-secondary-black"
              }`}
              onClick={() => setSelectedCategory("Dresses")}
            >
              Dresses
            </button>
            <button
              className={`md:text-xl text-sm ${
                selectedCategory === "Jeweleries"
                  ? "font-medium text-primary-orange"
                  : "font-light text-secondary-black"
              }`}
              onClick={() => setSelectedCategory("Jeweleries")}
            >
              Jeweleries
            </button>
            <button
              className={`md:text-xl text-sm ${
                selectedCategory === "Shoes"
                  ? "font-medium text-primary-orange"
                  : "font-light text-secondary-black"
              }`}
              onClick={() => setSelectedCategory("Shoes")}
            >
              Shoes
            </button>
            <button
              className={`md:text-xl text-sm ${
                selectedCategory === "Bags"
                  ? "font-medium text-primary-orange"
                  : "font-light text-secondary-black"
              }`}
              onClick={() => setSelectedCategory("Bags")}
            >
              Bags
            </button>
          </div>
          <p className="font-light lg:block hidden">
            <span className="font-normal">Showing </span>1-20 of 1000 results
          </p>
        </div>
      </div>
      <div className="mt-[2.5rem] md:mx-[3.125%] mx-[6%] flex flex-row gap-[2.0625rem]">
        <div className="lg:w-[27.7%] lg:block hidden">
          <div className=" pt-[1.8125rem] pr-[2.4375rem] pb-[7.25rem] pl-[2.5rem] border-[0.5px] border-solid border-[rgba(79,79,79,0.3)] rounded-lg">
            <p className="uppercase font-medium">Filter By:</p>
            <div className="flex flex-col mt-[2.4325rem] space-y-[2.4325rem]">
              <div className="flex flex-col space-y-8">
                <p className="uppercase font-medium">category</p>
                <div className="flex flex-col space-y-5">
                  <div className="flex flex-row items-center space-x-[0.4375rem]">
                    <input type="checkbox" name="men" id="men" />
                    <label htmlFor="men">Men</label>
                  </div>
                  <div className="flex flex-row items-center space-x-[0.4375rem]">
                    <input type="checkbox" name="women" id="women" />
                    <label htmlFor="women">Women</label>
                  </div>
                  <div className="flex flex-row items-center space-x-[0.4375rem]">
                    <input type="checkbox" name="children" id="children" />
                    <label htmlFor="children">Children</label>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-8">
                <p className="uppercase font-medium">sizes</p>
                <div className="flex flex-col space-y-5">
                  <div className="flex flex-row items-center space-x-[0.4375rem]">
                    <input type="checkbox" name="small" id="small" />
                    <label htmlFor="small">Small</label>
                  </div>
                  <div className="flex flex-row items-center space-x-[0.4375rem]">
                    <input type="checkbox" name="medium" id="medium" />
                    <label htmlFor="medium">Medium</label>
                  </div>
                  <div className="flex flex-row items-center space-x-[0.4375rem]">
                    <input type="checkbox" name="large" id="large" />
                    <label htmlFor="large">Large</label>
                  </div>
                  <div className="flex flex-row items-center space-x-[0.4375rem]">
                    <input
                      type="checkbox"
                      name="extra-large"
                      id="extra-large"
                    />
                    <label htmlFor="extra-large">Extra Large</label>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-[1.375rem]">
                <div className="flex flex-col space-y-8">
                  <p className="uppercase font-medium">prices</p>
                  <div className="flex flex-row items-center justify-between">
                    <label htmlFor="men">Range</label>
                    <p className="text-sm">$120 - $1000</p>
                  </div>
                </div>
                <input
                  type="range"
                  name="range"
                  id="range"
                  min="120"
                  max="1000"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="grid gap-x-[1.4375rem] gap-y-[1.125rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
            {filteredProducts.map((product: any) => (
              <div key={product.id} className="relative w-full">
                <Image
                  src={product.image}
                  alt={product.product}
                  width={297}
                  height={313}
                  className="w-full"
                />
                <div className="pt-2 pr-2.5 pb-[1.125rem] pl-3.5 border-[0.5px] border-solid border-[rgba(79,79,79,0.31)] rounded-[0.5px]">
                  <span className="text-xs uppercase text-grey">
                    {product.category}
                  </span>
                  <p className="mt-1">{product.product}</p>
                  <p className="font-bold mt-3">${product.price}</p>
                  <div className="mt-5">
                    <PrimaryButton>Add to Cart</PrimaryButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-[4.3125rem] md:flex hidden flex-row items-center justify-center gap-5 w-full">
            <button className="w-[3.125rem] h-[3.125rem] rounded-md border border-solid border-grey px-5 py-4">
              <IoChevronBack />
            </button>
            <button className="w-[3.125rem] h-[3.125rem] rounded-md bg-primary-orange text-[#fdfdfd] px-5 py-4">
              1
            </button>
            <button className="w-[3.125rem] h-[3.125rem] rounded-md border border-solid border-grey px-5 py-4">
              2
            </button>
            <button className="w-[3.125rem] h-[3.125rem] rounded-md border border-solid border-grey px-5 py-4">
              ...
            </button>
            <button className="w-[3.125rem] h-[3.125rem] rounded-md border border-solid border-grey px-5 py-4">
              9
            </button>
            <button className="w-[3.125rem] h-[3.125rem] rounded-md border border-solid border-grey px-5 py-4">
              10
            </button>
            <button className="w-[3.125rem] h-[3.125rem] rounded-md border border-solid border-grey px-5 py-4">
              <IoChevronForward />
            </button>
          </div>
        </div>
      </div>
      <div className="mt-[5.5625rem]">
        <Footer />
      </div>
    </main>
  );
}
