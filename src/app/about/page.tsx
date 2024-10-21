import React from "react";
import Image from "next/image";

import Events from "./events";
import Achievements from "./achievements";
import Gallery from "./gallery";

import NewsLatter from "@/components/news-latter";

const About = () => {
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
              <article className="space-y-5 mt-10 leading-relaxed text-zinc-500">
                <p>{`I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.`}</p>
                <p>{`I began my journey as a web developer in 2021, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 3 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.`}</p>
                <p>{`When I'm not in full-on developer mode, you can find me hovering around on whatsapp, linkedin or facebook, witnessing the journey of early startups or enjoying some free time. You can follow me on linkedin where I share tech-related bites and build in public, or you can follow me on GitHub.`}</p>
              </article>
            </article>
          </div>
        </div>
      </div>
      <div className="bg-primary py-20">
        <Achievements />
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
