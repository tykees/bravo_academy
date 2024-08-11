import React from 'react';
import Image from 'next/image';

function CourseItem({course}) {
  return (
    <div className='border rounded-xl hover:shadow-md cursor-pointer shadow-gray-300'>
        <Image src={course?.banner?.url} width={500} height={200} alt="Banner" className='rounded-t-xl'/>
        <div className='flex flex-col gap-1 p-2'>
        <h2 className='font-semibold'>{course.name}</h2>
       {course?.chapterLists?.length===1 ? <div className='flex gap-2'>
        <Image src='/youtube.png' width={20} height={20} alt="Youtube"/>
        <h2 className='text-[14px] text-gray-400'>Watch on YouTube</h2>
        </div>:
        <div className='flex gap-2'>
        <Image src='/chapter.png' width={20} height={20} alt="Chapter"/>
        <h2 className='text-[14px] text-gray-400'>Chapter</h2>
        </div>}
        <h2 className='text-[15px]'>{course?.free?'Free': 'Paid'}</h2>
      </div>
    </div>
  )
}

export default CourseItem