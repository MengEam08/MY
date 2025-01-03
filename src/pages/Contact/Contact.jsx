// ContactPage.jsx
import React from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto py-10 px-4 md:px-0"
    >
      <h2 className="text-3xl font-bold text-center text-primary mb-8 mt-10">
        Contact Us
      </h2>
      <p className="text-center text-gray-600 mb-8">
        We would love to hear from you! Please fill out the form below to get in touch.
      </p>
      <form className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Your name"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Your email"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Your message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-primary text-white font-semibold rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Send Message
        </button>
      </form>
    </motion.div>
  );
};

export default ContactPage;
