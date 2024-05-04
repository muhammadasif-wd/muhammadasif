import {Button} from "@nextui-org/button";
import Image from "next/image";
import Link from "next/link";

import {PinContainer} from "@/components/ui/3d-pin";
import {TextRevealCard} from "@/components/ui/text-reveal-card";
import {images} from "@/utils/images";

export default function Home() {
  const recipient = "muhammadasif.wd@gmail.com";
  const subject = "Contact from Portfolio";
  const body = "Hello ASIF, I visited your portfolio and I would like to contact you.";
  const phone = "+8801830018193";
  const message = "Hello ASIF, I visited your portfolio and I would like to contact you.";

  return (
    <main className="min-h-screen">
      <section className="grid lg:grid-cols-2 place-items-center place-content-center gap-0">
        <div className="min-h-96 !z-10 w-full flex items-center justify-center md:mt-20">
          <PinContainer
            href="https://docs.google.com/document/d/1_deAvC9h7oRBaHazC0AvGwRvhNRrqpbnqr_t5PoQ4Ic/edit?usp=sharing"
            title="drive/asif/resume.view"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-white/50 sm:basis-1/2 md:w-[26rem] md:h-[26rem] sm:h-80 w-full h-80">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-dark dark:text-white uppercase">
                Muhammad Asif
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-dark dark:text-light font-medium">
                  Aspiring Software Engineering Eager to Learn and Grow...
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg">
                <Image
                  alt="muhammadasif_wd portfolio profile image"
                  height={500}
                  src={images.muhammadasif_wd}
                  width={500}
                />
              </div>
            </div>
          </PinContainer>
        </div>
        <div className="md:mt-20 md:mb-0 mb-10 p-5 w-full">
          <TextRevealCard
            revealText="Full Stack Developer & React.js Specialist"
            text="Software Engineer"
          />

          <p className="mt-5 dark:text-white/70 text-dark">
            As a seasoned full-stack web developer, I specialize in transforming visionary ideas
            into captivating online solutions. With a strong focus on craftsmanship and innovation,
            I invite you to explore my diverse portfolio of projects, showcasing my expertise in
            React.js and web development. Join me on this journey of turning dreams into digital
            reality.
          </p>
          <div className="mt-5 space-x-3">
            <Link
              href={`https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${recipient}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
              target="_blank"
            >
              <Button color="secondary">Contact</Button>
            </Link>
            <Link
              href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
              target="_blank"
            >
              <Button color="secondary">Whatsapp</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
