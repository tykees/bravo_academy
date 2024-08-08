"use client"
import Image from "next/image";
import { UserButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Welcome from "./welcome/page";

export default function Home() {
  const router= useRouter();
  const {user, isLoaded}=useUser();
  useEffect(()=>{
    if(user)
    {
      router.push('/dashboard')
    }
    else {
      isLoaded&&router.push('/')
    }
  },[user])
  return (
    <main className=" ">
      <Welcome/>
      <UserButton afterSignOutUrl="/sign-in"/>
    </main>
  );
}
