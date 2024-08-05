import GlobalApi from '@/app/_utils/GlobalApi'
import React, { useEffect, useState } from 'react'
import { Select, SelectContent,SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select"
import CourseItem from './CourseItem';
import Link from 'next/link';

function CourseList() {
    const [courseList, setCourseList] = useState([]);
    useEffect(()=>{
        getAllCourses();
    },[])

    const getAllCourses=()=> {
        GlobalApi.getAllCourseList().then(resp=>{
            console.log(resp)
            setCourseList(resp?.courseLists)
        })
    }
  return (
    <div className='p-5 bg-white rounded-lg mt-5'>
        {/* Title and Filter */}
        <div className='flex items-center justify-between'>
            <h2 className='text-[20px] font-bold text-primary'>All Courses</h2>
            <Select>
            <SelectTrigger className="w-[180px]">
             <SelectValue placeholder="Filter" />
             </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">All</SelectItem>
             <SelectItem value="dark">Paid</SelectItem>
             <SelectItem value="system">Free</SelectItem>
            </SelectContent>
            </Select>
        </div>
        {/* Display CourseList */}
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-3 mt-4'>
            { courseList?.length>0? courseList.map((item, index)=>(
              
                <div key={index}>
                      <Link href={"/course-preview/"+item.slug}>
                    <CourseItem course={item}/>
                    </Link>
                </div>
            ))
            :
            [1,2,3,4,5].map((item, index)=>(
                <div className='w-full h-[240px] rounded-xl m-2 bg-slate-200 animate-pulse' key={index}></div>
            ))
        }
        </div>
    </div>
  )
}

export default CourseList