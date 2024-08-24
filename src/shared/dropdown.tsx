/* eslint-disable no-undef */
"use client";
import React, {useState, useRef, useEffect, MouseEvent} from "react";
import {motion} from "framer-motion";
import Link from "next/link";
import {usePathname} from "next/navigation";

import {TSubmenuNavigation} from "@/types/navigation.type";

function Dropdown({
  triggerContent,
  label,
  linkUrl,
  submenuItems,
  additionalClassName,
}: {
  triggerContent?: React.ReactNode;
  label: string;
  linkUrl: string;
  submenuItems: TSubmenuNavigation[];
  additionalClassName: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside as unknown as EventListener);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside as unknown as EventListener);
    };
  }, []);

  const animationVariants = {
    open: {opacity: 1, scale: 1},
    closed: {opacity: 0, scale: 0.95},
  };

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      <button
        className={`md:w-full py-2 inline-flex md:justify-center rounded-md !z-10 focus:outline-none ${additionalClassName}`}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {triggerContent}
        <div className="w-full flex items-center justify-between">
          {submenuItems.length > 0 ? (
            <span>{label}</span>
          ) : (
            <Link className="w-full text-start" href={linkUrl}>
              <span>{label}</span>
            </Link>
          )}
          {submenuItems.length > 0 && (
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

      {isOpen && (
        <div className="w-full">
          <motion.div
            animate="open"
            className={`space-y-1 flex-col block z-50 origin-top-right absolute left-0 mt-2 rounded-md shadow-xl bg-white ${submenuItems.length > 0 ? "border-2" : ""}`}
            initial="closed"
            transition={{duration: 0.2}}
            variants={animationVariants}
          >
            {submenuItems.map((item) => {
              const isActive = item.url === pathname ? "bg-primary text-white" : "";

              return (
                <Link
                  key={item._id}
                  className={`rounded-md text-sm block w-full hover:bg-primary hover:text-light text-primary ${isActive}`}
                  href={item.url}
                  role="menuitem"
                  onClick={() => setIsOpen(false)}
                >
                  <p className={`duration-200 px-2 py-1.5 rounded`}>{item.name}</p>
                </Link>
              );
            })}
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
