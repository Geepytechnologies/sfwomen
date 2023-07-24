import { notificationHide } from "@/utils/notification";
import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { BsFillPatchCheckFill } from "react-icons/bs";

type Props = {
  message: String;
  status: String;
};

const Notification = ({ message, status }: Props) => {
  const dispatch = useDispatch();
  const handleToggleModal = () => {
    dispatch(notificationHide());
  };
  let toastcolor;

  if (status === "success") {
    toastcolor = "green";
  } else if (status === "warning") {
    toastcolor = "#d3d314e0";
  } else if (status === "error") {
    toastcolor = "#d82020";
  }

  return (
    <div className="bg-[rgba(0,0,0,0.5)]  fixed top-0 flex items-center z-[999] justify-center min-h-screen w-full">
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 0.7 }}
        animate={{ opacity: 1 }}
        className="bg-white pb-4 rounded-lg min-w-[250px] h-[100px]"
      >
        <div className="flex cursor-pointer items-center justify-end p-2">
          <AiOutlineCloseCircle
            onClick={handleToggleModal}
            className="text-gray-500 font-[500] text-[20px]"
          />
        </div>
        <div className="flex gap-2 w-full px-3 items-center justify-center">
          <BsFillPatchCheckFill color={toastcolor} className="text-[30px]" />
          <p className="font-[400] text-center text-[16px] font-mont">
            {message}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Notification;
