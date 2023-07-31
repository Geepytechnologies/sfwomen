import React, { useState } from "react";
import { motion } from "framer-motion";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  const [menu, setMenu] = useState(false);
  const togglemenu = () => {
    setMenu(!menu);
  };
  return (
    <header className="flex-0 flex flex-col sticky top-0 z-[999] w-full items-center min-h-[90px] justify-between">
      <div className="flex flex-row bg-white w-full items-center py-3 justify-between px-3">
        <Link href="/">
          <div className="flex items-center gap-2">
            <img src="/logo.png" className="w-[50px] h-[50px]" />
            <span className="font-lora text-gray-800 tracking-[1px] font-[400] text-[20px] md:text-[30px]">
              SpiritFilledWomen
            </span>
          </div>
        </Link>
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
            className="text-black hidden font-pop  md:flex gap-4 text-[20px] items-center justify-center"
          >
            <li>
              <Link href={"/gallery"}>Gallery</Link>
            </li>
            <li>
              <Link href={"/sermons"}>Sermons</Link>
            </li>
            <li>
              <Link href={"/events"}>Events</Link>
            </li>
            <li>
              <Link href={"/mission"}>Mission</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contact</Link>
            </li>
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
            className="flex flex-row md:hidden  text-[30px] font-[500]  text-gray-500 items-center"
          >
            {!menu && <BiMenuAltRight onClick={() => togglemenu()} />}
            {menu && <AiOutlineClose onClick={() => togglemenu()} />}
          </motion.div>
        </div>
      </div>
      <div
        className={` bg-brown ${
          menu
            ? "max-h-[200px] overflow-hidden bg-brown flex items-center w-full h-[200px] py-4 transition-[max-height] duration-500 ease-in-out "
            : "max-h-[0px] overflow-hidden h-[200px] w-full transition-[max-height] duration-500 ease-in-out"
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
