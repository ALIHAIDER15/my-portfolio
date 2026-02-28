import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen  flex flex-col justify-center items-center gap-4">
      <div className="mt-50">
        <Image src={assets.profile_img} alt="" className="rounded-full w-32" />
      </div>

      <h3 className="flex  items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hi! I'm Ali
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </h3>

      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        Full Stack Developer Based in Doha Qatar
      </h1>

      <p className="max-w-2xl mx-auto font-ovo">
        I am a Full Stack Developer with a passion for creating dynamic and
        responsive web applications. I specialize in both front-end and back-end
        development, ensuring seamless user experiences and robust
        functionality. My expertise includes HTML, CSS, JavaScript, React,
        Node.js, and various databases. I thrive on solving complex problems and
        continuously learning new technologies to enhance my skills. Let's build
        something amazing together!
      </p>

      <div className="flex flex-col sm:flex-row  items-center gap-4 mt-6">
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
        >
          {" "}
          Contact Me
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </a>

        <a
          href="/sample.pdf"
          download
          className="px-10 py-3 border rounded-full border-grey-500 flex items-center gap-2"
        >
          My Resume
          <Image src={assets.download_icon} alt="" className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;
