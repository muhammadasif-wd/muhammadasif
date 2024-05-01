import {Button} from "@nextui-org/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid h-[75vh] place-content-center">
      <div className="text-center">
        <h1 className="block text-7xl font-bold text-dark sm:text-9xl dark:text-light">404</h1>
        <p className="mt-3 text-default dark:text-light font-medium text-lg">
          {`Oops, something went wrong.`}
        </p>
        <p className="text-default dark:text-light font-medium text-lg">
          {`Sorry, we couldn't find your page.`}
        </p>
        <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
          <Button as={Link} color="secondary" href="/">
            Back to location
          </Button>
        </div>
      </div>
    </main>
  );
}
