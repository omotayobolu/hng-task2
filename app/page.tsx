"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-white text-primary-black">
      <Navbar />
      <div className=" bg-cover bg-center h-[279px] w-full hero-bg bg-blend-overlay"></div>
      <div className="mt-[2rem]">
        <div className="flex flex-row items-center justify-between mx-[3.375rem]">
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
          <div className="flex flex-row items-center space-x-12">
            <button className="text-xl font-medium text-primary-orange">
              All Products
            </button>
            <button className="text-xl font-light text-secondary-black">
              Shoes
            </button>
            <button className="text-xl font-light text-secondary-black">
              Clothes
            </button>
            <button className="text-xl font-light text-secondary-black">
              Bags
            </button>
            <button className="text-xl font-light text-secondary-black">
              Jewelries
            </button>
          </div>
          <div className="flex flex-row items-center space-x-[0.3125rem]">
            <p className="font-light">
              <span className="font-normal">Showing </span>1-20 of 1000 results
            </p>
            <div className="flex flex-row items-center space-x-[0.3125rem]">
              <Image
                src="/assets/menu1.png"
                alt="nav icon"
                width={40}
                height={40}
              />
              <Image
                src="/assets/menu2.png"
                alt="nav icon"
                width={40}
                height={40}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
