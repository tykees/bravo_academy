import Link from 'next/link';
import React from 'react';

const Ready = () => {
  return (
    <div className='md:container mx-auto mt-10'>
        <div className='flex justify-around h-[200px] items-center bg-sky-600'>
            <div className='text-white ml-2'>
                <h1 className='text-3xl font-bold'>Ready to Join</h1>
                <p className='mt-4 w-[320px]'>Don&apos;t hesitate, start now. Your success is close.</p>
            </div>
            <div className='text-center mt-10'>
               <Link href={'./courses'}> <button className='text-white bg-sky-500 w-[150px]  md:w-[200px] rounded-md h-[50px]'>See more courses</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Ready