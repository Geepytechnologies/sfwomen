import React from "react";
import { motion } from "framer-motion";
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
import { LuFacebook } from "react-icons/lu";
import ImageSlider from "./ImageSlider";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="bg-[url('/womenpraying-min.jpg')] min-h-[400px] w-full md:min-h-[600px] overflow-hidden text-white relative bg-cover flex gap-3">
      <div className="absolute top-0 w-full h-full bg-[#3a0103] opacity-50"></div>
      <div className="absolute top-0 h-full w-full bg-[rgba(0,0,0,0.2)]"></div>
      <div className="absolute top-0 h-full w-full flex flex-col  items-center justify-center gap-6 md:flex-row">
        {/* left */}
        <div className="py-6 order-last md:order-first flex justify-center items-center md:items-start flex-col pl-4">
          {/* <img src="/Highlight_10.svg" className="w-[70px] lg:w-[200px]" /> */}
          <motion.p
            initial={{ y: -10, opacity: 0.5 }}
            transition={{ duration: 1 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:text-[96px] md:text-[60px] text-[30px] word-wrap md:text-start text-center font-mont font-[600]"
          >
            Spirit filled women
          </motion.p>
          <motion.p
            initial={{ x: -200, opacity: 0.5 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            ......Raising the 3Dimensional Women
          </motion.p>
          <div className="flex flex-col mt-8  gap-5 ">
            <div className="flex gap-6">
              <div className="border h-9 w-9 flex items-center justify-center rounded-full border-[rgba(255,255,255,0.3)] p-[7px] ease-in-out duration-150 transition-[border-color] hover:border-[rgba(255,255,255,0.9)] ">
                <AiOutlineYoutube />
              </div>
              <div className="border h-9 w-9 flex items-center justify-center rounded-full border-[rgba(255,255,255,0.3)] p-[7px] ease-in-out duration-150 transition-[border-color] hover:border-[rgba(255,255,255,0.9)] ">
                <AiOutlineInstagram />
              </div>
              <div className="border h-9 w-9 flex items-center justify-center rounded-full border-[rgba(255,255,255,0.3)] p-[7px] ease-in-out duration-150 transition-[border-color] hover:border-[rgba(255,255,255,0.9)] ">
                <LuFacebook />
              </div>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="flex items-center justify-center px-3">
          <img
            src="/shapes.png"
            className="md:w-[250px] md:h-[250px] w-[100px] h-[100px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
