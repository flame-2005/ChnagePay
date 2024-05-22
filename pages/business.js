import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import ReactTypingEffect from 'react-typing-effect';
import { useInView } from 'react-intersection-observer';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import Link from 'next/link';

const Business = () => {

  const { ref: firstItemRef, inView: firstItemInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: '0px 0px 10% 10%'
  });
  const { ref: firstSectionRef, inView: firstSectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: secondSectionRef, inView: secondSectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: fourthItemRef, inView: fourthItemInView } = useInView({
    triggerOnce: true,
    threshold: 0.05,
    rootMargin: '0px 0px 20% 400px'
  });
  const { ref: fifthItemRef, inView: fifthItemInView } = useInView({
    triggerOnce: true,
    threshold: 0.05,
    rootMargin: '0px 0px 20% 400px'
  });
  return (
    <div>
      <section className="text-gray-600 body-font mt-20">
      <div className="text-center mb-10">
        <p className="text-black text-4xl font-bold">
          Run a Business on Campus,
        </p>
        <div className="text-custom-orange text-4xl font-bold">
        and Shape Your Entrepreneurial Future!
          {/* <ReactTypingEffect
        text="and Shape Your Entrepreneurial Future!"
        speed={50}
        eraseSpeed={20}
        eraseDelay={5000}
      /> */}
        </div>
      </div>
      <div className="container mx-auto -top-10 relative flex md:flex-row flex-col justify-center items-center">
        <div ref={firstItemRef} className={` mb-10 md:mb-0 ${firstItemInView ? 'slide-in-left' : 'slide-out-left'}`}>
          <img
            className="object-cover h-96 mx-auto  object-center rounded"
            alt="hero"
            src="https://res.cloudinary.com/dtyombve3/image/upload/v1710569211/Group_4_kdhqu8.png"
          />
        </div>
        <div  className={`lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center `}>
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Discover the Benefits of Student
            <br className="lg:inline-block" />
            <div className="text-custom-orange text-5xl">
            <ReactTypingEffect
        text="Entrepreneurship!"
        speed={50}
        eraseSpeed={20}
        eraseDelay={5000}
      />
            </div>
          </h1>
          <ol className="text-xl text-custom-orange my-5 list-decimal list-inside">
            <li>Learn about the platform</li>
            <li>Establish and Run Operations</li>
            <li>Earn money and certificates</li>
          </ol>
          <div className="flex justify-center">
            <Link href={'/connect#User'}
              style={{
                background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)',
              }}
              className="inline-flex text-white border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full text-lg transition transform hover:scale-105">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
{/* <!-- component --> */}
<div>
    

      <div class="text-center font-bold mb-10">
  <p class="inline-block text-4xl text-black">Student Enterpreneurial role:</p>
  <span class="inline-block">&nbsp;</span>
  <span class="inline-block">&nbsp;</span>
  <p class="inline-block text-4xl text-custom-orange">How Does It Work?</p>
</div>

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
        className={`mySwiper mt-10 `}
      >
        
<SwiperSlide style={{ background: 'transparent' }}>
    <section class="text-gray-600 body-font flex items-center justify-center onset-0 bg-opacity-50 backdrop-blur-2xl">
      <div style={{ maxWidth: '50%', maxHeight: '50%' }}>
        <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1714191393/Group_68_c7k8zn.png" className='h-dvh' style={{ width: '100%', height: 'auto' }} alt=""/>
      </div>
    </section>
  </SwiperSlide>
<SwiperSlide style={{ background: 'transparent' }}>
    <section class="text-gray-600 body-font flex items-center justify-center onset-0 bg-opacity-50 backdrop-blur-2xl">
      <div style={{ maxWidth: '50%', maxHeight: '50%' }}>
        <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1714194076/Group_63_jjsmzl.png" className='h-dvh' style={{ width: '100%', height: 'auto' }} alt=""/>
      </div>
    </section>
  </SwiperSlide>
<SwiperSlide style={{ background: 'transparent' }}>
    <section class="text-gray-600 body-font flex items-center justify-center onset-0 bg-opacity-50 backdrop-blur-2xl">
      <div style={{ maxWidth: '50%', maxHeight: '50%' }}>
        <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1714194385/Group_64_a6tx9e.png" className='h-dvh' style={{ width: '100%', height: 'auto' }} alt=""/>
      </div>
    </section>
  </SwiperSlide>
<SwiperSlide style={{ background: 'transparent' }}>
    <section class="text-gray-600 body-font flex items-center justify-center onset-0 bg-opacity-50 backdrop-blur-2xl">
      <div style={{ maxWidth: '50%', maxHeight: '50%' }}>
        <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1714195140/Group_105_qfxn14.png" className='h-dvh' style={{ width: '100%', height: 'auto' }} alt=""/>
      </div>
    </section>
  </SwiperSlide>
<SwiperSlide style={{ background: 'transparent' }}>
    <section class="text-gray-600 body-font flex items-center justify-center onset-0 bg-opacity-50 backdrop-blur-2xl">
      <div style={{ maxWidth: '50%', maxHeight: '50%' }}>
        <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1714195239/Group_106_thn8xp.png" className='h-dvh' style={{ width: '100%', height: 'auto' }} alt=""/>
      </div>
    </section>
  </SwiperSlide>
<SwiperSlide style={{ background: 'transparent' }}>
    <section class="text-gray-600 body-font flex items-center justify-center onset-0 bg-opacity-50 backdrop-blur-2xl">
      <div style={{ maxWidth: '50%', maxHeight: '50%' }}>
        <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1714194495/Group_102_mvmgxs.png" className='h-dvh' style={{ width: '100%', height: 'auto' }} alt=""/>
      </div>
    </section>
  </SwiperSlide>

    
    
 
        
      </Swiper>
<section ref={firstSectionRef} class={`text-gray-600 body-font ${firstSectionInView ? 'animate__animated animate__bounceInUp fade-in' : 'fade-out'}`} id='tech'>
  <div class="container px-5 py-24 mx-auto">
  <div class="text-center font-bold mb-10">
  <p class="inline-block text-4xl text-black">Explore</p>
  <span class="inline-block">&nbsp;</span>
  <span class="inline-block">&nbsp;</span>
  <p class="inline-block text-4xl text-custom-orange">The Tech</p>
</div>
    <div class="flex flex-wrap -m-4" >
    
     
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
   
   
    <div class="text-center font-bold mb-10" id='sellers'>
  <p class="inline-block text-4xl text-black">Campus Commers</p>
  <span class="inline-block">&nbsp;</span>
  <span class="inline-block">&nbsp;</span>
  <p class="inline-block text-4xl text-custom-orange">Solution for Sellers</p>
</div>

    </div>
    <div class="container w-full mx-auto flex justify-center">
    <div class="flex items-center text-center">
      <div ref={fourthItemRef} className={`${fourthItemInView ? 'slide-in-left' : 'slide-out-left'}`}>

        <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1715498249/Group_66_iabzlb.png" class='h-80' alt=""/>
      </div>
      <div ref={fifthItemRef} className={`${fifthItemInView ? 'slide-in-right' : 'slide-out-right'}`}>
        
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Do You have Business inside or 
            <br class="hidden lg:inline-block"/>vicinity of The Campus 
        </h1>
        <p class="mb-8 leading-relaxed text-custom-orange">Here Is the perfect Digitization Option for You</p>
        <div class="flex justify-center">
            <Link href={'/connect#User'} style={{
          background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)'
        }} class="inline-flex text-white  border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full text-lg">Explore</Link>
           
        </div>
      </div>
    </div>
</div>


</section>

<section ref={secondSectionRef} class={`text-gray-600 body-font ${secondSectionInView ? 'animate__animated animate__bounceInUp fade-in' : 'fade-out'}`}>
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
  </div>
</section>
    </div>
  )
}

export default Business
