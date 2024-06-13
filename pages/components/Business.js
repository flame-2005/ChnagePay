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
      <section className="text-gray-600 body-font mt-24">
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
        <div  className={`md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center `}>
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
            <Link href={'/components/Connect#User'}
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
    

      <div className="text-center font-bold mb-10">
  <p className="inline-block text-4xl text-black">Student Enterpreneurial role:</p>
  <span className="inline-block">&nbsp;</span>
  <span className="inline-block">&nbsp;</span>
  <p className="inline-block text-4xl text-custom-orange">How Does It Work?</p>
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
    <section className="text-gray-600 body-font flex items-center justify-center onset-0 bg-opacity-50 backdrop-blur-2xl">
      <div style={{ maxWidth: '50%', maxHeight: '50%' }}>
        <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1714191393/Group_68_c7k8zn.png" className='h-dvh' style={{ width: '100%', height: 'auto' }} alt=""/>
      </div>
    </section>
  </SwiperSlide>
<SwiperSlide style={{ background: 'transparent' }}>
    <section className="text-gray-600 body-font flex items-center justify-center onset-0 bg-opacity-50 backdrop-blur-2xl">
      <div style={{ maxWidth: '50%', maxHeight: '50%' }}>
        <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1714194076/Group_63_jjsmzl.png" className='h-dvh' style={{ width: '100%', height: 'auto' }} alt=""/>
      </div>
    </section>
  </SwiperSlide>
<SwiperSlide style={{ background: 'transparent' }}>
    <section className="text-gray-600 body-font flex items-center justify-center onset-0 bg-opacity-50 backdrop-blur-2xl">
      <div style={{ maxWidth: '50%', maxHeight: '50%' }}>
        <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1714194385/Group_64_a6tx9e.png" className='h-dvh' style={{ width: '100%', height: 'auto' }} alt=""/>
      </div>
    </section>
  </SwiperSlide>
<SwiperSlide style={{ background: 'transparent' }}>
    <section className="text-gray-600 body-font flex items-center justify-center onset-0 bg-opacity-50 backdrop-blur-2xl">
      <div style={{ maxWidth: '50%', maxHeight: '50%' }}>
        <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1714195140/Group_105_qfxn14.png" className='h-dvh' style={{ width: '100%', height: 'auto' }} alt=""/>
      </div>
    </section>
  </SwiperSlide>
<SwiperSlide style={{ background: 'transparent' }}>
    <section className="text-gray-600 body-font flex items-center justify-center onset-0 bg-opacity-50 backdrop-blur-2xl">
      <div style={{ maxWidth: '50%', maxHeight: '50%' }}>
        <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1714195239/Group_106_thn8xp.png" className='h-dvh' style={{ width: '100%', height: 'auto' }} alt=""/>
      </div>
    </section>
  </SwiperSlide>
<SwiperSlide style={{ background: 'transparent' }}>
    <section className="text-gray-600 body-font flex items-center justify-center onset-0 bg-opacity-50 backdrop-blur-2xl">
      <div style={{ maxWidth: '50%', maxHeight: '50%' }}>
        <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1714194495/Group_102_mvmgxs.png" className='h-dvh' style={{ width: '100%', height: 'auto' }} alt=""/>
      </div>
    </section>
  </SwiperSlide>

    
    
 
        
      </Swiper>
<section ref={firstSectionRef} className={`text-gray-600 body-font ${firstSectionInView ? 'animate__animated animate__bounceInUp fade-in' : 'fade-out'}`} id='tech'>
  <div className="container px-5 py-24 mx-auto">
  <div className="text-center font-bold mb-10">
  <p className="inline-block text-4xl text-black">Explore</p>
  <span className="inline-block">&nbsp;</span>
  <span className="inline-block">&nbsp;</span>
  <p className="inline-block text-4xl text-custom-orange">The Tech</p>
</div>
    <div className="flex flex-wrap -m-4" >
    
     
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="p-6">
          <div className="w-full h-10 inline-flex items-center justify-center rounded-full text-custom-orange mb-4">
            <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1712973875/mdi_human-male-board-poll_mh5clz.png" className="h-20" alt="" />
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2 text-center">Seller</h2>
          <p className="leading-relaxed text-base text-center">Hostel deliveries, Curated student discounts and coupons</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="p-6">
          <div className="w-full h-10 inline-flex items-center justify-center rounded-full text-custom-orange mb-4">
            <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1712973875/ic_baseline-delivery-dining_quo1lg.png" className="h-20" alt="" />
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2 text-center">Delivery</h2>
          <p className="leading-relaxed text-base text-center">All in one app for your campus for - Personalized engagements</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="p-6">
          <div className="w-full h-10 inline-flex items-center justify-center rounded-full text-custom-orange mb-4">
            <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1712973875/carbon_customer_xzqqb9.png" className="h-20" alt="" />
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2 text-center">Customer</h2>
          <p className="leading-relaxed text-base text-center">Get exclusive student discount, no more queuing at merchant places</p>
        </div>
      </div>
    </div>
    {/* <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button> */}
  </div>
</section>
<section className="text-gray-600 body-font">
    <div>
   
   
    <div className="text-center font-bold mb-10" id='sellers'>
  <p className="inline-block text-4xl text-black">Campus Commers</p>
  <span className="inline-block">&nbsp;</span>
  <span className="inline-block">&nbsp;</span>
  <p className="inline-block text-4xl text-custom-orange">Solution for Sellers</p>
</div>

    </div>
    <div className="container w-full mx-auto flex justify-center">
    <div className="flex items-center text-center">
      <div ref={fourthItemRef} className={`${fourthItemInView ? 'slide-in-left' : 'slide-out-left'}`}>

        <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1715498249/Group_66_iabzlb.png" className='h-80' alt=""/>
      </div>
      <div ref={fifthItemRef} className={`${fifthItemInView ? 'slide-in-right' : 'slide-out-right'}`}>
        
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Do You have Business inside or 
            <br className="hidden lg:inline-block"/>vicinity of The Campus 
        </h1>
        <p className="mb-8 leading-relaxed text-custom-orange">Here Is the perfect Digitization Option for You</p>
        <div className="flex justify-center">
            <Link href={'/components/Connect#User'} style={{
          background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)'
        }} className="inline-flex text-white  border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full text-lg">Explore</Link>
           
        </div>
      </div>
    </div>
</div>


</section>

<section ref={secondSectionRef} className={`text-gray-600 body-font ${secondSectionInView ? 'animate__animated animate__bounceInUp fade-in' : 'fade-out'}`}>
  <div className="container px-5 py-24 mx-auto">
  <div className="text-center font-bold mb-10">
  <p className="inline-block text-4xl text-black">Our</p>
  <span className="inline-block">&nbsp;</span>
  <span className="inline-block">&nbsp;</span>
  <p className="inline-block text-4xl text-custom-orange">Solution</p>
</div>
    <div className="flex flex-wrap -m-4">
    
     
      <div className="xl:w-1/3 md:w-1/2 p-4 ">
        <div className="p-6 border-2 rounded-md shadow-md">
          <div className="w-full h-10 inline-flex items-center justify-center rounded-full text-custom-orange mb-4">
            <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1718082003/dlrd1inr6zsh2qc9nhoc.webp" className="h-20 w-20 rounded-full" alt="" />
          </div>
          <h2 className="text-lg text-gray-900 font-bold title-font mb-2 text-center">Virtual Ordering</h2>
          <p className="leading-relaxed text-base text-center"> Order through the app, view the menu, and track orders live.

</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4 ">
        <div className="p-6 border-2  rounded-md shadow-md">
          <div className="w-full h-10 inline-flex items-center justify-center rounded-full text-custom-orange mb-4">
            <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1718082003/uovyzwvbvncuciy0ff10.webp" className="h-20 w-20 rounded-full" alt="" />
          </div>
          <h2 className="text-lg text-gray-900 font-bold title-font mb-2 text-center">Eliminate Crowding</h2>
          <p className="leading-relaxed text-base text-center">Long queues disappear with our self-pickup option.
          </p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4 ">
        <div className="p-6 border-2 rounded-md shadow-md">
          <div className="w-full h-10 inline-flex items-center justify-center rounded-full text-custom-orange mb-4">
            <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1718082001/drqjac3qzamm0rzwjtee.webp" className="h-20 w-20 rounded-full" alt="" />
          </div>
          <h2 className="text-lg text-gray-900 font-bold title-font mb-2 text-center">E-commerce Drop-off via IoT</h2>
          <p className="leading-relaxed text-base text-center">No need for delivery agents; drop-offs happen through IoT S-Box.
          </p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4 ">
        <div className="p-6 border-2 rounded-md shadow-md">
          <div className="w-full h-10 inline-flex items-center justify-center rounded-full text-custom-orange mb-4">
            <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1718082002/xueggi03umoxuzes8ilz.webp" className="h-20 rounded-full" alt="" />
          </div>
          <h2 className="text-lg text-gray-900 font-bold title-font mb-2 text-center">Mess Management</h2>
          <p className="leading-relaxed text-base text-center">Digitize the mess hall with pre-booking, customization, offers, and subscriptions.
          </p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4 ">
        <div className="p-6 border-2 rounded-md shadow-md">
          <div className="w-full h-10 inline-flex items-center justify-center rounded-full text-custom-orange mb-4">
            <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1718082001/lxnxxbhrzyxmx8gem1gq.webp" className="h-20 w-20 rounded-full" alt="" />
          </div>
          <h2 className="text-lg text-gray-900 font-bold title-font mb-2 text-center">Food Court Digitization</h2>
          <p className="leading-relaxed text-base text-center">Book dining, order seamlessly, e-bill, pay online, and give feedback.
          </p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4 ">
        <div className="p-6  border-2 rounded-md shadow-md">
          <div className="w-full h-10 inline-flex items-center justify-center rounded-full text-custom-orange mb-4">
            <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1718082001/l7qdgwf9m4iq6oflzxnm.webp" className="h-24 w-24 rounded-full" alt="" />
          </div>
          <h2 className="text-lg text-gray-900 font-bold title-font mb-2 text-center">Customization</h2>
          <p className="leading-relaxed text-base text-center"> Tailor all features to campus requirements for a unique experience.</p>
        </div>
      </div>
       

    </div>
  </div>
</section>
    </div>
  )
}

export default Business
