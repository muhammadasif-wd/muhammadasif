import {TextGenerateEffect} from "@/components/ui/text-generate-effect";
import {TypewriterEffectSmooth} from "@/components/ui/typewriter-effect";

function AboutTools() {
  return (
    <div>
      <TypewriterEffectSmooth
        words={[
          {text: "Tools And", className: "text-dark uppercase font-bold"},
          {text: "Methodologies", className: "text-dark uppercase font-bold !text-primary"},
        ]}
      />
      <TextGenerateEffect
        className="!font-light text-base"
        words={`I am well-versed in agile development methodologies and proficient in project management tools like Jira and Trello. Implementing CI/CD pipelines for automated testing and deployment is a standard practice in my workflow, guaranteeing the reliability and efficiency of the projects I undertake. I firmly believe that design transcends aesthetics. It's about creating digital solutions that solve real-world problems and provide users with seamless, enjoyable experiences. Whether it's a website, a mobile app, or any other digital product, I am dedicated to achieving design excellence and maintaining a user-centered approach. I am excited about the prospect of collaborating with you on your next project, leveraging my skills, passion, and dedication to deliver exceptional results. Let's bring your vision to life, one line of code at a time.`}
      />
    </div>
  );
}

export default AboutTools;
