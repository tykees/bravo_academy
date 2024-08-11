"use client"
import GlobalApi from '@/app/_utils/GlobalApi'
import { useUser } from '@clerk/nextjs'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'sonner';
import CourseContent from '../../course-preview/[courseId]/_components/CourseContent';
import CourseDescription from '../../course-preview/[courseId]/_components/CourseDescription';

function ViewCourse({params}) {
    const {user} = useUser();
    const [courseInfo, setCourseInfo] = useState([]);
    const [completedChapter, setCompletedChapter] = useState([])
    const [activeChapterIndex, setActiveChapterIndex] = useState(0);
    useEffect(()=>{
        params&&user&&getUserEnrolledCourseDetail();
    },[params&&user])
   // Get user enrolled Course
    const getUserEnrolledCourseDetail=()=>{
        GlobalApi.getUserEnrolledCourseDetails(user?.primaryEmailAddress?.emailAddress, params?.enrollId).then(resp=>{
            console.log(resp)
            setCompletedChapter(resp?.userEnrollCourses[0]?.completedChapter);
            setCourseInfo(resp?.userEnrollCourses[0]?.courseList);
        })
    }

    // Saving completed chapter
    const onChapterComplete = (chapterId)=> {
        GlobalApi.markChapterCompleted(params.enrollId, chapterId).then(resp=>{
            console.log(resp)

            if(resp){
                toast("Course Completed Successfully!")
                getUserEnrolledCourseDetail();
            }
        })
    }
       
  return courseInfo?.name&&(
    <div>
         <div className='grid grid-cols-1 md:grid-cols-3 p-5 gap-3'>
        {/* Title */}
        <div className='col-span-2 bg-white p-3'>
             <CourseDescription courseInfo={courseInfo}
             activeChapterIndex={activeChapterIndex}
             viewMode={true}
             setChapterCompleted={(chapterId)=>onChapterComplete(chapterId)}
             />
         </div>
       
        {/* Content */}
        <div>
            <CourseContent courseInfo={courseInfo}
            isUserAlreadyEnrolled={true}
            viewMode={true}
            completedChapter={completedChapter}
            setActiveChapterIndex={(index)=>setActiveChapterIndex(index)}
            />
        </div>
    </div>
    </div>
  )
}

export default ViewCourse