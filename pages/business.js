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
      {/* <ul className="flex text-xl">
        <li className="mb-2 text-custom-orange">Student</li>
        <li className="mx-4 mb-2" >Sellers</li>
        <li className="mx-4 mb-2">Campasus</li>
      </ul> */}
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Discover the Benefits of Student 
        <br class="lg:inline-block text-custom-orange"/>Entrepreneurship!
      </h1>
      {/* <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p> */}
      <ol className='text-xl text-custom-orange my-5'>
        <li>1. Learn about the platform
</li>
        <li>2. Establish and Run Operations

</li>
<li>
  3. Earn money and certificates.
</li>
      </ol>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-custom-orange border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full text-lg">Button</button>
        {/* <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
      </div>
    </div>
  </div>
</section>
{/* <!-- component --> */}
<div className="">
      <p className="text-black text-center text-4xl font-bold">               Student Enterpreneurial role: How Does It Work?

 
</p>
<p className="text-custom-orange text-center text-4xl font-bold"></p>
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
        className="mySwiper mt-10"
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
  <p class="inline-block text-4xl text-custom-orange">The Tech</p>
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
   
   
    <div class="text-center font-bold mb-10">
  <p class="inline-block text-4xl text-black">Campus Commers</p>
  <span class="inline-block">&nbsp;</span>
  <span class="inline-block">&nbsp;</span>
  <p class="inline-block text-4xl text-custom-orange">Solution for Sellers</p>
</div>

    </div>
    <div class="container w-full mx-auto flex justify-center">
    <div class="flex items-center text-center">
      <div>

        <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1715498249/Group_66_iabzlb.png" class='h-80' alt=""/>
      </div>
      <div>
        
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Do You have Business inside or 
            <br class="hidden lg:inline-block"/>vicinity of The Campus 
        </h1>
        <p class="mb-8 leading-relaxed text-custom-orange">Here Is the perfect Digitization Option for You</p>
        <div class="flex justify-center">
            <button class="inline-flex text-white bg-custom-orange border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full text-lg">Button</button>
           
        </div>
      </div>
    </div>
</div>


</section>

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
