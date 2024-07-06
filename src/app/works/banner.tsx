import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <section className="container">
      <div className="mb-8 flex flex-wrap justify-between md:mb-16">
        <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 xl:w-1/3 xl:pb-24 xl:pt-48">
          <h1 className="mb-4 text-4xl font-bold text-black dark:text-light sm:text-5xl md:mb-8 md:text-6xl">
            Find Projects
            <br />
            Products & Services
          </h1>

          <p className="max-w-md leading-relaxed text-zinc-500 xl:text-lg">
            Explore my visionary projects, advanced products, and expert services driving innovation
            across industries. Discover how we can transform your business for a brighter tomorrow.
          </p>
        </div>

        <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
          <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg dark:bg-black border bg-light shadow-lg md:left-16 md:top-16 lg:ml-0">
            <Image
              alt="muhammadasif-works-solutions"
              className="h-full w-[800px] object-center"
              height={500}
              loading="lazy"
              src="/images/works/works-solutions.svg"
              width={500}
            />
          </div>

          <div className="overflow-hidden rounded-lg dark:bg-black border bg-light shadow-lg">
            <Image
              alt="muhammadasif-works-products"
              className="h-full w-[800px] object-center"
              height={500}
              loading="lazy"
              src="/images/works/works-projects.svg"
              width={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
