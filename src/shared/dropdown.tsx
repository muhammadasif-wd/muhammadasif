/* eslint-disable no-undef */
"use client";
/* eslint-disable react/prop-types */
import {useState, useRef} from "react";
import {motion} from "framer-motion";
import Link from "next/link";
import {usePathname} from "next/navigation";

import useOnClickOutside from "@/hooks/use-onclick-outside";
import {TSubmenuNavigation} from "@/types/navigation.type";

// eslint-disable-next-line react/prop-types
function Dropdown({
  trigger,
  name,
  link,
  submenu,
  className,
}: {
  trigger?: any;
  name: string;
  link: string;
  submenu: TSubmenuNavigation[];
  className: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useOnClickOutside(ref, () => setIsOpen(false));

  const variants = {
    open: {opacity: 1, scale: 1},
    closed: {opacity: 0, scale: 0.95},
  };

  return (
    <div ref={ref} className="relative inline-block text-left">
      <div>
        <button
          className={`md:w-full py-2 inline-flex md:justify-center rounded-md !z-10 focus:outline-none ${className}`}
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          {trigger}
          <div className="w-full flex items-center justify-between">
            {submenu?.length > 0 ? (
              <p>{name}</p>
            ) : (
              <Link className="w-full text-start" href={link}>
                <p>{name}</p>
              </Link>
            )}
            {submenu?.length > 0 && (
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  fillRule="evenodd"
                />
              </svg>
            )}
          </div>
        </button>
      </div>

      {isOpen && (
        <motion.div
          animate="open"
          className={`space-y-1 flex-col block z-50 origin-top-right absolute left-0 paragraph rounded-md shadow-xl !bg-white ${submenu?.length > 0 ? "border-2 border-dark" : ""}`}
          initial="closed"
          transition={{duration: 0.2}}
          variants={variants}
        >
          {submenu?.map((data: TSubmenuNavigation) => {
            const selectedSubmenu = data?.url === pathname ? "bg-secondary text-white" : "bg-white";

            return (
              <Link
                key={data?._id}
                className="text-sm block w-full"
                href={data?.url}
                role="menuitem"
                onClick={() => setIsOpen(!isOpen)}
              >
                <p
                  className={`${selectedSubmenu} hover:!bg-secondary hover:text-white duration-200 px-2 py-1.5 rounded`}
                >
                  {data?.name}
                </p>
              </Link>
            );
          })}
        </motion.div>
      )}
    </div>
  );
}

export default Dropdown;
