import React from 'react';
import Image from 'next/image';

import Pix from '../../public/stu.jpg';
import Link from 'next/link';

const Explore = () => {
  return (
    <div className='md:container mx-auto mt-28'>
        <div className='md:flex h-auto py-20 justify-center items-center'>
            <div className='md:w-1/2'>
                <Image className='h-[500px] w-[100%]' src={Pix}/>
            </div>
            <div className='md:w-1/2 bg-sky-200 pl-5 h-[500px] pt-20'>
                <h1 className='text-3xl font-bold'>Explore the Learning</h1>
                <p className='w-auto mt-5 text-slate-800'>We set the bar high in the quality of courses we have. Your tech path is sure and guaranteed. We have numerous online courses from great tutors and our reviews and rating speaks for us.</p>
                <div className='flex justify-start items-center gap-10 mt-10'>
                    <div>
                    <h1 className='text-3xl font-bold'>6.2k</h1>
                    <p>Online Course</p>
                    </div>
                    <div>
                    <h1 className='text-3xl font-bold'>200+</h1>
                    <p>Expert Memeber</p>
                    </div>
                    <div>
                    <h1 className='text-3xl font-bold'>1k+</h1>
                    <p>Rating and Review</p>
                    </div>
                </div>
                <div className='mt-10'> <Link href={'/coures'}> <button className='text-white bg-sky-500  w-[200px] h-[50px]'>See more courses</button></Link></div>
            </div>
        </div>
    </div>
  )
}

export default Explore