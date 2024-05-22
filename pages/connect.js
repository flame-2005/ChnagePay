import React from 'react'
import { useInView } from 'react-intersection-observer';


const Connect = () => {
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
    <div className='mt-20'>
        <p className="text-black text-center text-4xl font-bold">              Simplifying campus life with tech solution
 
 </p>
 <div className='flex item center mt-10'>
    <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1714305416/bxs_up-arrow_lzl8uu.png" className='h-24' alt="" />
    <div class="text-center font-bold my-auto">
  <p class="inline-block text-4xl text-black">The complete ECommerce App</p>
  <span class="inline-block">&nbsp;</span>
  <span class="inline-block">&nbsp;</span>
  <p class="inline-block text-4xl text-custom-orange">Tech Stack Solution</p>
</div>
 </div>
 <ol

  class={ `md:flex md:justify-center md:gap-6  p-10 mx-auto `}>
  {/* <!--First item--> */}
  <li ref={firstItemRef} className={`ml-5 ${firstItemInView ? 'slide-in-right' : 'slide-out-right'}`}>
  <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1714297758/Ellipse_64_azpkkk.png" className='border rounded-full h-52 mt-5 mx-auto' alt="" />
    <div class="ms-4 mt-2 pb-5 md:ms-0">
      <h4 class="mb-1.5 text-xl font-semibold text-custom-orange text-center">Seller Application:</h4>
      <p class="mb-3 text-center ">
      Sellers can manage 
\orders, update menus 
and prices, and offer discounts
 using this app
      </p>
    </div>
  </li>

  {/* <!--Second item--> */}
  <li ref={secontItemRef} className={`max-w-md ${secondItemInView ? 'slide-in-right' : 'slide-out-right'}`}>
  <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1714297946/Ellipse_64_bwnijg.png" className='border rounded-full h-52 mt-5 mx-auto' alt="" />
  <div class="flex-start flex items-center pt-2 md:block md:pt-0">
          </div>
    <div class="ms-4 mt-2 pb-5 md:ms-0">
      <h4 class="mb-1.5 text-xl font-semibold text-custom-orange text-center">Customer Application:</h4>
      <p class="mb-3 text-center ">
      Enjoy an intuitive interface for ordering from multiple stores and
      accessing a variety of student curated products
      </p>
    </div>
  </li>
  <li ref={secontItemRef} className={`${secondItemInView ? 'slide-in-right' : 'slide-out-right'}`}>
  <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1716351420/a5d2qw1y9ikcokusc7pq.png" className='border rounded-full h-52 mt-5 mx-auto' alt="" />
  <div class="flex-start flex items-center pt-2 md:block md:pt-0">
          </div>
    <div class="ms-4 mt-2 pb-5 md:ms-0">
      <h4 class="mb-1.5 text-xl font-semibold text-custom-orange text-center">Delivery Application:</h4>
      <p class="mb-3 text-center ">
      Facilitates easy pickup and drop-off, provides location access, and enables seamless  collection of payments
      </p>
    </div>
  </li>
</ol>
 
   
<div>

        <div className='flex item center'>
    <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1714305416/bxs_up-arrow_lzl8uu.png" className='h-24' alt="" />
    <div class="text-center font-bold my-auto">
  <p class="inline-block text-4xl text-black">Introducing a Cutting-Edge and </p>
  <span class="inline-block">&nbsp;</span>
  <span class="inline-block">&nbsp;</span>
  <p class="inline-block text-4xl text-custom-orange">User-Friendly IoT SmartBox. </p>
</div>
 </div>
 <section ref={firstSectionRef} class={`text-gray-600 body-font ${firstSectionInView ? 'animate__animated animate__bounceInUp fade-in' : 'fade-out'}`}>
  <div class="container mx-auto flex px-5 md:flex-row flex-col">
    <div class="mb-10 md:mb-0 flex justify-end">
      <img class="object-cover object-center rounded h-96" alt="hero" src="https://res.cloudinary.com/dtyombve3/image/upload/v1714305919/Rectangle_36_tfpl3n.png" className=''/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left text-center">
      <h1 class="title-font sm:text-2xl text-3xl mb-4 font-medium text-gray-900">SmartBox/SBox is a device 
We designed to 
Enable Contactless delivery
for
 food,gloceries and ECommers DElivery</h1>
     <ul className=''>
      <li ref={fourthItemRef} className={`mb-8 leading-relaxed font-bold list-disc list-item text-custom-orange ${fourthItemInView? 'slide-in-right' : 'slide-out-right'}`}>An IOT device  Designed  for Convenient 
delivery of parcels </li>
      <li ref={fifthItemRef} className={`mb-8 leading-relaxed font-bold list-disc list-item text-custom-orange ${fifthItemInView ? 'slide-in-right' : 'slide-out-right'}`}>An IOT device  Designed  for Convenient 
delivery of parcels </li>
      <li ref={sixthItemRef} className={`mb-8 leading-relaxed font-bold list-disc list-item text-custom-orange ${sixthItemInView ? 'slide-in-right' : 'slide-out-right'}`}>An IOT device  Designed  for Convenient 
delivery of parcels </li>
     </ul>
   
     
    </div>
  </div>
</section>
</div>
<section class="text-gray-600 body-font mt-16">
<div className='flex item center'>
    <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1714305416/bxs_up-arrow_lzl8uu.png" className='h-20' alt="" />
    <div class="text-center font-bold my-auto">
  <p class="inline-block text-4xl text-black">How does SmartBox Works </p>
  <span class="inline-block">&nbsp;</span>
  <span class="inline-block">&nbsp;</span>
  {/* <p class="inline-block text-4xl text-custom-orange">User-Friendly IoT SmartBox. </p> */}
</div>
 </div>
  <div class="container mx-auto flex px-5 md:flex-row flex-col items-center">
   
<ol class="relative border-s border-gray-200 dark:border-gray-700 mt-20">                  
    <li  class={`mb-10 ms-6 `}>            
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-custom-orange dark:bg-blue-900">
            <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        </span>
        <h3 ref={seventhItemRef} class={`flex items-center mb-1 text-lg font-semibold text-gray-900 ${seventhItemInView ? 'slide-in-right' : 'slide-out-right'}`}>Place an order on  ChangePay with SmartBox 
Delivery Options</h3>
       
        
        
    </li>
    <li  class={`mb-10 ms-6 `}>            
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-custom-orange dark:bg-blue-900">
            <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        </span>
        <h3 ref={eighthItemRef} class={`flex items-center mb-1 text-lg font-semibold text-gray-900 ${eighthItemInView ? 'slide-in-right' : 'slide-out-right'}`}>Seller  accept the order</h3>
       
        
        
    </li>
    <li  class={`mb-10 ms-6 `}>            
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-custom-orange dark:bg-blue-900">
            <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        </span>
        <h3 ref={ninthItemRef} class={`flex items-center mb-1 text-lg font-semibold text-gray-900  ${ninthItemInView ? 'slide-in-right' : 'slide-out-right'}`}>  Delivery agents drop the orders in the box</h3>
       
        
        
    </li>
    <li  class={`mb-10 ms-6 `}>            
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-custom-orange dark:bg-blue-900">
            <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        </span>
        <h3 ref={tenthItemRef} class={`flex items-center mb-1 text-lg font-semibold text-gray-900 dark: ${tenthItemInView ? 'slide-in-right' : 'slide-out-right'}`}>Get notification about order being delivered to smartbox</h3>
       
        
        
    </li>
    <li  class={`mb-10 ms-6 `}>            
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-custom-orange dark:bg-blue-900">
            <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        </span>
        <h3 ref={eleventhItemRef} class={`flex items-center mb-1 text-lg font-semibold text-gray-900 ${eleventhItemInView ? 'slide-in-right' : 'slide-out-right'}`}>Use app to open SmartBox</h3>
       
        
        
    </li>
  
   
</ol>


    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ml-20">
    <video width="640" height="360" controls autoplay>
    <source src="https://res.cloudinary.com/dtyombve3/video/upload/v1715497586/Changepay_-_Smartbox_operation_video_yqxecc.mp4" type="video/mp4"/>
</video>

    </div>
  </div>
</section>
<section ref={secondSectionRef} class={`text-gray-600 body-font ${secondSectionInView ? 'animate__animated animate__bounceInUp fade-in' : 'fade-out'}`}>
  <div class="container px-5 py-14 mx-auto">
  <div class="text-center font-bold mb-10">
  <p class="inline-block text-4xl text-black">Support</p>
  <span class="inline-block">&nbsp;</span>
  <span class="inline-block">&nbsp;</span>
  <p class="inline-block text-4xl text-custom-orange"></p>
</div>
    <div class="flex flex-wrap -m-4">
    
     
      <div class="xl:w-1/3 md:w-1/2">
        <div class="p-6 rounded-lg">
          <div class="w-full h-10 inline-flex items-center justify-center rounded-full text-custom-orange mb-4">
            <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1712975084/Vector_xmxtn1.png" className="h-20" alt="" />
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2 text-center">Fast Service</h2>
          <p class="leading-relaxed text-base text-center"> Say goodbye to long queues
 in the canteens.
</p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="p-6 rounded-lg">
          <div class="w-full h-10 inline-flex items-center justify-center rounded-full text-custom-orange mb-4">
            <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1712973875/carbon_customer_xzqqb9.png" className="h-20" alt="" />
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2 text-center">Easy Access</h2>
          <p class="leading-relaxed text-base text-center">Receive food orders directly through our application, not via WhatsApp.</p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 ">
        <div class="p-6 rounded-lg">
          <div class="w-full h-10 inline-flex items-center justify-center rounded-full text-custom-orange mb-4">
            <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1712975698/carbon_location_y81pl6.png" className="h-20" alt="" />
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2 text-center">Live Tracking</h2>
          <p class="leading-relaxed text-base text-center">Enjoy improved order tracking and convenience.</p>
        </div>
      </div>
    </div>
  </div>
</section>
<div class='text-gray-600 body-font pb-20'>
  <div class="container px-5 mx-auto">
    <div class="text-center font-bold mb-10">
      <p class="inline-block text-4xl text-black">Our</p>
      <span class="inline-block">&nbsp;</span>
      <span class="inline-block">&nbsp;</span>
      <p class="inline-block text-4xl text-custom-orange">Gallery</p>
    </div>
  </div>
  <div class="container mx-auto px-5 py-2 lg:px-32">
    <div class="-m-1 flex flex-wrap md:-m-2">
      <div class="flex w-1/2 flex-wrap">
        <div class="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            class="block h-48 w-full rounded-lg object-cover object-center"
            src="https://res.cloudinary.com/dtyombve3/image/upload/v1714701426/Block_21_js9wsi.jpg" />
        </div>
        <div class="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            class="block h-48 w-full rounded-lg object-cover object-center"
            src="https://res.cloudinary.com/dtyombve3/image/upload/v1714701474/Block_13_xy1iuy.jpg" />
        </div>
        <div class="w-full p-1 md:p-2">
          <img
            alt="gallery"
            class="block h-48 w-full rounded-lg object-cover object-center"
            src="https://res.cloudinary.com/dtyombve3/image/upload/v1714701507/Block_22_k9qsvt.jpg" />
        </div>
      </div>
      <div class="flex w-1/2 flex-wrap">
        <div class="w-full p-1 md:p-2">
          <img
            alt="gallery"
            class="block h-48 w-full rounded-lg object-cover object-center"
            src="https://res.cloudinary.com/dtyombve3/image/upload/v1714701524/Block_16_wjmyj6.jpg" />
        </div>
        <div class="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            class="block h-48 w-full rounded-lg object-cover object-center"
            src="https://res.cloudinary.com/dtyombve3/image/upload/v1714701526/Block_15_b03byr.jpg" />
        </div>
        <div class="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            class="block h-48 w-full rounded-lg object-cover object-center"
            src="https://res.cloudinary.com/dtyombve3/image/upload/v1714701530/Block1_2_ndv6lq.jpg" />
        </div>
      </div>
    </div>
  </div>
</div>

<section id='User' class="gradient-form h-full ">
  <div class="container h-full p-10 mx-auto">
    <div
      class="flex mx-auto h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
      <div class="w-full">
        <div
          class="block rounded-lg bg-white shadow-lg ">
          <div class="g-0 lg:flex lg:flex-wrap">
            {/* <!-- Left column container--> */}
            <div class="px-4 md:px-0 lg:w-6/12">
              <div class="md:mx-6">
                {/* <!--Logo--> */}
                <div class="text-center">
                  <img
                    class="mx-auto w-48"
                    src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                    alt="logo" />
                  <h4 class="mb-12 mt-1 pb-1 text-xl font-semibold text-black">
                    We are The ChangePay Team
                  </h4>
                </div>

                <form>
                  <p class="mb-4 text-black">Lets connect</p>
                  {/* <!--Username input--> */}
                  <div class="relative mb-4" data-twe-input-wrapper-init>
                    <input
                      type="text"
                      class="peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0 border-2 border-custom-orange text-black "
                      id="exampleFormControlInput1"
                      placeholder="Username" />
                    <label
                      for="exampleFormControlInput1"
                      class="pointer-events-none text-black absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6]  transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                      >Username
                    </label>
                  </div>

                  {/* <!--Password input--> */}
                  <div class="relative mb-4" data-twe-input-wrapper-init>
                    <input
                      type="Email"
                      class="peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0 border-2 border-custom-orange text-black "
                      id="exampleFormControlInput1"
                      placeholder="Username" />
                    <label
                      for="exampleFormControlInput1"
                      class="pointer-events-none text-black absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6]  transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                      >Email
                    </label>
                  </div>
                  <div class="relative mb-4" data-twe-input-wrapper-init>
                    <input
                      type="Email"
                      class="peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0 border-2 border-custom-orange text-black "
                      id="exampleFormControlInput1"
                      placeholder="Username" />
                    <label
                      for="exampleFormControlInput1"
                      class="pointer-events-none text-black absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6]  transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                      >Phone No
                    </label>
                  </div>
                  <div class="relative mb-4" data-twe-input-wrapper-init>
  <select
    class="peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0 border-2 border-custom-orange text-black"
    id="exampleFormControlInput1">
    <option value="" disabled selected>Interested Role</option>
    <option value="option1">Student</option>
    <option value="option2">Seller</option>
    <option value="option3">Campus</option>
  </select>
 
</div>

<div class="relative mb-4" data-twe-input-wrapper-init>
                    <input
                      type="Email"
                      class="peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0 border-2 border-custom-orange text-black "
                      id="exampleFormControlInput1"
                      placeholder="Username" />
                    <label
                      for="exampleFormControlInput1"
                      class="pointer-events-none text-black absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6]  transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                      >Requirements or Specific Questions
                    </label>
                  </div>


                  {/* <!--Submit button--> */}
                  <div class="mb-12 pb-1 pt-1 text-center">
                    <button
                      class="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal  shadow-dark-3 transition duration-150 ease-in-out hover:shadow-dark-2 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:shadow-dark-2 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong bg-gradient-to-r from-orange-500 via-red-600 to-pink-600"
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
<div class="bg-gray-100">
    <div class="container mx-auto px-4 py-8">
        <h1 class="text-3xl font-bold mb-4">Changepay Privacy Policy
</h1>

        <p class="mb-4">
        ChangePay MMS Technologies Ltd.
<br />
Effective Date: 28/11/2023
<br />
Last Updated: 01/04/2024

        </p>

        <h2 class="text-2xl font-bold mb-2">Introduction
</h2>
<p class="mb-4">
This Privacy Policy outlines how we collect, use, and protect your personal information when you use our app. We are committed to respecting your privacy and ensuring the security of your data.

        </p>

        <h2 class="text-2xl font-bold mb-2">Information We Collect</h2>

        <p class="mb-4">
            We may collect the following information:
        </p>

        <ul class="list-disc list-inside mb-4">
            <li>Media files(Images, Videos and Audio)
<br />
Our application may request to collect user images, audio and video (with explicit consent dialog, permission and purpose each time) for various purposes, such as profile pictures or content submission for app functionality. Please be aware that any content by user submitted to our platform may be stored on our servers for future use. However, we do not share these Media content with third parties; they are only used for internal purposes, such as improving our services and user experience. By submitting an Media to our platform, you acknowledge and consent to our collection and storage of your media files.
</li>
            <li>Contact List Information
<br />
Our application may request to collect your contact list information (with explicit consent dialog, permission and purpose each time), we request permission to collect a contact when you choose to give access to import a contact from your device during placing Pikap type orders. This imports a single contact from your device and we use this contact purely for app functionality standpoint (Facilitate the Pikap type order smoothly). Please be aware that any contact submitted to our platform may be stored on our servers for future use. We don&apos;t sell or share the contact name or phone number to third parties and only for internal purposes. By uploading a contact information to our platform, you acknowledge and consent to our collection and storage of your contact.</li>
            <li>Precise Location Information and How to Opt Out
<br />
When you use one of our location-enabled services (for example, when you access Services from a mobile device), we may collect and process information about your mobile device&apos;s GPS location (including the latitude, longitude or altitude of your mobile device) and the time the location information is recorded to customize the Services with location-based information and features (for example, to inform you about restaurants in your area or applicable promotions). Some of these services require your personal data for the feature to work and we may associate location data with your device ID and other information we hold about you. We keep this data for no longer than is reasonably necessary for providing services to you. If you wish to use the particular feature, you will be asked to consent to your data being used for this purpose. You can withdraw your consent at any time by disabling the GPS or other location-tracking functions on your device, provided your device allows you to do this. See your device manufacturer&apos;s instructions for further details.

</li>
        </ul>

        <h2 class="text-2xl font-bold mb-2">Data Security
</h2>

        <p class="mb-4">
        We take data security seriously and implement reasonable measures to protect your personal information. This includes encryption, access controls, and regular security assessments.

        </p>

       

        <h2 class="text-2xl font-bold mb-2">SData Sharing
</h2>

        <p class="mb-4">
        We do not sell, rent, or share your personal information with third parties for their marketing purposes. However, we may share your data with service providers or partners who help us operate, maintain, or enhance our app, subject to strict data protection agreements.
        </p>

        <h2 class="text-2xl font-bold mb-2">Request for account actions
</h2>

        <p class="mb-4">

You have the following rights regarding your data

Access: You can request a copy of the data we hold about you.

Correction: You can update or correct your data within the app

Deletion: If you are using the consumer app, you can go to Account `{'>'}` Profile `{'>'}`Delete my account,

else you can request the deletion of your data for other apps, subject to legal requirements. For any of the above requirements fill this form <link rel="stylesheet" href="https://forms.gle/E6i91Lq4SfKNcPiQA " placeholder='hii' />and we will reach to you within 7 working days.



        </p>
        <h2 class="text-2xl font-bold mb-2">Consent and Permissions
</h2>

        <p class="mb-4">
           
By using our app, you consent to our collection and use of your data as described in this policy. You can manage your app permissions in your device&apos; s settings.

        </p>

        <h2 class="text-2xl font-bold mb-2">Update to this privacy policy
</h2>

        <p class="mb-4">
        We may update this Privacy Policy to reflect changes in our data practices. When we do so. the &quot;Last Updated&quot; date will be revised. We recommend reviewing this policy periodically.


        </p>
        <h2 class="text-2xl font-bold mb-2">Contact Us

</h2>

        <p class="mb-4">


If you have any questions, concerns, or requests regarding your data or this Privacy Policy, please contact us at support@esamudaay.com or reach us through the app by clicking on support button,



        </p>
        <h2 class="text-2xl font-bold mb-2">Legal Compliance


</h2>

        <p class="mb-4">


        This privacy policy is intended to comply with relevant data protection laws and regulations. However, local laws may apply, and we encourage you to consult with a legal expert if necessary.



        </p>

        

        <p class="mb-4">
            This privacy policy is subject to change without notice.
        </p>
    </div>
</div>
</div>


  )
}

export default Connect
