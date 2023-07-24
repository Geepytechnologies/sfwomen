import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Props = {};

const Herosection = (props: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <Swiper
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      modules={[EffectFade, Autoplay, Pagination, Navigation]}
      {...(props as any)}
      className="mySwiper"
    >
      <SwiperSlide>
        {({ isActive }) => (
          <div className="relative h-[400px] text-white md:h-[500px] w-full">
            <motion.img
              src="/sfwomen.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="absolute top-0 w-full h-full bg-[#3a0103] opacity-50"></div>
            <div className="absolute top-0 h-full w-full bg-[rgba(0,0,0,0.2)]"></div>{" "}
            <div className="absolute top-0 w-full h-full flex flex-col items-center justify-center">
              <motion.p
                animate={isActive ? "show" : "hide"}
                transition={{ duration: 1.2 }}
                variants={{
                  show: { x: 0 },
                  hide: { x: -400 },
                }}
                className="lg:text-[96px] md:text-[60px] text-[30px] word-wrap md:text-start text-center font-mont font-[600]"
              >
                Spirit filled women
              </motion.p>
              <motion.p
                animate={isActive ? "show2" : "hide2"}
                transition={{ duration: 1.2 }}
                variants={{
                  show2: { opacity: 1, y: 0 },
                  hide2: { opacity: 0, y: 20 },
                }}
                className="text-white"
              >
                ......Raising the 3Dimensional Women
              </motion.p>
            </div>
          </div>
        )}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => (
          <div className="relative h-[400px] text-white md:h-[500px] w-full">
            <motion.img
              src="/sfwomen.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="absolute top-0 w-full h-full bg-[#3a0103] opacity-50"></div>
            <div className="absolute top-0 h-full w-full bg-[rgba(0,0,0,0.2)]"></div>{" "}
            <div className="absolute top-0 w-full h-full flex flex-col items-center justify-center">
              <motion.p
                animate={isActive ? "show" : "hide"}
                transition={{ duration: 1.2 }}
                variants={{
                  show: { x: 0 },
                  hide: { x: -400 },
                }}
                className="lg:text-[96px] md:text-[60px] text-[30px] word-wrap md:text-start text-center font-mont font-[600]"
              >
                Spirit filled women
              </motion.p>
              <motion.p
                animate={isActive ? "show2" : "hide2"}
                transition={{ duration: 1.2 }}
                variants={{
                  show2: { opacity: 1, y: 0 },
                  hide2: { opacity: 0, y: 20 },
                }}
                className="text-white"
              >
                ......Identifying and Developing Spiritual Gifts
              </motion.p>
            </div>
          </div>
        )}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => (
          <div className="relative h-[400px] text-white md:h-[500px] w-full">
            <motion.img
              src="/sfwomen.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="absolute top-0 w-full h-full bg-[#3a0103] opacity-50"></div>
            <div className="absolute top-0 h-full w-full bg-[rgba(0,0,0,0.2)]"></div>{" "}
            <div className="absolute top-0 w-full h-full flex flex-col items-center justify-center">
              <motion.p
                animate={isActive ? "show" : "hide"}
                transition={{ duration: 1.2 }}
                variants={{
                  show: { x: 0 },
                  hide: { x: -400 },
                }}
                className="lg:text-[96px] md:text-[60px] text-[30px] word-wrap md:text-start text-center font-mont font-[600]"
              >
                Spirit filled women
              </motion.p>
              <motion.p
                animate={isActive ? "show2" : "hide2"}
                transition={{ duration: 1.2 }}
                variants={{
                  show2: { opacity: 1, y: 0 },
                  hide2: { opacity: 0, y: 20 },
                }}
                className="text-white"
              >
                ......Cultivating Transformational Leadership
              </motion.p>
            </div>
          </div>
        )}
      </SwiperSlide>
    </Swiper>
  );
};

export default Herosection;
