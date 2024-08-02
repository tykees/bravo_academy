import React from 'react';

const Ready = () => {
  return (
    <div className='container mx-auto mt-10'>
        <div className='flex justify-around h-[200px] items-center bg-sky-600'>
            <div className='text-white'>
                <h1 className='text-3xl font-bold'>Ready to Join</h1>
                <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, illum.</p>
            </div>
            <div className='text-center mt-10'>
                <button className='text-white bg-sky-500  w-[200px] rounded-xl h-[50px]'>See more courses</button>
            </div>
        </div>
    </div>
  )
}

export default Ready