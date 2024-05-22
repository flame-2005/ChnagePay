// components/Navbar.js
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRef } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/alpinejs@2.x.x/dist/alpine.min.js'; // Adjust the version if needed
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);
  
  const [isVisible, setIsVisible] = useState(true);
  const prevScrollPos = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
      const isScrolledUp = prevScrollPos.current > currentScrollPos || currentScrollPos === 0;
      setIsVisible(isScrolledUp);
      prevScrollPos.current = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={`shadow-xl z-40 shadow-purple-200 font-poppins w-full sticky top-0z-20 navbar ${isVisible ? 'visible' : ''}`}>
      <div className=" px-4 mx-auto "
        style={{
          background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)'
        }} x-data="{open:false}">
        <div className="relative  flex items-center justify-between py-2"
          style={{
            background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)'
          }}>
          <a href="#" className="text-3xl font-semibold leading-none text-white">
            <h1>Logo</h1>
          </a>

          <div className="lg:hidden">
            <button
              className="flex items-center px-3 py-2 border rounded text-white navbar-burger lg:hidden"
              onClick={() => setOpen(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </button>
          </div>

          <ul className="hidden lg:w-auto lg:space-x-12 lg:items-center lg:flex">
            <li>
              <Link href="/" className="text-l font-bold hover:bg-White rounded-full text-white hover:px-2 transition-all">
                <p className=' rounded-full w-full h-full'
              >Home</p>
              </Link>
            </li>
            <li>
              <Link href="#" className="ext-l font-bold hover:bg-White rounded-full text-white hover:px-2 transition-all">
                About
              </Link>
            </li>
            <li>
              <Link href="/business" className="ext-l font-bold hover:bg-White rounded-full text-white  hover:px-2 transition-all">
                Student
              </Link>
            </li>
            <li>
              <Link href="/business#sellers" className="ext-l font-bold hover:bg-White rounded-full text-white  hover:px-2 transition-all">
                Sellers
              </Link>
            </li>
            <li>
              <Link href="/business#tech" className="ext-l font-bold hover:bg-White rounded-full text-white  hover:px-2 transition-all">
                Our Tech
              </Link>
            </li>
          </ul>

          <div className="hidden lg:block">
            <Link
              href="#"
              className="hidden inline-block mr-2 text-xs font-semibold leading-none bg-transparent text-blue-600 h-10 w-10"
            >
            
            </Link>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`fixed inset-0 w-full bg-gray-900 opacity-25 lg:hidden ${open ? 'translate-x-0 ease-in-opacity-100' : '-translate-x-full ease-out opacity-0'}`}
        ></div>

        <div
          className={`absolute inset-0 z-10 h-screen p-3 text-white duration-500 transform bg-gray-100 w-80 lg:hidden lg:transform-none lg:relative ${open ? 'translate-x-0 ease-in-opacity-100' : '-translate-x-full ease-out opacity-0'}`}
        >
          <div className="flex justify-between lg:flex">
            <a className="p-2 text-2xl font-bold text-white" href="#">
            </a>
            <button
              className="p-2 text-white rounded-md lg:hidden"
              onClick={() => setOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-x-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </button>
          </div>
          <ul className="px-4 text-left mt-7">
            <li className="pb-3">
              <Link href="/" onClick={() => setOpen(false)} className="text-sm text-white">
                Home
              </Link>
            </li>
            <li className="pb-3">
              <Link href="/#about" onClick={() => setOpen(false)} className="text-sm text-white">
                About us
              </Link>
            </li>
            <li className="pb-3">
              <Link href="/#contact" onClick={() => setOpen(false)} className="text-sm text-white">
                Contact Us
              </Link>
            </li>
            <li className="pb-3">
              <Link href="/blogs" onClick={() => setOpen(false)} className="text-sm text-white">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
