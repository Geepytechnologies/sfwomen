import React, { useState } from "react";
import { motion } from "framer-motion";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

type Props = {};

const Header = (props: Props) => {
  const [menu, setMenu] = useState(false);
  const togglemenu = () => {
    setMenu(!menu);
  };
  return (
    <header className="flex-0 flex flex-col sticky top-0 z-50 w-full items-center min-h-[80px] justify-between">
      <div className="flex flex-row bg-white w-full items-center py-3 justify-between px-3">
        <div className="font-danc font-[500] text-[40px]">Spirtfilledwomen</div>
        <div>
          <motion.ul
            initial={{
              x: 500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            className="text-gray-300 hidden  md:flex gap-12 text-[20px] items-center justify-center"
          >
            <li>Gallery</li>
            <li>Sermons</li>
            <li>Events</li>
            <li>Mission</li>
            <li>Contact</li>
          </motion.ul>
          <motion.div
            initial={{
              x: 500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            className="flex flex-row lg:hidden  text-[30px] font-[500]  text-gray-300 items-center"
          >
            {!menu && <BiMenuAltRight onClick={() => togglemenu()} />}
            {menu && <AiOutlineClose onClick={() => togglemenu()} />}
          </motion.div>
        </div>
      </div>
      <div
        className={`  ${
          menu
            ? "max-h-[200px] overflow-hidden bg-brown flex items-center w-full h-[200px] py-4 transition-[max-height] duration-500 ease-in-out "
            : "max-h-[0px] overflow-hidden h-[200px]  transition-[max-height] duration-500 ease-in-out"
        }`}
      >
        <div className="space-y-3 w-full h-full flex flex-col items-center justify-center text-white">
          <a href="/about">
            <p>Gallery</p>
          </a>
          <a href="#portfolio" className="">
            <p>Sermons</p>
          </a>
          <a href="#contact">
            <p>Events</p>
          </a>
          <a href="/blog">
            <p>Mission</p>
          </a>
          <a href="/blog">
            <p>Contact</p>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
