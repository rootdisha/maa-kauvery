import React  from 'react';
import { motion } from "framer-motion";
import { FaUser, FaPhone } from "react-icons/fa";
import BgImg from "../Images/8682612.jpg"; // check path
import bby from "../assets/Baby.json"
import Lottie from "lottie-react";

import heroBackground from '../Images/angela-duxbury-07HVdZ7fnmQ-unsplash.jpg';
import heroBackgroundVertical from '../Images/charlesdeluvio-nENtqUAiNm8-unsplash.jpg';


export default function HeroSection() {


  return (
    // removed bg-gradient-to-r from-[#9781bc] to-white
    <section className="relative  overflow-hidden">
      {/* subtle overlay pattern */}
      <div
        className="relative h-screen w-full bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Foreground text */}
      <div className="relative z-10 text-center">
          <h1 className="text-9xl font-[hng] leading-tight tracking-wide bg-gradient-to-r from-[#9781bc]/80 via-[#D2A855]/80 to-[#B83A63]/80 bg-clip-text text-transparent">
            Build the Family You Dream Of
          </h1>
          {/* <h2 className='text-purple-100/50 leading-tight tracking-wide'> */}
          <h2 className="text-2xl leading-tight tracking-wide bg-gradient-to-r from-[#9781bc] via-[#D2A855] to-[#B83A63] bg-clip-text text-transparent">
            Care to Cradle, with you always.
          </h2>
          
      </div>
    </div>

     
    </section>
  );
}
