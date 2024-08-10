"use client";
import Link from "next/link";
import {Button} from "@nextui-org/button";

import {IconBack} from "@/assets/icons/back";

export default function Error() {
  return (
    <main className="grid place-content-center">
      <div className="text-center">
        <h1 className="block text-7xl font-bold text-dark sm:text-9xl dark:text-light">500</h1>
        <p className="mt-3 text-secondary dark:text-light font-bold text-lg">
          {`Oops, something went wrong.`}
        </p>
        <p className="text-secondary dark:text-light font-bold text-lg">
          {`Internal Server Error`}
        </p>
        <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
          <Button
            as={Link}
            className="font-bold lg:flex hidden"
            color="primary"
            href="/"
            radius="sm"
          >
            Reset <IconBack className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </main>
  );
}
