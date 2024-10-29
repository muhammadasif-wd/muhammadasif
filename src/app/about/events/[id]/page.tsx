import {NextPage} from "next";
import Image from "next/image";
import Link from "next/link";

interface Props {}

const Page: NextPage<Props> = () => {
  return (
    <div className="container mx-auto">
      <div className="lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6 grid">
        <div className="lg:col-span-2">
          <div className="lg:pe-8 py-8">
            <div className="lg:space-y-8 space-y-5">
              <Link
                className="inline-flex items-center gap-x-1.5 text-sm text-gray-600 decoration-2 hover:underline focus:outline-none focus:underline dark:text-blue-500"
                href="/about/events"
              >
                <svg
                  className="shrink-0 size-4"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
                Back to Events
              </Link>

              <h2 className="lg:text-5xl dark:text-white text-3xl font-bold">
                Announcing a free plan for small teams
              </h2>

              <div className="gap-x-5 flex items-center">
                <Link
                  className="inline-flex items-center gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                  href="#"
                >
                  Company News
                </Link>
                <p className="sm:text-sm dark:text-neutral-200 text-xs text-gray-800">
                  January 18, 2023
                </p>
              </div>

              <p className="dark:text-neutral-200 text-lg text-gray-800">
                {`At preline, our mission has always been focused on bringing openness and
                transparency to the design process. We've always believed that by providing a space
                where designers can share ongoing work not only empowers them to make better
                products, it also helps them grow.`}
              </p>

              <p className="dark:text-neutral-200 text-lg text-gray-800">
                {`We're proud to be a part of creating a more open culture and to continue building a
                product that supports this vision.`}
              </p>

              <div className="text-center">
                <div className="lg:grid-cols-2 grid gap-3">
                  <div className="lg:grid-cols-1 grid grid-cols-2 gap-3">
                    <figure className="h-60 relative w-full">
                      <Image
                        alt="Blog Image"
                        className="hover:scale-105 focus:scale-105 size-full start-0 rounded-xl filter grayscale hover:grayscale-0 absolute top-0 object-cover object-center w-full h-full transition-transform duration-500 ease-in-out cursor-pointer"
                        height={500}
                        src="https://res.cloudinary.com/dgekxcjus/image/upload/v1730043705/ql3jtipjbbd4q5xivkbl.jpg"
                        width={500}
                      />
                    </figure>
                    <figure className="h-60 relative w-full">
                      <Image
                        alt="Blog Image"
                        className="hover:scale-105 focus:scale-105 size-full start-0 rounded-xl filter grayscale hover:grayscale-0 absolute top-0 object-cover object-center w-full h-full transition-transform duration-500 ease-in-out cursor-pointer"
                        height={180}
                        src="https://res.cloudinary.com/dgekxcjus/image/upload/v1730043705/ql3jtipjbbd4q5xivkbl.jpg"
                        width={320}
                      />
                    </figure>
                  </div>
                  <figure className="h-72 sm:h-96 lg:h-full relative w-full">
                    <Image
                      alt="Blog Image"
                      className="hover:scale-105 focus:scale-105 size-full start-0 rounded-xl filter grayscale hover:grayscale-0 absolute top-0 object-cover object-center w-full h-full transition-transform duration-500 ease-in-out cursor-pointer"
                      height={180}
                      src="https://res.cloudinary.com/dgekxcjus/image/upload/v1730043705/ql3jtipjbbd4q5xivkbl.jpg"
                      width={320}
                    />
                  </figure>
                </div>

                <span className="dark:text-neutral-500 block mt-3 text-sm text-center text-gray-500">
                  Working process
                </span>
              </div>

              <p className="dark:text-neutral-200 text-lg text-gray-800">
                {`As we've grown, we've seen how Preline has helped companies such as Spotify,
                Microsoft, Airbnb, Facebook, and Intercom bring their designers closer together to
                create amazing things. We've also learned that when the culture of sharing is
                brought in earlier, the better teams adapt and communicate with one another.`}
              </p>

              <p className="dark:text-neutral-200 text-lg text-gray-800">
                {`That's why we are excited to share that we now have a`}
                <Link
                  className="decoration-2 hover:underline focus:outline-none focus:underline dark:text-blue-500 font-medium text-blue-600"
                  href="#"
                >
                  free version of Preline
                </Link>
                , which will allow individual designers, startups and other small teams a chance to
                create a culture of openness early on.
              </p>

              <div className="lg:flex-row lg:justify-between lg:items-center gap-y-5 lg:gap-y-0 flex flex-col">
                <div>
                  <Link
                    className="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                    href="#"
                  >
                    Plan
                  </Link>
                  <Link
                    className="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                    href="#"
                  >
                    Web development
                  </Link>
                  <Link
                    className="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                    href="#"
                  >
                    Free
                  </Link>
                  <Link
                    className="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                    href="#"
                  >
                    Team
                  </Link>
                </div>

                <div className="flex justify-end items-center gap-x-1.5">
                  <div className="hs-tooltip inline-block">
                    <button
                      className="hs-tooltip-toggle gap-x-2 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200 flex items-center text-sm text-gray-500"
                      type="button"
                    >
                      <svg
                        className="shrink-0 size-4"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                      </svg>
                      875
                      <span
                        className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible dark:bg-black absolute z-10 invisible inline-block px-2 py-1 text-xs font-medium text-white transition-opacity bg-gray-900 rounded shadow-sm opacity-0"
                        role="tooltip"
                      >
                        Like
                      </span>
                    </button>
                  </div>

                  <div className="border-e dark:border-neutral-600 block h-3 mx-3 border-gray-300" />

                  <div className="hs-tooltip inline-block">
                    <button
                      className="hs-tooltip-toggle gap-x-2 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200 flex items-center text-sm text-gray-500"
                      type="button"
                    >
                      <svg
                        className="shrink-0 size-4"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
                      </svg>
                      16
                      <span
                        className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible dark:bg-black absolute z-10 invisible inline-block px-2 py-1 text-xs font-medium text-white transition-opacity bg-gray-900 rounded shadow-sm opacity-0"
                        role="tooltip"
                      >
                        Comment
                      </span>
                    </button>
                  </div>

                  <div className="border-e dark:border-neutral-600 block h-3 mx-3 border-gray-300" />

                  <div className="hs-dropdown relative inline-flex">
                    <button
                      aria-expanded="false"
                      aria-haspopup="menu"
                      aria-label="Dropdown"
                      className="hs-dropdown-toggle gap-x-2 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200 flex items-center text-sm text-gray-500"
                      id="hs-blog-article-share-dropdown"
                      type="button"
                    >
                      <svg
                        className="shrink-0 size-4"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                        <polyline points="16 6 12 2 8 6" />
                        <line x1="12" x2="12" y1="2" y2="15" />
                      </svg>
                      Share
                    </button>
                    <div
                      aria-labelledby="hs-blog-article-share-dropdown"
                      aria-orientation="vertical"
                      className="hs-dropdown-menu w-56 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mb-1 z-10 bg-gray-900 shadow-md rounded-xl p-2 dark:bg-black"
                      role="menu"
                    >
                      <Link
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-400 hover:bg-white/10 focus:outline-none focus:bg-white/10 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:focus:bg-neutral-900"
                        href="#"
                      >
                        <svg
                          className="shrink-0 size-4"
                          fill="none"
                          height="24"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                        </svg>
                        Copy link
                      </Link>
                      <div className="dark:border-neutral-800 my-2 border-t border-gray-600" />
                      <Link
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-400 hover:bg-white/10 focus:outline-none focus:bg-white/10 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:focus:bg-neutral-900"
                        href="#"
                      >
                        <svg
                          className="shrink-0 size-4"
                          fill="currentColor"
                          height="16"
                          viewBox="0 0 16 16"
                          width="16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                        </svg>
                        Share on Twitter
                      </Link>
                      <Link
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-400 hover:bg-white/10 focus:outline-none focus:bg-white/10 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:focus:bg-neutral-900"
                        href="#"
                      >
                        <svg
                          className="shrink-0 size-4"
                          fill="currentColor"
                          height="16"
                          viewBox="0 0 16 16"
                          width="16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                        </svg>
                        Share on Facebook
                      </Link>
                      <Link
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-400 hover:bg-white/10 focus:outline-none focus:bg-white/10 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:focus:bg-neutral-900"
                        href="#"
                      >
                        <svg
                          className="shrink-0 size-4"
                          fill="currentColor"
                          height="16"
                          viewBox="0 0 16 16"
                          width="16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                        </svg>
                        Share on LinkedIn
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1 lg:w-full lg:h-full lg:bg-gradient-to-r lg:from-gray-50 lg:via-transparent lg:to-transparent dark:from-neutral-800">
          <div className="start-0 lg:ps-8 sticky top-0 py-8">
            <div className="group gap-x-3 dark:border-neutral-700 flex items-center pb-8 mb-8 border-b border-gray-200">
              <h1 className="md:text-xl font-bold">All Events</h1>
            </div>

            <div className="space-y-6">
              <Link className="group gap-x-6 focus:outline-none flex items-center" href="#">
                <div className="grow">
                  <span className="group-hover:text-blue-600 group-focus:text-blue-600 dark:text-neutral-200 dark:group-hover:text-blue-500 dark:group-focus:text-blue-500 text-sm font-bold text-gray-800">
                    5 Reasons to Not start a UX Designer Career in 2022/2023
                  </span>
                </div>

                <div className="shrink-0 size-20 relative overflow-hidden rounded-lg">
                  <Image
                    alt="Blog Image"
                    className="group-hover:scale-105 group-focus:scale-105 size-full start-0 rounded-l-xl filter grayscale group-hover:grayscale-0 absolute top-0 object-cover object-center w-full h-full transition-transform duration-500 ease-in-out cursor-pointer"
                    height={180}
                    src="https://res.cloudinary.com/dgekxcjus/image/upload/v1730043705/ql3jtipjbbd4q5xivkbl.jpg"
                    width={320}
                  />
                </div>
              </Link>

              <Link className="group gap-x-6 focus:outline-none flex items-center" href="#">
                <div className="grow">
                  <span className="group-hover:text-blue-600 group-focus:text-blue-600 dark:text-neutral-200 dark:group-hover:text-blue-500 dark:group-focus:text-blue-500 text-sm font-bold text-gray-800">
                    If your UX Portfolio has this 20% Well Done, it Will Give You an 80% Result
                  </span>
                </div>

                <div className="shrink-0 size-20 relative overflow-hidden rounded-lg">
                  <Image
                    alt="Blog Image"
                    className="group-hover:scale-105 group-focus:scale-105 size-full start-0 rounded-l-xl filter grayscale group-hover:grayscale-0 absolute top-0 object-cover object-center w-full h-full transition-transform duration-500 ease-in-out cursor-pointer"
                    height={180}
                    src="https://res.cloudinary.com/dgekxcjus/image/upload/v1730043705/ql3jtipjbbd4q5xivkbl.jpg"
                    width={320}
                  />
                </div>
              </Link>

              <Link className="group gap-x-6 focus:outline-none flex items-center" href="#">
                <div className="grow">
                  <span className="group-hover:text-blue-600 group-focus:text-blue-600 dark:text-neutral-200 dark:group-hover:text-blue-500 dark:group-focus:text-blue-500 text-sm font-bold text-gray-800">
                    7 Principles of Icon Design
                  </span>
                </div>

                <div className="shrink-0 size-20 relative overflow-hidden rounded-lg">
                  <Image
                    alt="Blog Image"
                    className="group-hover:scale-105 group-focus:scale-105 size-full start-0 rounded-l-xl filter grayscale group-hover:grayscale-0 absolute top-0 object-cover object-center w-full h-full transition-transform duration-500 ease-in-out cursor-pointer"
                    height={180}
                    src="https://res.cloudinary.com/dgekxcjus/image/upload/v1730043705/ql3jtipjbbd4q5xivkbl.jpg"
                    width={320}
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
