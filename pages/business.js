import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const business = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
    <div>
    
    <div className="">
      <p className="text-black text-center text-4xl font-bold">               Run a Business on Campus, 

 
</p>
<p className="text-custom-orange text-center text-4xl font-bold">and Shape Your Entrepreneurial Future!</p>
    </div>
    </div>
  <div class="container mx-auto flex md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src="https://res.cloudinary.com/dtyombve3/image/upload/v1710569211/Group_4_kdhqu8.png"/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <ul className="flex text-xl">
        <li className="mb-2 text-custom-orange">Student</li>
        <li className="mx-4 mb-2" >Sellers</li>
        <li className="mx-4 mb-2">Campasus</li>
      </ul>
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
        <br class="hidden lg:inline-block"/>readymade gluten
      </h1>
      <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-custom-orange border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full text-lg">Button</button>
        {/* <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
      </div>
    </div>
  </div>
</section>
{/* <!-- component --> */}
<div className="">
      <p className="text-black text-center text-4xl font-bold">               Student Enterpreneurial role:

 
</p>
<p className="text-custom-orange text-center text-4xl font-bold">How Does It Work</p>
    </div>
<Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        
        <SwiperSlide>
          <section class="text-gray-600 body-font flex items-center justify-center ">   
  <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1714191393/Group_68_c7k8zn.png" className='h-dvh'  alt=""/>
</section>
</SwiperSlide>
        <SwiperSlide><section class="text-gray-600 body-font flex items-center justify-center">
  
  <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1714194076/Group_63_jjsmzl.png" className='h-dvh' alt="" />

</section></SwiperSlide>
        <SwiperSlide><section class="text-gray-600 body-font flex items-center justify-center">
  
  <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1714194385/Group_64_a6tx9e.png" className='h-lvh' alt="" />

</section></SwiperSlide>
        <SwiperSlide><section class="text-gray-600 body-font flex items-center justify-center">
  
  <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1714195140/Group_105_qfxn14.png" className='h-lvh' alt="" />

</section></SwiperSlide>
        <SwiperSlide><section class="text-gray-600 body-font flex items-center justify-center">
  
  <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1714195239/Group_106_thn8xp.png" className='h-lvh' alt="" />

</section></SwiperSlide>
        <SwiperSlide><section class="text-gray-600 body-font flex items-center justify-center">
  
  <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1714194495/Group_102_mvmgxs.png" className='h-lvh' alt="" />

</section></SwiperSlide>
        
      </Swiper>
<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
  <div class="text-center font-bold mb-10">
  <p class="inline-block text-4xl text-black">Explore</p>
  <span class="inline-block">&nbsp;</span>
  <span class="inline-block">&nbsp;</span>
  <p class="inline-block text-4xl text-custom-orange">Tech</p>
</div>
    <div class="flex flex-wrap -m-4">
    
     
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="p-6 rounded-lg">
          <div class="w-full h-10 inline-flex items-center justify-center rounded-full text-custom-orange mb-4">
            <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1712973875/mdi_human-male-board-poll_mh5clz.png" className="h-20" alt="" />
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2 text-center">Seller</h2>
          <p class="leading-relaxed text-base text-center">Hostel deliveries, Curated student discounts and coupons</p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="p-6 rounded-lg">
          <div class="w-full h-10 inline-flex items-center justify-center rounded-full text-custom-orange mb-4">
            <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1712973875/ic_baseline-delivery-dining_quo1lg.png" className="h-20" alt="" />
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2 text-center">Delivery</h2>
          <p class="leading-relaxed text-base text-center">All in one app for your campus for - Personalized engagements</p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="p-6 rounded-lg">
          <div class="w-full h-10 inline-flex items-center justify-center rounded-full text-custom-orange mb-4">
            <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1712973875/carbon_customer_xzqqb9.png" className="h-20" alt="" />
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2 text-center">Customer</h2>
          <p class="leading-relaxed text-base text-center">Get exclusive student discount, no more queuing at merchant places</p>
        </div>
      </div>
    </div>
    {/* <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button> */}
  </div>
</section>
<section class="text-gray-600 body-font">
    <div>
    
    <div className="">
      <p className="text-black text-center text-4xl font-bold">              Campus Commers

 
</p>
<p className="text-custom-orange text-center text-4xl font-bold mb-10">Solution for Sellers</p>
    </div>
    </div>
  <div class="container mx-auto flex md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="https://res.cloudinary.com/dtyombve3/image/upload/v1712974586/Group_66_ai9qok.png"/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
        <br class="hidden lg:inline-block"/>readymade gluten
      </h1>
      <p class="mb-8 leading-relaxed">Do you have businesses inside or vicinity of the campus?
 here is a perfect digitization option for you.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-custom-orange border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full text-lg">Button</button>
        {/* <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
      </div>
    </div>
  </div>
</section>
<div className='mt-10'>
<p className="text-black text-center text-4xl font-bold">              Do You have Business inside or vicinity of
The Campus 
</p>
<div class="container mx-auto flex md:flex-row flex-col w-1/2 left-0 mt-10">
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center mr-10">
      <h1 class="title-font text-center sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Here Is the 
perfect Digitization 
Option for You
        {/* <br class="hidden lg:inline-block"/>readymade gluten */}
      </h1>
      {/* <p class="mb-8 leading-relaxed">Do you have businesses inside or vicinity of the campus?
 here is a perfect digitization option for you.</p> */}
      <div class="flex justify-center items-center mx-auto">
        <button class="inline-flex text-white bg-custom-orange border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full text-lg">Button</button>
        {/* <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
      </div>
    </div>
   <div className='w-52 h-52 rounded-full bg-black'>

   </div>
  </div>
</div>
<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
  <div class="text-center font-bold mb-10">
  <p class="inline-block text-4xl text-black">Our</p>
  <span class="inline-block">&nbsp;</span>
  <span class="inline-block">&nbsp;</span>
  <p class="inline-block text-4xl text-custom-orange">Solution</p>
</div>
    <div class="flex flex-wrap -m-4">
    
     
      <div class="xl:w-1/3 md:w-1/2 p-4">
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
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="p-6 rounded-lg">
          <div class="w-full h-10 inline-flex items-center justify-center rounded-full text-custom-orange mb-4">
            <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1712975698/carbon_location_y81pl6.png" className="h-20" alt="" />
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2 text-center">Live Tracking</h2>
          <p class="leading-relaxed text-base text-center">Enjoy improved order tracking and convenience.</p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="p-6 rounded-lg">
          <div class="w-full h-10 inline-flex items-center justify-center rounded-full text-custom-orange mb-4">
            <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1714207989/solar_tag-price-bold_msnfaj.png" className="h-20" alt="" />
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2 text-center">Customization</h2>
          <p class="leading-relaxed text-base text-center">Customization Capabilities for Product Prices</p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="p-6 rounded-lg">
          <div class="w-full h-10 inline-flex items-center justify-center rounded-full text-custom-orange mb-4">
            <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1712975085/icon-park-outline_correct_tw3kdn.png" className="h-20" alt="" />
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2 text-center">Assurance</h2>
          <p class="leading-relaxed text-base text-center">Free from hefty commissions.</p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="p-6 rounded-lg">
          <div class="w-full h-10 inline-flex items-center justify-center rounded-full text-custom-orange mb-4">
            <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1714207992/mdi_support_pgo23b.png" className="h-20" alt="" />
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2 text-center">Customer Supporr</h2>
          <p class="leading-relaxed text-base text-center">Seamless 24/7 Tech & Customer Support.</p>
        </div>
      </div>
       

    </div>
    <button class="flex mx-auto mt-16 text-white bg-custom-orange border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-full text-lg">Button</button>
  </div>
</section>
    </div>
  )
}

export default business
