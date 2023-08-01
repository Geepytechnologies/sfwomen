import styles from "@/styles/Home.module.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Comingsoon from "@/components/Comingsoon";
import StayConnected from "@/components/StayConnected";
import Upcoming from "@/components/Upcoming";
import Sermons from "@/components/Sermons";
import Devotional from "@/components/Devotional";
import Herosection from "@/components/Herosection";
import Recentevents from "@/components/Recentevents";
import Mission from "@/components/Mission";

export default function Home() {
  return (
    <>
      <Layout>
        {/* <Herosection /> */}
        {/* <Mission /> */}
        <Recentevents />
        <StayConnected />
        {/* <Devotional /> */}
        {/* <Upcoming /> */}
        <Sermons />
      </Layout>
    </>
  );
}
