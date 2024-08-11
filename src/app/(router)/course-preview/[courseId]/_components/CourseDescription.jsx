import { Button } from '@/components/ui/button'
import React from 'react'
import Markdown  from 'react-markdown'
import VideoPlayer from './VideoPlayer'

function CourseDescription({courseInfo, activeChapterIndex, viewMode=false, setChapterCompleted}) {
  return (
    <div>
        <h2 className='text-[20px] font-semibold-'>{courseInfo.name}</h2>

        {/* Video Player */}
        <VideoPlayer videoUrl = {courseInfo?.chapterLists[activeChapterIndex]?.tutVideo?.url}
        poster={!viewMode?courseInfo?.banner?.url:null}
        />
        <h2 className='mt-5 text-[17px] font-semibold'>
          {viewMode?
          <span className='flex justify-between items-center'>{courseInfo?.chapterLists[activeChapterIndex]?.name}
          <Button onClick={()=>setChapterCompleted(courseInfo?.chapterLists[activeChapterIndex]?.id)} className="text-white">Mark Completed</Button>
          </span>
          : <span>About this course</span>
        }
          </h2>
          {/* {viewMode? */}
          {/* <Markdown className='text-[13px] font-light mt-2 leading-7 '>{courseInfo?.chapterLists[activeChapterIndex]}</Markdown> */}
           
       <Markdown className='text-[13px] font-light mt-2 leading-7 '>{courseInfo.description}</Markdown>
           
    </div>
  )
}

export default CourseDescription