import Image from "next/image";
import Link from "next/link";
import React from "react";

const Discount = () => {
  return (
    <div>
      <div className="container">
        <div className="flex flex-col overflow-hidden rounded-lg bg-zinc-900 sm:flex-row md:h-80">
          <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-2/5">
            <h2 className="mb-4 text-xl font-bold text-white md:text-2xl lg:text-4xl">
              Summer Sale
              <br />
              Up to 70% off.
            </h2>

            <p className="mb-8 max-w-md text-zinc-400">
              This is a section of some simple filler text, also known as placeholder text. It
              shares some characteristics of a real written text.
            </p>

            <div className="mt-auto">
              <Link
                className="inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-zinc-800 outline-none ring-zinc-300 transition duration-100 hover:bg-zinc-100 focus-visible:ring active:bg-zinc-200 md:text-base"
                href="#"
              >
                Save now
              </Link>
            </div>
          </div>

          <div className="order-first h-48 w-full sm:order-none sm:h-auto sm:w-1/2 lg:w-3/5">
            <Image
              alt="Photo by Dom Hill"
              className="h-full w-full  object-center"
              height={500}
              loading="lazy"
              src="/images/works/works-products-discount.svg"
              width={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
