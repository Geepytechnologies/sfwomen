import React from "react";
import { BsChevronDoubleRight } from "react-icons/bs";

type Props = {};

const Mission = (props: Props) => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-9 p-5 my-[40px] items-center justify-center">
      <div className="relative bg-[url('/slider4.jpg')] bg-cover bg-center min-w-[400px] min-h-[400px] rounded-[20px]">
        <div className="absolute top-0 w-full h-full rounded-[20px] bg-[#3a0103] opacity-20"></div>
        <div className="absolute top-0 h-full w-full rounded-[20px] bg-[rgba(0,0,0,0.2)]"></div>{" "}
      </div>
      <div className="font-mont">
        <p className="text-[#4d0a7b] text-[20px] font-[500]">Mission</p>
        <p className="text-black font-[700] text-[32px]">SpiritFilledWomen</p>
        <p className="text-gray-600">
          The mission of the SpiritFilledWomen is to create a supportive and
          transformative community within the church, dedicated to equipping and
          empowering women to embrace and follow the leading of the Holy Spirit.
          We strive to cultivate a deep and intimate relationship with God,
          empowering women to discover and embrace their unique spiritual gifts
          and talents. Through nurturing an atmosphere of love, encouragement,
          and accountability, we seek to empower women to become bold leaders,
          influencing their families, churches, and communities with a
          Spirit-led purpose and positive impact.
        </p>
        <button className="text-white bg-primary font-[500] px-4 py-3 mt-3 hover:translate-y-3 transition-all duration-500 ease-in-out flex items-center justify-center gap-2">
          <span>Read More</span>
          <BsChevronDoubleRight className="animate-pulse" />
        </button>
      </div>
    </div>
  );
};

export default Mission;
