import React from 'react'
import Markdown  from 'react-markdown'
import VideoPlayer from './VideoPlayer'

function CourseDescription({courseInfo}) {
  return (
    <div>
        <h2 className='text-[20px] font-semibold-'>{courseInfo.name}</h2>

        {/* Video Player */}
        <VideoPlayer videoUrl = {courseInfo?.chapterList?.tutVideo?.url}
        poster={courseInfo?.banner?.url}
        />
        <h2 className='mt-5 text-[17px] font-semibold'>About this course</h2>
            <Markdown className='text-[13px] font-light mt-2 leading-7 '>{courseInfo.description}</Markdown>
    </div>
  )
}

export default CourseDescription