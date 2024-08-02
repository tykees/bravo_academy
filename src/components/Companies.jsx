import React from 'react';
import Image from 'next/image';
import Coursera from '../../public/coursera.png';
import Udemy from '../../public/udemy.png';
import Fedex from '../../public/fedex.png';
import Education from '../../public/education.png';
import Elecom from '../../public/elecom.png';
import Indeed from '../../public/indeed.png';


const Companies = () => {
  return (
    <div>
        <div>
            <h1 className='text-center text-4xl mb-6'>Trusted by over 800+ Companies</h1>
        </div>
        <div className='flex justify-center items-start gap-10'>
            <Image className='w-[170px]' src={Coursera}/>
            <Image className='w-[100px]' src={Udemy}/>
            <Image className='w-[100px]' src={Fedex}/>
            <Image className='w-[120px]' src={Education}/>
            <Image className='w-[100px]' src={Elecom}/>
            <Image className='w-[100px]' src={Indeed}/>
        </div>
    </div>
  )
}

export default Companies