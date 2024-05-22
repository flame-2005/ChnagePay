import React from 'react';
import { useInView } from 'react-intersection-observer';
// import './styles.css'; // Ensure this is correctly pointing to your CSS file

export default function Home() {
  const { ref: firstItemRef, inView: firstItemInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: '0px 0px 10% 10%'
  });

  const { ref: secondItemRef, inView: secondItemInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: thirdItemRef, inView: thirdItemInView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjust this value if necessary
    rootMargin: '0px 0px -10% 0px', // Adjust the root margin to ensure it gets triggered
  });
  

  console.log('First Item In View:', firstItemInView);
console.log('Second Item In View:', secondItemInView);
console.log('Third Item In View:', thirdItemInView);


  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 mx-auto">
        <div className="text-center font-bold mb-10">
          <p className="inline-block text-4xl text-black">Why choose </p>
          <span className="inline-block">&nbsp;</span>
          <span className="inline-block">&nbsp;</span>
          <p className="inline-block text-4xl text-custom-orange">US ?</p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div
            className={`xl:w-1/3 md:w-1/2 p-4 ${firstItemInView ? 'slide-in-right' : 'slide-out-right'}`}
            ref={firstItemRef}
          >
            <div className="p-6 rounded-lg">
              <div className="w-full h-10 inline-flex items-center justify-center rounded-full text-custom-orange mb-4">
                <img
                  src="https://res.cloudinary.com/dtyombve3/image/upload/v1710580187/Vector_m5vju9.png"
                  className="h-20"
                  alt=""
                />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2 text-center">
                Contactless delivery
              </h2>
              <p className="leading-relaxed text-base text-center">
                In-campus merchants can provide super fast deliveries at affordable price to students
              </p>
            </div>
          </div>
          <div
            className={`xl:w-1/3 md:w-1/2 p-4 ${secondItemInView ? 'slide-in-right' : 'slide-out-right'}`}
            ref={secondItemRef}
          >
            <div className="p-6 rounded-lg">
              <div className="w-full h-10 inline-flex items-center justify-center rounded-full text-custom-orange mb-4">
                <img
                  src="https://res.cloudinary.com/dtyombve3/image/upload/v1710580470/fluent_people-team-48-regular_wp4aay.png"
                  className="h-20"
                  alt=""
                />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2 text-center">
                Dedicated Team
              </h2>
              <p className="leading-relaxed text-base text-center">24*7 Quick response</p>
            </div>
          </div>
          <div
            className={`xl:w-1/3 md:w-1/2 p-4 ${thirdItemInView ? 'slide-in-right' : 'slide-out-right'}`}
            ref={thirdItemRef}
          >
            <div className="p-6 rounded-lg">
              <div className="w-full h-10 inline-flex items-center justify-center rounded-full text-custom-orange mb-4">
                <img
                  src="https://res.cloudinary.com/dtyombve3/image/upload/v1710580658/clarity_building-line_i3crrg.png"
                  className="h-20"
                  alt=""
                />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2 text-center">
                Intercampus Connect
              </h2>
              <p className="leading-relaxed text-base text-center">
                Connect with different campus students to do projects, publicise about campus events
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
