"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const NavBar = () => {
  const [isScroll, setisScroll] = useState(false);
  // Function to handle the mobile menu toggle  const toggleMobileMenu = () => {
  const sidemenu = useRef();

  const menuOpen = () => {
    sidemenu.current.style.transform = "translateX(-16rem)";
  };

  const closeMune = () => {
    sidemenu.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setisScroll(true);
      } else {
        setisScroll(false);
      }
    });
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt="" className="w-full"></Image>
      </div>

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4  flex justify-between 
      items-center z-50 ${
        isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""
      }`}>
      
        <a href="#top">
          <Image
            src={assets.logo}
            alt="Logo"
            width={112} // adjust as needed
            height={40} // adjust as needed
            className="w-28 cursor-pointer mr-14"
          />
        </a>

        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 
          ${isScroll ? "" : "bg-white shadow-sm  bg-opacity-50"}`}>
          <li>
            <a className="font-Ovo" href="#top">
              Home
            </a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Services</a>
          </li>
          <li>
            <a href="#projects">My Work</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button>
            <Image src={assets.moon_icon} alt="" className="w-6" />
          </button>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-grey-500 rounded-full ml-4 font-Ovo"
          >
            Contact
            <Image src={assets.arrow_icon} alt="" className="w-3" />
          </a>

          <button
            className="block md:hidden ml-3 cursor-pointer"
            onClick={menuOpen}
          >
            <Image src={assets.menu_black} alt="" className="w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          ref={sidemenu}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64
                       top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 tranition duration-500"
        >
          <div className="absolute top-6 right-6" onClick={closeMune}>
            <Image
              src={assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            />
          </div>

          <li>
            <a className="font-Ovo" onClick={closeMune} href="#top">
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMune}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" onClick={closeMune}>
              Services
            </a>
          </li>
          <li>
            <a href="#projects" onClick={closeMune}>
              My Work
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMune}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
