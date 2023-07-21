import React from "react";

type Props = {};

const StayConnected = (props: Props) => {
  return (
    <div className=" flex items-center justify-center">
      <div className="w-[80%] py-9 flex flex-col gap-4 items-center justify-center">
        <div className="flex items-center gap-3">
          <div className="w-[100px] h-[1px] bg-[#E91E62]"></div>
          <div className="tracking-[8px] text-[12px] uppercase text-gray-500 font-open">
            Contact
          </div>
          <div className="w-[100px] h-[1px] bg-[#E91E62]"></div>
        </div>
        <div>
          <h1 className="font-lora font-[600] text-center text-[40px]">
            Stay Connected
          </h1>
          <h2 className="text-gray-500">
            Subscribe to our news letter, get emails filled with impactful
            messages.
          </h2>
        </div>
        <div className="flex items-center flex-col md:flex-row  gap-4">
          <div className="flex flex-col gap-1">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Gracey Ruth"
              className="border outline-0 text-gray-700 border-gray-500 p-2 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Phone Number</label>
            <input
              type="number"
              placeholder="08102223334"
              className="border outline-0 text-gray-700 border-gray-500 p-2 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Email</label>
            <input
              type="email"
              placeholder="gracey@mail.com"
              className="border outline-0 text-gray-700 border-gray-500 p-2 rounded-lg"
            />
          </div>
        </div>
        <div className="bg-black py-2 px-3 text-white rounded-lg shadow-md font-[500] font-mont">
          Submit
        </div>
      </div>
    </div>
  );
};

export default StayConnected;
