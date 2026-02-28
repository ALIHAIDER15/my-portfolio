import { serviceData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const Services = () => {
  return (
    <>
      <div id='Services' className="w-full px-[12%] py-10 scroll-mt-20 mt-20">
        <h4 className="text-center mb-2 text-lg font-Ovo">What I Offer</h4>
        <h2 className="text-center text-5xl font-Ovo">My Services </h2>
      

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        I offer a range of services to help you build and maintain your web presence. From custom web development to responsive design, I ensure that your website not only looks great but also functions seamlessly across all devices. Whether you need a simple landing page or a complex web application, I am here to bring your vision to life with quality and efficiency.
         </p>
         
        <div className='grid grid-cols-4 gap-6 my-10'>
        {serviceData.map(({icon,title,description,link}, index) => (
            <div key={index} 
            className="border border-gray-400 rounded-lg  px-8 py-12 
             cursor-pointer hover:bg-[#fcf4ff] hover:translate-y-1 duration-500 shadow-[4px_4px_#000]">
        <Image src={icon} alt='' className="w-10" />
                <h3 className="text-lg my-4text-gray-700">{title}</h3>
                <p className="text-gray-600 text-sm leading-5">{description}</p>
                <a href={link} className="text-blue-500 hover:underline mt-2 block">Learn More</a>
                </div>
            ))}
        </div>
     </div>
    </>
  );
};

export default Services;
