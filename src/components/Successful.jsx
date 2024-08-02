import React from 'react';
import Image from 'next/image';
import Pix from '../../public/pix.jpg';

const successfulStudent = [
    {
        Img: Pix,
        name: "Name",
        skill: "Skill",
    },
    {
        Img: Pix,
        name: "Name",
        skill: "Skill",
    },
    {
        Img: Pix,
        name: "Name",
        skill: "Skill",
    },
    {
        Img: Pix,
        name: "Name",
        skill: "Skill",
    },
    
]

const Successful = () => {
  return (
    <div className='container mx-auto mt-20'>
        <div>
            <h1 className='text-3xl font-bold'>Meet Our Succeesfull <br/> Students</h1>
            <p className='my-5 w-[400px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sunt, porro expedita in dolorem nemo cumque.</p>
        </div>
        <div className='flex justify-beween items-center'>
        {successfulStudent.map((item, index)=>(
           <div className='mb-4' key={index}>
             <div className=''>
               <Image className='w-[400px]' src={item.Img}/>
               <p className='my-3 font-bold'>{item.name}</p>
               <p>{item.skill}</p>
             </div>
         </div>
        ))}
        </div>
        <div className='text-center mt-10'>
                <button className='text-white bg-sky-500  w-[200px] rounded-sm h-[50px]'>View All</button>
            </div>
    </div>
  )
}

export default Successful