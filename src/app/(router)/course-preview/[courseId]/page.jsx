"use client"
import GlobalApi from '@/app/_utils/GlobalApi'
import { useUser } from '@clerk/nextjs';
import React, { useEffect, useState } from 'react'
import CourseContent from './_components/CourseContent';
import CourseDescription from './_components/CourseDescription'
import CourseEnroll from './_components/CourseEnroll';

function CoursePreview({params}) {
    const {user} = useUser();
    const [courseInfo, setCourseInfo] = useState();
    const [isUserAlreadyEnrolled, setIsUserAlreadyEnrolled] = useState();
    useEffect(()=>{
        params&&getCourseInfoBySlug();
    },[params])

    useEffect(()=>{
        courseInfo&&user&&checkUserEnrolledCourses();
    },[courseInfo, user])

    const getCourseInfoBySlug = ()=> {
        GlobalApi.getCourseBySlug(params?.courseId).then(resp=>{
            setCourseInfo(resp?.courseList)
        })
    }

    // Checking User enrollment
     const checkUserEnrolledCourses = ()=>{
        GlobalApi.checkUserEnrolledToCourses(courseInfo?.slug, user?.primaryEmailAddress?.emailAddress).then(resp=>{
            console.log(resp)

            if(resp?.userEnrollCourses){
                setIsUserAlreadyEnrolled(resp?.userEnrollCourses[0]?.id);
            }
        })
     }
  return courseInfo&&(
    <div className='grid grid-cols-1 md:grid-cols-3 p-5 gap-3'>
        {/* Title */}
        <div className='col-span-2 bg-white p-3'>
             <CourseDescription courseInfo={courseInfo}/>
         </div>
       
        {/* Content */}
        <div>
            <CourseEnroll courseInfo={courseInfo}
            isUserAlreadyEnrolled={isUserAlreadyEnrolled}
            />
            <CourseContent courseInfo={courseInfo}
            isUserAlreadyEnrolled={isUserAlreadyEnrolled}
            />
        </div>
    </div>
  )
}

export default CoursePreview