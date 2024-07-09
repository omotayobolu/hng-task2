"use client";
import {useState} from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  const pathname = usePathname();
  const [] = useState()
  return (
    <header className="mx-[5.7%]">
      <div className="py-[2.1875rem] flex flex-row justify-between space-x-8 items-center">
        <Link href="/">
          <h2 className="uppercase font-elmessiri">timbu</h2>
        </Link>
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
      <div></div>

    </header>
  );
};

export default Navbar;
