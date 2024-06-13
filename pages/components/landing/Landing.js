import React, { useState,useEffect } from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { useInView } from 'react-intersection-observer';
import ReactTypingEffect from 'react-typing-effect';
import Link from 'next/link';


const Landing = () => {
  const [message, setMessage] = useState('Changepay has reduced my workforce and increased my daily revenues');
  const [visible, setVisible] = useState(true);
  const [positionT, setPositionT] = useState('10');
  const [positionL, setPositionL] = useState('40');
  const [positionA, setPositionA] = useState('0');
  const [image, setImage] = useState('https://res.cloudinary.com/dtyombve3/image/upload/v1714787335/Group_70_wzfvpa.png');

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
    <div className='mt-24'>
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
        <div className='flex mt-10 relative w-full justify-center ml-10'>
          <div className='max-w-xl ml-5 flex'>
            <div className=''>
              <button onMouseEnter={() => combinedClickHandler(left, 'I save 30 minutes everyday by ordering my food using changepay!')}
              >
                <div className='mx-auto text-center border-2 border-orange-300 rounded-md px-6 hover:shadow-lg hover:shadow-orange-200 transition-all hover:px-8'>

                  <h1 className='text-custom-orange hover:text-2xl transition-all  text-xl font-bold mx-auto '>Student</h1>
                  <ol className=' text-sm list-disc' >
                    <li className='text-left'> Opportunity to fully digitise the campus dining

</li>
<li className='text-left'>
Transforms payment processes for convenience 
</li>
<li className='text-left'>
Potential to earn. Money through innovative solutions

</li>
                  </ol>
                </div>
              </button>
              <button onMouseEnter={() => combinedClickHandler(middle, 'Changepay has reduced my workforce and increased my daily revenues')} >
                <div className='mx-auto text-center  relative right-20 border-2 border-orange-300 rounded-md px-6 hover:shadow-lg hover:shadow-orange-200 transition-all hover:px-8'>
                  <h1 className='text-custom-orange text-xl hover:text-2xl transition-all font-bold '>Seller</h1>
                  <ol className=' text-sm list-disc'>
                    <li className='text-left'>Omnichannel application for digital orders. 


</li>
                    <li className='text-left'>
                    Features automatic billing, online payments, and customisation. 

                    </li>
                    <li className='text-left'>
                    Solutions for crowd management and inventory control. 


                    </li>
                  </ol>
                </div>
              </button>
              <button onMouseEnter={() => combinedClickHandler(right, 'This is message 1')} >
                <div className='mx-auto text-center  relative right-12 border-2 border-orange-300 rounded-md px-6 hover:shadow-lg hover:shadow-orange-200 transition-all hover:px-8'>
                  <h1 className='text-custom-orange text-xl hover:text-2xl transition-all font-bold mx-auto '>Campus</h1>
                  <ol className=' text-sm list-disc'>
                    <li className='text-left'>
                    Digitizes food courts and mess halls for seamless operations
 

                    </li>
                    <li className='text-left'>
                    Solves cafeteria cafeteria crowding and cash pilferage issues. 

                    </li>
                    <li className='text-left'>
                    Enables efficient inventory management and real-time analysis.
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
        <div className="message-display right-28 border-2 rounded-tr-3xl rounded-tl-3xl  rounded-br-3xl  border-custom-orange bottom-6 relative flex justify-center items-center bg-cover bg-center">
          <div className='text-center my-auto h-full flex items-center justify-center text-sm'>{message}</div>
        </div>
      )}
          </div>
          </div>
        </div>
      </section>
      <section className="text-gray-400 body-font"
      style={{
        background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)'
      }}>
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div ref={fifthItemRef} className={`lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10 animate__animated ${fifthItemInView ? 'slide-in-left' : 'slide-out-left'}`}>
      <img className="object-cover object-center rounded" alt="hero" src="https://res.cloudinary.com/dtyombve3/image/upload/f_auto,q_auto/nfzxspoetmv2slkouopb"/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white font-urbanis">Revolutionizing Campus Dining  
        <br className="hidden lg:inline-block text-custom-orange"/>with Technology.
      </h1>
      <p className="mb-8 leading-relaxed text-white">We facilitate digital dining, implement cashless food halls, eliminate queues at print/xerox shops, offer meal customizations, and enhance campus living experiences.</p>
      <div className="flex justify-center">
        <Link href={'/components/Connect#User'} className="inline-flex text-white border-0 py-2 px-6 focus:outline-none text-lg rounded-full border-custom-orange border-2"
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
