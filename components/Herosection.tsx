import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Props = {};

const Herosection = (props: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slide1, setSlide1] = useState(false);
  const [slide2, setSlide2] = useState(false);
  const [slide3, setSlide3] = useState(false);
  const [slide4, setSlide4] = useState(false);
  const [slide5, setSlide5] = useState(false);
  const [slide6, setSlide6] = useState(false);
  const swiperRef = useRef(null);

  const handleImageLoad = (slide: Number) => {
    switch (slide) {
      case 1:
        setSlide1(true);
        break;
      case 2:
        setSlide2(true);
        break;
      case 3:
        setSlide3(true);
        break;
      case 4:
        setSlide4(true);
        break;
      case 5:
        setSlide5(true);
        break;
      case 6:
        setSlide6(true);
        break;
      default:
    }
  };

  return (
    <Swiper
      effect={"fade"}
      ref={swiperRef}
      centeredSlides={true}
      spaceBetween={30}
      navigation={false}
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
            <Image
              fill
              src={"/slider1.jpg"}
              alt="sliderImage"
              className="object-cover object-center"
              priority
              onLoad={() => handleImageLoad(1)}
            />
            {slide1 && (
              <>
                <div className="absolute top-0 w-full h-full bg-[#3a0103] opacity-30"></div>
                <div className="absolute top-0 h-full w-full bg-[rgba(0,0,0,0.2]"></div>{" "}
                <div className="absolute top-0 w-full h-full flex flex-col items-center justify-center">
                  <div className="bg-white shadow-xl flex items-center justify-center rounded-full w-[60px] h-[60px]">
                    <Image
                      alt="logo"
                      src={"/3d.png"}
                      width={50}
                      height={50}
                      className={`${
                        isActive &&
                        "transition-transform ease-in-out duration-500 rotate-[360deg]"
                      } `}
                    />
                  </div>
                  <motion.p
                    whileInView={isActive ? "show" : "hide"}
                    transition={{ duration: 1.2 }}
                    variants={{
                      show: { x: 0 },
                      hide: { x: -20 },
                    }}
                    className="lg:text-[86px] md:text-[50px] text-[30px] word-wrap md:text-start text-center font-mont font-[600]"
                  >
                    Spirit Filled Women
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
              </>
            )}
          </div>
        )}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => (
          <div className="relative h-[400px] text-white md:h-[500px] w-full">
            <Image
              fill
              src={"/slider2.jpg"}
              alt="sliderImage"
              className="object-cover object-center"
              priority
              onLoad={() => handleImageLoad(2)}
            />
            {slide2 && (
              <>
                <div className="absolute top-0 w-full h-full bg-[#3a0103] opacity-30"></div>
                <div className="absolute top-0 h-full w-full bg-[rgba(0,0,0,0.2)]"></div>{" "}
                <div className="absolute top-0 w-full h-full flex flex-col items-center justify-center">
                  <div className="bg-white shadow-xl flex items-center justify-center rounded-full w-[60px] h-[60px]">
                    <Image
                      alt="logo"
                      src={"/3d.png"}
                      width={50}
                      height={50}
                      className={`${
                        isActive &&
                        "transition-transform ease-in-out duration-500 rotate-[360deg]"
                      } `}
                    />
                  </div>
                  <motion.p
                    whileInView={isActive ? "show" : "hide"}
                    transition={{ duration: 1.2 }}
                    variants={{
                      show: { x: 0 },
                      hide: { x: -20 },
                    }}
                    className="lg:text-[86px] md:text-[50px] text-[30px] word-wrap md:text-start text-center font-mont font-[600]"
                  >
                    Spirit Filled Women
                  </motion.p>
                  <motion.p
                    whileInView={isActive ? "show2" : "hide2"}
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
              </>
            )}
          </div>
        )}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => (
          <div className="relative h-[400px] text-white md:h-[500px] w-full">
            <Image
              fill
              src={"/sfwomen.jpg"}
              alt="sliderImage"
              className="object-cover object-center"
              priority
              onLoad={() => handleImageLoad(3)}
            />
            {slide3 && (
              <>
                <div className="absolute top-0 w-full h-full bg-[#3a0103] opacity-30"></div>
                <div className="absolute top-0 h-full w-full bg-[rgba(0,0,0,0.2)]"></div>{" "}
                <div className="absolute top-0 w-full h-full flex flex-col items-center justify-center">
                  <div className="bg-white shadow-xl flex items-center justify-center rounded-full w-[60px] h-[60px]">
                    <Image
                      alt="logo"
                      src={"/3d.png"}
                      width={50}
                      height={50}
                      className={`${
                        isActive &&
                        "transition-transform ease-in-out duration-500 rotate-[360deg]"
                      } `}
                    />
                  </div>
                  <motion.p
                    animate={isActive ? "show" : "hide"}
                    transition={{ duration: 1.2 }}
                    variants={{
                      show: { x: 0 },
                      hide: { x: -20 },
                    }}
                    className="lg:text-[86px] md:text-[50px] text-[30px] word-wrap md:text-start text-center font-mont font-[600]"
                  >
                    Spirit Filled Women
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
              </>
            )}
          </div>
        )}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => (
          <div className="relative h-[400px] text-white md:h-[500px] w-full">
            <Image
              fill
              src={"/slider3.jpg"}
              alt="sliderImage"
              className="object-cover object-center"
              priority
              onLoad={() => handleImageLoad(4)}
            />
            {slide4 && (
              <>
                <div className="absolute top-0 w-full h-full bg-[#3a0103] opacity-30"></div>
                <div className="absolute top-0 h-full w-full bg-[rgba(0,0,0,0.2)]"></div>{" "}
                <div className="absolute top-0 w-full h-full flex flex-col items-center justify-center">
                  <div className="bg-white shadow-xl flex items-center justify-center rounded-full w-[60px] h-[60px]">
                    <Image
                      alt="logo"
                      src={"/3d.png"}
                      width={50}
                      height={50}
                      className={`${
                        isActive &&
                        "transition-transform ease-in-out duration-500 rotate-[360deg]"
                      } `}
                    />
                  </div>
                  <motion.p
                    animate={isActive ? "show" : "hide"}
                    transition={{ duration: 1.2 }}
                    variants={{
                      show: { x: 0 },
                      hide: { x: -20 },
                    }}
                    className="lg:text-[86px] md:text-[50px] text-[30px] word-wrap md:text-start text-center font-mont font-[600]"
                  >
                    Spirit Filled Women
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
              </>
            )}
          </div>
        )}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => (
          <div className="relative h-[400px] text-white md:h-[500px] w-full">
            <Image
              fill
              src={"/slider4.jpg"}
              alt="sliderImage"
              className="object-cover object-center"
              priority
              onLoad={() => handleImageLoad(5)}
            />
            {slide5 && (
              <>
                <div className="absolute top-0 w-full h-full bg-[#3a0103] opacity-30"></div>
                <div className="absolute top-0 h-full w-full bg-[rgba(0,0,0,0.2)]"></div>{" "}
                <div className="absolute top-0 w-full h-full flex flex-col items-center justify-center">
                  <div className="bg-white shadow-xl flex items-center justify-center rounded-full w-[60px] h-[60px]">
                    <Image
                      alt="logo"
                      src={"/3d.png"}
                      width={50}
                      height={50}
                      className={`${
                        isActive &&
                        "transition-transform ease-in-out duration-500 rotate-[360deg]"
                      } `}
                    />
                  </div>
                  <motion.p
                    animate={isActive ? "show" : "hide"}
                    transition={{ duration: 1.2 }}
                    variants={{
                      show: { x: 0 },
                      hide: { x: -20 },
                    }}
                    className="lg:text-[86px] md:text-[50px] text-[30px] word-wrap md:text-start text-center font-mont font-[600]"
                  >
                    Spirit Filled Women
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
              </>
            )}
          </div>
        )}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => (
          <div className="relative h-[400px] text-white md:h-[500px] w-full">
            <Image
              fill
              src={"/slider5.jpg"}
              alt="sliderImage"
              className="object-cover object-center"
              priority
              onLoad={() => handleImageLoad(6)}
            />
            {slide6 && (
              <>
                <div className="absolute top-0 w-full h-full bg-[#3a0103] opacity-30"></div>
                <div className="absolute top-0 h-full w-full bg-[rgba(0,0,0,0.2)]"></div>{" "}
                <div className="absolute top-0 w-full h-full flex flex-col items-center justify-center">
                  <div className="bg-white shadow-xl flex items-center justify-center rounded-full w-[60px] h-[60px]">
                    <Image
                      alt="logo"
                      src={"/3d.png"}
                      width={50}
                      height={50}
                      className={`${
                        isActive &&
                        "transition-transform ease-in-out duration-500 rotate-[360deg]"
                      } `}
                    />
                  </div>
                  <motion.p
                    animate={isActive ? "show" : "hide"}
                    transition={{ duration: 1.2 }}
                    variants={{
                      show: { x: 0 },
                      hide: { x: -20 },
                    }}
                    className="lg:text-[86px] md:text-[50px] text-[30px] word-wrap md:text-start text-center font-mont font-[600]"
                  >
                    Spirit Filled Women
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
              </>
            )}
          </div>
        )}
      </SwiperSlide>
    </Swiper>
  );
};

export default Herosection;
