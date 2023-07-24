import React, { ChangeEvent, useState } from "react";
import axios from "axios";
import Notification from "./Notification";
import { useDispatch, useSelector } from "react-redux";
import { notificationShow } from "@/utils/notification";

type Props = {};

const StayConnected = (props: Props) => {
  const [firstname, setFirstname] = useState<String>();
  const [lastname, setLastname] = useState<String>();
  const [phone, setPhone] = useState<String>();
  const [email, setEmail] = useState<String>();
  const { show } = useSelector((state: any) => state.notification);
  const [message, setMessage] = useState<String>("");
  const [status, setStatus] = useState<String>("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post("/api/subscribe", {
        firstname,
        lastname,
        phone,
        email,
      });
      console.log(res.data);
      if (res.status == 201) {
        setMessage("Thank you for subscribing");
        setStatus("success");
        dispatch(notificationShow());
      }
    } catch (error: any) {
      if (error?.response.status == 400) {
        setMessage("You're already a subscriber");
        setStatus("warning");
        dispatch(notificationShow());
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {show && <Notification message={message} status={status} />}
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
          <form onSubmit={handleSubmit}>
            <div className="grid items-center grid-cols-1 md:grid-cols-2  gap-4">
              <div className="flex flex-col gap-1">
                <label>First Name</label>
                <input
                  type="text"
                  required
                  placeholder="Gracey"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setFirstname(e.target.value)
                  }
                  className="border outline-0 text-gray-700 border-gray-500 py-2 px-5 rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label>Last Name</label>
                <input
                  type="text"
                  placeholder="Ruth"
                  onChange={(e) => setLastname(e.target.value)}
                  className="border outline-0 text-gray-700 border-gray-500 py-2 px-5 rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label>Phone Number</label>
                <input
                  type="number"
                  required
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="08102223334"
                  className="border outline-0 text-gray-700 border-gray-500 py-2 px-5 rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label>Email</label>
                <input
                  type="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="gracey@mail.com"
                  className="border outline-0 text-gray-700 border-gray-500 py-2 px-5 rounded-lg"
                />
              </div>
            </div>
            <div className=" mt-4 flex justify-center">
              {!loading ? (
                <button
                  type="submit"
                  className="bg-brown py-2 px-5 text-white rounded-lg shadow-md font-[500] font-mont"
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
        </div>
      </div>
    </>
  );
};

export default StayConnected;
