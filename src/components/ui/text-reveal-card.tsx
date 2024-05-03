/* eslint-disable no-undef */
"use client";
import {motion} from "framer-motion";
import React, {memo, useEffect, useRef, useState} from "react";
import {twMerge} from "tailwind-merge";

import {TypewriterEffectSmooth} from "./typewriter-effect";

import {cn} from "@/utils/cn";

export const TextRevealCard = ({
  text,
  revealText,
  children,
  className,
}: {
  text: string;
  revealText: string;
  children?: React.ReactNode;
  className?: string;
}) => {
  const [widthPercentage, setWidthPercentage] = useState(0);
  const cardRef = useRef<HTMLDivElement | any>(null);
  const [left, setLeft] = useState(0);
  const [localWidth, setLocalWidth] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);

  useEffect(() => {
    if (cardRef.current) {
      const {left, width: localWidth} = cardRef.current.getBoundingClientRect();

      setLeft(left);
      setLocalWidth(localWidth);
    }
  }, []);

  function mouseMoveHandler(event: any) {
    event.preventDefault();

    const {clientX} = event;

    if (cardRef.current) {
      const relativeX = clientX - left;

      setWidthPercentage((relativeX / localWidth) * 100);
    }
  }

  function mouseLeaveHandler() {
    setIsMouseOver(false);
    setWidthPercentage(0);
  }
  function mouseEnterHandler() {
    setIsMouseOver(true);
  }
  function touchMoveHandler(event: React.TouchEvent<HTMLDivElement>) {
    event.preventDefault();
    const clientX = event.touches[0]!.clientX;

    if (cardRef.current) {
      const relativeX = clientX - left;

      setWidthPercentage((relativeX / localWidth) * 100);
    }
  }

  const rotateDeg = (widthPercentage - 50) * 0.1;

  const textTyping = text.split(" ").map((word) => ({text: word}));

  return (
    <div
      ref={cardRef}
      className={cn("relative overflow-hidden", className)}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      onMouseMove={mouseMoveHandler}
      onTouchEnd={mouseLeaveHandler}
      onTouchMove={touchMoveHandler}
      onTouchStart={mouseEnterHandler}
    >
      {children}

      <div className="h-40 rounded-xl bg-dark dark:bg-black relative flex items-center overflow-hidden">
        <motion.div
          animate={
            isMouseOver
              ? {
                  opacity: widthPercentage > 0 ? 1 : 0,
                  clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                }
              : {
                  clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                }
          }
          className="absolute dark:bg-black bg-dark z-20 text-light will-change-transform"
          style={{
            width: "100%",
          }}
          transition={isMouseOver ? {duration: 0} : {duration: 0.4}}
        >
          <p
            className="leading-normal text-xl lg:text:3xl xl:text-4xl 2xl:text-5xl py-10 font-bold text-white bg-clip-text text-transparent bg-gradient-to-b from-white to-light p-2"
            style={{
              textShadow: "4px 4px 15px rgba(0,0,0,0.5)",
            }}
          >
            {revealText}
          </p>
        </motion.div>
        <motion.div
          animate={{
            left: `${widthPercentage}%`,
            rotate: `${rotateDeg}deg`,
            opacity: widthPercentage > 0 ? 1 : 0,
          }}
          className="h-40 w-[8px] bg-gradient-to-b from-transparent via-neutral-800 to-transparent absolute z-50 will-change-transform"
          transition={isMouseOver ? {duration: 0} : {duration: 0.4}}
        />

        <div className="overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]">
          <div className="leading-normal text-xl lg:text:3xl xl:text-4xl 2xl:text-5xl font-bold py-10 bg-clip-text text-transparent dark:p-0 p-2">
            <TypewriterEffectSmooth words={textTyping ? textTyping : []} />
          </div>
          <MemoizedStars />
        </div>
      </div>
    </div>
  );
};

export const TextRevealCardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <h2 className={twMerge("text-white text-lg mb-2", className)}>{children}</h2>;
};

export const TextRevealCardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <p className={twMerge("text-white text-sm", className)}>{children}</p>;
};

const Stars = () => {
  const randomMove = () => Math.random() * 4 - 2;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();

  return (
    <div className="absolute inset-0">
      {[...Array(140)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          className="inline-block"
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            backgroundColor: "white",
            borderRadius: "50%",
            zIndex: 1,
          }}
          transition={{
            duration: random() * 10 + 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export const MemoizedStars = memo(Stars);
