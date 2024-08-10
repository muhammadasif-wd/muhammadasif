import React from "react";

import {ITextStrokeProps} from "@/interfaces/text-stroke.interface";

const TextStroke: React.FC<ITextStrokeProps> = ({
  text,
  strokeColor,
  strokeWidth,
  textColor = "transparent",
  className = "",
}) => {
  const style = {
    WebkitTextStroke: `${strokeWidth} ${strokeColor}`,
    color: textColor,
    textShadow: `
      -1px -1px 0 ${strokeColor},
      1px -1px 0 ${strokeColor},
      -1px 1px 0 ${strokeColor},
      1px 1px 0 ${strokeColor}`,
  };

  return (
    <span className={className} style={style}>
      {text}
    </span>
  );
};

export default TextStroke;
/*
    <h1 className="text-4xl">
      Hello I’am <TextStroke text="Muhammad Asif." strokeColor="#FF0000" strokeWidth="2px" textColor="#FFFFFF" />
    </h1>
*/
