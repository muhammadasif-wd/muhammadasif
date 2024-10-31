import Image from "next/image";
import Link from "next/link";

import Alert from "@/shared/alert";

async function getData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/event`, {
      method: "GET",
      headers: {
        "x-api-key": process.env.NEXT_PUBLIC_X_API_KEY || "",
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
export interface IEvent {
  id: string;
  images: string[];
  title: string;
  category: string;
  date: string;
  topContent: string;
  firstContent: string;
  middleContent: string;
  endContent: string;
  imgText: string;
  tags: string;
}

const Page = async () => {
  let data;
  let error;

  try {
    data = await getData();
  } catch (err) {
    error = (err as Error).message;
  }

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
          {data.data.map(({id, images, title, topContent}: IEvent) => {
            const randomIndex = Math.floor(Math.random() * images.length);
            const randomImage = images[randomIndex];

            return (
              <Link
                key={id}
                className="group rounded-xl focus:outline-none h-fit block overflow-hidden border"
                href={`/about/events/${id}`}
              >
                <div className="sm:flex-row sm:items-center sm:gap-5 flex flex-col gap-3">
                  <div className="shrink-0 sm:w-56 h-44 relative w-full overflow-hidden">
                    <Image
                      key={randomIndex}
                      alt="Blog Image"
                      className="group-hover:scale-105 group-focus:scale-105 size-full start-0 rounded-l-xl filter grayscale group-hover:grayscale-0 absolute top-0 object-cover object-center w-full h-full transition-transform duration-500 ease-in-out cursor-pointer"
                      height={180}
                      src={randomImage}
                      width={320}
                    />
                  </div>

                  <div className="grow">
                    <h3 className="group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white text-xl font-semibold text-gray-800">
                      {title}
                    </h3>
                    <p className="dark:text-neutral-400 mt-3 text-gray-600">
                      {topContent.slice(0, 100)}...
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
            );
          })}
        </div>
      </div>
      {error && (
        <Alert message={error || "Something went wrong!"} style="py-2 px-4 w-fit" type="danger" />
      )}
    </div>
  );
};

export default Page;
