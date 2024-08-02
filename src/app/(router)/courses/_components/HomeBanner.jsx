import React from 'react';
import Image from 'next/image';

function HomeBanner() {
  return (
    <div>
        <Image src='/bravobanner.png' alt='Bravo Banner' width={1000} height={100} className="rounded-2xl"/>
    </div>
  )
}

export default HomeBanner