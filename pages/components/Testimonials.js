import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper flex justify-center items-center "
      >
        
        <SwiperSlide><section class="text-gray-600 body-font mt-10 h-full">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src="https://res.cloudinary.com/dtyombve3/image/upload/v1710583111/Group_4_1_1_kctsdz.png"/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Suguna - student, NITK Surathkal
</h1>
      <p class="mb-8 leading-relaxed">The campus delivery service provided by Changepay has been a lifesaver for me. It has made accessing medicines, food, and stationery a breeze, delivering them right to my hostel doorstep. No more standing in queues for printouts; Changepay has it all covered
</p>
      <div class="flex w-full md:justify-start justify-center items-end">
      
       
      </div>
     
    </div>
  </div>
</section></SwiperSlide>
        <SwiperSlide><section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded h-full" alt="hero" src="https://res.cloudinary.com/dtyombve3/image/upload/v1715349603/Group_4_nomyry.png"/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Manjunath, Seller at MIT</h1>
      <p class="mb-8 leading-relaxed">Adopting Changepay technology has been transformative for our business on the college campus. Everything is now done digitally. The daily order tracking feature helped me take  decisions, and the ability to offer discounts directly to students through the Changepay app has been a game-changer.
.</p>
      <div class="flex w-full md:justify-start justify-center items-end">
      
       
      </div>
     
    </div>
  </div>
</section></SwiperSlide>
        
      </Swiper>
    </>
  );
}