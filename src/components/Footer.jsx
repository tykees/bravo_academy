import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='bg-slate-950 mt-20'>
        <div className='h-[400px]'>
            <h1 className='text-slate-300 text-center text-4xl font-bold pt-20'>Pro Edu</h1>
            <p className='text-center mt-5 text-slate-300'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br/>In repudiandae quisquam adipisci!</p>
            <div className='flex mt-4 text-slate-300 justify-center items-center gap-5'>
                <p>Privacy</p>|<p>Term of Service</p>
            </div>
            <div className='flex text-3xl mt-6 text-slate-400 justify-center items-center gap-4'>
            <FaFacebookF />
            <FaXTwitter />
            <FaLinkedinIn />
            <FaTiktok />
            </div>
        </div>
    </div>
  )
}

export default Footer