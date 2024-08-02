import React from 'react';
import { FaQuoteRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { IoStarOutline } from "react-icons/io5";
import Image from 'next/image';
import Pix from '../../public/pix.jpg';


const Feedback = () => {
  return (
    <div className='container mx-auto'>
        <div>
            <h1 className='text-center mt-20 text-3xl font-bold'>Some Students Feedback</h1>
         <div className='flex justify-center items-center'><p className='mt-4 w-[400px] text-slate-300'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam itaque aperiam nesciunt.</p></div> 
        </div>
        <div className='flex mt-20 justify-around items-center'>
            <div className='col_1 w-1/2 border px-16 py-16'>
                <div className='flex mb-5 justify-between items-center'>
                 < FaQuoteRight className='text-slate-400 text-3xl'/>
                    <div className='flex text-orange-300 justify-end items-center gap-1'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <IoStarOutline />
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aliquam ratione commodi provident adipisci.</p>
                <div className='flex mt-5'>
                    <Image className='w-[50px] rounded-full' src={Pix}/>
                    <div className='ml-3'>
                        <p>Aderibegbe Emmanuel</p>
                        <p className='text-sm text-slate-500'>Product Design</p>
                    </div>
                </div>
            </div>
            <div className='col_2 w-1/2 border px-16 py-16'>
                <div className='flex mb-5 justify-between items-center'>
                    <FaQuoteRight  className='text-slate-400 text-3xl'/>
                    <div className='flex  text-orange-300 justify-end items-center gap-1'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <IoStarOutline />
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aliquam ratione commodi provident adipisci.</p>
                <div className='flex mt-5'>
                    <Image className='w-[50px] rounded-full' src={Pix}/>
                    <div className='ml-3'>
                        <p>Yusuf Hassan</p>
                        <p className='text-sm text-slate-500'>Data Science</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feedback