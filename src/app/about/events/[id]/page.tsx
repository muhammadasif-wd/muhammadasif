"use client";
import {Icon} from "@iconify/react";
import {Button} from "@nextui-org/button";
import {Popover, PopoverContent, PopoverTrigger} from "@nextui-org/popover";
import Image from "next/image";
import Link from "next/link";
import {useParams} from "next/navigation";
import {useEffect, useState} from "react";

import Aside from "./aside";
import Loading from "./loading";

import {IconFacebook} from "@/assets/icons/facebook";
import IconLinkedin from "@/assets/icons/linkedin";

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

const Page = () => {
  const {id} = useParams();
  const [event, setEvent] = useState<IEvent | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const handleFetchEvent = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/event/${id}`, {
          method: "GET",
          headers: {
            "x-api-key": process.env.NEXT_PUBLIC_X_API_KEY || "",
          },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();

        setEvent(data.data);
      } catch (error) {
        console.error(error);
        throw error;
      } finally {
        setLoading(false);
      }
    };

    handleFetchEvent();
  }, [id]);

  const firstImage = event?.images[0];
  const remainingImages = event?.images.slice(1);
  const tags = event?.tags.split(" ");

  return (
    <div className="container mx-auto">
      <div className="lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6 grid">
        <div className="lg:col-span-2">
          <div className="lg:pe-8 py-8">
            {loading ? (
              <div>
                <Loading />
              </div>
            ) : (
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

                <h2 className="lg:text-5xl dark:text-white text-3xl font-bold">{event?.title}</h2>

                <div className="gap-x-5 flex items-center">
                  <Link
                    className="inline-flex items-center gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                    href="#"
                  >
                    {event?.category}
                  </Link>
                  <p className="sm:text-sm dark:text-neutral-200 text-xs text-gray-800">
                    {event?.date}
                  </p>
                </div>

                <p className="dark:text-neutral-200 text-lg text-gray-800">{event?.topContent}</p>

                <p className="dark:text-neutral-200 text-lg text-gray-800">{event?.firstContent}</p>

                <div className="text-center">
                  <div className="lg:grid-cols-2 grid gap-3">
                    <div className="lg:grid-cols-1 grid grid-cols-2 gap-3">
                      {remainingImages?.map((image, index) => (
                        <figure key={index} className="h-60 relative w-full">
                          <Image
                            alt="Blog Image"
                            className="hover:scale-105 focus:scale-105 size-full start-0 rounded-xl filter grayscale hover:grayscale-0 absolute top-0 object-cover object-center w-full h-full transition-transform duration-500 ease-in-out cursor-pointer"
                            height={180}
                            src={image}
                            width={320}
                          />
                        </figure>
                      ))}
                    </div>
                    {firstImage && (
                      <figure className="h-72 sm:h-96 lg:h-full relative w-full">
                        <Image
                          alt="Blog Image"
                          className="hover:scale-105 focus:scale-105 size-full start-0 rounded-xl filter grayscale hover:grayscale-0 absolute top-0 object-cover object-center w-full h-full transition-transform duration-500 ease-in-out cursor-pointer"
                          height={180}
                          src={firstImage}
                          width={320}
                        />
                      </figure>
                    )}
                  </div>

                  <span className="dark:text-neutral-500 block mt-3 text-sm text-center text-gray-500">
                    {event?.imgText}
                  </span>
                </div>

                <p className="dark:text-neutral-200 text-lg text-gray-800">
                  {event?.middleContent}
                </p>

                <p className="dark:text-neutral-200 text-lg text-gray-800">{event?.endContent}</p>

                <div className="lg:flex-row lg:justify-between lg:items-center gap-y-5 lg:gap-y-0 flex flex-col">
                  <div>
                    {tags?.map((tag, index) => (
                      <p
                        key={index}
                        className="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                      >
                        {tag}
                      </p>
                    ))}
                  </div>

                  <div className="flex justify-end items-center gap-x-1.5">
                    <div className="hs-dropdown relative inline-flex">
                      <Popover placement="top" showArrow={true}>
                        <PopoverTrigger>
                          <Button
                            aria-expanded="false"
                            aria-haspopup="menu"
                            aria-label="Dropdown"
                            className="hs-dropdown-toggle gap-x-2 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200 flex items-center text-sm text-gray-500"
                            id="hs-blog-article-share-dropdown"
                            type="button"
                            variant="light"
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
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent>
                          <div>
                            <div className="flex items-center gap-1 justify-center p-1">
                              <Button isIconOnly color="secondary" size="sm">
                                <IconFacebook height={20} width={20} />
                              </Button>
                              <Button isIconOnly color="secondary" size="sm">
                                <IconLinkedin height={24} width={24} />
                              </Button>
                              <Button isIconOnly color="secondary" size="sm">
                                <Icon height="24" icon="iconoir:instagram" width="24" />
                              </Button>
                            </div>
                          </div>
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <Aside />
      </div>
    </div>
  );
};

export default Page;
