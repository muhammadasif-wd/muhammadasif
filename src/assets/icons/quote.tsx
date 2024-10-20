import React from "react";

import {IIconProps} from "@/interfaces/icon-props.interface";

export function IconQuote(props: IIconProps) {
  return (
    <svg
      height="1em"
      viewBox="0 0 448 512"
      width="0.88em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8h-64c-35.3 0-64-28.7-64-64v-64c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64zm-256 0c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64v-64c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64z"
        fill="currentColor"
      />
    </svg>
  );
}