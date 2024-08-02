import React from 'react';
import Image from 'next/image';
import LoginImg from '../../../public/login.jpeg';

const page = () => {
  return (
    <div className='container mx-auto mt-40'>
        <div className='flex justify-around items-start gap-3'>
            <div>
                <h1 className='text-3xl font-bold mt-6'>LogIn Up</h1>
                <p className='text-slate-500 my-4'>Lorem ipsum dolor sit amet co obcaecati soluta repudiandae?</p>
                <form action="">
                <div className='flex flex-col'>
                <input className='border border-slate-400 rounded w-[540px] py-2 outline-none px-3 my-5'  type="Email" name="" id="" placeholder='Email' />
                <input className='border border-slate-400 rounded w-[540px] py-2 outline-none px-3'  type="password" name="" id="" placeholder='Confirm Password' />
                </div>
                <div className='flex gap-3 my-4'>
                <input type="radio" name="" id="" />
                <p>Remember Me</p>
                </div>
                <input className='bg-blue-700 text-white w-[540px] px-3 py-3 rounded' type="button" value="Create Account" />
                </form>
                <p className=''>Don't have an account? <span className='text-red-400'>Sign Up</span> </p>
                <div>Or Login with</div>
                <div className='flex'>
                </div>
            </div>
            <div className='bg-slate-200 p-6 rounded-3xl'>
                <Image className='w-[400px] rounded-3xl h-[450px] bg-slate-500 border' src={LoginImg}/>
            </div>
        </div>
    </div>
  )
}

export default page