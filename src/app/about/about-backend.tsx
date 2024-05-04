import {TextGenerateEffect} from "@/components/ui/text-generate-effect";
import {TypewriterEffectSmooth} from "@/components/ui/typewriter-effect";

function AboutBackend() {
  return (
    <div>
      <TypewriterEffectSmooth
        words={[
          {text: "Backend", className: "text-dark uppercase font-bold"},
          {text: "Wizardry", className: "text-dark uppercase font-bold !text-primary"},
        ]}
      />
      <TextGenerateEffect
        className="!font-light text-base"
        words={`On the backend, I wield the power of Node.js and Express.js to create robust server-side applications. Crafting RESTful and GraphQL APIs is second nature to me, and I'm equally comfortable working with databases like MySQL, PostgreSQL, MongoDB, and other NoSQL variants. My expertise extends to server management and deployment, where I leverage tools such as Docker, Nginx, and AWS to ensure seamless functionality and scalability. I thrive on the challenge of architect backend solutions that form the backbone of web applications, delivering both speed and security.`}
      />
    </div>
  );
}

export default AboutBackend;
