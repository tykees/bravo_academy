import React from 'react';
import Image from 'next/image';
import Regis from '../../../public/register.png';

const page = () => {
  return (
    <div className='container mx-auto mt-40'>
        <div className='flex justify-around items-start gap-3'>
            <div className='bg-slate-200 p-6 rounded-3xl'>
                <Image className='w-[400px] rounded-3xl h-[550px] bg-slate-500 border' src={Regis}/>
            </div>
            <div>
                <h1 className='text-3xl font-bold mt-6'>Sign Up</h1>
                <p className='text-slate-500 my-4'>Lorem ipsum dolor sit amet co obcaecati soluta repudiandae?</p>
                <form action="">
                <div className='flex gap-10 mb-4'>
                    <input className='border border-slate-400 rounded w-[250px] py-2 outline-none px-3' type="text" name="" id="" placeholder='First Name' />
                    <input className='border border-slate-400 rounded w-[250px] py-2 outline-none px-3'  type="text" name="" id="" placeholder='Last Name' />
                </div>
                <div className='flex gap-10 mb-4'>
                    <input className='border border-slate-400 rounded w-[250px] py-2 outline-none px-3'  type="email" name="" id="" placeholder='Email' />
                    <input className='border border-slate-400 rounded w-[250px] py-2 outline-none px-3'  type="number" name="" id="" placeholder='Phone Number' />
                </div>
                <div className='flex flex-col'>
                <input className='border border-slate-400 rounded w-[540px] py-2 outline-none px-3 my-5'  type="password" name="" id="" placeholder='Password' />
                <input className='border border-slate-400 rounded w-[540px] py-2 outline-none px-3'  type="password" name="" id="" placeholder='Confirm Password' />
                </div>
                <div className='flex gap-3 my-4'>
                <input type="radio" name="" id="" />
                <p>I agree with the Terms of Service</p>
                </div>
                <input className='bg-blue-700 text-white w-[540px] px-3 py-3 rounded' type="button" value="Create Account" />
                </form>
                <p className=''>Already have an account? <span className='text-red-400'>Login</span> </p>
                <div>Or Sign up with</div>
                <div className='flex'>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page