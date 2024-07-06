"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-white text-primary-black">
      <Navbar />
      <div className=" bg-cover bg-center h-[279px] w-full hero-bg bg-blend-overlay"></div>
      <div className="mt-[2rem]">
        <div className="flex flex-row items-center justify-between lg:mx-[3.75%]">
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
          <div className="flex flex-row items-center space-x-8">
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
          <p className="font-light">
            <span className="font-normal">Showing </span>1-20 of 1000 results
          </p>
        </div>
      </div>
      <div className="mt-[2.5rem] lg:mx-[3.125%] flex flex-row space-x-[2.0625rem]">
        <div className="w-[27.7%] pt-[1.8125rem] pr-[2.4375rem] pb-[7.25rem] pl-[2.5rem] border-[0.5px] border-solid border-[rgba(79,79,79,0.3)] rounded-lg">
          <div className="flex flex-col space-y-[2.4325rem]">
            <div className="flex flex-col space-y-8">
              <p className="uppercase font-medium">category</p>
              <div className="flex flex-col space-y-5">
                <div className="flex flex-row items-center space-x-[0.4375rem]">
                  <input type="checkbox" name="dresses" id="dresses" />
                  <label htmlFor="dresses">Dresses</label>
                </div>
                <div className="flex flex-row items-center space-x-[0.4375rem]">
                  <input type="checkbox" name="shoes" id="shoes" />
                  <label htmlFor="shoes">Shoes</label>
                </div>
                <div className="flex flex-row items-center space-x-[0.4375rem]">
                  <input type="checkbox" name="jewelry" id="jewelry" />
                  <label htmlFor="jewelry">Jewelry</label>
                </div>
                <div className="flex flex-row items-center space-x-[0.4375rem]">
                  <input type="checkbox" name="bags" id="bags" />
                  <label htmlFor="bags">Bags</label>
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
                  <input type="checkbox" name="extra-large" id="extra-large" />
                  <label htmlFor="extra-large">Extra Large</label>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-8">
              <p className="uppercase font-medium">filter by</p>
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
            <div className="flex flex-col space-y-[1.375rem]">
              <div className="flex flex-col space-y-8">
                <p className="uppercase font-medium">prices</p>
                <div className="flex flex-row items-center justify-between">
                  <label htmlFor="men">Range</label>
                  <p className="text-sm">$120 - $300</p>
                </div>
              </div>
              <input type="range" name="range" id="range" min="120" max="300" />
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </main>
  );
}
