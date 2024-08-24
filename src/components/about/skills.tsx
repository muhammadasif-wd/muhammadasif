"use client";
import {Icon} from "@iconify/react";
import {Button} from "@nextui-org/button";
import React, {useState, useEffect} from "react";

import {TSkills} from "@/types/skills.type";
import SkeletonLoading from "@/shared/skeleton";
import Alert from "@/shared/alert";

async function getData(page = 1, limit = 10) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/skill?page=${page}&limit=${limit}`, {
    method: "GET",
    headers: {
      "x-api-key": process.env.NEXT_PUBLIC_X_API_KEY || "",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Skills = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await getData(page);

        setData(result.data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  const handleNext = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <article className="flex justify-between items-center">
        <Button
          isIconOnly
          color="secondary"
          radius="sm"
          onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
        >
          <Icon icon="hugeicons:previous" />
        </Button>
        <h1 className="text-4xl leading-relaxed text-center">
          My <span className="font-extrabold">Skills</span>
        </h1>
        <Button isIconOnly color="secondary" radius="sm" onClick={handleNext}>
          <Icon icon="hugeicons:next" />
        </Button>
      </article>
      {loading ? (
        <div className="w-full">
          <SkeletonLoading
            layout="w-full grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3 md:gap-14 mt-10"
            skeleton={5}
            style="!w-full !h-40 w-full rounded"
          />
        </div>
      ) : (
        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3 md:gap-14 mt-10">
          {data?.map(({_id, icon, name}: TSkills) => (
            <div
              key={_id}
              className="border-2 rounded border-primary dark:border-zinc-500 p-6 dark:hover:bg-light hover:bg-primary dark:hover:text-primary hover:text-light duration-300 ease-in-out"
            >
              <div className="flex justify-center">
                <Icon height={40} icon={icon ?? ""} width={40} />
              </div>
              <p className="text-center pt-5"> {name}</p>
            </div>
          ))}
        </div>
      )}
      {error && (
        <Alert message={error || "Something went wrong!"} style="py-2 px-4 w-fit" type="danger" />
      )}
    </div>
  );
};

export default Skills;
