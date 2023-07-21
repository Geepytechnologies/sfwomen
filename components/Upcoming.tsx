import React from "react";
import Card from "./Card";

type Props = {};

const Upcoming = (props: Props) => {
  return (
    <div className="">
      <div className="flex bg-[url('/worship.jpg')] relative min-h-[300px] bg-cover bg-center items-center flex-col py-6">
        <div className="absolute top-0 w-full h-full bg-[#3a0103] opacity-50"></div>
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
              Upcoming Events
            </h1>
          </div>
        </div>
      </div>
      <div className="-translate-y-[80px] flex justify-center pl-4">
        <Card />
      </div>
    </div>
  );
};

export default Upcoming;
