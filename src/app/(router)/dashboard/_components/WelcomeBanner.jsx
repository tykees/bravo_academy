import React from 'react';
import Image from 'next/image';
 
 function WelcomeBanner({user}) {
   return (
     <div className='flex gap-10 bg-primary p-5 items-center'>
        <Image src={user?.user?.imageUrl} width={150} height={150} alt="userImage"/>
        <div>
            <h2 className='text-[32px] font-light text-white'> Welcome Back 
            <span className='font-bold text-blue-300'> {user?.user?.fullName}</span></h2>
            <h2 className='text-[16px] font-light text-slate-300'>Don&apos;t stop learning!</h2>
        </div>
     </div>
   )
 }
 
 export default WelcomeBanner