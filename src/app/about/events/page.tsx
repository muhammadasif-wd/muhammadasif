import FormEvent from "@/components/form/event";
import Alert from "@/shared/alert";
import {shuffle} from "@/utils/shuffle";

export interface IEvent {
  id: string;
  images: string[];
  title: string;
  category: string;
  date: string;
  topContent: string;
  firstContent: string;
  middleContent: string;
  endContent: string;
  imgText: string;
  tags: string;
}

async function getData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/event`, {
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

const Page = async () => {
  let data;
  let error;

  try {
    data = await getData();
    data = shuffle(data?.data);
  } catch (err) {
    error = (err as Error).message;
  }

  return (
    <div className="container min-h-screen mx-auto">
      <div className="relative overflow-hidden">
        <div className="text-center">
          <h1 className="sm:text-6xl dark:text-light text-secondary text-4xl font-bold">Events</h1>

          <p className="dark:text-light/70 text-secondary mt-3">
            {`Dive into my events, where I've added all my events and conferences`}
          </p>

          <div className="mt-7 sm:mt-12 relative max-w-xl mx-auto">
            <div className="md:block end-0 absolute top-0 hidden translate-x-20 -translate-y-12">
              <svg
                className="w-16 h-auto text-orange-500"
                fill="none"
                height="135"
                viewBox="0 0 121 135"
                width="121"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="10"
                />
                <path
                  d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="10"
                />
                <path
                  d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="10"
                />
              </svg>
            </div>
            <div className="md:block start-0 absolute bottom-0 hidden -translate-x-32 translate-y-10">
              <svg
                className="text-cyan-500 w-40 h-auto"
                fill="none"
                height="188"
                viewBox="0 0 347 188"
                width="347"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="7"
                />
              </svg>
            </div>
          </div>

          <div className="sm:mt-20 flex flex-wrap justify-center gap-1 mt-10" />
        </div>
      </div>
      <div className="my-3">
        <FormEvent data={data} />
        {error && (
          <Alert message={error || "Something went wrong!"} style="py-2 px-4 w-fit" type="danger" />
        )}
      </div>
    </div>
  );
};

export default Page;
