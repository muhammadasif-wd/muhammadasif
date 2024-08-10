import {Button} from "@nextui-org/button";
import Link from "next/link";
import React from "react";

const NewsLatter = () => {
  return (
    <div className="container">
      <div className="flex flex-col items-center rounded-lg bg-zinc-100 dark:bg-zinc-900 p-4 sm:p-8 lg:flex-row lg:justify-between">
        <div className="mb-4 sm:mb-8 lg:mb-0">
          <h2 className="text-center text-xl font-bold text-primary dark:text-light sm:text-2xl lg:text-left lg:text-3xl">
            Get the latest updates
          </h2>
          <p className="text-center text-zinc-500 lg:text-left">Sign up for our newsletter</p>
        </div>

        <div className="flex flex-col items-center lg:items-end">
          <form className="mb-3 flex w-full max-w-md gap-2">
            <input
              className={`border-1 dark:bg-zinc-900 border-primary dark:border-zinc-500 placeholder:text-zinc-300 rounded w-full p-2 outline-none`}
              id="email"
              name="email"
              placeholder="Regular email*"
              type="email"
            />

            <Button
              className="bg-primary dark:bg-light text-light dark:text-primary"
              radius="sm"
              size="lg"
            >
              Send
            </Button>
          </form>

          <p className="text-center text-xs text-zinc-400 lg:text-right">
            By signing up to our newsletter you agree to our{" "}
            <Link
              className="underline transition duration-100 hover:text-primary active:text-zinc-600"
              href="#"
            >
              Term of Service
            </Link>{" "}
            and{" "}
            <Link
              className="underline transition duration-100 hover:text-primary active:text-zinc-600"
              href="#"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLatter;
