import React from "react";
import { BsFillMicFill } from "react-icons/bs";

type Props = {};

const Sermons = (props: Props) => {
  return (
    <div className="flex flex-col bg-[url('/word.png')] min-h-[250px] flex items-center justify-center gap-4 bg-cover bg-center">
      <div className="flex items-center gap-3">
        <div className="w-[100px] h-[1px] bg-[#E91E62]"></div>
        <div className="tracking-[8px] text-[12px] uppercase text-white font-open">
          Sermons
        </div>
        <div className="w-[100px] h-[1px] bg-[#E91E62]"></div>
      </div>
      <div className="flex items-center">
        <h1 className="font-lora text-white font-[600] text-center text-[20px]">
          Experience God&apos;s word
        </h1>
      </div>
      <div>
        <div className="border h-9 w-9 flex items-center justify-center rounded-full border-[rgba(255,255,255,0.3)] text-white p-[7px] ease-in-out duration-150 transition-[border-color] hover:border-[rgba(255,255,255,0.9)] ">
          <BsFillMicFill />
        </div>
      </div>
      <div className="text-white font-mont">Listen to Sermons</div>
      <div className="bg-primary text-white py-2 px-3 rounded-lg text-center font-[500] w-[200px]">
        View Playlist
      </div>
    </div>
  );
};

export default Sermons;
