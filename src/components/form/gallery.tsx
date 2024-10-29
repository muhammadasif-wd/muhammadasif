/* eslint-disable no-undef */
"use client";
import {Button} from "@nextui-org/button";
import {Pagination} from "@nextui-org/pagination";
import {NextPage} from "next";
import Image from "next/image";
import React, {useCallback, useEffect, useState} from "react";

import {IGallery} from "@/app/about/gallery/page";

type Props = {
  data: IGallery[];
};

const FormGallery: NextPage<Props> = ({data}) => {
  const [formData, setFormData] = useState({searchTerm: ""});
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
    error: {path: string; message: string}[];
    data?: IGallery[];
  }>({
    success: false,
    message: "",
    error: [],
    data: [],
  });
  const [isLoading, setIsLoading] = useState(false);

  // Debounce function to delay the search request
  const debounce = (func: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout;

    return (...args: any[]) => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    debounceSearch(value);
  };

  const debounceSearch = useCallback(
    debounce((searchTerm: string) => {
      handleSubmit(searchTerm);
    }, 500),
    [],
  );

  const handleSubmit = async (searchTerm: string) => {
    setIsLoading(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/gallery/?searchTerm=${searchTerm}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.NEXT_PUBLIC_X_API_KEY || "",
          },
        },
      );

      if (response.ok) {
        const responseData = await response.json();

        setSubmitStatus({
          success: true,
          message: responseData.message,
          data: responseData.data,
          error: [],
        });
      } else {
        const errorData = await response.json();

        setSubmitStatus({success: false, message: "", error: errorData.errorMessages || []});
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "",
        error: [{path: "error", message: "Something went wrong!"}],
      });
    } finally {
      setIsLoading(false);
    }
  };
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationData, setPaginationData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/gallery?page=${currentPage}&limit=${itemsPerPage}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "x-api-key": process.env.NEXT_PUBLIC_X_API_KEY || "",
            },
          },
        );
        const result = await response.json();

        if (result.success) {
          setPaginationData(result.data);
          setTotalPages(Math.ceil(result.meta.total / itemsPerPage));
        } else {
          // Handle error
        }
      } catch (error) {
        // Handle error
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [currentPage]);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="gap-x-3 shadow-gray-100 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-gray-900/20 relative z-10 flex items-center max-w-xl p-3 mx-auto bg-white border rounded-lg shadow-lg">
          <div className="w-full">
            <label
              className="dark:text-white block text-sm font-medium text-gray-700"
              htmlFor="hs-search-article-1"
            >
              <span className="sr-only">Search gallery</span>
            </label>
            <input
              className="focus:outline-none focus:bg-white focus:border-primary/30 dark:focus:border-light/30 bg-light dark:bg-primary/30 border-light dark:border-primary/30 border-1 text-primary/70 dark:text-light/70 w-full px-4 py-2 leading-tight rounded appearance-none"
              id="searchTerm"
              name="searchTerm"
              placeholder="Search gallery"
              type="search"
              value={formData.searchTerm}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Button isIconOnly color="secondary" radius="sm" type="submit">
              {isLoading ? (
                <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z"
                    fill="currentColor"
                    opacity="0.5"
                  />
                  <path d="M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z" fill="currentColor">
                    <animateTransform
                      attributeName="transform"
                      dur="1s"
                      from="0 12 12"
                      repeatCount="indefinite"
                      to="360 12 12"
                      type="rotate"
                    />
                  </path>
                </svg>
              ) : (
                <svg
                  className="shrink-0 size-5"
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
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              )}
            </Button>
          </div>
        </div>
      </form>
      <div className="md:grid-cols-2 sm:gap-6 md:gap-8 lg:gap-12 grid gap-4 py-12">
        {(submitStatus.data && submitStatus.data.length > 0
          ? submitStatus.data
          : data && data.length > 0
            ? data
            : paginationData
        )?.map(({id, title, img, description, tags}) => {
          const tagsData = tags.split(" ");

          return (
            <div key={id} className="group focus:outline-none flex flex-col w-full h-auto">
              <Image
                alt={title}
                className="filter grayscale group-hover:grayscale-0 w-full h-auto transition-all duration-500 cursor-pointer object-cover object-center"
                height={500}
                src={img ?? ""}
                width={800}
              />
              <div className="pt-4">
                <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-success before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
                  {title}
                </h3>
                <p className="dark:text-light/70 text-secondary mt-1">{description}</p>

                <div className="flex flex-wrap gap-2 mt-3">
                  {tagsData.map((tag, index) => {
                    return (
                      <span
                        key={index}
                        className="py-1.5 px-3 bg-white text-secondary dark:text-light/70 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700"
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Pagination showControls initialPage={1} total={totalPages} onChange={handlePageChange} />
    </div>
  );
};

export default FormGallery;
