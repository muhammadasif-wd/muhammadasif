import Link from "next/link";
import React from "react";

const CommonCard = () => {
  const card_data = [
    {
      link: "/about/skills",
      title: "Skills",
      subtitle: `Seasoned Full-Stack Developer specializing in the MERN stack,
                dedicated to crafting cutting-edge web solutions that seamlessly
                blend aesthetics with functionality.`,
    },
    {
      link: "/about/experience",
      title: "Experience",
      subtitle: `Proven track record in transforming ideas into high-quality,
                scalable web applications; excelling in problem-solving,
                innovative thinking, and consistently delivering projects on
                time and within budget.`,
    },
    {
      link: "/about/education",
      title: "Education",
      subtitle: `Learning Journey: Web Development at Programming Hero (Nov '21 -
                Jul '22), ongoing Advanced Web Development, and pursuing Higher
                Secondary Certificate in Science at Khilgaon Model College.`,
    },
  ];
  return (
    <div>
      <div className="w-fit mx-auto flex flex-wrap justify-center gap-5 sm:gap-1">
        {card_data.map(({ link, title, subtitle }, index) => {
          return (
            <Link
              href={link}
              key={index}
              className="sm:w-fit sm:m-3 w-80 bg-primary/5 border shadow p-5 rounded drop-shadow-md hover:-translate-y-3 duration-300"
            >
              <article>
                <h1 className="text-2xl font-bold dark:text-light text-dark">
                  {title}
                </h1>
                <p className="mt-3 font-medium leading-normal dark:text-darkColor">
                  {subtitle}
                </p>
              </article>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CommonCard;
