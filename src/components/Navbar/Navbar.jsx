"use client"; // Add this line at the beginning

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './navbar.css';



const Navbar = () => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(typeof window !== 'undefined' ? window.innerWidth < 768 : false);
      setShowMenu(false); // Close the menu on resize
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMenuClick = () => {
    if (isMobile) {
      setShowMenu(!showMenu);
    }
  };

  const closeMobileMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav className="navbar shadow-sm">
      <div className="logo">
        <Link href={'/'} className="links w-[50px]">
          <Image className='' src={'/bravo.png'} width={200} height={200} alt="" />
        </Link>
      </div>

      {isMobile ? (
        <div className="hamburger" onClick={handleMenuClick}>
          <div className={`line ${showMenu ? 'open' : ''}`} />
          <div className={`line ${showMenu ? 'open' : ''}`} />
          <div className={`line ${showMenu ? 'open' : ''}`} />
        </div>
      ) : (
        <ul className="nav-links container flex items-center gap-3 justify-center text-center">
          <li>
            <Link href={'/'} className="links">
              Home
            </Link>
          </li>
          <li>
            <Link href={'/courses'} className="links">
              Courses
            </Link>
          </li>
          <li>
            <Link href={'/sign-in'} className="text-sky-600">
              Login
            </Link>
          </li>
          <li className=''>
            <Link className="p-3 ml-20 flex justify-end px-6 pt-2 text-sky-500 border border-sky-500 baseline hover:text-white hover:bg-blue-400" href={'/sign-up'}>Register</Link>
          </li>
        </ul>
      )}

      {isMobile && (
        <div className={`mobile-menu ${showMenu ? 'show' : ''}`}>
          <button className="close-button" onClick={closeMobileMenu}>
            X
          </button>
          <ul>
            <li>
              <Link href={'/'} className="links font-normal text-2xl" onClick={handleMenuClick}>
                Home
              </Link>
            </li>
            <li>
              <Link href={'/courses'} className="links font-normal text-2xl" onClick={handleMenuClick}>
                Courses
              </Link>
            </li>
            <li>
              <Link href={'/sign-in'} className="links font-normal text-2xl" onClick={handleMenuClick}>
                Login
              </Link>
            </li>
            <li>
            <Link className="p-3 ml-20 flex justify-end px-6 pt-2 text-white bg-blue-600 border rounded-lg baseline hover:bg-blue-400" href={'/sign-up'} onClick={handleMenuClick}>Sign Up </Link>
          </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
