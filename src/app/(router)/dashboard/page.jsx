"use client"
import GlobalApi from '@/app/_utils/GlobalApi';
import { useUser } from '@clerk/nextjs'
import React, { useState } from 'react'
import { useEffect } from 'react';
import InProgressCourseList from './_components/InProgressCourseList';
import WelcomeBanner from './_components/WelcomeBanner';

function Dashboard() {
  const user = useUser();
  console.log(user);
  const [userEnrolledCourses, setUserEnrolledCourses] = useState([]);
  useEffect(()=>{
    user&&getUserAllEnrolledCourses();
  },[user])

  const getUserAllEnrolledCourses = ()=> {
    GlobalApi.getAllUserEnrolledCourseList(user?.user?.primaryEmailAddress?.emailAddress).then(resp=>{
      console.log(resp.userEnrollCourses)
      setUserEnrolledCourses(resp?.userEnrollCourses)
    })
  }
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 p-5'>
        {/* Left Container */}
        <div className='col-span-3'>
            {/* Banner */}
            <WelcomeBanner user={user}/>
            {/* Inprogress List */}
            <InProgressCourseList userEnrolledCourses={userEnrolledCourses}/>
        </div>
        {/* Right Container */}
        {/* <div>
            Right Section
        </div> */}
    </div>
  )
}

export default Dashboard