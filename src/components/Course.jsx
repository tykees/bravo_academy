import React from 'react';
import Image from 'next/image';
import Pix from '../../public/course-1.png';
import Pix2 from '../../public/course-2.png';
import Pix3 from '../../public/course-3.png';
import Pix5 from '../../public/course-5.png';
import Pix9 from '../../public/course-9.png';
import Pix10 from '../../public/course-10.png';
import Link from 'next/link';

const courses = [
    {
        Img: Pix,
        title: 'Blockchain A-Z: Build a Blockchain, a Crypto + ChatGPT Prize',
        cost: "20$",
        discount: "100$-Discount80% off"
    },
    {
        Img: Pix2,
        title: 'Cyber Security: From Beginner to Expert',
        cost: "30$",
        discount: "100$-Discount70% off"

    },
    {
        Img: Pix3,
        title: 'Data Science Complete Course. Zero to Hero',
        cost: "40$",
        discount: "100$-Discount60% off"

    },
    {
        Img: Pix5,
        title: 'Understanding JavaScript. Zero to Hero',
        cost: "50$",
        discount: "100$-Discount50% off"

    },
    {
        Img: Pix9,
        title: 'Building Artificial Intelligence Models',
        details: "Information about the course and the rest",
        cost: "60$",
        discount: "100$-Discount40% off"

    },
    {
        Img: Pix10,
        title: 'Project Management Complete Course',
        cost: "70$",
        discount: "100$-Discount30% off"

    },

]

const Course = () => {
    const firstColumnCourses = courses.slice(0, 3);
    const secondColumnCourses = courses.slice(3);

    return (
        <div>
            <div>
                <h1 className='text-center text-4xl mt-36 font-bold'>Discover Our Popular <br/> Courses</h1>
              <div className='flex my-8 justify-center items-center'><p className='text-slate-400 text-center w-[500px]'>We have the best courses to set you better for the future. Our courses are we crafted to drive you from zero to hero.</p></div> 
            </div>
            <div className=" flex container mx-auto">
                <div className="md:grid grid-cols-2">
                    {courses.map((item, index) => (
                        <div className='flex border my-20 shadow border-slate-20 justify-center items-center hover:animate-bounce flex-wrap' key={index}>
                            <div className='lg:flex justify-center items-center'>
                                <Image className='rounded-md md:w-[250px] w-full' src={item.Img} alt='courses' />
                               <div className='mx-3'>
                               <p className='font-bold text-slate-500 text-xl'>{item.title}</p>
                               <div className='flex justify-between my-3 items-center'>
                               <p className='font-extrabold text-2xl'>{item.cost}</p>
                                <p className='text-slate-400 text-sm'>{item.discount}</p>
                               </div>       
                               </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* <div className="md:w-1/2">
                    {secondColumnCourses.map((item, index) => (
                        <div className='flex border my-10 shadow border-slate-20 justify-center items-center hover:animate-bounce  flex-wrap' key={index + 3}>
                            <div className='flex justify-around my-4 items-center'>
                                <Image className='rounded-md' src={item.Img} width="250" height="250" />
                                <div className='mx-3'>
                               <p className='font-bold text-slate-500 text-xl'>{item.title}</p>
                               <div className='flex justify-between items-center'>
                               <p className='font-extrabold text-2xl'>{item.cost}</p>
                                <p className='text-slate-400 text-sm'>{item.discount}</p>
                               </div>       
                               </div>
                            </div>
                        </div>
                    ))}
                </div> */}
            </div>
          <Link href={'/courses'}> <div className='text-center mt-10'><button className='text-white bg-sky-500  w-[200px] rounded-md h-[50px]'>See more courses</button></div></Link>
        </div>
    );
}

export default Course;
