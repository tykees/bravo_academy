"use client"
import GlobalApi from '@/app/_utils/GlobalApi'
import React, { useEffect, useState } from 'react'
import CourseDescription from './_components/CourseDescription'

function CoursePreview({params}) {
    const [courseInfo, setCourseInfo] = useState();
    useEffect(()=>{
        params&&getCourseInfoBySlug();
    },[params])
    const getCourseInfoBySlug = ()=> {
        GlobalApi.getCourseBySlug(params?.courseId).then(resp=>{
            setCourseInfo(resp?.courseList)
        })
    }
  return courseInfo&&(
    <div className='grid grid-cols-1 md:grid-cols-3 p-5 gap-3'>
        {/* Title */}
        <div className='col-span-2 bg-white p-3'>
             <CourseDescription courseInfo={courseInfo}/>
         </div>
       
        {/* Content */}
        <div></div>
    </div>
  )
}

export default CoursePreview