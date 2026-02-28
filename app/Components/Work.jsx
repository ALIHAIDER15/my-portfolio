import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Work = () => {
  return (
    <div id="Work" className="w-full px-[12%] py-10 scroll-mt-20 mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">My Portfolio</h4>
      <h2 className="text-center text-5xl font-Ovo">My Latest Work </h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        welcome to my portfolio! Here, you can explore a selection of my recent
        projects that showcase my skills and creativity. Each project reflects
        my dedication to delivering high-quality work and my passion for web
        development. Feel free to browse through the projects, and if you have
        any questions or would like to collaborate, don't hesitate to reach out!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 my-10">
        {workData.map((project, index) => (
          <div
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center p-6 rounded-lg 
                 relative cursor-pointer group"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div
              className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 
                   -translate-x-1/2 py-3 px-5 flex items-center justify-between 
                   duration-300 group-hover:bottom-7"
            >
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-600">{project.description}</p>
              </div>
              <div
                className="border  rounded-full border-black w-9 aspect-square
        flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300
        transition"
              >
                <Image src={assets.send_icon} alt="Send Icon" className="w-5" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <a
        href=""
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 
  rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500"
      >
        Show more{" "}
        <Image
          src={assets.right_arrow_bold}
          alt="Right Arrow"
          className="w-5"
        />
      </a>
    </div>
  );
};

export default Work;
