import { FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  const year: number = new Date().getFullYear();
  return (
    <section className="bg-[rgba(251,237,226,0.22)]">
      <div className="pt-[2.1875rem] pb-[4.5625rem] px-[6.7%] flex flex-row flex-wrap justify-between gap-8">
        <div>
          <h2 className="uppercase font-elmessiri">timbu</h2>
          <span className="text-sm mt-[0.6875rem] font-light">
            We bring you the best. Explore our selection and discover something{" "}
            <br />
            new today.
          </span>
          <div className="text-[#0B173D] flex flex-row items-center space-x-5 mt-[1.375rem]">
            <FaTwitter />
            <FaLinkedinIn />
            <FaFacebookF />
          </div>
        </div>
        <div className="flex flex-row flex-wrap gap-[3.625rem]">
          <div className="flex flex-col">
            <h4 className="font-medium text-2xl uppercase">company</h4>
            <div className="flex flex-col mt-[1.1875rem] space-y-[1.625rem]">
              <Link href="">About Us</Link>
              <Link href="">Affiliate</Link>
              <Link href="">Contact Us</Link>
            </div>
          </div>
          <div className="flex flex-col">
            <h4 className="font-medium text-2xl uppercase">help</h4>
            <div className="flex flex-col mt-[1.1875rem] space-y-[1.625rem]">
              <Link href="">Find a store</Link>
              <Link href="">Find a store</Link>
              <Link href="">Legal & Privacy</Link>
            </div>
          </div>
          <div className="flex flex-col">
            <h4 className="font-medium text-2xl uppercase">shop</h4>
            <div className="flex flex-col mt-[1.1875rem] space-y-[1.625rem]">
              <Link href="">Dresses</Link>
              <Link href="">Shoes</Link>
              <Link href="">Bags</Link>
            </div>
          </div>
          <div className="flex flex-col">
            <h4 className="font-medium text-2xl uppercase">my account</h4>
            <div className="flex flex-col mt-[1.1875rem] space-y-[1.625rem]">
              <Link href="">My Profile</Link>
              <Link href="">My Order history</Link>
              <Link href="">My wishlist</Link>
            </div>
          </div>
        </div>
      </div>
      <hr className="bg-[rgba(18,18,18,0.2)] h-[1px]" />
      <hr />
      <div className="flex flex-row items-center sm:justify-around text-secondary-black pt-[0.875rem] pb-[1.375rem] px-[6.7%]">
        {/* montserrat font */}
        <span>Copyright &copy; {year} TIMBLE</span>
        <p className="font-light sm:block hidden ">
          All Rights Reserved |{" "}
          <Link href="" className="text-primary-orange text-base underline">
            Terms and conditions
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Footer;
