import React from 'react'
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { IoMdClose } from "react-icons/io";

const Connect = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [isPopupOpen1, setIsPopupOpen1] = useState(false);
  const [shouldRender1, setShouldRender1] = useState(false);
  const [isPopupOpen2, setIsPopupOpen2] = useState(false);
  const [shouldRender2, setShouldRender2] = useState(false);
  const [isPopupOpen3, setIsPopupOpen3] = useState(false);
  const [shouldRender3, setShouldRender3] = useState(false);
  const [isPopupOpen4, setIsPopupOpen4] = useState(false);
  const [shouldRender4, setShouldRender4] = useState(false);
  const [isPopupOpen5, setIsPopupOpen5] = useState(false);
  const [shouldRender5, setShouldRender5] = useState(false);

  const togglePopup = () => {
    if (isPopupOpen) {
      setIsPopupOpen(false);
      setTimeout(() => setShouldRender(false), 100); // Delay removal for animation
    } else {
      setShouldRender(true);
      setTimeout(() => setIsPopupOpen(true), 0);
    }
  };
  const togglePopup1 = () => {
    if (isPopupOpen3) {
      setIsPopupOpen3(false);
      setTimeout(() => setShouldRender3(false), 100); // Delay removal for animation
    } else {
      setShouldRender3(true);
      setTimeout(() => setIsPopupOpen3(true), 0);
    }
  };
  const togglePopup2 = () => {
    if (isPopupOpen4) {
      setIsPopupOpen4(false);
      setTimeout(() => setShouldRender4(false), 100); // Delay removal for animation
    } else {
      setShouldRender4(true);
      setTimeout(() => setIsPopupOpen4(true), 0);
    }
  };
  const togglePopup3 = () => {
    if (isPopupOpen5) {
      setIsPopupOpen5(false);
      setTimeout(() => setShouldRender5(false), 100); // Delay removal for animation
    } else {
      setShouldRender5(true);
      setTimeout(() => setIsPopupOpen5(true), 0);
    }
  };
  const togglePopupCar = () => {
    if (isPopupOpen1) {
      setIsPopupOpen1(false);
      setTimeout(() => setShouldRender1(false), 100); // Delay removal for animation
    } else {
      setShouldRender1(true);
      setTimeout(() => setIsPopupOpen1(true), 0);
    }
  };
  const togglePopupLabour = () => {
    if (isPopupOpen2) {
      setIsPopupOpen2(false);
      setTimeout(() => setShouldRender2(false), 100); // Delay removal for animation
    } else {
      setShouldRender2(true);
      setTimeout(() => setIsPopupOpen2(true), 0);
    }
  };

  const { ref: firstItemRef, inView: firstItemInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: secontItemRef, inView: secondItemInView } = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });
  const { ref:  fourthItemRef, inView: fourthItemInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: fifthItemRef, inView: fifthItemInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: sixthItemRef, inView: sixthItemInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref:  seventhItemRef, inView: seventhItemInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: eighthItemRef, inView: eighthItemInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: ninthItemRef, inView: ninthItemInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: tenthItemRef, inView: tenthItemInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: eleventhItemRef, inView: eleventhItemInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  const { ref: firstSectionRef, inView: firstSectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: secondSectionRef, inView: secondSectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <div className='mt-24 overflow-hidden'>
      <div className='w-screen mx-auto flex items-center justify-center'>

        <p className="text-black text-center text-4xl font-bold inline-block">              Simplifying campus life 
 
 </p>
 <span className="inline-block">&nbsp;</span>
 <p className='text-4xl text-center font-bold text-custom-orange inline-block'>
 with tech solution
 </p>
      </div>
 <div className='flex item center mt-10 ml-10'>
  
    
    <div className="text-center font-bold my-auto ml-12">
  <p className="inline-block text-4xl text-black">Our</p>
  <span className="inline-block">&nbsp;</span>
  <span className="inline-block">&nbsp;</span>
  <p className="inline-block text-4xl text-custom-orange">Tech Stack</p>
</div>
 </div>
 <ol

  className={ `md:flex md:justify-center md:gap-6  p-10 `}>
  {/* <!--First item--> */}
  <li ref={firstItemRef} className={`border-2 p-2  rounded-md max-w-sm ${firstItemInView ? 'slide-in-right' : 'slide-out-right'}`}>
  <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1714297758/Ellipse_64_azpkkk.png" className='border rounded-full h-36 mt-5 mx-auto' alt="" />
    <div className="ms-4 mt-2 pb-5 md:ms-0">
      <h4 className="mb-1.5 text-xl font-semibold text-custom-orange text-center">Seller Application:</h4>
      <p className="mb-3 text-center ">
      Sellers can manage 
orders, update menus 
and prices, and offer discounts
 using this app
      </p>
    </div>
  </li>

  {/* <!--Second item--> */}
  <li ref={secontItemRef} className={`border-2 p-2 rounded-md max-w-sm ${secondItemInView ? 'slide-in-right' : 'slide-out-right'}`}>
  <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1714297946/Ellipse_64_bwnijg.png" className='border rounded-full h-36 mt-5 mx-auto' alt="" />
    <div className="ms-4 mt-2 pb-5 md:ms-0">
      <h4 className="mb-1.5 text-xl font-semibold text-custom-orange text-center">Customer Application:</h4>
      <p className="mb-3 text-center ">
      Enjoy an intuitive interface for ordering from multiple stores and
      accessing a variety of student  curated products
      </p>
    </div>
  </li>
  <li ref={secontItemRef} className={ `border-2 p-2 rounded-md max-w-sm ${secondItemInView ? 'slide-in-right' : 'slide-out-right'}`}>
  <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1716351420/a5d2qw1y9ikcokusc7pq.png" className='border rounded-full h-36 mt-5 mx-auto' alt="" />
    <div className="ms-4 mt-2 pb-5 md:ms-0">
      <h4 className="mb-1.5 text-xl font-semibold text-custom-orange text-center">Delivery Application:</h4>
      <p className="mb-3 text-center ">
      Facilitates easy pickup and drop-off, provides location access, and enables seamless  collection of payments
      </p>
    </div>
  </li>
</ol>
 
   
<section
 style={{
  background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)'
}}
className="text-white body-font mt-10">
  <div className="container mx-auto flex px-5 pt-16 pb-10 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <div className="title-font sm:text-4xl text-3xl font-medium text-white inline-block">ChangePay presents you to the amazing SMARTBOX</div>
      <p className="mb-8 leading-relaxed">Smartbox/S-Box is a device we designed to enable contactless delivery of food, groceries, e-commerce deliveries.</p>
    
      <p className="text-sm mt-2 text-white mb-8 w-full">Download our App now</p>
      <div className="flex lg:flex-row md:flex-col">
        <button className=" inline-flex text-white border-white border-2 hover:text-black py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 512 512">
            <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
          </svg>
          <span className="ml-4 flex items-start flex-col leading-none">
            <span className="text-xs mb-1">GET IT ON</span>
            <span className="title-font font-medium">Google Play</span>
          </span>
        </button>
        <button className=" inline-flex text-white border-white border-2 hover:text-black py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 305 305">
            <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
            <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
          </svg>
          <span className="ml-4 flex items-start flex-col leading-none">
            <span className="text-xs mb-1">Download on the</span>
            <span className="title-font font-medium">App Store</span>
          </span>
        </button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded h-96" alt="hero" src="https://res.cloudinary.com/dtyombve3/image/upload/v1718260618/glyezl4rq11kjwskwerg.png"/>
      <p className='relative left-10 bottom-32 vertical-text text-3xl'>S-BOX</p>
    </div>
  </div>
  <section className="text-gray-600 body-font">
  <div className="container px-5 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/3">
        <div className="h-full bg-gray-100 bg-opacity-75 px-14 pt-2 pb-2 rounded-lg overflow-hidden text-center relative">
          
          <p className="leading-relaxed mb-3 text-left text-black">An IOT device designed for convenient delivery of parcels</p>
         
          
        </div>
      </div>
      <div className="p-4 lg:w-1/3">
        <div className="h-full bg-gray-100 bg-opacity-75 px-14 pt-2 pb-2 rounded-lg overflow-hidden text-center relative">
          

          <p className="leading-relaxed mb-3 text-left text-black">It is operated only with Changepay mobile applications.</p>
         
          
        </div>
      </div>
      <div className="p-4 lg:w-1/3">
        <div className="h-full bg-gray-100 bg-opacity-75 px-14 pt-2 pb-2 rounded-lg overflow-hidden text-center relative ">
          
          
          <p className="leading-relaxed mb-3 text-left text-black">The delivery of the parcels and orders happens through SmartBox.</p>
         
          
        </div>
      </div>
    </div>
  </div>
</section>
</section>
<section className="overflow-hidden text-gray-600 body-font mt-16">
<div className='flex item center ml-24'>
    
    <div className="text-center font-bold my-auto">
  <p className="inline-block text-4xl text-black">How does  </p>
  <span className="inline-block">&nbsp;</span>
  <span className="inline-block">&nbsp;</span>
  <p className="inline-block text-4xl text-custom-orange">SmartBox Works? </p>
</div>
 </div>
  <div className="mr-14 container mx-auto flex px-5 md:flex-row flex-col justify-center items-center">
   
<ol className="relative border-s border-gray-200 dark:border-gray-700 mt-16">                  
    <li  className={`mb-10 ms-6 `}>            
        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-custom-orange dark:bg-blue-900">
            <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        </span>
        <h3 ref={seventhItemRef} className={`flex items-center mb-1 text-lg font-semibold text-gray-900 ${seventhItemInView ? 'slide-in-right' : 'slide-out-right'}`}>Place an order on  ChangePay with SmartBox 
Delivery Options</h3>
       
        
        
    </li>
    <li  className={`mb-10 ms-6 `}>            
        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-custom-orange dark:bg-blue-900">
            <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        </span>
        <h3 ref={eighthItemRef} className={`flex items-center mb-1 text-lg font-semibold text-gray-900 ${eighthItemInView ? 'slide-in-right' : 'slide-out-right'}`}>Seller  accept the order</h3>
       
        
        
    </li>
    <li  className={`mb-10 ms-6 `}>            
        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-custom-orange dark:bg-blue-900">
            <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        </span>
        <h3 ref={ninthItemRef} className={`flex items-center mb-1 text-lg font-semibold text-gray-900  ${ninthItemInView ? 'slide-in-right' : 'slide-out-right'}`}>  Delivery agents drop the orders in the box</h3>
       
        
        
    </li>
    <li  className={`mb-10 ms-6 `}>            
        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-custom-orange dark:bg-blue-900">
            <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        </span>
        <h3 ref={tenthItemRef} className={`flex items-center mb-1 text-lg font-semibold text-gray-900 dark: ${tenthItemInView ? 'slide-in-right' : 'slide-out-right'}`}>Get notification about order being delivered to smartbox</h3>
       
        
        
    </li>
    <li  className={`mb-10 ms-6 `}>            
        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-custom-orange dark:bg-blue-900">
            <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        </span>
        <h3 ref={eleventhItemRef} className={`flex items-center mb-1 text-lg font-semibold text-gray-900 ${eleventhItemInView ? 'slide-in-right' : 'slide-out-right'}`}>Use app to open SmartBox</h3>
       
        
        
    </li>
  
   
</ol>


    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ml-32">
    <video width="640" height="360" controls autoplay>
    <source src="https://res.cloudinary.com/dtyombve3/video/upload/v1715497586/Changepay_-_Smartbox_operation_video_yqxecc.mp4" type="video/mp4"/>
</video>

    </div>
  </div>
</section>

<section ref={secondSectionRef} className={` text-gray-600 body-font ${secondSectionInView ? 'animate__animated animate__bounceInUp fade-in' : 'fade-out'}`}>
  <div className="container px-5 py-24 mx-auto">
  <div className="text-center font-bold mb-10">
  <p className="inline-block text-4xl text-black">Our</p>
  <span className="inline-block">&nbsp;</span>
  <span className="inline-block">&nbsp;</span>
  <p className="inline-block text-4xl text-custom-orange">Services</p>
</div>
    <div className="flex flex-wrap -m-4">
    
     
      <div className="xl:w-1/3 md:w-1/2 p-4 ">
        <div className="p-6 border-2 rounded-md shadow-md">
          <div className="w-full h-10 inline-flex items-center justify-center rounded-full text-custom-orange mb-4">
            <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1718085176/hsh7lw0s2d6b2qgwmkld.webp" className="h-20 w-20 rounded-full" alt="" />
          </div>
          <h2 className="text-lg text-gray-900 title-font mb-2 text-center font-bold">Food & Grocery Delivery
          </h2>
           </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4 ">
        <div className="p-6 border-2  rounded-md shadow-md">
          <div className="w-full h-10 inline-flex items-center justify-center rounded-full text-custom-orange mb-4">
            <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1718085326/tojugqhorjndr15iytrt.webp" className="h-20 w-20 rounded-full" alt="" />
          </div>
          <h2 className="text-lg text-gray-900 font-bold title-font mb-2 text-center">Laundry Booking
          </h2>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4 ">
        <div className="p-6 border-2 rounded-md shadow-md">
          <div className="w-full h-10 inline-flex items-center justify-center rounded-full text-custom-orange mb-4">
            <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1718085323/orqubd9w9umlynshtkuo.webp" className="h-20 w-20 rounded-full" alt="" />
          </div>
          <h2 className="text-lg text-gray-900 font-bold title-font mb-2 text-center">Salon Booking
          </h2>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4 ">
        <div className="p-6 border-2 rounded-md shadow-md">
          <div className="w-full h-10 inline-flex items-center justify-center rounded-full text-custom-orange mb-4">
            <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1718085324/xeyndf6ekeqmo2qq7jfs.webp" className="h-20 rounded-full" alt="" />
          </div>
          <h2 className="text-lg text-gray-900 font-bold title-font mb-2 text-center">Gym & Sports Slot Booking
          </h2>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4 ">
        <div className="p-6 border-2 rounded-md shadow-md">
          <div className="w-full h-10 inline-flex items-center justify-center rounded-full text-custom-orange mb-4">
            <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1718085323/dh6zqhahfnpx4rnrtjfi.webp" className="h-20 w-20 rounded-full" alt="" />
          </div>
          <h2 className="text-lg text-gray-900 font-bold title-font mb-2 text-center">Mess Food Subscription
          </h2>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4 ">
        <div className="p-6  border-2 rounded-md shadow-md">
          <div className="w-full h-10 inline-flex items-center justify-center rounded-full text-custom-orange mb-4">
            <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1718085324/orslvo0tekjtot7bohb5.webp" className="h-20 w-24 rounded-full" alt="" />
          </div>
          <h2 className="text-lg text-gray-900 font-bold title-font mb-2 text-center">Other Student-Exclusive Offers</h2>
        </div>
      </div>
       

    </div>
  </div>
</section>
<div className='text-gray-600 body-font pb-20'>
  <div className="container px-5 mx-auto">
    <div className="text-center font-bold mb-10">
      <p className="inline-block text-4xl text-black">Our</p>
      <span className="inline-block">&nbsp;</span>
      <span className="inline-block">&nbsp;</span>
      <p className="inline-block text-4xl text-custom-orange">Gallery</p>
    </div>
  </div>
  <div className="container mx-auto px-5 py-2 lg:px-32">
    <div className="-m-1 flex flex-wrap md:-m-2">
      <div className="flex w-1/2 flex-wrap">
        <div
        onClick={togglePopup}
         className="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-48 w-full rounded-lg object-cover object-center hover:cursor-pointer"
            src="https://res.cloudinary.com/dtyombve3/image/upload/v1714701426/Block_21_js9wsi.jpg" />
             {shouldRender && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className={`popup-content ${isPopupOpen ? 'open' : 'close'}`}>
            <section className="text-gray-600 body-font overflow-hidden">
              <div className="container px-5 py-8 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                  <img
                    alt="ecommerce"
                    className="w-full h-full object-cover object-center rounded"
                    src="https://res.cloudinary.com/dtyombve3/image/upload/v1714701426/Block_21_js9wsi.jpg"
                  />
                </div>
              </div>
            </section>
            <button
              className="absolute top-4 right-4 bg-red-500 text-white rounded-full p-2"
              onClick={togglePopup}
            >
              <IoMdClose />
            </button>
          </div>
        </div>
      )}
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <img
          onClick={togglePopupCar}
            alt="gallery"
            className="block h-48 w-full rounded-lg object-cover object-center hover:cursor-pointer"
            src="https://res.cloudinary.com/dtyombve3/image/upload/v1714701474/Block_13_xy1iuy.jpg" />
                         {shouldRender1 && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className={`popup-content ${isPopupOpen1 ? 'open' : 'close'}`}>
            <section className="text-gray-600 body-font overflow-hidden">
              <div className="container px-5 py-8 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                  <img
                    alt="ecommerce"
                    className="w-full h-full object-cover object-center rounded"
                    src="https://res.cloudinary.com/dtyombve3/image/upload/v1714701474/Block_13_xy1iuy.jpg"
                  />
                </div>
              </div>
            </section>
            <button
              className="absolute top-4 right-4 bg-red-500 text-white rounded-full p-2"
              onClick={togglePopupCar}
            >
              <IoMdClose />
            </button>
          </div>
        </div>
      )}
        </div>
        <div className="w-full p-1 md:p-2">
          <img
          onClick={togglePopupLabour}
            alt="gallery"
            className="block h-48 w-full rounded-lg object-cover object-center hover:cursor-pointer"
            src="https://res.cloudinary.com/dtyombve3/image/upload/v1714701507/Block_22_k9qsvt.jpg" />
            {shouldRender2 && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className={`popup-content ${isPopupOpen2 ? 'open' : 'close'}`}>
            <section className="text-gray-600 body-font overflow-hidden">
              <div className="container px-5 py-8 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                  <img
                    alt="ecommerce"
                    className="w-full h-full object-cover object-center rounded"
                    src="https://res.cloudinary.com/dtyombve3/image/upload/v1714701507/Block_22_k9qsvt.jpg"
                  />
                </div>
              </div>
            </section>
            <button
              className="absolute top-4 right-4 bg-red-500 text-white rounded-full p-2"
              onClick={togglePopupLabour}
            >
              <IoMdClose />
            </button>
          </div>
        </div>
      )}
        </div>
      </div>
      <div className="flex w-1/2 flex-wrap">
        <div className="w-full p-1 md:p-2">
          <img
          onClick={togglePopup1}
            alt="gallery"
            className="block h-48 w-full rounded-lg object-cover object-center hover:cursor-pointer"
            src="https://res.cloudinary.com/dtyombve3/image/upload/v1714701524/Block_16_wjmyj6.jpg" />
                        {shouldRender3 && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className={`popup-content ${isPopupOpen3 ? 'open' : 'close'}`}>
            <section className="text-gray-600 body-font overflow-hidden">
              <div className="container px-5 py-8 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                  <img
                    alt="ecommerce"
                    className="w-full h-full object-cover object-center rounded"
                    src="https://res.cloudinary.com/dtyombve3/image/upload/v1714701524/Block_16_wjmyj6.jpg"
                  />
                </div>
              </div>
            </section>
            <button
              className="absolute top-4 right-4 bg-red-500 text-white rounded-full p-2"
              onClick={togglePopup1}
            >
              <IoMdClose />
            </button>
          </div>
        </div>
      )}
            
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <img
          onClick={togglePopup2}
            alt="gallery"
            className="block h-48 w-full rounded-lg object-cover object-center hover:cursor-pointer"
            src="https://res.cloudinary.com/dtyombve3/image/upload/v1714701526/Block_15_b03byr.jpg" />
                                    {shouldRender4 && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className={`popup-content ${isPopupOpen4 ? 'open' : 'close'}`}>
            <section className="text-gray-600 body-font overflow-hidden">
              <div className="container px-5 py-8 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                  <img
                    alt="ecommerce"
                    className="w-full h-full object-cover object-center rounded"
                    src="https://res.cloudinary.com/dtyombve3/image/upload/v1714701526/Block_15_b03byr.jpg"
                  />
                </div>
              </div>
            </section>
            <button
              className="absolute top-4 right-4 bg-red-500 text-white rounded-full p-2"
              onClick={togglePopup2}
            >
              <IoMdClose />
            </button>
          </div>
        </div>
      )}
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <img
          onClick={togglePopup3}
            alt="gallery"
            className="block h-48 w-full rounded-lg object-cover object-center hover:cursor-pointer"
            src="https://res.cloudinary.com/dtyombve3/image/upload/v1714701530/Block1_2_ndv6lq.jpg" />
                                                {shouldRender5 && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className={`popup-content ${isPopupOpen5 ? 'open' : 'close'}`}>
            <section className="text-gray-600 body-font overflow-hidden">
              <div className="container px-5 py-8 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                  <img
                    alt="ecommerce"
                    className="w-full h-full object-cover object-center rounded"
                    src="https://res.cloudinary.com/dtyombve3/image/upload/v1714701530/Block1_2_ndv6lq.jpg"
                  />
                </div>
              </div>
            </section>
            <button
              className="absolute top-4 right-4 bg-red-500 text-white rounded-full p-2"
              onClick={togglePopup3}
            >
              <IoMdClose />
            </button>
          </div>
        </div>
      )}
        </div>
      </div>
    </div>
  </div>
</div>

<section id='User' className="gradient-form h-full ">
  <div className="container h-full p-10 mx-auto">
    <div
      className="flex mx-auto h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
      <div className="w-full">
        <div
          className="block rounded-lg bg-white shadow-lg ">
          <div className="g-0 lg:flex lg:flex-wrap">
            {/* <!-- Left column container--> */}
            <div className="px-4 md:px-0 lg:w-6/12">
              <div className="md:mx-6">
                {/* <!--Logo--> */}
                <div className="text-center">
                  <img
                    className="mx-auto w-48"
                    src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                    alt="logo" />
                  <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold text-black">
                    We are The ChangePay Team
                  </h4>
                </div>

                <form>
                  <p className="mb-4 text-black">Lets connect</p>
                  {/* <!--Username input--> */}
                  <div className="relative mb-4" data-twe-input-wrapper-init>
                    <input
                      type="text"
                      className="peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0 border-2 border-custom-orange text-black "
                      id="exampleFormControlInput1"
                      placeholder="Username" />
                    <label
                      for="exampleFormControlInput1"
                      className="pointer-events-none text-black absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6]  transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                      >Username
                    </label>
                  </div>

                  {/* <!--Password input--> */}
                  <div className="relative mb-4" data-twe-input-wrapper-init>
                    <input
                      type="Email"
                      className="peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0 border-2 border-custom-orange text-black "
                      id="exampleFormControlInput1"
                      placeholder="Username" />
                    <label
                      for="exampleFormControlInput1"
                      className="pointer-events-none text-black absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6]  transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                      >Email
                    </label>
                  </div>
                  <div className="relative mb-4" data-twe-input-wrapper-init>
                    <input
                      type="Email"
                      className="peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0 border-2 border-custom-orange text-black "
                      id="exampleFormControlInput1"
                      placeholder="Username" />
                    <label
                      for="exampleFormControlInput1"
                      className="pointer-events-none text-black absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6]  transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                      >Phone No
                    </label>
                  </div>
                  <div className="relative mb-4" data-twe-input-wrapper-init>
  <select
    className="peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0 border-2 border-custom-orange text-black"
    id="exampleFormControlInput1">
    <option value="" disabled selected>Interested Role</option>
    <option value="option1">Student</option>
    <option value="option2">Seller</option>
    <option value="option3">Campus</option>
  </select>
 
</div>

<div className="relative mb-4" data-twe-input-wrapper-init>
                    <input
                      type="Email"
                      className="peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0 border-2 border-custom-orange text-black "
                      id="exampleFormControlInput1"
                      placeholder="Username" />
                    <label
                      for="exampleFormControlInput1"
                      className="pointer-events-none text-black absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6]  transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                      >Requirements or Specific Questions
                    </label>
                  </div>


                  {/* <!--Submit button--> */}
                  <div className="mb-12 pb-1 pt-1 text-center">
                    <button
                      className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal  shadow-dark-3 transition duration-150 ease-in-out hover:shadow-dark-2 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:shadow-dark-2 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong bg-gradient-to-r from-orange-500 via-red-600 to-pink-600"
                      type="button"
                      data-twe-ripple-init
                      data-twe-ripple-color="light"
                     >
                      Connect
                    </button>

                    {/* <!--Forgot password link--> */}
                  </div>

                  {/* <!--Register button--> */}
              
                </form>
              </div>
            </div>

            {/* <!-- Right column container with background and description--> */}
            <div
  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-e-lg lg:rounded-bl-none"
  style={{
    background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)'
  }}
>
  <div className="px-4 py-6  md:mx-6 md:p-12">
    <h4 className="mb-6 text-xl font-semibold">
      We are more than just a company
    </h4>
    <p className="text-sm">
    Changepays directors, executives, and advisors have fostered a community-focused approach, emphasizing partnerships and fostering entrepreneurship opportunities for students while studying. Our vision is to serve as a bridge for students to explore industry and startup experiences.
    </p>
  </div>
</div>

          </div>
       
        </div>
      </div>
    </div>
  </div>
</section>
</div>


  )
}

export default Connect
