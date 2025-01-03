import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const About = () => {
  return (
    <div className="about flex flex-col md:flex-row items-center bg-white p-8 md:p-16">
      {/* Left Section for Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image width={1000} height={1000}
          src="/MyProfile.png" 
          alt="Summiya Ashraf"
          className="rounded-md h-3/4 w-3/4"
        />
      </div>
      {/* Right Section for Content */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">ABOUT ME</h1>
        <h2 className="text-xl text-purple-600 font-semibold mb-4">Summiya Ashraf - Developer</h2>
        <p className="text-gray-600 mb-6">
        I have crafted this blog website to deliver engaging and insightful content to my audience.
         The platform is built with modern tools like Sanity CMS, ensuring efficient and seamless data management.
          My goal is to provide a dynamic and user-friendly reading experience with content that’s always fresh and up-to-date.
        </p>
    
        </div>
    //   </div>
    
  );
};

export default About;