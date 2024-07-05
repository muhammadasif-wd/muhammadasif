import React, {useEffect, useState} from "react";
import {motion} from "framer-motion";

import {IAnimatedNumber} from "@/interfaces/animated-number.interface";

const AnimatedNumber: React.FC<IAnimatedNumber> = ({finalNumber, duration = 5}) => {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    const increment = finalNumber / ((duration * 1000) / 60);
    const interval = setInterval(() => {
      setCurrentNumber((prevNumber) => {
        if (prevNumber < finalNumber) {
          return prevNumber + increment;
        }
        clearInterval(interval);

        return finalNumber;
      });
    }, 16.67);

    return () => clearInterval(interval);
  }, [finalNumber, duration]);

  return (
    <motion.div animate={{opacity: 1}} className="text-4xl font-bold" initial={{opacity: 0}}>
      {Math.round(currentNumber)}
    </motion.div>
  );
};

export default AnimatedNumber;
