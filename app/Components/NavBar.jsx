"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const NavBar = () => {

  // useState isliye use kiya  q k is ki value change hone sy component re-render hota hai.
  // Jab value change hogi (true/false) to React Navbar ko re-render karega
  // jis say  CSS classes (true/false) condition k mutabik apply ho jayengi.
  const [isScroll, setisScroll] = useState(false);

  // isDarkMode state — jab yeh change hoga, component re-render hoga
  // aur sun/moon icon swap ho jayega
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Dark mode toggle function
  // Why document.documentElement? — yeh <html> element ko refer karta hai
  // classList.toggle('dark') — "dark" class add/remove karta hai <html> sy
  // localStorage — browser mein save karta hai taake refresh k baad bhi yaad rahe
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };


  // useRef isliye use kiya taake mobile menu ko direct DOM sy access kar sakain.
  // Is ki value change hone sy component re-render nahi hota.
  // btw same sidemenu ko ham usestate sy bhi kar sakty hain.
  const sidemenu = useRef();

  const menuOpen = () => {
    sidemenu.current.style.transform = "translateX(-16rem)";
  };

  const closeMune = () => {
    sidemenu.current.style.transform = "translateX(16rem)";
  };

  //useeffect bahir ki dunya say connect krta hai hamy jaise api calls ya pir event listeners add krna.
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setisScroll(true);
      } else {
        setisScroll(false);
      }
    });

    // Page load hone par localStorage sy saved theme check karo
    // Agar user ne pehle dark mode on kiya tha, to wapas dark laga do
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    }
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]1 dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full"></Image>
      </div>

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4  flex justify-between 
      items-center z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""
          }`}>

        <a href="#top">
          <div className="text-2xl sm:text-3xl font-semibold font-Ovo cursor-pointer mr-14 tracking-wide">
            Haider<span className="text-rose-600 dark:text-rose-400">.</span>
          </div>
        </a>

        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 
          ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"}`}>
          <li>
            <a className="font-Ovo" href="#top">
              Home
            </a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#Services">Services</a>
          </li>
          <li>
            <a href="#Work">My Work</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button onClick={toggleDarkMode} className="cursor-pointer">
            <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="Theme Toggle" className="w-6" />
          </button>

          <a
            href="#Contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-grey-500 rounded-full ml-4 font-Ovo dark:border-white/50"
          >
            Message
            <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="" className="w-3" />
          </a>

          <button
            className="block md:hidden ml-3 cursor-pointer"
            onClick={menuOpen}
          >
            <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="" className="w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          ref={sidemenu}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64
                       top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 tranition duration-500 dark:bg-darkHover dark:text-white"
        >
          <div className="absolute top-6 right-6" onClick={closeMune}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
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
            <a href="#Services" onClick={closeMune}>
              Services
            </a>
          </li>
          <li>
            <a href="#Work" onClick={closeMune}>
              My Work
            </a>
          </li>
          <li>
            <a href="#Contact" onClick={closeMune}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
