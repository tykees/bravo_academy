import { Lock, Play } from 'lucide-react'
import React, {useState} from 'react'

function CourseContent({courseInfo, isUserAlreadyEnrolled, viewMode=false, setActiveChapterIndex}) {
    const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className='p-3 bg-white rounded-sm mt-3'>
        <h2>Contents</h2>
        {courseInfo?.chapterLists.map((item, index)=>(
            <div key={index}>
                <h2 className={`p-2 text-[14px] flex justify-between items-center m-2 hover:bg-primary border rounded-sm px-4 cursor-pointer ${activeIndex==index&&'bg-primary text-white'}
                ${isUserAlreadyEnrolled&&'hover:primary hover:text-white'}`}
                onClick={()=>{viewMode&&setActiveChapterIndex(index),
                  setActiveIndex(index)}}
                >
                {index+1}. {item.name}
                {activeIndex==index||isUserAlreadyEnrolled?
                <Play className='h-4 w-4'/>:
                <Lock className='h-4 w-4'/>
                }   
                </h2>
            </div>
        ))}
    </div>
  )
}

export default CourseContent