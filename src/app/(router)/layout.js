import React from 'react'
import SideNav from './_components/SideNav';
import Header from './_components/Header';
import Footer from '@/components/Footer';


function layout({children}) {
  return (
    <div className=''>
        <div className='sm:w-64 md:visible invisible sm:block fixed'>
            <SideNav/>
        </div>
        <div className='md:ml-64 ml-0'>
            <Header/>
        {children}
        <Footer/>
        </div>
       </div>
  )
}

export default layout