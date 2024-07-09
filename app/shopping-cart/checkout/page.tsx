"use client";
import { useRouter } from "next/navigation";
import { IoMdArrowBack } from "react-icons/io";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PrimaryButton from "@/components/PrimaryButton";
import Link from "next/link";

const page = () => {
  const router = useRouter();

  return (
    <section>
      <Navbar />
      <div className="text-primary-black md:mx-[4.2%] mx-[5%]">
        <button
          className="flex flex-row items-center space-x-1 text-2xl"
          onClick={() => router.back()}
        >
          <IoMdArrowBack /> Back
        </button>
        <div className="mt-12">
          <p className="text-2xl">Billing Information</p>
          <div className="mt-8 w-full flex md:flex-row flex-col md:space-x-12 items-start">
            <div className="md:w-[55%] w-full flex flex-col">
              <div className="flex lg:flex-row flex-col lg:space-x-4 space-x-0 space-y-4 lg:space-y-0 justify-between">
                <div className="flex flex-col space-y-2.5 w-full">
                  <label htmlFor="first-name" className="font-normal text-base">
                    First Name*
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    placeholder="Duru"
                    className="py-4 px-2.5 border-[0.5px] border-solid border-[rgba(79,79,79,0.3)] rounded w-full"
                  />
                </div>
                <div className="flex flex-col space-y-2.5 w-full">
                  <label htmlFor="last-name" className="font-normal text-base">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    placeholder="Chim"
                    className="py-4 px-2.5 border-[0.5px] border-solid border-[rgba(79,79,79,0.3)] rounded w-full"
                  />
                </div>
              </div>
              <div className="mt-[22px]">
                <div className="flex flex-col space-y-2.5 w-full">
                  <label htmlFor="Address" className="font-normal text-base">
                    Address*
                  </label>
                  <input
                    type="text"
                    id="Address"
                    placeholder="No 1, Rakiat street off ogundipe Lagos"
                    className="py-4 px-2.5 border-[0.5px] border-solid border-[rgba(79,79,79,0.3)] rounded w-full"
                  />
                </div>
              </div>
              <div className="mt-[22px]">
                <div className="flex lg:flex-row flex-col lg:space-x-4 space-x-0 space-y-lg lg:space-y-0">
                  <div className="flex flex-col space-y-2.5 w-full">
                    <label htmlFor="city" className="font-normal text-base">
                      City*
                    </label>
                    <input
                      type="text"
                      id="city"
                      placeholder="Ikeja"
                      className="py-4 px-2.5 border-[0.5px] border-solid border-[rgba(79,79,79,0.3)] rounded w-full"
                    />
                  </div>
                  <div className="flex flex-col space-y-2.5 w-full">
                    <label htmlFor="state" className="font-normal text-base">
                      State*
                    </label>
                    <input
                      type="text"
                      id="state"
                      placeholder="Lagos"
                      className="py-4 px-2.5 border-[0.5px] border-solid border-[rgba(79,79,79,0.3)] rounded w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-[22px]">
                <div className="flex lg:flex-row flex-col lg:space-x-4 space-x-0 space-y-4 lg:space-y-0">
                  <div className="flex flex-col space-y-2.5 w-full">
                    <label htmlFor="country" className="font-normal text-base">
                      Country*
                    </label>
                    <input
                      type="text"
                      id="country"
                      placeholder="Nigeria"
                      className="py-4 px-2.5 border-[0.5px] border-solid border-[rgba(79,79,79,0.3)] rounded w-full"
                    />
                  </div>
                  <div className="flex flex-col space-y-2.5 w-full">
                    <label
                      htmlFor="postal-code"
                      className="font-normal text-base"
                    >
                      Postal Code*
                    </label>
                    <input
                      type="text"
                      id="postal-code"
                      placeholder="Postal Code"
                      className="py-4 px-2.5 border-[0.5px] border-solid border-[rgba(79,79,79,0.3)] rounded w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-[22px]">
                <div className="flex lg:flex-row flex-col lg:lg:space-x-4 space-x-0 space-y-4 lg:space-y-0 ">
                  <div className="flex flex-col space-y-2.5 w-full">
                    <label htmlFor="email" className="font-normal text-base">
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="duruprecious@gmail.com"
                      className="py-4 px-2.5 border-[0.5px] border-solid border-[rgba(79,79,79,0.3)] rounded w-full"
                    />
                  </div>
                  <div className="flex flex-col space-y-2.5 w-full">
                    <label
                      htmlFor="phone-number"
                      className="font-normal text-base"
                    >
                      Phone Number*
                    </label>
                    <input
                      type="tel"
                      id="phone-number"
                      placeholder="08123456789"
                      className="py-4 px-2.5 border-[0.5px] border-solid border-[rgba(79,79,79,0.3)] rounded w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-11">
                <p className="text-2xl font-medium">Select Shipping Method</p>
                <div className="mt-8 flex flex-col space-y-6">
                  <div className="flex flex-row items-start justify-between">
                    <div className="flex flex-row space-x-3 items-center">
                      <input type="radio" name="shipping" id="free-shipping" />
                      <label
                        htmlFor="free-shipping"
                        className="flex flex-col space-y-1"
                      >
                        <p className="font-light">Free Shipping</p>
                        <span className="text-sm text-grey font-light">
                          Estimated date of delivery 12th May
                        </span>
                      </label>
                    </div>
                    <p className="font-light text-grey">$0.00</p>
                  </div>
                  <div className="flex flex-row items-start justify-between">
                    <div className="flex flex-row space-x-3 items-center">
                      <input
                        type="radio"
                        name="shipping"
                        id="ground-shipping"
                      />
                      <label
                        htmlFor="ground-shipping"
                        className="flex flex-col space-y-1"
                      >
                        <p className="font-light">Ground Shipping</p>
                        <span className="text-sm text-grey font-light">
                          Estimated date of delivery 12th May
                        </span>
                      </label>
                    </div>
                    <p className="font-light text-grey">$0.00</p>
                  </div>
                  <div className="flex flex-row items-start justify-between">
                    <div className="flex flex-row space-x-3 items-center">
                      <input
                        type="radio"
                        name="shipping"
                        id="express-shipping"
                      />
                      <label
                        htmlFor="express-shipping"
                        className="flex flex-col space-y-1"
                      >
                        <p className="font-light">Free Shipping</p>
                        <span className="text-sm text-grey font-light">
                          Estimated date of delivery 12th May
                        </span>
                      </label>
                    </div>
                    <p className="font-light text-grey">$0.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-[45%] w-full mt-8 pt-[1.3125rem] pb-8 border-[0.5px] border-solid border-[rgba(79,79,79,0.3)] rounded">
              <div className="px-6">
                <p className="font-medium text-2xl">Order Summary</p>
                <div className="mt-8 mb-[1.375rem] flex flex-col space-y-6">
                  <div className="flex flex-row items-center justify-between">
                    <p className="text-xl">Items Subtotal</p>
                    <p className="text-xl">$500</p>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <p className="text-xl">Tax</p>
                    <p className="text-xl">$500</p>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <p className="text-xl">Shipping Fee</p>
                    <p className="text-xl">Free</p>
                  </div>
                </div>
              </div>
              <hr className="bg-[rgba(79,79,79,0.26)] h-[1px]" />
              <div className="pt-3.5 px-6">
                <div className="flex flex-row items-center justify-between">
                  <p className="text-[2rem] leading-[3.12625rem] font-medium">
                    Total
                  </p>
                  <p className="text-[2rem] leading-[3.12625rem] font-medium">
                    $500
                  </p>
                </div>
                <div className="mt-[2.375rem] flex flex-col items-center space-y-4">
                  <PrimaryButton>
                    <Link
                      href="/shopping-cart/checkout"
                      className="text-white text-xl"
                    >
                      Place Order
                    </Link>
                  </PrimaryButton>
                  <div className="flex flex-row items-center space-x-3.5">
                    <input type="checkbox" name="agreement" id="agreement" />
                    <label htmlFor="agreement" className="md:text-base text-sm">
                      I agree to the{" "}
                      <Link href="" className="text-primary-orange text-base">
                        Term of service
                      </Link>{" "}
                      and{" "}
                      <Link href="" className="text-primary-orange text-base">
                        privacy policy
                      </Link>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[12.75rem]">
        <Footer />
      </div>
    </section>
  );
};

export default page;
