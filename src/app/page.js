"use client"
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
import { UserButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router= useRouter();
  const {user, isLoaded}=useUser();
  useEffect(()=>{
    if(user)
    {
      router.push('/dashboard')
    }
    else {
      isLoaded&&router.push('/courses')
    }
  },[user])
  return (
    <main className=" ">
      <UserButton afterSignOutUrl="/sign-in"/>
    </main>
  );
}
