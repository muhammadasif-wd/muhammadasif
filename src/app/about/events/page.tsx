import {NextPage} from "next";
import Image from "next/image";
import Link from "next/link";

interface Props {}

const Page: NextPage<Props> = () => {
  return (
    <div>
      <div className="sm:px-6 lg:px-8 lg:py-14 container px-4 py-10 mx-auto">
        <div className="lg:mb-14 max-w-2xl mx-auto mb-10 text-center">
          <h2 className="md:text-4xl md:leading-tight dark:text-white text-2xl font-bold">
            Events
          </h2>
          <p className="dark:text-neutral-400 mt-1 text-gray-600">
            {`Dive into my events, where I've added all my events and conferences`}
          </p>
        </div>
        <div className="lg:grid-cols-2 lg:gap-y-16 grid min-h-screen gap-10 py-10">
          <Link
            className="group rounded-xl focus:outline-none h-fit block overflow-hidden border"
            href="/about/events/1"
          >
            <div className="sm:flex-row sm:items-center sm:gap-5 flex flex-col gap-3">
              <div className="shrink-0 sm:w-56 h-44 relative w-full overflow-hidden">
                <Image
                  alt="Blog Image"
                  className="group-hover:scale-105 group-focus:scale-105 size-full start-0 rounded-l-xl filter grayscale group-hover:grayscale-0 absolute top-0 object-cover object-center w-full h-full transition-transform duration-500 ease-in-out cursor-pointer"
                  height={180}
                  src="https://res.cloudinary.com/dgekxcjus/image/upload/v1730043705/ql3jtipjbbd4q5xivkbl.jpg"
                  width={320}
                />
              </div>

              <div className="grow">
                <h3 className="group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white text-xl font-semibold text-gray-800">
                  Onsite
                </h3>
                <p className="dark:text-neutral-400 mt-3 text-gray-600">
                  Optimize your in-person experience with best-in-class capabilities like badge
                  printing and lead retrieval
                </p>
                <p className="gap-x-1 decoration-2 group-hover:underline group-focus:underline dark:text-blue-500 inline-flex items-center mt-4 text-sm font-medium text-blue-600">
                  Read more
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
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
