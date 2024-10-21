/* eslint-disable no-undef */
"use client";
import React, {useState} from "react";
import {Button} from "@nextui-org/button";

const FormNewsletter = () => {
  const [formData, setFormData] = useState({email: ""});
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
    error: {path: string; message: string}[];
  }>({
    success: false,
    message: "",
    error: [],
  });
  const [isLoading, setIsLoading] = useState(false);

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
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/newsletter/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.NEXT_PUBLIC_X_API_KEY || "",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const responseData = await response.json();

        setSubmitStatus({success: true, message: responseData.message, error: []});
        setFormData({email: ""});
      } else {
        const errorData = await response.json();

        setSubmitStatus({success: false, message: "", error: errorData.errorMessages || []});
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "",
        error: [{path: "error", message: "Something went wrong!"}],
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="mb-3 w-full max-w-md" onSubmit={handleSubmit}>
      <div className="flex items-center gap-2">
        <input
          required
          className={`border-1 dark:bg-zinc-900 border-primary dark:border-zinc-500 placeholder:text-zinc-300 rounded w-full p-2 outline-none`}
          id="email"
          name="email"
          placeholder="Regular email*"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <div className="flex flex-wrap items-center gap-3">
          {isLoading ? (
            <Button
              disabled
              className="font-bold bg-primary text-light dark:bg-light dark:text-primary"
              radius="sm"
              size="md"
              type="button"
            >
              Loading...
            </Button>
          ) : (
            <Button
              className="bg-primary dark:bg-light text-light dark:text-primary"
              radius="sm"
              size="md"
              type="submit"
            >
              Submit
            </Button>
          )}
        </div>
      </div>
      {submitStatus.error.length >= 1 &&
        submitStatus?.error?.map(
          (error: {path: string; message: string}, index) =>
            error.path === "email" && (
              <span key={index} className="text-danger ">
                {error.message}
              </span>
            ),
        )}
      {submitStatus.success && <span className="text-success">{submitStatus.message}</span>}
    </form>
  );
};

export default FormNewsletter;
