import { section } from "framer-motion/client";
import React from "react";
import Banner1 from "../../assets/p2.png";
import { motion } from "framer-motion";
import { FadeLeft, FadeUp } from "../../utility/animation";

export const Banner2 = () => {
  return (
    <section className=" flex flex-row justify-center">
      {/* banner img */}
      <div className="comtainer grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 md:py-24 gap-40">
        {/* brand info */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
            <motion.h1
              variants={FadeUp(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ one: true }}
              className="text-3xl lg:text-6xl font-bold uppercase"
            >
              Brand Info
            </motion.h1>
            <motion.p
              variants={FadeUp(0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ one: true }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              nulla accusantium natus reprehenderit, iure qui magnam eligendi
              rerum id vel nisi laboriosam expedita voluptates dolorum
              perferendis! Asperiores accusantium ab possimus?
            </motion.p>
            <motion.p
              variants={FadeUp(0.9)}
              initial="hidden"
              whileInView="visible"
              viewport={{ one: true }}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius ut,
              dolor ratione quo nesciunt officia?
            </motion.p>
            <motion.div
              variants={FadeUp(1.1)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn"> Learn more</button>
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            viewport={{ one: true }}
            src={Banner1}
            alt=""
            className="w-[300px] md:max-w[400px] h-full object-cover drop-shadow"
          />
        </div>
      </div>
    </section>
  );
};
