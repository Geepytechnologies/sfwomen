import React from "react";
import { FaLocationDot } from "react-icons/fa6";

type Props = {};

const Card = (props: Props) => {
  return (
    <div className="flex items-center">
      <div className="max-h-[400px] max-w-[400px] rounded-tl-md bg-[white] relative shadow-lg flex items-center justify-center">
        <img
          src="/shapes.png"
          className="w-[70px] grayscale opacity-10 absolute left-3 top-3"
        />
        <img
          src="/shapes.png"
          className="w-[70px] grayscale opacity-10 absolute right-3 top-3"
        />
        <img
          src="/shapes.png"
          className="w-[70px] grayscale opacity-10  absolute bottom-1 left-3"
        />
        <img
          src="/shapes.png"
          className="w-[70px] grayscale opacity-10  absolute bottom-1 right-3"
        />
        <img src="/alabaster.png" className="z-20" />
      </div>
      <div className="max-h-[450px] max-w-[250px] bg-white rounded-t-md p-2 shadow-lg flex flex-col items-center justify-center">
        <img src="/calendar.svg" />
        <div className="flex flex-col gap-7 p-2">
          <p className="font-lora text-[25px] font-[500]">
            Save your seat for Alabaster
          </p>
          <p className="font-mont text-gray-700">
            Fill out the invitation form to save yourself a seat.
          </p>
          <div className="bg-[#E91E62] py-2 px-3 text-white text-center rounded-lg shadow-md font-[500] font-mont">
            Invitation Form
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
