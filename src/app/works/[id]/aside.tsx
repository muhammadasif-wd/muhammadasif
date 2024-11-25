import {Skeleton} from "@nextui-org/skeleton";
import Image from "next/image";
import Link from "next/link";
import {useParams} from "next/navigation";
import {useEffect, useState} from "react";

import {IProject} from "../projects";

const Aside = () => {
  const {id} = useParams();
  const [project, setProject] = useState<IProject[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const handleFetchProject = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/projects`, {
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
  }, []);

  return (
    <div className="lg:col-span-1 lg:w-full lg:h-full lg:bg-gradient-to-r lg:from-gray-50 lg:via-transparent lg:to-transparent dark:from-neutral-800">
      <div className="start-0 lg:ps-8 sticky top-0 py-8">
        <div className="group gap-x-3 dark:border-neutral-700 flex items-center pb-8 mb-8 border-b border-gray-200">
          <h1 className="md:text-xl font-bold">All Projects</h1>
        </div>

        <div className="space-y-6">
          {loading ? (
            <div className="h-fit w-full flex items-center gap-3">
              <div className="w-full flex flex-col gap-3">
                <Skeleton className="h-5 w-3/5 rounded-lg" />
                <Skeleton className="h-5 w-4/5 rounded-lg" />
              </div>
              <div>
                <Skeleton className="flex rounded w-16 h-16" />
              </div>
            </div>
          ) : (
            project?.map(({_id, name, date, img}: IProject) => {
              return (
                <Link
                  key={_id}
                  className="group gap-x-6 focus:outline-none flex items-center"
                  href={`/works/${_id}`}
                >
                  <div className="grow">
                    <span
                      className={`group-hover:text-info text-sm font-bold ${id === _id ? "text-info" : "dark:text-light text-primary"}`}
                    >
                      {name} - {date}
                    </span>
                  </div>

                  <div className="shrink-0 size-20 relative overflow-hidden rounded-lg">
                    <Image
                      alt="Blog Image"
                      className="group-hover:scale-105 group-focus:scale-105 size-full start-0 rounded-l-xl filter grayscale group-hover:grayscale-0 absolute top-0 object-cover object-center w-full h-full transition-transform duration-500 ease-in-out cursor-pointer"
                      height={180}
                      src={img}
                      width={320}
                    />
                  </div>
                </Link>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Aside;
