"use client"
import GlobalTo from '@/app/_utils/GlobalTo';
import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from "sonner";
import React, { useEffect } from 'react';

function CourseEnroll({ courseInfo, isUserAlreadyEnrolled }) {
  const membership = true;
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    isUserAlreadyEnrolled;
  }, []);

  const onEnrollCourse = () => {
    GlobalTo.enrollToCourse(courseInfo?.slug, user?.primaryEmailAddress?.emailAddress).then(resp => {
      console.log("feedback:", resp);

      if (resp) {
        // Show success message
        toast("You have successfully Enrolled", {
          description: "Happy Learning!",
        });
        // Redirect to course view page
        router.push('/view-course/' + resp?.publishUserEnrollCourse?.id);
      }
    }).catch(error => {
      toast.error("Enrollment failed. Please try again later.");
      console.error("Enrollment error:", error);
    });
  };

  return (
    <div className='p-3 text-center rounded-sm bg-primary'>
      <h2 className='text-[20px] font-bold text-white'>Enroll The Course</h2>

      {user && (membership || courseInfo.free) && !isUserAlreadyEnrolled ? (
        <div className='flex flex-col gap-3'>
          <h2 className='text-white font-light'>Enroll Now to start Learning.</h2>
          <Button className="bg-white text-primary hover:bg-white hover:text-primary" onClick={onEnrollCourse}>Enroll Now</Button>
        </div>
      ) : !user ? (
        <div className='flex flex-col gap-3'>
          <h2 className='text-white font-light'>Enroll Now to start Learning.</h2>
          <Link href={'/sign-in'}>
            <Button className="bg-white text-primary hover:bg-white hover:text-primary">Enroll -Now</Button>
          </Link>
        </div>
      ) : !isUserAlreadyEnrolled && (
        <div className='flex flex-col gap-3'>
          <h2 className='text-white font-light'>Pay for membership and have access to all courses.</h2>
          <Button className="bg-white text-primary hover:bg-white hover:text-primary">Buy Membership for $10</Button>
        </div>
      )}

      {isUserAlreadyEnrolled && (
        <div className='flex flex-col gap-3'>
          <h2 className='text-white font-light'>Continue to Learn.</h2>
          <Link href={'/view-course/' + isUserAlreadyEnrolled}>
            <Button className="bg-white text-primary hover:bg-white hover:text-primary">Continue</Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default CourseEnroll;
