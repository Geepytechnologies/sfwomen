import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
import { LuFacebook } from "react-icons/lu";
import CountdownTimer from "@/components/CountdownTimer.";
import { motion } from "framer-motion";

export default function Home() {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 3);
  return (
    <>
      <Head>
        <title>Spiritfilledwomen</title>
        <meta name="description" content="spirit filled women" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className="min-h-screen w-full bg-[url('/sfwomen.jpg')] bg-no-repeat bg-cover text-white flex items-center justify-center relative">
          <div className="absolute top-0 h-full w-full bg-[rgba(0,0,0,0.4)]"></div>
          <div className="absolute flex items-center justify-center z-20 top-0 h-full w-full">
            <div className="w-[80%]">
              <img src="/Highlight_10.svg" className="w-[70px] lg:w-[200px]" />
              <motion.p
                initial={{ y: -10, opacity: 0.5 }}
                transition={{ duration: 1 }}
                animate={{ opacity: 1, x: 0 }}
                className="lg:text-[96px] md:text-[60px] text-[30px] md:text-start text-center font-mont font-[600]"
              >
                Spirit filled women
              </motion.p>
              <motion.p
                initial={{ x: -200, opacity: 0.5 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                ......Raising the 3Dimensional Women
              </motion.p>
              <div className="flex flex-col mt-8 py-8 gap-5 items-center justify-center">
                <CountdownTimer targetDate={targetDate} />
                <p className="font-danc text-[50px] font-[500] animate-pulse">
                  Coming Soon
                </p>
                <motion.div
                  initial={{ x: 200, opacity: 0.5 }}
                  transition={{ duration: 1 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="flex items-center justify-end"
                >
                  {/* <p className="">......Anticipate</p> */}
                </motion.div>
                <div className="flex gap-6">
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
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
