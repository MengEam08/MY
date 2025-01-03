import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const ResponsiveMenu = ({ open }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{opacity: 1, y:-100}}
          transition={{ duration: 0.2 }}
          className="absolute top-10 left-0 w-full h-screen z-20"
        >
          <div className="text-l font-semibold uppercase bg-primary text-white py-10 m-6 rounded-2xl">
            <ul className="flex flex-col items-center gap-5">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default ResponsiveMenu;
