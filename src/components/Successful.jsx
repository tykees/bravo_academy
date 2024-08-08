import React from 'react';
import Image from 'next/image';
import Femi from '../../public/fem.png';
import Yusuf from '../../public/yusuf.png';
import Dav from '../../public/dav.png';
import Emma from '../../public/emma.png';
import Bawa from '../../public/bawa.png';
import Debby from '../../public/debby.png';
import Elu from '../../public/elu.png';
import Ude from '../../public/ude.png';
import Ama from '../../public/ama.png';
import Mat from '../../public/mat.png';
import Itse from '../../public/itse.png';




const successfulStudent = [
    {
        Img: Femi,
        name: "Femi Michael Balogun",
        skill: "Data Science/Dev",
    },
    {
        Img: Yusuf,
        name: "Yusuf Hassan",
        skill: "Data Science",
    },
    {
        Img: Dav,
        name: "Ivongbe David",
        skill: "Data Science",
    },
    {
        Img: Emma,
        name: "Aderibigbe Emmanuel",
        skill: "Product Manager",
    },
    {
        Img: Bawa,
        name: "Emmanuel Bawa",
        skill: "Product Manager",
    },
    {
        Img: Debby,
        name: "Akinola Deborah",
        skill: "Product Manager",
    },
    {
        Img: Elu,
        name: "Eluyode Victor",
        skill: "Cyber Security",
    },
    {
        Img: Ude,
        name: "Otisi Chinedu Ude",
        skill: "Cyber Security",
    },
    {
        Img: Ama,
        name: "Obasi Chiamaka",
        skill: "Cyber Security",
    },
    {
        Img: Mat,
        name: "Adegbite  Matthew",
        skill: "Product Designer",
    },
    {
        Img: Itse,
        name: "Jigbale Blessing",
        skill: "Backend Developer",
    },
    
]

const Successful = () => {
  return (
    <div className='lg:container mx-auto mt-20'>
        <div>
            <h1 className='text-3xl font-bold'>Meet Our Succeesfull <br/> Team</h1>
            <p className='my-5 w-[400px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sunt, porro expedita in dolorem nemo cumque.</p>
        </div>
        <div className='flex justify-center items-center flex-wrap lg:m-5 md:m-1 text-center'>
        {successfulStudent.map((item, index)=>(
           <div className='mb-4 m-1 p-2' key={index}>
             <div className='border shadow border-blue-200 w-[180px] min-h-[280px] container mx-auto'>
               <Image className='w-[150px] mt-3 bg-blue-200 rounded-full p-1' src={item.Img}/>
               <p className='my-3 text-md font-extrabold'>{item.name}</p>
               <p className='text-[16px] text-gray-400'>{item.skill}</p>
             </div>
         </div>
        ))}
        </div>
        <div className='text-center mt-10'>
                {/* <button className='text-white bg-sky-500  w-[200px] rounded-sm h-[50px]'>View All</button> */}
            </div>
    </div>
  )
}

export default Successful