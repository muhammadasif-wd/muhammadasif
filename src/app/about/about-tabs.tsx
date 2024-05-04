import AboutBackend from "./about-backend";
import AboutFrontend from "./about-frontend";
import AboutMe from "./about-me";
import AboutProblemSolving from "./about-problem-solved";
import AboutTools from "./about-tools";

export const about_tabs = [
  {
    title: "About Me",
    value: "about-me",
    content: (
      <div className="lg:h-[28rem] md:h-[32rem] h-[70rem] text-white bg-white dark:bg-dark dark:border-default/50 shadow border rounded-2xl p-10 font-bold w-full overflow-hidden relative">
        <AboutMe />
      </div>
    ),
  },
  {
    title: "Frontend",
    value: "frontend",
    content: (
      <div className="lg:h-[28rem] md:h-[32rem] h-[70rem] text-white bg-white dark:bg-dark dark:border-default/50 shadow border rounded-2xl p-10 font-bold w-full overflow-hidden relative">
        <AboutFrontend />
      </div>
    ),
  },
  {
    title: "Backend",
    value: "backend",
    content: (
      <div className="lg:h-[28rem] md:h-[32rem] h-[70rem] text-white bg-white dark:bg-dark dark:border-default/50 shadow border rounded-2xl p-10 font-bold w-full overflow-hidden relative">
        <AboutBackend />
      </div>
    ),
  },
  {
    title: "Problem Solving",
    value: "problem-solving",
    content: (
      <div className="lg:h-[28rem] md:h-[32rem] h-[70rem] text-white bg-white dark:bg-dark dark:border-default/50 shadow border rounded-2xl p-10 font-bold w-full overflow-hidden relative">
        <AboutProblemSolving />
      </div>
    ),
  },
  {
    title: "Tools",
    value: "tools",
    content: (
      <div className="lg:h-[28rem] md:h-[32rem] h-[70rem] text-white bg-white dark:bg-dark dark:border-default/50 shadow border rounded-2xl p-10 font-bold w-full overflow-hidden relative">
        <AboutTools />
      </div>
    ),
  },
];
