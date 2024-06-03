import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useInView } from 'react-intersection-observer';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

export default function App() {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation once
        threshold: 0.2, // Trigger when 50% of section is in view
      });
  return (
    <>
    <div ref={ref} className={`ont-poppins mt-5 ${inView ? 'animate__animated animate__bounceInUp fade-in' : 'fade-out'} `}>

    
     <div class="text-center font-bold">
  <p class="inline-block text-4xl text-black mb-4">Our</p>
  <span class="inline-block">&nbsp;</span>
  <span class="inline-block">&nbsp;</span>
  <p class="inline-block text-4xl text-custom-orange">Reviews</p>
</div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
       
        modules={[FreeMode, Pagination]}
        className="mySwiper1"
      >

        <SwiperSlide
        >

<div class="w-full border inset-0 bg-opacity-50 backdrop-blur-2xl border-gray-200 rounded-lg shadow "
>
    <div class="flex justify-end px-4 pt-4">
      
    
    </div>
    <div class="flex flex-col items-center pb-4"
     >
        <img class="w-40 h-40 mb-3 rounded-full shadow-lg cover bg-custom-orange" src="https://res.cloudinary.com/dtyombve3/image/upload/v1717149355/bq2lft8yn4vmyabhlaue.jpg" alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-custom-orange">Hungry house</h5>
        <span class="text-sm ">I highly recommend ChangePay to any campus food merchant. It&quot;s a fantastic platform that has improved our delivery efficiency, boosted our sales, and made our customers very happy. Its a must-have for any campus-based food business. </span>
       
    </div>
</div>
</SwiperSlide>
        <SwiperSlide
        >

<div class="w-full border inset-0 bg-opacity-50 backdrop-blur-2xl border-gray-200 rounded-lg shadow "
>
    <div class="flex justify-end px-4 pt-4">
      
    
    </div>
    <div class="flex flex-col items-center pb-4"
     >
        <img class="w-40 h-40 mb-3 rounded-full shadow-lg cover bg-custom-orange " src="https://res.cloudinary.com/dtyombve3/image/upload/v1717149354/wehsrdr0gvk4muqbi7r3.jpg" alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-custom-orange">V Kitchen</h5>
        <span class="text-sm ">C̤h̤a̤n̤g̤e̤p̤a̤y̤  i̤s̤ v̤e̤r̤y̤ e̤a̤s̤y̤ t̤o̤ o̤r̤d̤e̤r̤  f̤o̤o̤d̤  .̤ f̤o̤r̤ s̤t̤ṳd̤e̤n̤t̤s̤ n̤o̤ p̤r̤o̤b̤l̤e̤m̤s̤ t̤o̤ r̤e̤c̤e̤i̤v̤e̤ f̤o̤o̤d̤.̤. </span>
       
    </div>
</div>
</SwiperSlide>
        <SwiperSlide
        >

<div class="w-full border inset-0 bg-opacity-50 backdrop-blur-2xl border-gray-200 rounded-lg shadow "
>
    <div class="flex justify-end px-4 pt-4">
      
    
    </div>
    <div class="flex flex-col items-center pb-4"
     >
        <img class="w-40 h-40 mb-3 rounded-full shadow-lg cover bg-custom-orange" src="https://res.cloudinary.com/dtyombve3/image/upload/v1717149355/xo7jsoeo8eurfbhx8thb.jpg" alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-custom-orange">Merchant</h5>
        <span class="text-sm ">The support from ChangePay has been exceptional. Any time we had a question or needed assistance, the team was quick to respond and very helpful. Its a great app with a great support system.I highly recommend ChangePay to any campus food merchant.. </span>
       
    </div>
</div>
</SwiperSlide>
        <SwiperSlide
        >

<div class="w-full border inset-0 bg-opacity-50 backdrop-blur-2xl border-gray-200 rounded-lg shadow "
>
    <div class="flex justify-end px-4 pt-4">
      
    
    </div>
    <div class="flex flex-col items-center pb-4"
     >
        <img class="w-40 h-40 mb-3 rounded-full shadow-lg cover bg-custom-orange" src="https://res.cloudinary.com/dtyombve3/image/upload/v1717149355/wmdpoyuf6uvyadp8rkyp.jpg" alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-custom-orange">Vaibhav Kitchen</h5>
        <span class="text-sm ">We&apos;ve received excellent feedback from students about ChangePay. They love the easy ordering process and the variety of food options available. It has definitely helped us reach a wider audience on campus. </span>
       
    </div>
</div>
</SwiperSlide>
        <SwiperSlide
        >

<div class="w-full border inset-0 bg-opacity-50 backdrop-blur-2xl border-gray-200 rounded-lg shadow "
>
    <div class="flex justify-end px-4 pt-4">
      
    
    </div>
    <div class="flex flex-col items-center pb-4"
     >
        <img class="w-40 h-40 mb-3 rounded-full shadow-lg cover bg-custom-orange" src="https://res.cloudinary.com/dtyombve3/image/upload/v1717149354/bwy4qk9grvn2uwqvjxot.jpg" alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-custom-orange">Hotel MBD</h5>
        <span class="text-sm ">Since partnering with ChangePay, our sales have significantly increased. The app makes it so easy for students to order food, and we&apos;ve seen a substantial uptick in our daily orders. It&apos;s a fantastic platform for any merchant.. </span>
       
    </div>
</div>
</SwiperSlide>
    
   
    
    
    







      </Swiper>
      </div>
    </>
  );
}
