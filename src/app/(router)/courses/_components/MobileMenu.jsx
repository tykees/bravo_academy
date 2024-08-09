import React from 'react';
import Link from 'next/link';


function MobileMenu() {


  return (
    <div>
        <ul className='flex justify-center bg-white py-2 text-primary border-t-2 border-slate-200 gap-6 md:invisible visible font-semibold items-center'>
          <Link href={'/dashboard'}> <li>Dashboard</li> </Link>
           <Link href={'courses'}> <li>All Courses</li> </Link>
           <Link href={'/'} ><li>MemberShip</li> </Link>
        </ul>
    </div>
  )
}

export default MobileMenu