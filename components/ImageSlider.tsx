import React from "react";

type Props = {};

const ImageSlider = (props: Props) => {
  return (
    <div className="flex gap-4 flex-col md:flex-row md:-rotate-12 overflow-clip">
      {/* slide1 */}
      <div className="flex flex-row md:flex-col slidemdleft gap-4">
        {/* 1 */}
        <div className="md:w-[150px] md:h-[200px] h-[150px] w-[200px] relative rounded-[18px] border-2 border-white bg-[url('/slider1.jpg')] bg-cover bg-center">
          <div className="absolute top-0 w-full rounded-[18px] h-full bg-brown opacity-50"></div>
          <div className="absolute top-0 h-full rounded-[18px] w-full bg-[rgba(0,0,0,0.1)]"></div>
        </div>
        {/* 2 */}
        <div className="md:w-[150px] md:h-[200px] h-[150px] w-[200px] relative rounded-[18px] border-2 border-white bg-[url('/slider2.jpg')] bg-cover bg-center">
          <div className="absolute top-0 w-full rounded-[18px] h-full bg-[#3a0103] opacity-50"></div>
          <div className="absolute top-0 h-full rounded-[18px] w-full bg-[rgba(0,0,0,0.1)]"></div>
        </div>
        {/* 3 */}
        <div className="md:w-[150px] md:h-[200px] h-[150px] w-[200px]  relative rounded-[18px] border-2 border-white bg-[url('/slider3.jpg')] bg-cover bg-center">
          <div className="absolute top-0 w-full rounded-[18px] h-full bg-[#3a0103] opacity-50"></div>
          <div className="absolute top-0 h-full rounded-[18px] w-full bg-[rgba(0,0,0,0.1)]"></div>
        </div>
      </div>
      {/* slide2 */}
      <div className="flex flex-row md:flex-col slidemdleft -translate-y-12 gap-4">
        <div className="md:w-[150px] md:h-[200px] h-[150px] w-[200px]  rounded-[18px] border-2 border-white bg-[url('/slider4.jpg')] bg-cover bg-center"></div>
        <div className="md:w-[150px] md:h-[200px] h-[150px] w-[200px]  rounded-[18px] border-2 border-white bg-[url('/slider5.jpg')] bg-cover bg-center"></div>
        <div className="md:w-[150px] md:h-[200px] h-[150px] w-[200px]  rounded-[18px] border-2 border-white bg-[url('/slider6.jpg')] bg-cover bg-center"></div>
      </div>
      {/* slide3 */}
      <div className="flex flex-row md:flex-col slidemdleft gap-4">
        <div className="md:w-[150px] md:h-[200px] h-[150px] w-[200px] rounded-[18px] border-2 border-white bg-[url('/slider7.jpg')] bg-cover bg-center"></div>
        <div className="md:w-[150px] md:h-[200px] h-[150px] w-[200px]  rounded-[18px] border-2 border-white bg-[url('/slider8.jpg')] bg-cover bg-center"></div>
        <div className="w-[150px] h-[200px] rounded-[18px] border-2 border-white bg-[url('/slider9.jpg')] bg-cover bg-center"></div>
      </div>
    </div>
  );
};

export default ImageSlider;
