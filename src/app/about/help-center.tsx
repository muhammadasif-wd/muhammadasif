import {Button} from "@nextui-org/button";
import Image from "next/image";
import React from "react";

const HelpCenter = () => {
  let inputStyle = `border-2 border-primary border-zinc-500 placeholder:text-zinc-300 rounded w-full p-3 outline-none bg-primary`;

  return (
    <div className="container">
      <div className="text-light">
        <article>
          <h1 className="text-4xl leading-relaxed text-center">
            Help <span className="font-extrabold">Center</span>
          </h1>
          <p className="lg:w-1/2 mx-auto md:text-center text-zinc-500 mt-5">{`Whether you have questions about my services, need assistance with a project, or simply want to connect, I'm here to help. Explore the resources below or reach out directly for personalized support.`}</p>
        </article>
        <div className="grid lg:grid-cols-2 gap-10 pt-20 place-items-center place-content-center">
          <Image
            alt="about-events"
            className="xl:h-[500px] lg:max-h-full max-h-96 h-fit w-full"
            height={500}
            src={"/images/about/about-help-center.svg"}
            width={800}
          />
          <form action="" className="space-y-5">
            <input
              className={inputStyle}
              id="name"
              name="name"
              placeholder="Your name*"
              type="text"
            />
            <input
              className={inputStyle}
              id="email"
              name="email"
              placeholder="Regular email*"
              type="email"
            />
            <input
              className={inputStyle}
              id="file"
              multiple={true}
              name="file"
              placeholder="Your problem screenshots*"
              type="file"
            />
            <textarea
              className={inputStyle}
              cols={30}
              id="message"
              name="message"
              placeholder="How can I help? Describe your full problem step by step*"
              rows={5}
            />
            <div className="flex flex-wrap items-center gap-3">
              <Button className="font-bold bg-light text-primary" radius="sm" size="lg">
                Help Me
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
