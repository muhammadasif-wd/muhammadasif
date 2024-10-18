import React from "react";
import Image from "next/image";
import Link from "next/link";

import {TExperience} from "@/types/experience.type";
import Alert from "@/shared/alert";

async function getData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/experience`, {
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

const Experience = async () => {
  let data;
  let error;

  try {
    data = await getData();
  } catch (err) {
    error = (err as Error).message;
  }

  return (
    <div>
      <article>
        <h1 className="text-4xl leading-relaxed text-center text-light">
          My <span className="font-extrabold">Experience</span>
        </h1>
      </article>
      <div className="py-10">
        <article className="text-light space-y-8">
          {data?.data?.map(({_id, date, title, details, icon, url}: TExperience) => (
            <div
              key={_id}
              className="hover:bg-zinc-800 hover:border-zinc-800 duration-300 ease-in-out border border-zinc-500 rounded-[10px] px-6 py-[30px]"
            >
              <div className="flex flex-wrap gap-y-5 justify-between items-center">
                <div className="flex items-center gap-7">
                  <Image
                    alt={title}
                    className="bg-light p-1 rounded"
                    height={32}
                    src={icon}
                    width={32}
                  />
                  <Link href={url ?? ""}>
                    <h2 className="text-xl font-bold">{title}</h2>
                  </Link>
                </div>
                <p className="text-zinc-300">{date}</p>
              </div>
              <p className="text-zinc-300 pt-7">{details}</p>
            </div>
          ))}
          {error && (
            <Alert
              message={error || "Something went wrong!"}
              style="py-2 px-4 w-fit"
              type="danger"
            />
          )}
        </article>
      </div>
    </div>
  );
};

export default Experience;
