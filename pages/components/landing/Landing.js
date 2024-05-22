import React, { useState,useEffect } from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { useInView } from 'react-intersection-observer';
import ReactTypingEffect from 'react-typing-effect';
import Link from 'next/link';


const Landing = () => {
  const [positionT, setPositionT] = useState('10');
  const [positionL, setPositionL] = useState('40');
  const [positionA, setPositionA] = useState('0');
  const [image, setImage] = useState('https://res.cloudinary.com/dtyombve3/image/upload/v1713083430/Group_69_gjkx35.png');

  const [visible, setVisible] = useState(false);
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
  return (
    <div className='mt-20'>
      <section className="text-gray-600 body-font ">
        <div>
          <div className="">
            <p className="text-black text-center text-4xl font-bold">
              Elevate campus living:
            </p>
            <div className="text-custom-orange text-center text-5xl font-bold
    ">
      <ReactTypingEffect
        text="Unleash local commerce across India"
        speed={50}
        eraseSpeed={200}
        eraseDelay={5000}
      />
    </div>
          </div>
        </div>
        <div className='flex mt-10 w-full justify-center'>
          <div className='max-w-xl ml-5 flex'>
            <div className=''>
              <button onClick={left}>
                <div className='mx-auto text-center hover:text-custom-orange'>
                  <h1 className='hover:text-custom-orange hover:text-2xl transition-all  text-xl font-bold mx-auto mt-16'>Students</h1>
                  <p className='hover:text-custom-orange'>
                    A unique opportunity for students to experience entrepreneurship.
                  </p>
                </div>
              </button>
              <button onClick={middle}>
                <div className='mx-auto text-center hover:text-custom-orange relative right-10'>
                  <h1 className='hover:text-custom-orange text-xl hover:text-2xl transition-all font-bold mx-auto mt-14 '>Seller</h1>
                  <p className='hover:text-custom-orange'>
                    Learn more about how our platform helps campus sellers.
                  </p>
                </div>
              </button>
              <button onClick={right}>
                <div className='mx-auto text-center hover:text-custom-orange'>
                  <h1 className='hover:text-custom-orange text-xl hover:text-2xl transition-all font-bold mx-auto mt-14'>Campus</h1>
                  <p className='hover:text-custom-orange'>
                    Elevate campus living: Unleash local commerce across India
                  </p>
                </div>
              </button>
            </div>
            
            <div>
              <img 
                className={`h-fit relative transition-all top-48  right-20 z-20`} 
                style={{ top: positionT, right: positionL, transform: `rotate(${positionA}deg)` }} 
                src="https://res.cloudinary.com/dtyombve3/image/upload/f_auto,q_auto/vw4lxwfgynh7e6ecad1t" 
                alt="Arrow" 
                loading="lazy" 
              />
              
            </div>
          </div>
          <img 
            className='h-[500px] -left-24 relative transition-all ' 
            src={image} 
            alt="Main visual" 
            loading="lazy" 
          />
        </div>
      </section>
      <section className="flex w-full justify-center text-gray-600 items-center">
      <div className="max-w-xl">
      <div ref={ref} loading="lazy" className={`animate__animated ${visible ? 'animate__slideInLeft fade-in' : 'fade-out'}`}>
        <p className="text-black text-center text-4xl font-bold">
          Join the Movement: Students Leading the Charge for
        </p>
        <p className="text-custom-orange text-center text-5xl font-bold">
          Sustainable Campus Businesses!
        </p>
      </div>
    </div>
        <ParallaxProvider>
        <div className='flex items-center justify-center'>
  <div className='relative'>
  <Parallax className="custom-class" rotate={[0, 90]}>
    <img 
      src="https://res.cloudinary.com/dtyombve3/image/upload/v1714183227/Group_70_fgiz6x.png" 
      className='h-[600px] -z-10' 
      alt="Background" 
      loading="lazy" 
    />
       </Parallax>
    <div className='absolute inset-0 flex items-center justify-center'>
      <div className='bg-white rounded-full w-[250px] h-[250px] flex flex-col items-center justify-center'>
      <p className='font-semibold text-custom-orange text-center mx-2'>
                A unique way for students to experience entrepreneurship for students, elevating campus life for institutions. Explore button.
              </p>
              <Link 
              href={'/connect#User'}
                className=' rounded-full mt-5 bg-custom-gradient hover:bg-custom-gradient-hover hover:text-xl text-white px-5 font-bold py-1 transition-all' 
              >
                Explore
              </Link>
      </div>
    </div>
  </div>
</div>
</ParallaxProvider>
      </section>
    </div>
  );
}

export default Landing;
