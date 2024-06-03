import React, { useState,useEffect } from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { useInView } from 'react-intersection-observer';
import ReactTypingEffect from 'react-typing-effect';
import Link from 'next/link';


const Landing = () => {
  const [message, setMessage] = useState('This is message 1');
  const [visible, setVisible] = useState(true);
  const [positionT, setPositionT] = useState('10');
  const [positionL, setPositionL] = useState('40');
  const [positionA, setPositionA] = useState('0');
  const [image, setImage] = useState('https://res.cloudinary.com/dtyombve3/image/upload/v1713083430/Group_69_gjkx35.png');

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const middle = () => {
    setPositionA('0');
    setPositionL('5rem');
    setPositionT('12rem');
    setImage('https://res.cloudinary.com/dtyombve3/image/upload/v1714787335/Group_70_wzfvpa.png');
  };

  const right = () => {
    setPositionA('-45');
    setPositionL('4rem');
    setPositionT('18rem');
    setImage('https://res.cloudinary.com/dtyombve3/image/upload/v1714794481/Group_71_hwmgul.png');
  };

  const left = () => {
    setPositionA('45');
    setPositionL('2.5rem');
    setPositionT('6rem');
    setImage('https://res.cloudinary.com/dtyombve3/image/upload/v1713083430/Group_69_gjkx35.png');
  };
  useEffect(() => {
    if (inView) {
      setVisible(true);
    }
  }, [inView]); // Only re-run the effect if inView changes
  const { ref: fifthItemRef, inView: fifthItemInView } = useInView({
    triggerOnce: true,
    threshold: 0.002,
  });

  const combinedClickHandler = (left, msg) => {
    left(); // Call the left function
    handleButtonClick(msg); // Call handleButtonClick with the message
  };
  const handleButtonClick = (msg) => {
    setVisible(false); // Hide the current message immediately
    setTimeout(() => {
      setMessage(msg);
      setVisible(true); // Show the new message after a delay
    }, 300); // Delay to match the animation duration
  };

  return (
    <div className='mt-20'>
      <section className="text-gray-600 w-full body-font overflow-hidden">
        <div>
          <div className=" font-urbanis">
            <p className="text-black text-center text-4xl font-bold myFont">
              Elevate campus living:
            </p>
            <div className="text-custom-orange text-center text-5xl font-bold
    ">
      <ReactTypingEffect
      className='myFont'
        text="Unleash local commerce across India"
        speed={50}
        eraseSpeed={200}
        eraseDelay={5000}
      />
    </div>
          </div>
        </div>
        <div className='flex mt-10 relative w-full justify-center t'>
          <div className='max-w-xl ml-5 flex'>
            <div className=''>
              <button  onClick={() => combinedClickHandler(left, 'This is message 1')}>
                <div className='mx-auto text-center hover:text-custom-orange'>
                  <h1 className='hover:text-custom-orange hover:text-2xl transition-all  text-xl font-bold mx-auto '>Students</h1>
                  <ol className='hover:text-custom-orange text-sm' >
                    <li className='text-left'> An opportunity to completely digitize food courts and mess halls.
</li>
<li className='text-left'>
Transform the way we pay on campus and earn money.
</li>
                  </ol>
                </div>
              </button>
              <button  onClick={() => combinedClickHandler(middle, 'This is message 1')}>
                <div className='mx-auto text-center hover:text-custom-orange relative right-20'>
                  <h1 className='hover:text-custom-orange text-xl hover:text-2xl transition-all font-bold mx-auto  '>Seller</h1>
                  <ol className='hover:text-custom-orange text-sm'>
                    <li className='text-left'>An omnichannel application provides digital orders, dashboards, automatic billing, online payments, and customization.
</li>
                    <li className='text-left'>
                    A breakthrough for merchants who operate canteens in or near campus. 
                    </li>
                  </ol>
                </div>
              </button>
              <button  onClick={() => combinedClickHandler(right, 'This is message 1')}>
                <div className='mx-auto text-center hover:text-custom-orange relative right-10'>
                  <h1 className='hover:text-custom-orange text-xl hover:text-2xl transition-all font-bold mx-auto '>Campus</h1>
                  <ol className='hover:text-custom-orange text-sm'>
                    <li className='text-left'>
                    The food or mess halls digitization solution for campuses. 

                    </li>
                    <li className='text-left'>
                    Offers a one-stop solution for crowding at cafeterias, e-commerce delivery, cash pilferage, inventory management, and real-time analytics.
                    </li>
                  </ol>
                </div>
              </button>
            </div>
            
            <div>
              <img 
                className={`h-fit relative transition-all top-48  right-20 z-20`} 
                style={{ top: positionT, right: positionL, transform: `rotate(${positionA}deg)` }} 
                src="https://res.cloudinary.com/dtyombve3/image/upload/f_auto,q_auto/vw4lxwfgynh7e6ecad1t" 
                alt="Arrow" 
              />
              
            </div>
          </div>
          <div className='flex'>

          <img 
            className='h-[500px] -left-24 relative transition-all' 
            src={image} 
            alt="Main visual" 
            loading="lazy" 
          />
          <div className='h-36 w-36'>

          {visible && (
        <div className="message-display right-28 h-36 w-36 border-2 rounded-tr-full rounded-tl-full rounded-br-full border-custom-orange bottom-6 relative flex justify-center items-center bg-cover bg-center">
          <div className='text-center my-auto h-full flex items-center justify-center'>{message}</div>
        </div>
      )}
          </div>
          </div>
        </div>
      </section>
      <section class="text-gray-400 body-font"
      style={{
        background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)'
      }}>
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div ref={fifthItemRef} className={`lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10 animate__animated ${fifthItemInView ? 'slide-in-left' : 'slide-out-left'}`} class="">
      <img class="object-cover object-center rounded" alt="hero" src="https://res.cloudinary.com/dtyombve3/image/upload/f_auto,q_auto/nfzxspoetmv2slkouopb"/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white font-urbanis">Revolutionizing Campus Dining  
        <br class="hidden lg:inline-block text-custom-orange"/>with Technology.
      </h1>
      <p class="mb-8 leading-relaxed text-white">We facilitate digital dining, implement cashless food halls, eliminate queues at print/xerox shops, offer meal customizations, and enhance campus living experiences.</p>
      <div class="flex justify-center">
        <Link href={'/components/Connect#User'} class="inline-flex text-white border-0 py-2 px-6 focus:outline-none text-lg rounded-full border-custom-orange border-2"
        style={{
          background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)'
        }}>Explore</Link>
      </div>
    </div>
  </div>
</section>
      
    </div>
  );
}

export default Landing;
