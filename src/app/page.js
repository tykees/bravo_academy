import Image from "next/image";
import Header from "../components/Header/Header";
import Course from "../components/Course";
import Explore from "../components/Explore";
import Ready from "../components/Ready";
import Successful from "../components/Successful";
import Feedback from "../components/Feedback";
import Accordion from '../components/Accordion/Accordion';
import Companies from "../components/Companies";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className=" ">
      <Navbar/>
      <Header/>
      <Course/>
      <Explore/>
      <Ready/>
      <Successful/>
      <Feedback/>
      <Accordion/>
      <Companies/>
      <Footer/>
    </main>
  );
}
