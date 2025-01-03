import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLeaf } from "react-icons/fa";
import { motion } from "framer-motion";
import { section } from "framer-motion/client";

export const Footer = () => {
  return (
    <footer className="bg-primary/10 py-12">
      <div className="container flex justify-between items-center">
        {/* logo section */}
        <div className="text-2xl flex items-center gap-2 font-bold uppercase">
          <p className="text-primary">Fruit</p>
          <p className="text-secondary">Store</p>
          <FaLeaf className="text-green-500" />
        </div>
        {/* social media section */}
        <div className="text-3xl flex items-center gap-5 mt-6 text-gra">
        <FaInstagram />
        <FaFacebook />
        <FaTwitter />
        </div>
      </div>
    </footer>
  );
};
