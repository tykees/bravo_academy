"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import './header.css';

const Header = () => {
  return (
    <div className=''>
       <div className='header_img'>
       <div className=''>
        <h1 className='flex showcase-top ml-5 leading-normal justify-center font-bold mt-5 pt-64 text-[60px] text-slate-200 items-center'>Digital Learning Made Fun!</h1>
        <p className='md:text-center ml-5 w-[300px] md:w-full mt-36 md:mt-14 text-slate-400'>Learn and track your progress as you become better in career.</p>
       <div className='md:flex ml-5 justify-center items-center mt-10'> <Link href={'/sign-up'}><button className='bg-sky-500 rounded-md px-4 py-4 text-white w-[160] h-[80]'>Get Started</button></Link> </div> 
        </div> 
       </div>
    </div>
  )
}

export default Header