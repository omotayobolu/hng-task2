"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";
import useCart from "@/hooks/useCart";
import { useSearchContext } from "@/context/SearchProvider";

const Navbar = () => {
  const { totalItems } = useCart();
  const router = useRouter();
  const { setSearchProducts } = useSearchContext();

  const handleSearchProducts = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchQuery = (e.target as HTMLFormElement).search.value;
    setSearchProducts(searchQuery);
    router.replace(`?query=${encodeURIComponent(searchQuery)}`);
    setSearchProducts("");
  };

  return (
    <header className="mx-[5.7%]">
      <div className="flex flex-col ">
        <div className="md:py-[2.1875rem] py-2.5 flex flex-row justify-between space-x-8 items-center">
          <div className="flex flex-row items-center space-x-3">
            <Link href="/">
              <h2 className="uppercase font-elmessiri">timbu</h2>
            </Link>
          </div>
          <form
            onSubmit={handleSearchProducts}
            className={`md:block hidden relative w-[712px] max-w-full`}
          >
            <input
              type="text"
              name="search"
              placeholder="Search for products"
              className="rounded-lg font-light text-xl w-full max-w-full border border-solid border-[rgba(79,79,79,0.3)] px-[20px] py-2.5"
            />
            <button
              type="submit"
              className="bg-primary-orange absolute right-0 top-0 w-[50px] h-[50px] p-2.5 rounded-r-lg"
            >
              <IoIosSearch className="w-9 h-9 text-white cursor-pointer" />
            </button>
          </form>
          <div className="flex flex-row items-center space-x-8">
            <Link href="/shopping-cart" className="relative">
              <HiOutlineShoppingCart className="w-6 h-6 text-primary-black cursor-pointer" />
              {totalItems > 0 && (
                <span className="absolute bg-primary-orange text-white px-2 py-1 text-xs -top-3 -right-3 border border-transparent rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>
            <Image
              src="/assets/nav-icon.png"
              alt="nav icon"
              width={42}
              height={42}
            />
          </div>
        </div>
        <form
          onSubmit={handleSearchProducts}
          className="md:hidden block relative mb-6"
        >
          <input
            type="text"
            name="search"
            placeholder="Search for product"
            className="rounded-lg font-light text-xl w-full max-w-full border border-solid border-[rgba(79,79,79,0.3)] px-[20px] py-2.5"
          />
          <button
            type="submit"
            className="bg-primary-orange absolute right-0 top-0 w-[50px] h-[50px] p-2.5 rounded-r-lg"
          >
            <IoIosSearch className="w-9 h-9 text-white cursor-pointer" />
          </button>
        </form>
      </div>
    </header>
  );
};

export default Navbar;
