"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import './header.css';

const Header = () => {
  return (
    <div className='container mx-auto'>
       <div className='header_img'>
       <div className=''>
        <h1 className='flex showcase-top justify-center mt-10 pt-80 text-4xl items-center'>Get Started Digital Learning</h1>
       <div className='flex justify-center items-center mt-40'><button className='bg-sky-500 px-4 py-4 text-white w-[160] h-[80]'>Get Started</button></div> 
        </div> 
       </div>
    </div>
  )
}

export default Header