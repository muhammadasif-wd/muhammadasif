import {TextGenerateEffect} from "@/components/ui/text-generate-effect";
import {TypewriterEffectSmooth} from "@/components/ui/typewriter-effect";

function AboutFrontend() {
  return (
    <div>
      <TypewriterEffectSmooth
        words={[
          {text: "Frontend", className: "text-dark uppercase font-bold"},
          {text: "Mastery", className: "text-dark uppercase font-bold !text-primary"},
        ]}
      />
      <TextGenerateEffect
        className="!font-light text-base"
        words={`In my frontend toolkit, you'll find proficiency in HTML, CSS, Bootstrap, and the dynamic versatility of Tailwind CSS. I have a strong command of JavaScript and TypeScript, allowing me to build interactive and responsive interfaces with ease. I'm well-versed in popular frontend libraries and frameworks such as React, Next.js, Vue.js, and Redux. My approach to frontend development goes beyond visuals; it prioritizes intuitive and user-centric design principles. I believe that a well-crafted frontend is the key to engaging user experiences. User interface design is an art form, and I take great care in crafting pixel-perfect layouts that not only look stunning but also function flawlessly across devices and browsers. Whether it's creating smooth animations, optimizing performance, or ensuring accessibility, I pay meticulous attention to every detail. I understand that the frontend is the face of your application, and I'm committed to making it shine.`}
      />
    </div>
  );
}

export default AboutFrontend;
