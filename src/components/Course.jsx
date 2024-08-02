import React from 'react';
import Image from 'next/image';
import Pix from '../../public/pix.jpg';

const courses = [
    {
        Img: Pix,
        title: 'Fundamental of UI/UX Design',
        details: "Information about the course and the rest",
        cost: "20$"
    },
    {
        Img: Pix,
        title: 'Fundamental of UI/UX Design',
        details: "Information about the course and the rest",
        cost: "30$"
    },
    {
        Img: Pix,
        title: 'Fundamental of UI/UX Design',
        details: "Information about the course and the rest",
        cost: "40$"
    },
    {
        Img: Pix,
        title: 'Fundamental of UI/UX Design',
        details: "Information about the course and the rest",
        cost: "50$"
    },
    {
        Img: Pix,
        title: 'Fundamental of UI/UX Design',
        details: "Information about the course and the rest",
        cost: "60$"
    },
    {
        Img: Pix,
        title: 'Fundamental of UI/UX Design',
        details: "Information about the course and the rest",
        cost: "70$"
    },

]

const Course = () => {
    const firstColumnCourses = courses.slice(0, 3);
    const secondColumnCourses = courses.slice(3);

    return (
        <div>
            <div>
                <h1 className='text-center text-4xl mt-36 font-bold'>Discover Our Popular <br/> Courses</h1>
              <div className='flex my-10 justify-center items-center'><p className='text-slate-400 text-center w-[500px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditat sit dolorem esse.</p></div> 
            </div>
            <div className="flex container mx-auto">
                <div className="w-1/2">
                    {firstColumnCourses.map((item, index) => (
                        <div className='flex justify-center items-center flex-wrap' key={index}>
                            <div className='flex justify-around mb-4 items-center'>
                                <Image src={item.Img} width="200" height="200" />
                               <div className='ml-3'>
                               <p>{item.title}</p>
                                <p>{item.cost}</p>
                               </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-1/2">
                    {secondColumnCourses.map((item, index) => (
                        <div className='flex justify-center items-center flex-wrap' key={index + 3}>
                            <div className='flex justify-around mb-4 items-center'>
                                <Image src={item.Img} width="200" height="200" />
                                <div className='ml-3'>
                                <p>{item.title}</p>
                                <p>{item.cost}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='text-center mt-10'><button className='text-white bg-sky-500  w-[200px] rounded-xl h-[50px]'>See more courses</button></div>
        </div>
    );
}

export default Course;
