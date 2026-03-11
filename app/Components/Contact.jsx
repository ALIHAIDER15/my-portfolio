"use client";
import React, { useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion } from "motion/react";

const Contact = () => {

  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "9d11b72d-4e67-42a7-8bbe-0c79635ab962");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setResult("Message sent successfully!");
        event.target.reset();
      } else {
        setResult("Error: " + data.message);
      }
    } catch (error) {
      setResult("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
      // Clear message after 5 seconds
      setTimeout(() => setResult(""), 5000);
    }
  };

  return (
    <div id="Contact" className="w-full px-[12%] py-10 scroll-mt-20 min-h-screen dark:bg-none">
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-2  text-lg font-Ovo">Get in Touch</motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center text-5xl font-Ovo">Contact Me </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        I would love to hear from you! whether you have a project in mind, need a developer, or just want to say hello, feel free to reach out. i'll get back to you as soon as possible.
      </motion.p>

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        onSubmit={onSubmit} className="max-w-2xl mx-auto mb-15">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8">
          <input type="text" placeholder="Enter your name" required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400
              rounded-md bg-white dark:bg-darkHover/30 dark:border-white/50" name="name" />
          <input type="email" placeholder="Enter your email" required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400
              rounded-md bg-white dark:bg-darkHover/30 dark:border-white/50" name="email" />
        </div>
        <textarea rows="6" placeholder="Enter your message" required
          className="w-full p-4 outline-none border-[0.5px] border-gray-400
            rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/50" name="message"></textarea>

        <motion.button
          disabled={isSubmitting}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          type="submit"
          className={`py-3 px-8 w-max flex items-center justify-between gap-2
            bg-black/80 text-white rounded-full mx-auto hover:bg-black
            hover:scale-105 hover:shadow-lg active:scale-95 cursor-pointer
            duration-500 dark:bg-transparent dark:border dark:border-white/50 dark:hover:bg-darkHover
            ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}>
          {isSubmitting ? 'Sending...' : 'Submit now'}
          {!isSubmitting && <Image src={assets.right_arrow_white} alt="Send Icon" className="w-4" />}
        </motion.button>

        <p className={`mt-4 text-center transition-opacity duration-500 ${result ? 'opacity-100' : 'opacity-0'} ${result.includes('Error') || result.includes('wrong') ? 'text-red-500' : 'text-rose-600 dark:text-rose-400'}`}>
          {result}
        </p>
      </motion.form>
    </div>
  )
}

export default Contact;
