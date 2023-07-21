import React from "react";
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
import { LuFacebook } from "react-icons/lu";

type Props = {};

const Footer = (props: Props) => {
  const year = new Date().getFullYear();
  return (
    <footer className="flex-0 bg-brown py-9 mt-9 text-[rgba(255,255,255,0.8)]">
      <div className="flex items-center flex-col md:flex-row justify-center gap-9">
        <div>
          <div className="font-danc font-[500] text-[40px]">
            Spirtfilledwomen
          </div>

          <ul className="flex flex-col gap-3">
            <li>Upcoming Programs</li>
            <li>Past programs and Experience</li>
            <li>Sermons</li>
            <li>centres</li>
            <li>Devotional</li>
            <li>Vision and Mission</li>
          </ul>
          <div className="flex gap-6 mt-6">
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
        <div className="hidden md:flex flex-col gap-4">
          <div>
            <h1 className="font-lora font-[600] text-center text-[40px]">
              Stay Connected
            </h1>
            <h2 className="text-[rgba(255,255,255,0.3)] ease-in-out duration-150 text-center transition-[text-color] hover:text-[rgba(255,255,255,0.9)]">
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
          <div className="flex items-center justify-center">
            <div className="border-[rgba(255,255,255,0.3)] border max-w-[200px] text-center py-2 px-3 text-white rounded-lg shadow-md font-[500] font-mont ease-in-out duration-150 transition-[border-color] hover:border-[rgba(255,255,255,0.9)]">
              Submit
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 p-2">
        <div className="text-light text-center w-full flex items-center justify-center">
          <p>Copyright &#169; {year} Spiritfilledwomen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
