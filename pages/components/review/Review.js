import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useInView } from 'react-intersection-observer';
import { IoMdClose } from "react-icons/io";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

export default function App() {

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

    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation once
        threshold: 0.2, // Trigger when 50% of section is in view
      });
  return (
    <>
    <div ref={ref} className={`ont-poppins mt-5 ${inView ? 'animate__animated animate__bounceInUp fade-in' : 'fade-out'} `}>

    
     <div class="text-center font-bold">
  <p class="inline-block text-4xl text- mb-4">Our</p>
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

<SwiperSlide>
<div class="p-2 w-full inset-0 bg-opacity-50 backdrop-blur-2xl">
        <div class="h-full flex items-center border-gray-200 inset-0 bg-opacity-50 border p-2 rounded-lg">
          <img 
          onClick={togglePopup}
          alt="team" class="w-32 hover:cursor-pointer h-32 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://res.cloudinary.com/dtyombve3/image/upload/v1717149355/bq2lft8yn4vmyabhlaue.jpg"/>
          <div class="flex-grow">
          <h5 class="mb-1 text-xl font-medium text-custom-orange">Hungry house</h5>
        <span class="text-sm ">I highly recommend ChangePay to any campus food merchant. It&quot;s a fantastic platform that has improved our delivery efficiency, boosted our sales, and made our customers very happy. Its a must-have for any campus-based food business. </span>
       
          </div>
        </div>
      </div>
    
</SwiperSlide>

<SwiperSlide>
<div class="p-2 w-full inset-0 bg-opacity-50 backdrop-blur-2xl">
        <div class="h-full flex items-center border-gray-200 inset-0 bg-opacity-50 border p-2 rounded-lg">
          <img 
          onClick={togglePopup1}
          alt="team" class="w-32 h-32 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://res.cloudinary.com/dtyombve3/image/upload/v1717149355/xo7jsoeo8eurfbhx8thb.jpg"/>
          <div class="flex-grow">
          <h5 class="mb-1 text-xl font-medium text-custom-orange">Merchant</h5>
        <span class="text-sm ">The support from ChangePay has been exceptional. Any time we had a question or needed assistance, the team was quick to respond and very helpful. Its a great app with a great support system.I highly recommend ChangePay to any campus food merchant.</span>
       
          </div>
        </div>
      </div>
</SwiperSlide>
<SwiperSlide>
<div class="p-2 w-full inset-0 bg-opacity-50 backdrop-blur-2xl">
        <div class="h-full flex items-center border-gray-200 inset-0 bg-opacity-50 border p-2 rounded-lg">
          <img
          onClick={togglePopup2}
          alt="team" class="w-32 h-32 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://res.cloudinary.com/dtyombve3/image/upload/v1717149355/wmdpoyuf6uvyadp8rkyp.jpg"/>
          <div class="flex-grow">
          <h5 class="mb-1 text-xl font-medium text-custom-orange">Vaibhav Kitchen</h5>
        <span class="text-sm ">We&apos;ve received excellent feedback from students about ChangePay. They love the easy ordering process and the variety of food options available. It has definitely helped us reach a wider audience on campus.</span>
       
          </div>
        </div>
      </div>
</SwiperSlide>
<SwiperSlide>
<div class="p-2 w-full inset-0 bg-opacity-50 backdrop-blur-2xl">
        <div 
        onClick={togglePopupCar}
        class="h-full flex items-center border-gray-200 inset-0 bg-opacity-50 border p-2 rounded-lg">
          <img alt="team" class="w-32 h-32 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://res.cloudinary.com/dtyombve3/image/upload/v1717149354/bwy4qk9grvn2uwqvjxot.jpg"/>
          <div class="flex-grow">
          <h5 class="mb-1 text-xl font-medium text-custom-orange">Hotel MBD</h5>
        <span class="text-sm ">Since partnering with ChangePay, our sales have significantly increased. The app makes it so easy for students to order food, and we&apos;ve seen a substantial uptick in our daily orders. It&apos;s a fantastic platform for any merchant.</span>
       
          </div>
        </div>
      </div>
</SwiperSlide>
<SwiperSlide>
<div class="p-2 w-full inset-0 bg-opacity-50 backdrop-blur-2xl">
        <div class="h-full flex items-center border-gray-200 inset-0 bg-opacity-50 border p-2 rounded-lg">
          <img 
          onClick={togglePopupLabour}
          alt="team" class="w-32 h-32 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://res.cloudinary.com/dtyombve3/image/upload/v1717149354/wehsrdr0gvk4muqbi7r3.jpg"/>
          <div class="flex-grow">
          <h5 class="mb-1 text-xl font-medium text-custom-orange">V Kitchen</h5>
        <span class="text-sm ">C̤h̤a̤n̤g̤e̤p̤a̤y̤  i̤s̤ v̤e̤r̤y̤ e̤a̤s̤y̤ t̤o̤ o̤r̤d̤e̤r̤  f̤o̤o̤d̤  .̤ f̤o̤r̤ s̤t̤ṳd̤e̤n̤t̤s̤ n̤o̤ p̤r̤o̤b̤l̤e̤m̤s̤ t̤o̤ r̤e̤c̤e̤i̤v̤e̤ f̤o̤o̤d̤.̤ </span>
       
          </div>
        </div>
      </div>
</SwiperSlide>
{shouldRender && (
        <div className="fixed h-screen inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className={`popup-content ${isPopupOpen ? 'open' : 'close'}`}>
            <section className="text-gray-600 body-font overflow-hidden">
              <div className="container px-5 py-8 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                  <img
                    alt="ecommerce"
                    className="w-full h-fit object-cover object-center rounded"
                    src="https://res.cloudinary.com/dtyombve3/image/upload/v1717149355/bq2lft8yn4vmyabhlaue.jpg"
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
      {shouldRender1 && (
        <div className="fixed inset-0 flex items-center justify-center z-50 h-screen">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className={`popup-content ${isPopupOpen1 ? 'open' : 'close'}`}>
            <section className="text-gray-600 body-font overflow-hidden">
              <div className="container px-5 py-8 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                  <img
                    alt="ecommerce"
                    className="w-full h-full object-cover object-center rounded"
                    src="https://res.cloudinary.com/dtyombve3/image/upload/v1717149354/bwy4qk9grvn2uwqvjxot.jpg"
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

{shouldRender2 && (
        <div className="fixed inset-0 flex items-center justify-center z-50 h-screen">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className={`popup-content ${isPopupOpen2 ? 'open' : 'close'}`}>
            <section className="text-gray-600 body-font overflow-hidden">
              <div className="container px-5 py-8 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                  <img
                    alt="ecommerce"
                    className="w-full h-full object-cover object-center rounded"
                    src="https://res.cloudinary.com/dtyombve3/image/upload/v1717149354/wehsrdr0gvk4muqbi7r3.jpg"
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

{shouldRender3 && (
        <div className="fixed inset-0 flex items-center justify-center z-50 h-screen">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className={`popup-content ${isPopupOpen3 ? 'open' : 'close'}`}>
            <section className="text-gray-600 body-font overflow-hidden">
              <div className="container px-5 py-8 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                  <img
                    alt="ecommerce"
                    className="w-full h-full object-cover object-center rounded"
                    src="https://res.cloudinary.com/dtyombve3/image/upload/v1717149355/xo7jsoeo8eurfbhx8thb.jpg"
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

{shouldRender4 && (
        <div className="fixed inset-0 flex items-center justify-center z-50 h-screen">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className={`popup-content ${isPopupOpen4 ? 'open' : 'close'}`}>
            <section className="text-gray-600 body-font overflow-hidden">
              <div className="container px-5 py-8 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                  <img
                    alt="ecommerce"
                    className="w-full h-full object-cover object-center rounded"
                    src="https://res.cloudinary.com/dtyombve3/image/upload/v1717149355/wmdpoyuf6uvyadp8rkyp.jpg"
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
    
   
    
    
    







      </Swiper>
      </div>
    </>
  );
}
