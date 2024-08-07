"use client"
import Image from "next/image";
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
      isLoaded&&router.push('/welcome')
    }
  },[user])
  return (
    <main className=" ">
      <UserButton afterSignOutUrl="/sign-in"/>
    </main>
  );
}
