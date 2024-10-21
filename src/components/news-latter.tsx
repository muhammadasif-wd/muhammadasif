import React from "react";

import FormNewsletter from "./form/news-latter";

const NewsLatter = () => {
  return (
    <div className="container">
      <div className="flex flex-col items-center rounded-lg bg-zinc-100 dark:bg-zinc-900 p-4 sm:p-8 lg:flex-row lg:justify-between">
        <div className="mb-4 sm:mb-8 lg:mb-0">
          <h2 className="text-center text-xl font-bold text-primary dark:text-light sm:text-2xl lg:text-left lg:text-3xl">
            Get the latest updates
          </h2>
          <p className="text-center text-zinc-500 lg:text-left">Sign up for my newsletter</p>
        </div>

        <div className="flex flex-col items-center lg:items-end">
          <FormNewsletter />

          <p className="text-center text-xs text-zinc-400 lg:text-right">
            Subscribe to receive the latest tech news directly in your email.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLatter;
