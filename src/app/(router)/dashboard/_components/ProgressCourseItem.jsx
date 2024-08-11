import React from 'react';
import Image from 'next/image';
import { Progress } from "@/components/ui/progress"
import Link from 'next/link';


function ProgressCourseItem({course}) {
//  percentage (totalCompletedChapter/totalChapter)*100
  const totalCompletedPercentage=(item)=>{
    const perc = (item?.completedChapter?.length/item?.courseList?.totalChapter)*100
    console.log(perc)
    return Math.ceil(perc)
  }
  return (
    <Link href={'/course-preview/' +course?.courseList?.slug}>
    <div className='border rounded-xl hover:shadow-md cursor-pointer shadow-gray-300'>
        <Image src={course?.courseList?.banner?.url} width={500} height={200} alt="Banner" className='rounded-t-xl'/>
        <div className='flex flex-col gap-1 p-2'>
        <h2 className='font-semibold'>{course?.courseList?.name}</h2>
        <h2 className='text-[12px] text-gray-400 mt-3'>{totalCompletedPercentage(course)}% <span className='float-right'>{course?.completedChapter?.length}/ {course?.courseList?.totalChapter} Chapters</span></h2>
        <Progress className="bg-slate-200 h-[7px]" value={totalCompletedPercentage(course)} />
      </div>
    </div>
    </Link>
  )
}

export default ProgressCourseItem