/* eslint-disable no-undef */
"use client";
import React, {useState} from "react";
import {Button} from "@nextui-org/button";
import Link from "next/link";
import Image from "next/image";

import TextStroke from "@/hooks/text-stroke";
import {IContactProps} from "@/types/landing.type";
import Alert from "@/shared/alert";

const Contact = ({contactData, contactError}: IContactProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    error: {path: string; message: string}[];
  }>({
    success: false,
    error: [],
  });
  const [isLoading, setIsLoading] = useState(false);

  const inputStyle = `border-2 border-primary dark:border-zinc-500 dark:placeholder:text-zinc-300 rounded w-full p-3 placeholder:text-zinc-500 outline-none dark:bg-primary`;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/contact/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.NEXT_PUBLIC_X_API_KEY || "",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus({success: true, error: []});
        setFormData({name: "", email: "", number: "", message: ""});
      } else {
        const errorData = await response.json();

        setSubmitStatus({success: false, error: errorData.errorMessages || []});
      }
    } catch (error) {
      setSubmitStatus({success: false, error: [{path: "error", message: "Something went wrong!"}]});
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid lg:grid-cols-2 lg:gap-20 gap-10 place-content-center place-items-center py-10">
      <div>
        <form className="space-y-5 w-full" onSubmit={handleSubmit}>
          <input
            required
            className={inputStyle}
            id="name"
            name="name"
            placeholder="Your name*"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
          />
          {submitStatus.error.length >= 1 &&
            submitStatus?.error?.map(
              (error: {path: string; message: string}, index) =>
                error.path === "name" && (
                  <span key={index} className="text-danger">
                    {error.message}
                  </span>
                ),
            )}
          <input
            required
            className={inputStyle}
            id="email"
            name="email"
            placeholder="Email*"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {submitStatus.error.length >= 1 &&
            submitStatus?.error?.map(
              (error: {path: string; message: string}, index) =>
                error.path === "email" && (
                  <span key={index} className="text-danger">
                    {error.message}
                  </span>
                ),
            )}
          <input
            className={inputStyle}
            id="number"
            name="number"
            placeholder="Your number (whatsapp exist)*"
            type="text"
            value={formData.number}
            onChange={handleInputChange}
          />
          {submitStatus.error.length >= 1 &&
            submitStatus?.error?.map(
              (error: {path: string; message: string}, index) =>
                error.path === "number" && (
                  <span key={index} className="text-danger">
                    {error.message}
                  </span>
                ),
            )}
          <textarea
            className={inputStyle}
            cols={30}
            id="message"
            name="message"
            placeholder="How can I help?*"
            rows={5}
            value={formData.message}
            onChange={handleInputChange}
          />
          {submitStatus.error.length >= 1 &&
            submitStatus?.error?.map(
              (error: {path: string; message: string}, index) =>
                error.path === "message" && (
                  <span key={index} className="text-danger">
                    {error.message}
                  </span>
                ),
            )}
          <div className="w-full">
            {submitStatus.success && (
              <Alert
                label={false}
                message="Message sent successfully!"
                style="py-2 px-4 w-full"
                type="success"
              />
            )}
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {isLoading ? (
              <Button
                disabled
                className="font-bold bg-primary text-light dark:bg-light dark:text-primary"
                radius="sm"
                size="lg"
                type="button"
              >
                Loading...
              </Button>
            ) : (
              <Button
                className="font-bold bg-primary text-light dark:bg-light dark:text-primary"
                radius="sm"
                size="lg"
                type="submit"
              >
                Get In Touch
              </Button>
            )}
            <div className="flex gap-3 items-center font-bold">
              {contactData &&
                contactData.map(({icon, _id, url}) => (
                  <Button
                    key={_id}
                    isIconOnly
                    as={Link}
                    className="border bg-white hover:-translate-y-1"
                    href={url}
                    radius="sm"
                    size="lg"
                    target="_blank"
                    variant="bordered"
                  >
                    <Image alt={icon} height={24} src={icon} width={24} />
                  </Button>
                ))}
            </div>
            {contactError && (
              <Alert
                message={contactError || "Something went wrong!"}
                style="py-2 px-4 w-fit"
                type="danger"
              />
            )}
          </div>
        </form>
      </div>
      <div>
        <article>
          <h1 className="text-4xl font-extrabold leading-relaxed">
            {`Let’s`}{" "}
            <TextStroke strokeColor="#000000" strokeWidth="0px" text="talk" textColor="#FFFFFF" />{" "}
            for <br /> Something special
          </h1>
          <p className="text-zinc-500 dark:text-zinc-300 mt-5 mb-10">
            {`I am eager to collaborate and bring your vision to life. Reach out today, and let's turn
            your ideas into reality.`}
          </p>
          <div>
            <h1 className="font-semibold text-2xl whitespace-pre-wrap">
              <Link
                href={
                  "mailto:muhammadasif.cse@gmail.com" +
                  "?subject=" +
                  encodeURIComponent("From portfolio website") +
                  "&body=" +
                  encodeURIComponent("Hello,\n\n")
                }
                target="_blank"
              >
                muhammadasif.cse@
              </Link>
            </h1>
            <Link href={`tel:+8801930248584`}>
              <h1 className="font-semibold text-2xl">+88 01930248584</h1>
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Contact;
