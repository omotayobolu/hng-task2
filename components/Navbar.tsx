import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <header className="mx-[5.7%]">
      <div className="py-[2.1875rem] flex flex-row justify-between">
        <div className="flex flex-row items-center space-x-[8.75rem]">
          <h2 className="uppercase font-elmessiri">timbu</h2>
          <div className="lg:flex hidden flex-row items-center space-x-12">
            <Link href="">Home</Link>
            <Link
              href="/"
              className={`${
                pathname === "/" ? "text-primary-orange font-medium" : ""
              }`}
            >
              Products
            </Link>
            <Link href="">Contact Us</Link>
          </div>
        </div>
        <div className="flex flex-row items-center space-x-8">
          <IoSearchSharp className="w-6 h-6 text-primary-black cursor-pointer" />
          <FaRegHeart className="w-6 h-6 text-primary-black cursor-pointer" />
          <HiOutlineShoppingCart className="w-6 h-6 text-primary-black cursor-pointer" />
          <Image
            src="/assets/nav-icon.png"
            alt="nav icon"
            width={42}
            height={42}
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
