import { modalHide } from "@/utils/modal";
import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { notificationShow } from "@/utils/notification";
import axios from "axios";
import Notification from "./Notification";

type Props = {};

const InvitationForm = (props: Props) => {
  const [firstname, setFirstname] = useState<String>();
  const [lastname, setLastname] = useState<String>();
  const [phone, setPhone] = useState<String>();
  const [email, setEmail] = useState<String>();
  const { show } = useSelector((state: any) => state.notification);
  const [message, setMessage] = useState<String>("");
  const [status, setStatus] = useState<String>("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const handleToggleModal = () => {
    dispatch(modalHide());
  };
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post("/api/register", {
        firstname,
        lastname,
        phone,
        email,
      });
      if (res.status == 201) {
        setMessage("Attendance has been recorded");
        setStatus("success");
        dispatch(notificationShow());
      }
      if (res.status == 400) {
        setMessage("You've already booked your spot");
        setStatus("warning");
        dispatch(notificationShow());
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {show && <Notification message={message} status={status} />}
      <div className="bg-[rgba(0,0,0,0.5)]  fixed top-0 flex items-center z-50 justify-center min-h-screen w-full">
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          animate={{ opacity: 1 }}
          className="bg-white pb-4 overflow-y-scroll rounded-lg w-[95%] h-[90%] md:h-[80%] md:w-[70%]"
        >
          <div className="flex cursor-pointer items-center justify-end p-2">
            <AiOutlineCloseCircle
              onClick={handleToggleModal}
              className="text-brown font-[500] text-[20px]"
            />
          </div>
          <div className="flex items-center justify-center gap-3">
            <div className="w-[100px] h-[1px] bg-[#E91E62]"></div>
            <div className="tracking-[8px] text-[12px] uppercase text-brown font-open">
              Presents
            </div>
            <div className="w-[100px] h-[1px] bg-[#E91E62]"></div>
          </div>
          <div className="aspect-video bg-[url('/alabaster.png')] bg-cover shadow-md border-2 border-white m-2 rounded-lg"></div>
          <form onSubmit={handleSubmit}>
            <div className="flex items-center flex-col font-mont font-[500]  gap-4">
              <div className="flex flex-col gap-1">
                <label>First Name</label>
                <input
                  type="text"
                  onChange={(e) => setFirstname(e.target.value)}
                  placeholder="Gracey"
                  className="border outline-0 text-gray-700 border-gray-500 p-2 rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label>Last Name</label>
                <input
                  type="text"
                  onChange={(e) => setLastname(e.target.value)}
                  placeholder="Ruth"
                  className="border outline-0 text-gray-700 border-gray-500 p-2 rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label>Phone Number</label>
                <input
                  type="number"
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="08102223334"
                  className="border outline-0 text-gray-700 border-gray-500 p-2 rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label>Email</label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="gracey@mail.com"
                  className="border outline-0 text-gray-700 border-gray-500 p-2 rounded-lg"
                />
              </div>
              {!loading ? (
                <button
                  type="submit"
                  className="bg-brown py-2 px-3 text-white rounded-lg shadow-md font-[500] font-mont"
                >
                  Submit
                </button>
              ) : (
                <button
                  type="submit"
                  disabled
                  className="bg-brown opacity-30 py-2 px-5 text-white rounded-lg shadow-md font-[500] font-mont"
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default InvitationForm;
