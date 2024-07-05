import React from "react";
import {Card, CardBody} from "@nextui-org/card";
import Image from "next/image";

import {testimonials} from "@/assets/api/testimonial";
import {IconQuote} from "@/assets/icons/quote";

const Testimonial = () => {
  return (
    <section>
      <article>
        <h1 className="text-4xl leading-relaxed text-center text-black">
          My <span className="font-extrabold">Testimonial</span>
        </h1>
      </article>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 mt-10">
        {testimonials.map(({name, designation, details, img}, index) => (
          <Card key={index + name} className="group">
            <CardBody className="p-10 group-hover:bg-black group-hover:text-light">
              <div className="relative w-24 h-24 mx-auto">
                <Image
                  alt=""
                  className="rounded-full w-24 h-24 mx-auto border border-black bg-zinc-300 object-cover"
                  height={96}
                  src={img}
                  width={96}
                />
                <div className="flex absolute bottom-0 right-0 rounded-full w-8 h-8 bg-black group-hover:bg-light group-hover:text-black text-light">
                  <IconQuote className="w-fit h-fit mx-auto my-auto" />
                </div>
              </div>
              <div className="pt-6 text-center">
                <p>{details}</p>
                <div className="w-1/3 mx-auto h-1 bg-black group-hover:bg-light mb-10 mt-3" />
                <h3 className="font-semibold text-2xl leading-relaxed">{name}</h3>
                <h3 className="font-semibold text-xl text-zinc-500 group-hover:text-light leading-relaxed">
                  {designation}
                </h3>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
