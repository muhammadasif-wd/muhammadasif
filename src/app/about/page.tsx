import React from "react";
import Image from "next/image";

import Events from "./events";
import Achievements from "./achievements";
import Gallery from "./gallery";

import NewsLatter from "@/components/news-latter";
import Alert from "@/shared/alert";

interface IAbout {
  id: string;
  firstContent: string;
  middleContent: string;
  lastContent: string;
}

async function getData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/about/me`, {
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
async function getAchievementData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/about/achievement`, {
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

const About = async () => {
  let data;
  let error;
  let achievementData;

  try {
    data = await getData();
    achievementData = await getAchievementData();
  } catch (err) {
    error = (err as Error).message;
  }

  return (
    <section className="space-y-20">
      <div className="container">
        <div className="grid xl:grid-cols-2 gap-y-10 place-content-center xl:place-items-start place-items-center">
          <Image
            alt="about-us-muhammadasif.wd"
            className="-z-50 dark:border rounded border-zinc-500"
            height={572}
            src={"/images/about/about-man.svg"}
            width={525}
          />
          <div>
            <article>
              <h1 className="text-4xl leading-relaxed">
                About <span className="font-extrabold">Me</span>
              </h1>
              {data?.data.map(({firstContent, lastContent, middleContent, id}: IAbout) => {
                return (
                  <article key={id} className="space-y-5 mt-10 leading-relaxed text-zinc-500">
                    <p>{firstContent}</p>
                    <p>{middleContent}</p>
                    <p>{lastContent}</p>
                  </article>
                );
              })}
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
      </div>
      <div className="bg-primary py-20">
        <Achievements data={achievementData?.data} />
      </div>
      <div className="container">
        <Events />
      </div>
      <div className="bg-primary py-20">
        <Gallery />
      </div>
      <div>
        <NewsLatter />
      </div>
    </section>
  );
};

export default About;
