import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

// Footer mein isDarkMode state nahi hai, toh hum CSS-based icon switching use karenge
// dark:hidden aur hidden dark:block se icons swap honge bina JavaScript ke

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <div className="text-3xl sm:text-4xl font-semibold font-Ovo mb-4 tracking-wide text-center">
          Haider<span className="text-rose-600 dark:text-rose-400">.</span>
        </div>
      </div>
      <div className="w-max flex items-center gap-2 mx-auto">
        <Image src={assets.mail_icon} alt="Mail Icon" className="w-6 dark:hidden" />
        <Image src={assets.mail_icon_dark} alt="Mail Icon" className="w-6 hidden dark:block" />
        AliHaiderwm15@gmail.com
      </div>

      <div className="text-center sm:flex items-center justify-between border-t
        border-gray-400 mx-[10%] mt-12 py-6 dark:border-white/50">
        <p>© 2026 Ali Haider. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li><a target="_blank" href="https://github.com/ALIHAIDER15">GitHub</a></li>
          <li><a target="_blank" href="https://www.linkedin.com/in/alihiader/">LinkedIn</a></li>
          <li><a target="_blank" href="https://twitter.com/">Twitter</a></li>
        </ul>
      </div>
    </div>


  );
};

export default Footer;