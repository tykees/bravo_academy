import React from 'react';
import Image from 'next/image';

import Pix from '../../public/stu.jpg';

const Explore = () => {
  return (
    <div className='md:container mx-auto mt-28'>
        <div className='md:flex h-auto py-20 justify-center items-center'>
            <div className='md:w-1/2'>
                <Image className='h-[500px] w-[100%]' src={Pix}/>
            </div>
            <div className='md:w-1/2 bg-sky-200 pl-5 h-[500px] pt-20'>
                <h1 className='text-3xl font-bold'>Explore the Learning</h1>
                <p className='w-auto mt-5 text-slate-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quam atque blanditiis laudantium commodi ipsam nulla porro sint, unde, sunt eos totam deserunt animi nisi, sit nobis debitis recusandae! Voluptas.</p>
                <div className='flex justify-start items-center gap-10 mt-10'>
                    <div>
                    <h1 className='text-3xl font-bold'>6.2k</h1>
                    <p>Online Course</p>
                    </div>
                    <div>
                    <h1 className='text-3xl font-bold'>6.2k</h1>
                    <p>Online Course</p>
                    </div>
                    <div>
                    <h1 className='text-3xl font-bold'>6.2k</h1>
                    <p>Online Course</p>
                    </div>
                </div>
                <div className='mt-10'><button className='text-white bg-sky-500  w-[200px] rounded-xl h-[50px]'>See more courses</button></div>
            </div>
        </div>
    </div>
  )
}

export default Explore