import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsChevronDoubleRight } from "react-icons/bs";
import { motion } from "framer-motion";

type Props = {};

const Recentevents = (props: Props) => {
  return (
    <div>
      <div className="flex bg-[url('/worship.jpg')] border-b-[3px] border-white shadow-xl  relative min-h-[200px] bg-cover bg-center items-center flex-col py-6">
        <div className="absolute top-0 w-full h-full  bg-black opacity-20"></div>
        <div className="absolute top-0 w-full h-full  bg-secondary opacity-50"></div>
        <div className="absolute top-0 w-full h-full flex items-center justify-center flex-col">
          <div className="flex items-center gap-3">
            <div className="w-[100px] h-[1px] bg-[#E91E62]"></div>
            <div className="tracking-[8px] text-[12px] uppercase text-white font-open">
              Events
            </div>
            <div className="w-[100px] h-[1px] bg-[#E91E62]"></div>
          </div>
          <div className="flex items-center">
            <h1 className="font-lora text-white font-[600] text-center text-[40px]">
              Recent Events
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center -translate-y-[40px]">
        <motion.div
          initial={{ x: -100, y: 20 }}
          transition={{ duration: 0.7 }}
          whileInView={{ x: 1, y: 1 }}
          className=" w-[80%] md:w-[70%] lg:w-[60%] rounded-[20px] shadow-xl bg-white flex-col md:flex-row flex gap-4"
        >
          <div className="relative min-w-[300px] min-h-[300px] md:rounded-bl-[20px] md:rounded-tr-none rounded-tl-[20px] rounded-tr-[20px]">
            <Image
              src={"/alabaster.png"}
              alt="alabaster"
              fill
              sizes="300"
              className=" md:rounded-bl-[20px] md:rounded-tr-none rounded-tl-[20px] rounded-tr-[20px]"
            />
          </div>
          <div className="flex items-center">
            <div className="font-mont py-3 pl-2">
              <p className="text-[#4d0a7b] text-[20px] font-[500]">Theme</p>
              <p className="text-black font-[700] text-[32px]">Alabaster</p>
              <p className="text-gray-600">
                Catch a glimpse of this spiritfilled event. Alabaster (women at
                his feet) simply makes reference to a special kind of a woman.
                Watch the highlights of this event.
              </p>
              <Link href="/events/alabaster">
                <button className="text-white bg-primary font-[500] px-4 py-3 mt-3 hover:translate-y-3 transition-all duration-500 ease-in-out flex items-center justify-center gap-2">
                  <span>Highlights</span>
                  <BsChevronDoubleRight className="animate-pulse" />
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Recentevents;
