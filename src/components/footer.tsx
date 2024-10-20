import {Button} from "@nextui-org/button";
import Link from "next/link";
import Image from "next/image";

import Alert from "@/shared/alert";
import {TBanner} from "@/types/landing.type";

async function getSocial() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/social`, {
      method: "GET",
      headers: {
        "x-api-key": process.env.NEXT_PUBLIC_X_API_KEY || "",
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default async function Footer() {
  let socialData;
  let socialError;

  try {
    socialData = await getSocial();
  } catch (err) {
    socialError = (err as Error).message;
  }

  return (
    <footer className="bg-primary dark:border-t-1 text-light py-5 w-full">
      <div className="container">
        <div className="flex sm:flex-nowrap flex-wrap gap-5 items-center justify-between">
          <div className="space-x-1 text-start">
            <p className="font-semibold md:text-xl uppercase pb-1">Muhammad Asif</p>
            <div className="flex gap-3 items-center font-bold">
              {socialData &&
                socialData?.data?.map(({icon, _id, url}: TBanner) => (
                  <Button
                    key={_id}
                    isIconOnly
                    as={Link}
                    className="border bg-white hover:-translate-y-0.5"
                    href={url}
                    radius="sm"
                    size="sm"
                    target="_blank"
                    variant="bordered"
                  >
                    <Image alt={icon} height={24} src={icon} width={24} />
                  </Button>
                ))}
              {socialError && (
                <Alert
                  message={socialError || "Something went wrong!"}
                  style="py-2 px-4 w-fit"
                  type="danger"
                />
              )}
            </div>
          </div>
          <div>
            <p className="sm:text-end text-start">&copy; 2021 - {new Date().getFullYear()} ASIF</p>{" "}
            All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
