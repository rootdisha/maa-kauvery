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
    <section className="relative bg-gradient-to-r from-[#9781bc] to-white overflow-hidden">
      {/* <Lottie animationData={bby} className="w-150 absolute"/> */}
      {/* subtle overlay pattern */}
      <div
        className="relative h-screen w-full bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${heroBackground})`,
        }}
      >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Foreground text */}
      <div className="relative z-10 text-center">
        
        <h1 className="text-9xl font-[hng] text-purple-100/50 leading-tight tracking-wide">
            Build the Family You Dream Of
          </h1>
          
      </div>
    </div>

     
    </section>
  );
}
