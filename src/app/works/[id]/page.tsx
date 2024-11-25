/* eslint-disable no-dupe-else-if */
/* eslint-disable no-undef */
"use client";
import {Button} from "@nextui-org/button";
import Link from "next/link";
import {useParams} from "next/navigation";
import {useEffect, useRef, useState} from "react";

import Aside from "./aside";
import Loading from "./loading";

import {formatKey} from "@/utils/format-key";

export interface IProject {
  _id: string;
  name: string;
  description: string;
  live: string;
  img: string;
  date: string;
  category: string;
  tags: string;
  techstack: {
    frontend?: Record<string, string>;
    backend?: Record<string, string>;
    database?: Record<string, string>;
    packaging?: Record<string, string>;
  };
}

const Page = () => {
  const {id} = useParams();
  const [project, setProject] = useState<IProject | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleFullScreen = () => {
    if (iframeRef.current) {
      if (iframeRef.current.requestFullscreen) {
        iframeRef.current.requestFullscreen();
      } else if (iframeRef.current.requestFullscreen) {
        /* Firefox */
        iframeRef.current.requestFullscreen();
      } else if (iframeRef.current.requestFullscreen) {
        /* Chrome, Safari and Opera */
        iframeRef.current.requestFullscreen();
      } else if (iframeRef.current.requestFullscreen) {
        /* IE/Edge */
        iframeRef.current.requestFullscreen();
      }
    }
  };

  useEffect(() => {
    const handleFetchProject = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/projects/${id}`, {
          method: "GET",
          headers: {
            "x-api-key": process.env.NEXT_PUBLIC_X_API_KEY || "",
          },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();

        setProject(data.data);
      } catch (error) {
        console.error(error);
        throw error;
      } finally {
        setLoading(false);
      }
    };

    handleFetchProject();
  }, [id]);

  let projectTags = project?.tags?.split(",");

  const renderTechStackSection = (title: string, stack: Record<string, string | "">) => (
    <div className="mb-4">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <ul className="list-disc list-inside">
        {Object.entries(stack).map(([key, value]) => (
          <li key={key}>
            <strong>{formatKey(key)}:</strong> {Array.isArray(value) ? value.join(", ") : value}
          </li>
        ))}
      </ul>
    </div>
  );

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
                  Back to Works
                </Link>

                <h2 className="lg:text-5xl dark:text-white text-3xl font-bold">{project?.name}</h2>

                <div className="gap-x-5 flex items-center">
                  <Link
                    className="inline-flex items-center gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                    href="#"
                  >
                    {project?.category}
                  </Link>
                  <p className="sm:text-sm dark:text-neutral-200 text-xs text-gray-800">
                    {project?.date ?? ""}
                  </p>
                  <Button color="secondary" radius="full" size="sm" onClick={handleFullScreen}>
                    Full Screen
                  </Button>
                </div>
                <p className="dark:text-neutral-200 text-lg text-gray-800">
                  {project?.description}
                </p>
                <div className="border">
                  <iframe
                    ref={iframeRef}
                    allowFullScreen
                    height={"500px"}
                    src={project?.live ?? ""}
                    title={project?.name ?? "Project Live View"}
                    width={"100%"}
                  />
                </div>
                <div className="mt-8">
                  {project?.techstack && (
                    <>
                      {renderTechStackSection("Frontend", project.techstack.frontend || {})}
                      {renderTechStackSection("Backend", project.techstack.backend || {})}
                      {renderTechStackSection("Database", project.techstack.database || {})}
                      {renderTechStackSection("Packaging", project.techstack.packaging || {})}
                    </>
                  )}
                </div>
                <div className="lg:flex-row lg:justify-between lg:items-center gap-y-5 lg:gap-y-0 flex flex-col">
                  <div>
                    {projectTags?.map((tag, index) => (
                      <p
                        key={index}
                        className="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                      >
                        {tag}
                      </p>
                    ))}
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
