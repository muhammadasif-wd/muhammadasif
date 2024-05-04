import {TextGenerateEffect} from "@/components/ui/text-generate-effect";
import {TypewriterEffectSmooth} from "@/components/ui/typewriter-effect";

function AboutMe() {
  return (
    <div>
      <TypewriterEffectSmooth
        words={[
          {text: "About", className: "text-dark uppercase font-bold"},
          {text: "me", className: "text-dark uppercase font-bold !text-primary"},
        ]}
      />
      <TextGenerateEffect
        className="!font-light text-base"
        words={`I'm Muhammad Asif, a seasoned Full-Stack Developer specializing in the MERN stack. My journey in web development has been an exciting exploration of code, design, and problem-solving. With extensive expertise in various technologies, I bring a wealth of skills to every project. I'm passionate about crafting exceptional user experiences that seamlessly blend aesthetics with functionality. My dedication to innovation and learning drives me to stay at the forefront of web development trends, ensuring that I deliver cutting-edge solutions to my clients. As a developer, I thrive on challenges and relish the opportunity to tackle complex problems. I have a track record of transforming ideas into high-quality, scalable web applications that exceed client expectations. My commitment to excellence is unwavering, and I take pride in consistently delivering projects on time and within budget. I'm not just a coder; I'm a digital problem solver, and I'm here to bring your ideas to life.
`}
      />
    </div>
  );
}

export default AboutMe;
