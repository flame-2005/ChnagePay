// components/Navbar.js
import Link from 'next/link';
import { useEffect, useState } from 'react';

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

  return (
    <section className="shadow-lg font-poppins w-full sticky top-0 bg-custom-orange z-20">
      <div className=" px-4 mx-auto bg-custom-orange" x-data="{open:false}">
        <div className="relative flex items-center bg-custom-orange justify-between py-2">
          <a href="#" className="text-3xl font-semibold leading-none text-white">
            <h1>Logo</h1>
          </a>

          <div className="lg:hidden">
            <button
              className="flex items-center px-3 py-2 border border-blue-200 rounded text-white navbar-burger hover:text-blue-800 hover:border-blue-300 lg:hidden"
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
              <Link href="#" className="text-l font-bold text-white hover:text-blue-700">
                Home
              </Link>
            </li>
            <li>
              <Link href="#"className="text-l font-bold text-white hover:text-blue-700">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="text-l font-bold text-white hover:text-blue-700">
                Connect
              </Link>
            </li>
            <li>
              <Link href="#" className="text-l font-bold text-white hover:text-blue-700">
                Boxes
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="text-l font-bold  text-white hover:text-blue-700">
                Contact Us
              </Link>
            </li>
            
          </ul>

          <div className="hidden lg:block">
            <Link
              href="#"
              className="inline-block mr-2 text-xs font-semibold leading-none bg-white text-blue-600 border border-blue-200 rounded-full hover:border-blue-300 h-10 w-10"
            >
              <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1710566959/Group_55_x47r03.png" className='h-full w-full' alt="" />
              
            </Link>
           
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`fixed inset-0 w-full bg-gray-900 opacity-25 lg:hidden ${open ? 'translate-x-0 ease-in-opacity-100' : '-translate-x-full ease-out opacity-0'
            }`}
        ></div>

        <div
          className={`absolute inset-0 z-10 h-screen p-3 text-white duration-500 transform bg-gray-100 w-80 lg:hidden lg:transform-none lg:relative ${open ? 'translate-x-0 ease-in-opacity-100' : '-translate-x-full ease-out opacity-0'
            }`}
        >
          <div className="flex justify-between lg:flex">
            <a className="p-2 text-2xl font-bold text-white" href="#">
            </a>
            <button
              className="p-2 text-white rounded-md hover:text-blue-300 lg:hidden"
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
            <li class="pb-3">
              <Link href="/" onClick={() => setOpen(false)} class="text-sm text-white hover:text-blue-400">
                Home
              </Link>
            </li>
            <li class="pb-3">
              <Link href="/#about" onClick={() => setOpen(false)} class="text-sm text-white hover:text-blue-400">
                About us
              </Link>
            </li>
            <li class="pb-3">
              <Link href="/#contact" onClick={() => setOpen(false)} class="text-sm text-white hover:text-blue-400">
                Contact Us
              </Link>
            </li>
            <li class="pb-3">
              <Link href="/blogs" onClick={() => setOpen(false)} class="text-sm text-white hover:text-blue-400">
                Blog
              </Link>
            </li>
            <li class="pb-3">
              <Link href="/percentilepredictor" onClick={() => setOpen(false)} class="text-sm text-white hover:text-blue-400">
                Rank Predictor
              </Link>
            </li>
          </ul>
          {/* <div class="block mt-5 lg:hidden">
            <a
              href="#"
              class="inline-block w-full px-4 py-3 mb-4 mr-2 text-xs font-semibold leading-none text-center text-blue-600 border border-blue-400 rounded hover:border-blue-300"
            >
              Log In
            </a>
            <a href="#" class="inline-block w-full px-4 py-3 mr-2 text-xs font-semibold leading-none text-center text-gray-100 rounded bg-blue-800">
              Sign Up
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
