import React from "react";
import {motion } from "framer-motion";
import Avocado from "../../assets/shoes1.png";
import Graps from "../../assets/t2.png";
import Oranges from "../../assets/t3.png";
import Straber from "../../assets/sh1.jpg";
import { FadeLeft } from "../../utility/animation";

const MenuData = [
  {
    id: 1,
    title: "Brown-Snekers",
    link: "/",
    price: "40.00$",
    img: Avocado,
    delay: 0.3,
  },
  {
    id: 2,
    title: "Chairs",
    link: "/",
    price: "200.00$",
    img: Graps,
    delay: 0.6,
  },
  {
    id: 3,
    title: "Lamps",
    link: "/",
    price: "67.50$",
    img: Oranges,
    delay: 0.9,
  },
  {
    id: 4,
    title: "Shirts",
    link: "/",
    price: "20.50$",
    img: Straber,
    delay: 1.2,
  },
];

export const Menus = () => {
  return (
    <section>
      <div className="container pt-12 pb-20">
        <motion.h1 
        initial={{opacity: 0, x:-200}}
        whileInView={{opacity: 0, x:0}}
        transition={{duration:1, delay:0.3}}
        className="text-2xl font-semibold text-left pb-10 uppercase">
          Our Menu
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {MenuData.map((menu) => (
            <motion.div
              variants={FadeLeft(menu.delay)}
              initial="hidden"
              whileInView={"visible"}
              whileHover={{scales:1}}
              className="bg-white rounded-3xl px-4 py-2 shadow-[0_0_22px_0_rgba(0,0,0,0.15)] flex flex-row justify-around items-center gap-3"
            >
              <img
                src={menu.img}
                alt={menu.title}
                className="w-[60px] mb-4 scale-110 transform traslate-y-6"
              />
              <div>
                <h1 className="text-lg font-semibold">{menu.title}</h1>
                <p className="text-lg font-semibold text-secondary">{menu.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menus;
