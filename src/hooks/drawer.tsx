import React from "react";
import {motion} from "framer-motion";

interface DrawerProps {
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
  children: React.ReactNode;
}

const Drawer: React.FC<DrawerProps> = ({isDrawerOpen, toggleDrawer, children}) => {
  if (!isDrawerOpen) return null;

  return (
    <>
      <motion.div
        animate={{x: 0}}
        className="fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg z-50 lg:hidden"
        exit={{x: "100%"}}
        initial={{x: "100%"}}
        transition={{type: "spring", stiffness: 300, damping: 30, mass: 1}}
      >
        {children}
      </motion.div>
      <motion.div
        animate={{opacity: 1}}
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        exit={{opacity: 0}}
        initial={{opacity: 0}}
        transition={{duration: 0.5, ease: "easeInOut"}}
        onClick={toggleDrawer}
      />
    </>
  );
};

export default Drawer;
