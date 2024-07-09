"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
  const pathname = usePathname();
  const [navOpened, setNavOpened] = useState<boolean>(false);

  const toggleNav = () => {
    setNavOpened(!navOpened);
  };
  useEffect(() => {
    const handleBodyOverflow = () => {
      document.body.style.overflow = navOpened ? "hidden" : "auto";
    };

    handleBodyOverflow();

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [navOpened]);
  return (
    <header className="mx-[5.7%]">
      <div className="md:py-[2.1875rem] py-2.5 flex flex-row justify-between space-x-8 items-center">
        <div className="flex flex-row items-center space-x-3">
          <IoMenuOutline
            className="w-6 h-6 block md:hidden"
            onClick={toggleNav}
          />
          <Link href="/">
            <h2 className="uppercase font-elmessiri">timbu</h2>
          </Link>
        </div>
        <div className={`md:block hidden relative w-[712px] max-w-full`}>
          <input
            type="text"
            placeholder="Search Here"
            className="rounded-lg font-light text-xl w-full max-w-full border border-solid border-[rgba(79,79,79,0.3)] px-[20px] py-2.5"
          />
          <div className="bg-primary-orange absolute right-0 top-0 w-[50px] h-[50px] p-2.5 rounded-r-lg">
            <IoIosSearch className="w-9 h-9 text-white cursor-pointer" />
          </div>
        </div>
        <div className="flex flex-row items-center space-x-8">
          <Link href="/shopping-cart">
            <HiOutlineShoppingCart className="w-6 h-6 text-primary-black cursor-pointer" />
          </Link>
          <Image
            src="/assets/nav-icon.png"
            alt="nav icon"
            width={42}
            height={42}
          />
        </div>
      </div>
      {navOpened && (
        <div className="bg-white w-[54%] fixed top-0 left-0 h-screen pt-5 px-8 z-50">
          <div>
            <div className="flex flex-row items-center justify-between">
              <Link href="/">
                <h2 className="uppercase font-elmessiri">timbu</h2>
              </Link>
              <IoCloseOutline
                className="w-6 h-6 block md:hidden"
                onClick={toggleNav}
              />
            </div>
            <div className=" pt-[1.8125rem]">
              <p className="uppercase font-medium">Filter By:</p>
              <div className="flex flex-col mt-[2.4325rem] space-y-[2.4325rem]">
                <div className="flex flex-col space-y-5">
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
        </div>
      )}
    </header>
  );
};

export default Navbar;
