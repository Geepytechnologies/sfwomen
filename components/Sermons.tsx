import Link from "next/link";
import React, { useState } from "react";
import {
  BsCameraVideoFill,
  BsCloudDownloadFill,
  BsFillMicFill,
  BsHeadphones,
} from "react-icons/bs";

type Props = {};

const Sermons = (props: Props) => {
  const [cardHover, setCardHover] = useState(false);
  return (
    <div className="flex-col my-7  flex items-center justify-center gap-4 bg-cover bg-center">
      <div className="flex items-center gap-3">
        <div className="w-[100px] h-[1px] bg-[#E91E62]"></div>
        <div className="tracking-[8px] text-[12px] uppercase text-black font-open">
          Sermons
        </div>
        <div className="w-[100px] h-[1px] bg-[#E91E62]"></div>
      </div>
      <div className="flex items-center">
        <h1 className="font-lora text-black font-[600] text-center text-[35px]">
          Experience God&apos;s word
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-center">
        {/* card1 */}
        <div>
          <div
            onMouseEnter={() => setCardHover(true)}
            onMouseLeave={() => setCardHover(false)}
            className="relative bg-[url('/bible.jpg')] bg-cover bg-center rounded-lg shadow-xl w-[300px] h-[250px]"
          >
            <div
              className={`absolute bottom-0 left-[10px] flex flex-col gap-1 items-center justify-center h-[100px] w-[100px] rounded-lg shadow-xl ${
                cardHover
                  ? "-translate-y-10 transform delay-75 transition-all ease-in-out duration-500 bg-primary"
                  : "translate-y-5 bg-white transform delay-75 transition-all ease-in-out duration-500"
              }`}
            >
              <div
                className={`${
                  cardHover ? "text-white" : "text-black"
                } font-[600] text-[36px]`}
              >
                10
              </div>
              <div className={`${cardHover ? "text-white" : "text-gray-500"}`}>
                MAR
              </div>
            </div>
          </div>
          <div className="flex gap-3 text-gray-500 mt-8 text-[25px]">
            <Link href={""}>
              <BsCameraVideoFill />
            </Link>
            <Link href={""}>
              <BsHeadphones />
            </Link>
            <Link href={""}>
              <BsCloudDownloadFill />
            </Link>
          </div>
          <div className="font-open text-[24px] text-gray-500 tracking-[1px] my-3 font-[500]">
            Spiritual Insight
          </div>
        </div>
        {/* card2 */}
        <div>
          <div
            onMouseEnter={() => setCardHover(true)}
            onMouseLeave={() => setCardHover(false)}
            className="relative bg-[url('/bible.jpg')] bg-cover bg-center rounded-lg shadow-xl w-[300px] h-[250px]"
          >
            <div
              className={`absolute bottom-0 left-[10px] flex flex-col gap-1 items-center justify-center h-[100px] w-[100px] rounded-lg shadow-xl ${
                cardHover
                  ? "-translate-y-10 transform delay-75 transition-all ease-in-out duration-500 bg-primary"
                  : "translate-y-5 bg-white transform delay-75 transition-all ease-in-out duration-500"
              }`}
            >
              <div
                className={`${
                  cardHover ? "text-white" : "text-black"
                } font-[600] text-[36px]`}
              >
                10
              </div>
              <div className={`${cardHover ? "text-white" : "text-gray-500"}`}>
                MAR
              </div>
            </div>
          </div>
          <div className="flex gap-3 text-gray-500 mt-8 text-[25px]">
            <Link href={""}>
              <BsCameraVideoFill />
            </Link>
            <Link href={""}>
              <BsHeadphones />
            </Link>
            <Link href={""}>
              <BsCloudDownloadFill />
            </Link>
          </div>
          <div className="font-open text-[24px] text-gray-500 tracking-[1px] my-3 font-[500]">
            Spiritual Insight
          </div>
        </div>
        {/* card3 */}
        <div>
          <div
            onMouseEnter={() => setCardHover(true)}
            onMouseLeave={() => setCardHover(false)}
            className="relative bg-[url('/bible.jpg')] bg-cover bg-center rounded-lg shadow-xl w-[300px] h-[250px]"
          >
            <div
              className={`absolute bottom-0 left-[10px] flex flex-col gap-1 items-center justify-center h-[100px] w-[100px] rounded-lg shadow-xl ${
                cardHover
                  ? "-translate-y-10 transform delay-75 transition-all ease-in-out duration-500 bg-primary"
                  : "translate-y-5 bg-white transform delay-75 transition-all ease-in-out duration-500"
              }`}
            >
              <div
                className={`${
                  cardHover ? "text-white" : "text-black"
                } font-[600] text-[36px]`}
              >
                10
              </div>
              <div className={`${cardHover ? "text-white" : "text-gray-500"}`}>
                MAR
              </div>
            </div>
          </div>
          <div className="flex gap-3 text-gray-500 mt-8 text-[25px]">
            <Link href={""}>
              <BsCameraVideoFill />
            </Link>
            <Link href={""}>
              <BsHeadphones />
            </Link>
            <Link href={""}>
              <BsCloudDownloadFill />
            </Link>
          </div>
          <div className="font-open text-[24px] text-gray-500 tracking-[1px] my-3 font-[500]">
            Spiritual Insight
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sermons;
