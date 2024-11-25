"use client";

import {Button} from "@nextui-org/button";
import {Card, CardBody} from "@nextui-org/card";
import {Skeleton} from "@nextui-org/skeleton";
import {useTheme} from "next-themes";
import Image from "next/image";
import Link from "next/link";
import {useEffect, useState} from "react";

import {IconLink} from "@/assets/icons/link";
import TextStroke from "@/hooks/text-stroke";
import Alert from "@/shared/alert";

export interface IProject {
  _id: string;
  name: string;
  description: string;
  live: string;
  img: string;
  date: string;
  category: string;
  tags: string;
  techstack: {};
}
const Projects = () => {
  const {theme} = useTheme();
  const [projects, setProjects] = useState<IProject[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleFetchProjects = async () => {
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

        setProjects(data.data);
      } catch (error: any) {
        console.error(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    handleFetchProjects();
  }, []);

  return (
    <div className="bg-primary py-20">
      <div className="container">
        <article className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-light md:mb-6 lg:text-3xl">
            My{" "}
            <TextStroke
              strokeColor={theme === "light" ? "#000000" : "#FFFFFF"}
              strokeWidth="0px"
              text="Projects"
              textColor={theme === "light" ? "#FFFFFF" : "#000000"}
            />
          </h2>

          <p className="mx-auto max-w-screen-md text-center text-zinc-500 md:text-lg">
            Below are some key projects showcasing my skills and experience in Full-Stack. Each
            project reflects my dedication to innovation, problem-solving, and achieving exceptional
            results.
          </p>
        </article>
        <section className="space-y-20">
          {loading ? (
            <div
              className={`flex flex-col md:grid md:grid-cols-2 lg:gap-20 gap-5 place-items-center`}
            >
              <div className="mt-10 w-full">
                <Skeleton className="h-[397px] w-full rounded-lg" />
              </div>
              <div className="w-full flex flex-col gap-3 mt-10">
                <Skeleton className="h-10 w-10 rounded-lg" />
                <Skeleton className="h-10 md:w-4/5 w-full rounded-lg" />
                <Skeleton className="h-60 md:w-4/5 w-full rounded-lg" />
                <Skeleton className="h-10 md:w-10 w-full rounded-lg" />
              </div>
            </div>
          ) : (
            projects.map(({name, img, description, _id}, index) => (
              <div
                key={index}
                className={`flex flex-col md:grid md:grid-cols-2 lg:gap-20 gap-5 place-items-center ${index % 2 === 1 ? "" : "flex-col-reverse md:grid-cols-2-reverse"}`}
              >
                <div className={`${index % 2 === 1 ? "" : "order-last"} space-y-5`}>
                  <h1 className="text-4xl font-extrabold text-light leading-relaxed">
                    {index + 1}
                  </h1>
                  <h1 className="text-3xl font-extrabold text-light leading-relaxed">{name}</h1>
                  <p className="text-zinc-500 leading-relaxed">{description}</p>
                  <Button isIconOnly as={Link} href={`/works/${_id}`} radius="sm">
                    <IconLink height={20} width={20} />
                  </Button>
                </div>
                <Card isPressable className="w-full bg-zinc-900 shadow-none">
                  <CardBody as={Link} className="overflow-visible p-0" href={`/works/${_id}`}>
                    <Image
                      alt={name}
                      className="h-[397px] w-full mx-auto object-cover object-center"
                      height={530}
                      loading="lazy"
                      src={img}
                      width={397}
                    />
                  </CardBody>
                </Card>
              </div>
            ))
          )}
          {error && (
            <Alert
              message={error || "Something went wrong!"}
              style="py-2 px-4 w-fit"
              type="danger"
            />
          )}
        </section>
      </div>
    </div>
  );
};

export default Projects;
