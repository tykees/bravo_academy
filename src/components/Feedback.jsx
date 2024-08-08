import React from 'react';
import { FaQuoteRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { IoStarOutline } from "react-icons/io5";
import Image from 'next/image';
import Emma from '../../public/emma.png';
import Yusuf from '../../public/yusuf.png';



const Feedback = () => {
  return (
    <div className='container mx-auto'>
        <div>
            <h1 className='text-center mt-20 text-3xl font-bold'>Some Students Feedback</h1>
         <div className='flex justify-center items-center'><p className='mt-4 w-[400px] text-slate-300'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam itaque aperiam nesciunt.</p></div> 
        </div>
        <div className='flex mt-20 justify-around items-center flex-wrap'>
            <div className='col_1 md:w-1/2 border px-10 py-10'>
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
                <p>Bravo Academy isn't just an online school; it's a gateway to limitless potential. This platform seamlessly merges technology with teaching, making learning an exciting adventure. It's like having a world-class tutor at your fingertips. Whether you're a student or a lifelong learner, Bravo Academy offers something for everyone. It's more than education; it's empowerment.</p>
                <div className='flex mt-5'>
                    <Image className='w-[50px] rounded-3xl' src={Emma}/>
                    <div className='ml-3'>
                        <p>Aderibigbe Emmanuel</p>
                        <p className='text-sm text-slate-500'>Product Manager</p>
                    </div>
                </div>
            </div>
            <div className='col_2 md:w-1/2 border px-10 py-10'>
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
                    <Image className='w-[50px] rounded-2xl' src={Yusuf}/>
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