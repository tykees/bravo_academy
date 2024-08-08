import React from 'react';
import Image from 'next/image';
import AccessBank from '../../public/access.png';
import Careerex from '../../public/careerex.jpeg';
import Fedex from '../../public/fedex.png';
import VicePresident from '../../public/vicepresident.svg';
import Elecom from '../../public/elecom.png';
import Indeed from '../../public/indeed.png';


const Companies = () => {
  return (
    <div>
        <div>
            <h1 className='text-center text-4xl mb-6'>Trusted by over 800+ Companies</h1>
        </div>
        <div className='flex justify-center items-start flex-wrap gap-10'>
            <Image className='w-[170px]' src={AccessBank}/>
            <Image className='w-[35px] rounded-sm' src={Careerex}/>
            <Image className='w-[100px]' src={Fedex}/>
            <Image className='w-[35px]' src={VicePresident}/>
            <Image className='w-[100px]' src={Elecom}/>
            <Image className='w-[100px]' src={Indeed}/>
        </div>
    </div>
  )
}

export default Companies