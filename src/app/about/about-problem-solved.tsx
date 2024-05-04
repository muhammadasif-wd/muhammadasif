import {TextGenerateEffect} from "@/components/ui/text-generate-effect";
import {TypewriterEffectSmooth} from "@/components/ui/typewriter-effect";

function AboutProblemSolving() {
  return (
    <div>
      <TypewriterEffectSmooth
        words={[
          {text: "Problem Solver", className: "text-dark uppercase font-bold"},
          {text: "Extraordinaire", className: "text-dark uppercase font-bold !text-primary"},
        ]}
      />
      <TextGenerateEffect
        className="!font-light text-base"
        words={`I take immense pride in my knack for solving complex problems and optimizing code for peak performance. Collaboration is at the heart of my approach, and I excel at effective communication and teamwork. Whether it's coordinating with designers to achieve pixel-perfect designs or collaborating with fellow developers to implement the latest features, I am committed to delivering outstanding results. My strong foundation in Git and Git workflows ensures smooth code collaboration and management, contributing to streamlined development processes. Troubleshooting and debugging are second nature to me, and I approach every challenge with a methodical and analytical mindset. I understand the importance of creating clean and maintainable code, and I adhere to best practices to ensure code quality and longevity. I'm not just a developer; I'm a problem solver extraordinaire.`}
      />
    </div>
  );
}

export default AboutProblemSolving;
