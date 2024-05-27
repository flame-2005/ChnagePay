import Image from "next/image";
import { Inter } from "next/font/google";
import Testimonials from './components/Testimonials'
import Faqs from './components/Faqs'
const inter = Inter({ subsets: ["latin"] });
import Landing from "./components/landing/Landing";
import Review from "./components/review/Review"
import { useState,useRef } from "react";
import { useEffect } from "react";
import { useInView } from 'react-intersection-observer';


export default function Home() {

  const { ref: firstSectionRef, inView: firstSectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: secondSectionRef, inView: secondSectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: firstItemRef, inView: firstItemInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: secondItemRef, inView: secondItemInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: thirdItemRef, inView: thirdItemInView } = useInView({
    triggerOnce: true,
    threshold: 0.0001, // Adjust this value if necessary
    rootMargin: '0px 0px -10% 0px', // Adjust the root margin to ensure it gets triggered
  });
  const { ref: fourthItemRef, inView: fourthItemInView } = useInView({
    triggerOnce: true,
    threshold: 0.0001,
    rootMargin: '0px 0px 20% 400px'
  });

  const { ref: fifthItemRef, inView: fifthItemInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: sixthItemRef, inView: sixthItemInView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjust this value if necessary
    rootMargin: '0px 0px -10% 0px', // Adjust the root margin to ensure it gets triggered
  });
  return (
  <>
  
  <Landing/>
  <section className="flex items-center font-poppins mt-5">
      <div ref={firstSectionRef} className={`justify-center flex-1 mx-auto max-w-8xl overflow-hidden lg:py-4 ${firstSectionInView ? 'animate__animated animate__bounceInUp fade-in' : 'fade-out'}`}>
        <div className="text-center mb-5">
          <div className="text-center font-bold">
            <p className="inline-block text-4xl text-black">Our</p>
            <span className="inline-block">&nbsp;</span>
            <span className="inline-block">&nbsp;</span>
            <p className="inline-block text-4xl text-custom-orange">Presence</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center">

                                <div class="w-full p-2 rounded-xl shadow-md shadow-custom-orange px-4 mb-10 sm:w-1/2 lg:w-1/3 xl:w-1/6 md:mr-2 mx-10 md:mx-0 bg-opacity-50 backdrop-blur-3xl ">
                                    <div class="mx-auto text-center ">
                                        <div
                                            class="inline-block mb-3 overflow-hidden text-xs text-white rounded-full w-44 h-44 sm:w-44 sm:h-44">
                                            <img class="object-cover w-full h-full transition-all hover:scale-110"
                                                src="https://res.cloudinary.com/dtyombve3/image/upload/v1706348568/download_1_gnhond.png" alt="" />
                                        </div>
                                        <h2 class="mb-2 text-xl font-semibold text-gray-800 ">NIT Karnataka</h2>
                                

                                    </div>
                                </div>
                                <div class="w-full border-black p-2 rounded-xl shadow-md shadow-custom-orange px-4 mb-10 sm:w-1/2 lg:w-1/3 xl:w-1/6 md:mr-2 mx-10 md:mx-0 bg-opacity-50 backdrop-blur-3xl ">
                                    <div class="mx-auto text-center ">
                                        <div
                                            class="inline-block mb-3 overflow-hidden text-xs text-white rounded-full w-44 h-44 sm:w-44 sm:h-44">
                                            <img class="object-cover w-full h-full transition-all hover:scale-110"
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRozHEJ9lxt8ZFVX6xhU4AbRC8dvYe_osDc8SzcjnlNbg&s" alt="" />
                                        </div>
                                        <h2 class="mb-2 text-xl font-semibold text-gray-800 ">MIT-Manipal</h2>
                                        {/* <span class="inline-block mb-6 text-base font-medium text-blue-500 ">MBA
                                        </span> */}

                                    </div>
                                </div>
                                <div class="w-full border-black p-2 rounded-xl shadow-md shadow-custom-orange px-4 mb-10 sm:w-1/2 lg:w-1/3 xl:w-1/6 md:mr-2 mx-10 md:mx-0 bg-opacity-50 backdrop-blur-3xl ">
                                    <div class="mx-auto text-center ">
                                        <div
                                            class="inline-block mb-3 overflow-hidden text-xs text-white bg-blue-700 rounded-full w-44 h-44 sm:w-44 sm:h-44">
                                            <img class="object-cover w-full h-full transition-all hover:scale-110"
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv-wKWMAscw-cVOtTOs87TvVeoZp5O0-LrvWwN3azvAw&s" alt="" />
                                        </div>
                                        <h2 class="mb-2 text-xl font-semibold text-gray-800 ">IIM KOZHIKODE</h2>
                                        {/* <span class="inline-block mb-6 text-base font-medium text-blue-500 ">B Tech
                                        </span> */}

                                    </div>
                                </div>
                                <div class="w-full border-black p-2 rounded-xl shadow-md shadow-custom-orange px-4 mb-10 sm:w-1/2 lg:w-1/3 xl:w-1/6 md:mr-2 mx-10 md:mx-0 bg-opacity-50 backdrop-blur-3xl " >
                                    <div class="mx-auto text-center ">
                                        <div
                                            class="inline-block mb-3 overflow-hidden text-xs text-white bg-blue-700 rounded-full w-44 h-44 sm:w-44 sm:h-44">
                                            <img class="object-cover w-full h-full transition-all hover:scale-110"
                                                src="https://www.financialexpress.com/wp-content/uploads/2022/05/MAHE-logo.png" alt="" />
                                        </div>
                                        <h2 class="mb-2 text-xl font-semibold text-gray-800 ">MAHE Manipal</h2>
                                        {/* <span class="inline-block mb-6 text-base font-medium text-blue-500 ">B Tech
                                        </span> */}

                                    </div>
                                </div>
                                <div class="w-full border-black p-2 rounded-xl shadow-md shadow-custom-orange px-4 mb-10 sm:w-1/2 lg:w-1/3 xl:w-1/6 md:mr-2 mx-10 md:mx-0 bg-opacity-50 backdrop-blur-3xl ">
                                    <div class="mx-auto text-center ">
                                        <div
                                            class="inline-block mb-3 overflow-hidden text-xs text-white bg-blue-700 rounded-full w-44 h-44 sm:w-44 sm:h-44">
                                            <img class="object-cover w-full h-full transition-all hover:scale-110"
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyH1NTivJQTg1zZ8GDf5MFQ2BA8MhxSZJlc4Q_fOhSzg&" alt="" />
                                        </div>
                                        <h2 class="mb-2 text-xl font-semibold text-gray-800 ">NIT Calicut</h2>
                                        {/* <span
                                            class="inline-block mb-6 text-base font-medium text-blue-500 ">MBBS
                                        </span> */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> 

<section ref={secondSectionRef} class={`text-gray-600 mt-10 body-font ${secondSectionInView? 'animate__animated animate__bounceInUp fade-in' : 'fade-out'}`}>
  <div class="container px-5 mx-auto">
  <div class="text-center font-bold mb-10">
  <p class="inline-block text-4xl text-black">Why choose </p>
  <span class="inline-block">&nbsp;</span>
  <span class="inline-block">&nbsp;</span>
  <p class="inline-block text-4xl text-custom-orange">US ?</p>
</div>
    <div class="flex flex-wrap -m-4">
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="p-6 rounded-lg">
          <div class="w-full h-10 inline-flex items-center justify-center rounded-full text-custom-orange mb-4">
            <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1710580187/Vector_m5vju9.png" className="h-20" alt="" />
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2 text-center">Contactless delivery</h2>
          <p class="leading-relaxed text-base text-center">In-campus merchants can provide super fast deliveries at affordable price to students</p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="p-6 rounded-lg">
          <div class="w-full h-10 inline-flex items-center justify-center rounded-full text-custom-orange mb-4">
            <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1710580470/fluent_people-team-48-regular_wp4aay.png" className="h-20" alt="" />
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2 text-center">Dedicated Team</h2>
          <p class="leading-relaxed text-base text-center">24*7 Quick response</p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="p-6 rounded-lg">
          <div class="w-full h-10 inline-flex items-center justify-center rounded-full text-custom-orange mb-4">
            <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1710580658/clarity_building-line_i3crrg.png" className="h-20" alt="" />
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2 text-center">Intercampus Connect</h2>
          <p class="leading-relaxed text-base text-center">Connect with different campus students to do projects, publicise about campus events</p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="p-6 rounded-lg">
          <div class="w-full h-10 inline-flex items-center justify-center rounded-full text-custom-orange mb-4">
            <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1710580687/mingcute_happy-line_hxpavk.png" className="h-20" alt="" />
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2 text-center">Happy Customers</h2>
          <p class="leading-relaxed text-base text-center">Hostel deliveries, Curated student discounts and coupons</p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="p-6 rounded-lg">
          <div class="w-full h-10 inline-flex items-center justify-center rounded-full text-custom-orange mb-4">
            <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1710580741/material-symbols_diamond-outline_fjsmc4.png" className="h-20" alt="" />
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2 text-center">Best Quality</h2>
          <p class="leading-relaxed text-base text-center">All in one app for your campus for - Personalized engagements</p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="p-6 rounded-lg">
          <div class="w-full h-10 inline-flex items-center justify-center rounded-full text-custom-orange mb-4">
            <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1710580746/Group_56_qeeko5.png" className="h-20" alt="" />
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2 text-center">Save time and money</h2>
          <p class="leading-relaxed text-base text-center">Get exclusive student discount, no more queuing at merchant places</p>
        </div>
      </div>
    </div>
    {/* <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button> */}
  </div>
</section>
<section class="text-gray-600 body-font mt-20 overflow-hidden">
  <div class="container px-5 mx-auto">
  <div class="text-center font-bold">
  <p class="inline-block text-4xl text-black mb-4">We are</p>
  <span class="inline-block">&nbsp;</span>
  <span class="inline-block">&nbsp;</span>
  <p class="inline-block text-4xl text-custom-orange">Internet Famous</p>
</div>
    <div class="flex flex-wrap -m-4">
      <div  className={`flex `}>

      
      <div ref={firstItemRef} class={`lg:w-1/3 sm:w-1/2 p-4 h-52 ${firstItemInView ? 'slide-in-right' : 'slide-out-right'} `}>
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0  object-cover object-center" src="https://res.cloudinary.com/dtyombve3/image/upload/v1716286587/mpya2jtkdjtv7nickfqb.png"/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            {/* <h2 class="tracking-widest text-sm title-font font-medium text-custom-orange mb-1">THE SUBTITLE</h2> */}
            <h1 class="title-font font-medium text-gray-900 mb-3">It integrates disparate services into one simple app tied together with an IoT lockbox to solve the “Gate-to-hand” challenge of delivering in college hostels. India has nearly 6.5M students in nearly 40K hostels spending ₹4K/month making it a $4B market annually.</h1>
          
          </div>
        </div>
      </div>
      <div class={`lg:w-1/3 sm:w-1/2 p-4  ${secondItemInView ? 'slide-in-right' : 'slide-out-right'}`
    } ref={secondItemRef}>
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 h-52 mt-8 mx-auto items-center object-cover object-center" src="https://res.cloudinary.com/dtyombve3/image/upload/v1716286681/os4u5qcnhcm96v9nwyu7.png"/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            {/* <h2 class="tracking-widest text-sm title-font font-medium text-custom-orange mb-1">THE SUBTITLE</h2> */}
            <h1 class="title-font font-medium text-gray-900 mb-3">Five students of the National Institute of Technology – Karnataka (NITK) in Surathkal have made it possible, thanks to demonetisation, which inspired them to do something unbelievable</h1>
          </div>
        </div>
      </div>
      <div ref={thirdItemRef} class={`lg:w-1/3 sm:w-1/2 p-4 ${thirdItemInView ? 'slide-in-right' : 'slide-out-right'}`}>
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 h-52 mx-auto mt-5 object-cover object-center" src="https://res.cloudinary.com/dtyombve3/image/upload/v1716286940/k9zehvd2fe96gglgkhr5.png"/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-custom-orange mb-1">What they wanna Say</h2>
            {/* <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1> */}
            <p class="leading-relaxed">NITK students revolutionize campus life with a cutting-edge system designed to streamline transaction management. Tired of tedious processes? Say goodbye to manual paperwork and hello to effortless transactions with our innovative solution.
</p>
          </div>
        </div>
      </div>
      </div>
      <div ref={fourthItemRef} class={`lg:w-1/3 sm:w-1/2 p-4 ${fourthItemInView ? 'slide-in-left' : 'slide-out-left'}`}>
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 h-64 mx-auto object-cover object-center " src="https://res.cloudinary.com/dtyombve3/image/upload/v1716287225/n1vkaf2vo5szcqklonxa.png"/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            {/* <h2 class="tracking-widest text-sm title-font font-medium text-custom-orange mb-1">THE SUBTITLE</h2> */}
            <h1 class="title-font font-medium text-gray-900 mb-3">Experience the game-changing innovation from NITK students, reshaping the landscape of campus operations. Our dynamic system redefines transaction management, offering a seamless, user-friendly solution that empowers students and administrators alike. </h1>
            
          </div>
        </div>
      </div>
      <div ref={fifthItemRef} class={`lg:w-1/3 sm:w-1/2 p-4 ${fifthItemInView ? 'slide-in-left' : 'slide-out-left'}`}>
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 h-92 mx-auto object-cover object-center" src="https://res.cloudinary.com/dtyombve3/image/upload/v1716287094/go4xlg2tvam4z51jg9iz.png"/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            {/* <h2 class="tracking-widest text-sm title-font font-medium text-custom-orange mb-1">THE SUBTITLE</h2> */}
            <h1 class="title-font font-medium text-gray-900 mb-3">Experience the game-changing innovation from NITK students, reshaping the landscape of campus operations. Our dynamic system redefines transaction management, offering a seamless, user-friendly solution that empowers students and administrators alike. </h1>
            {/* <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p> */}
          </div>
        </div>
      </div>
      <div ref={sixthItemRef} class={`lg:w-1/3 sm:w-1/2 p-4 ${sixthItemInView ? 'slide-in-left' : 'slide-out-left'}`}>
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://res.cloudinary.com/dtyombve3/image/upload/v1716287323/izb7xfahj2nsju97zzcr.png"/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            {/* <h2 class="tracking-widest text-sm title-font font-medium text-custom-orange mb-1">THE SUBTITLE</h2> */}
            <h1 class="title-font font-medium text-gray-900 mb-3">Experience the game-changing innovation from NITK students, reshaping the landscape of campus operations. Our dynamic system redefines transaction management, offering a seamless, user-friendly solution that empowers students and administrators alike. </h1>
            {/* <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p> */}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* <Testimonials/> */}
<Review/>
<Faqs/>
  </>
  );
}
