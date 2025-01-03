import React from "react";
import { motion } from "framer-motion";
import Banner1 from "../../assets/p1.png";
import { FadeUp } from "../../utility/animation";

export const Banner = () => {
  return (
    <section className="bg-secondary/10 flex justify-center">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-40 py-14 md:py-24">
        {/* Banner Image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            viewport={{ once: true }}
            src={Banner1}
            alt="Brand Banner"
            className="w-[300px] md:max-w-[400px] h-full object-cover drop-shadow"
          />
        </div>

        {/* Brand Info */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
            <motion.h1
              variants={FadeUp(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl lg:text-6xl font-bold uppercase"
            >
              Brand Info
            </motion.h1>
            <motion.p
              variants={FadeUp(0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nulla
              accusantium natus reprehenderit, iure qui magnam eligendi rerum id
              vel nisi laboriosam expedita voluptates dolorum perferendis!
              Asperiores accusantium ab possimus?
            </motion.p>
            <motion.p
              variants={FadeUp(0.9)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
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
      </div>
    </section>
  );
};

export default Banner;
