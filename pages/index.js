import Image from "next/image";
import { Inter } from "next/font/google";
import Testimonials from './components/Testimonials'
import Faqs from './components/Faqs'
const inter = Inter({ subsets: ["latin"] });
import Landing from "./components/landing/Landing";
import Review from "./components/review/Review"
import { useInView } from 'react-intersection-observer';


export default function Home() {



  const { ref: firstSectionRef, inView: firstSectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: secondSectionRef, inView: secondSectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: firstItemRef, inView: firstItemInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: secondItemRef, inView: secondItemInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: thirdItemRef, inView: thirdItemInView } = useInView({
    triggerOnce: true,
    threshold: 0.0005, // Adjust this value if necessary
    rootMargin: '0px 0px -10% 0px', // Adjust the root margin to ensure it gets triggered
  });
  const { ref: fourthItemRef, inView: fourthItemInView } = useInView({
    triggerOnce: true,
    threshold: 0.0001,
    rootMargin: '0px 0px 20% 400px'
  });

  const { ref: fifthItemRef, inView: fifthItemInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: sixthItemRef, inView: sixthItemInView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjust this value if necessary
    rootMargin: '0px 0px -10% 0px', // Adjust the root margin to ensure it gets triggered
  });

  const handleButtonClick = (msg) => {
    setVisible(false); // Hide the current message immediately
    setTimeout(() => {
      setMessage(msg);
      setVisible(true); // Show the new message after a delay
    }, 300); // Delay to match the animation duration
  };
  return (
  <>
  
  <Landing/>
  <section className="flex items-center font-poppins mt-5">
      <div ref={firstSectionRef} className={`justify-center flex-1 mx-auto max-w-8xl overflow-hidden lg:py-4 ${firstSectionInView ? 'animate__animated animate__bounceInUp fade-in' : 'fade-out'}`}>
        <div className="text-center mb-5">
          <div className="text-center font-bold">
            <p className="inline-block text-4xl text-black">Our</p>
            <span className="inline-block">&nbsp;</span>
            <span className="inline-block">&nbsp;</span>
            <p className="inline-block text-4xl text-custom-orange">Presence</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center">

                                <div className="w-full p-2 rounded-xl shadow-md shadow-custom-orange px-4 mb-10 sm:w-1/2 lg:w-1/3 xl:w-1/6 md:mr-2 mx-10 md:mx-0 bg-opacity-50 backdrop-blur-3xl ">
                                    <div className="mx-auto text-center ">
                                        <div
                                            className="inline-block mb-3 overflow-hidden text-xs text-white rounded-full w-44 h-44 sm:w-44 sm:h-44">
                                            <img className="object-cover w-full h-full transition-all hover:scale-110"
                                                src="https://res.cloudinary.com/dtyombve3/image/upload/v1706348568/download_1_gnhond.png" alt="" />
                                        </div>
                                        <h2 className="mb-2 text-xl font-semibold text-gray-800 ">NIT Karnataka</h2>
                                

                                    </div>
                                </div>
                                <div className="w-full border-black p-2 rounded-xl shadow-md shadow-custom-orange px-4 mb-10 sm:w-1/2 lg:w-1/3 xl:w-1/6 md:mr-2 mx-10 md:mx-0 bg-opacity-50 backdrop-blur-3xl ">
                                    <div className="mx-auto text-center ">
                                        <div
                                            className="inline-block mb-3 overflow-hidden text-xs text-white rounded-full w-44 h-44 sm:w-44 sm:h-44">
                                            <img className="object-cover w-full h-full transition-all hover:scale-110"
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRozHEJ9lxt8ZFVX6xhU4AbRC8dvYe_osDc8SzcjnlNbg&s" alt="" />
                                        </div>
                                        <h2 className="mb-2 text-xl font-semibold text-gray-800 ">MIT-Manipal</h2>
                                        {/* <span className="inline-block mb-6 text-base font-medium text-blue-500 ">MBA
                                        </span> */}

                                    </div>
                                </div>
                                <div className="w-full border-black p-2 rounded-xl shadow-md shadow-custom-orange px-4 mb-10 sm:w-1/2 lg:w-1/3 xl:w-1/6 md:mr-2 mx-10 md:mx-0 bg-opacity-50 backdrop-blur-3xl ">
                                    <div className="mx-auto text-center ">
                                        <div
                                            className="inline-block mb-3 overflow-hidden text-xs text-white bg-blue-700 rounded-full w-44 h-44 sm:w-44 sm:h-44">
                                            <img className="object-cover w-full h-full transition-all hover:scale-110"
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv-wKWMAscw-cVOtTOs87TvVeoZp5O0-LrvWwN3azvAw&s" alt="" />
                                        </div>
                                        <h2 className="mb-2 text-xl font-semibold text-gray-800 ">IIM KOZHIKODE</h2>
                                        {/* <span className="inline-block mb-6 text-base font-medium text-blue-500 ">B Tech
                                        </span> */}

                                    </div>
                                </div>
                                <div className="w-full border-black p-2 rounded-xl shadow-md shadow-custom-orange px-4 mb-10 sm:w-1/2 lg:w-1/3 xl:w-1/6 md:mr-2 mx-10 md:mx-0 bg-opacity-50 backdrop-blur-3xl " >
                                    <div className="mx-auto text-center ">
                                        <div
                                            className="inline-block mb-3 overflow-hidden text-xs text-white bg-blue-700 rounded-full w-44 h-44 sm:w-44 sm:h-44">
                                            <img className="object-cover w-full h-full transition-all hover:scale-110"
                                                src="https://www.financialexpress.com/wp-content/uploads/2022/05/MAHE-logo.png" alt="" />
                                        </div>
                                        <h2 className="mb-2 text-xl font-semibold text-gray-800 ">MAHE Manipal</h2>
                                        {/* <span className="inline-block mb-6 text-base font-medium text-blue-500 ">B Tech
                                        </span> */}

                                    </div>
                                </div>
                                <div className="w-full border-black p-2 rounded-xl shadow-md shadow-custom-orange px-4 mb-10 sm:w-1/2 lg:w-1/3 xl:w-1/6 md:mr-2 mx-10 md:mx-0 bg-opacity-50 backdrop-blur-3xl ">
                                    <div className="mx-auto text-center ">
                                        <div
                                            className="inline-block mb-3 overflow-hidden text-xs text-white bg-blue-700 rounded-full w-44 h-44 sm:w-44 sm:h-44">
                                            <img className="object-cover w-full h-full transition-all hover:scale-110"
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyH1NTivJQTg1zZ8GDf5MFQ2BA8MhxSZJlc4Q_fOhSzg&" alt="" />
                                        </div>
                                        <h2 className="mb-2 text-xl font-semibold text-gray-800 ">NIT Calicut</h2>
                                        {/* <span
                                            className="inline-block mb-6 text-base font-medium text-blue-500 ">MBBS
                                        </span> */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> 

<section ref={secondSectionRef} className={`text-gray-600 mt-10 body-font ${secondSectionInView? 'animate__animated animate__bounceInUp fade-in' : 'fade-out'}`}>
  <div className="container px-5 mx-auto">
  <div className="text-center font-bold mb-10">
  <p className="inline-block text-4xl text-black">Why choose </p>
  <span className="inline-block">&nbsp;</span>
  <span className="inline-block">&nbsp;</span>
  <p className="inline-block text-4xl text-custom-orange">US ?</p>
</div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="p-6 rounded-lg">
          <div className="w-full h-10 inline-flex items-center justify-center rounded-full text-custom-orange mb-4">
            <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1710580187/Vector_m5vju9.png" className="h-20" alt="" />
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2 text-center">Contactless delivery</h2>
          <p className="leading-relaxed text-base text-center">In-campus merchants can provide super fast deliveries at affordable price to students</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="p-6 rounded-lg">
          <div className="w-full h-10 inline-flex items-center justify-center rounded-full text-custom-orange mb-4">
            <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1710580470/fluent_people-team-48-regular_wp4aay.png" className="h-20" alt="" />
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2 text-center">Dedicated Team</h2>
          <p className="leading-relaxed text-base text-center">24*7 Quick response</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="p-6 rounded-lg">
          <div className="w-full h-10 inline-flex items-center justify-center rounded-full text-custom-orange mb-4">
            <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1710580658/clarity_building-line_i3crrg.png" className="h-20" alt="" />
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2 text-center">Intercampus Connect</h2>
          <p className="leading-relaxed text-base text-center">Connect with different campus students to do projects, publicise about campus events</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="p-6 rounded-lg">
          <div className="w-full h-10 inline-flex items-center justify-center rounded-full text-custom-orange mb-4">
            <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1710580687/mingcute_happy-line_hxpavk.png" className="h-20" alt="" />
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2 text-center">Happy Customers</h2>
          <p className="leading-relaxed text-base text-center">Hostel deliveries, Curated student discounts and coupons</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="p-6 rounded-lg">
          <div className="w-full h-10 inline-flex items-center justify-center rounded-full text-custom-orange mb-4">
            <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1710580741/material-symbols_diamond-outline_fjsmc4.png" className="h-20" alt="" />
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2 text-center">Best Quality</h2>
          <p className="leading-relaxed text-base text-center">All in one app for your campus for - Personalized engagements</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="p-6 rounded-lg">
          <div className="w-full h-10 inline-flex items-center justify-center rounded-full text-custom-orange mb-4">
            <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1710580746/Group_56_qeeko5.png" className="h-20" alt="" />
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2 text-center">Save time and money</h2>
          <p className="leading-relaxed text-base text-center">Get exclusive student discount, no more queuing at merchant places</p>
        </div>
      </div>
    </div>
    {/* <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button> */}
  </div>
</section>
<section className="text-gray-600 body-font mt-20 overflow-hidden mt-10">
  <div className="container px-5 mx-auto">
  <div className="text-center font-bold">
  <p className="inline-block text-4xl text-black mb-4">We are</p>
  <span className="inline-block">&nbsp;</span>
  <span className="inline-block">&nbsp;</span>
  <p className="inline-block text-4xl text-custom-orange">Internet Famous</p>
</div>
    <div className="flex flex-wrap -m-4">
      <div  className={`flex `}>

      
      <a href="https://www.axilor.com/company/changepay/" ref={firstItemRef} className={`lg:w-1/3 sm:w-1/2 p-4 h-52 ${firstItemInView ? 'slide-in-right' : 'slide-out-right'} `}>
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 p-10 object-cover object-center" src="https://res.cloudinary.com/dtyombve3/image/upload/v1716286587/mpya2jtkdjtv7nickfqb.png"/>
          <div className="px-8 max-h-svh py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            {/* <h2 className="tracking-widest text-sm title-font font-medium text-custom-orange mb-1">THE SUBTITLE</h2> */}
            <h1 className="title-font font-medium text-gray-900 mb-3">It integrates disparate services into one simple app tied together with an IoT lockbox to solve the “Gate-to-hand” challenge of delivering in college hostels. India has nearly 6.5M students in nearly 40K hostels spending ₹4K/month making it a $4B market annually.</h1>
          
          </div>
        </div>
      </a>
      <a href="https://www.deccanherald.com/content/602201/nitk-students-change-way-they.html" className={`lg:w-1/3 sm:w-1/2 p-4  ${secondItemInView ? 'slide-in-right' : 'slide-out-right'}`
    } ref={secondItemRef}>
        <div className="flex relative corder">
          <img alt="gallery" className="absolute p-10 inset-0 h-52 mt-8 mx-auto items-center object-cover object-center" src="https://res.cloudinary.com/dtyombve3/image/upload/v1716286681/os4u5qcnhcm96v9nwyu7.png"/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            {/* <h2 className="tracking-widest text-sm title-font font-medium text-custom-orange mb-1">THE SUBTITLE</h2> */}
            <h1 className="title-font font-medium text-gray-900 mb-3">Five students of the National Institute of Technology – Karnataka (NITK) in Surathkal have made it possible, thanks to demonetisation, which inspired them to do something unbelievable</h1>
          </div>
        </div>
      </a>
      <a href="https://bangaloremirror.indiatimes.com/news/state/the-way-you-pay-may-soon-change/articleshow/57723069.cms" ref={thirdItemRef} className={`lg:w-1/3 sm:w-1/2 p-4 ${thirdItemInView ? 'slide-in-right' : 'slide-out-right'}`}>
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 p-10 h-52 mx-auto mt-5 object-cover object-center" src="https://res.cloudinary.com/dtyombve3/image/upload/v1716286940/k9zehvd2fe96gglgkhr5.png"/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-custom-orange mb-1">What they wanna Say</h2>
            {/* <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1> */}
            <p className="leading-relaxed">NITK students revolutionize campus life with a cutting-edge system designed to streamline transaction management. Tired of tedious processes? Say goodbye to manual paperwork and hello to effortless transactions with our innovative solution.
</p>
          </div>
        </div>
      </a>
      </div>
      <a href="https://timesofindia.indiatimes.com/city/mangaluru/changepay-curates-students-e-commerce-needs/articleshow/105547029.cms" ref={fourthItemRef} className={`lg:w-1/3 sm:w-1/2 p-4 ${fourthItemInView ? 'slide-in-left' : 'slide-out-left'}`}>
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 p-10 h-64 mx-auto object-cover object-center " src="https://res.cloudinary.com/dtyombve3/image/upload/v1716287225/n1vkaf2vo5szcqklonxa.png"/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            {/* <h2 className="tracking-widest text-sm title-font font-medium text-custom-orange mb-1">THE SUBTITLE</h2> */}
            <h1 className="title-font font-medium text-gray-900 mb-3">Experience the game-changing innovation from NITK students, reshaping the landscape of campus operations. Our dynamic system redefines transaction management, offering a seamless, user-friendly solution that empowers students and administrators alike. </h1>
            
          </div>
        </div>
      </a>
      <div ref={fifthItemRef} className={`lg:w-1/3 sm:w-1/2 p-4 ${fifthItemInView ? 'slide-in-left' : 'slide-out-left'}`}>
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 h-92 mx-auto object-cover object-center" src="https://res.cloudinary.com/dtyombve3/image/upload/v1716287094/go4xlg2tvam4z51jg9iz.png"/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            {/* <h2 className="tracking-widest text-sm title-font font-medium text-custom-orange mb-1">THE SUBTITLE</h2> */}
            <h1 className="title-font font-medium text-gray-900 mb-3">Experience the game-changing innovation from NITK students, reshaping the landscape of campus operations. Our dynamic system redefines transaction management, offering a seamless, user-friendly solution that empowers students and administrators alike. </h1>
            {/* <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p> */}
          </div>
        </div>
      </div>
      <a href="https://prajapragathi.com/local-kannada-essential-items-at-your-door-step/" ref={sixthItemRef} className={`lg:w-1/3 sm:w-1/2 p-4 ${sixthItemInView ? 'slide-in-left' : 'slide-out-left'}`}>
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full p-10 h-full object-cover object-center" src="https://res.cloudinary.com/dtyombve3/image/upload/v1716287323/izb7xfahj2nsju97zzcr.png"/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            {/* <h2 className="tracking-widest text-sm title-font font-medium text-custom-orange mb-1">THE SUBTITLE</h2> */}
            <h1 className="title-font font-medium text-gray-900 mb-3">Experience the game-changing innovation from NITK students, reshaping the landscape of campus operations. Our dynamic system redefines transaction management, offering a seamless, user-friendly solution that empowers students and administrators alike. </h1>
            {/* <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p> */}
          </div>
        </div>
      </a>
    </div>
  </div>
</section>
{/* <Testimonials/> */}
<Review/>
<section className="">
  <div id="about" className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 mt-10 lg:px-6">
      <div className="mx-auto mb-8 max-w-screen lg:mb-6">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-custom-orange ">About Us</h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">At Changepay, our dedicated team revolutionizes the delivery experience with innovative technology and exceptional service.</p>
      </div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 p-2 mx-auto">
    <div className="flex flex-wrap -m-4">

      <div className="p-4 md:w-1/3">
        <div className="h-full  rounded-lg overflow-hidden">
          <img className="mx-auto mb-4 w-36 h-36 rounded-full object-cover object-center" src="https://res.cloudinary.com/dtyombve3/image/upload/v1718075348/z9tm4ylqrl7h5zxh7fh8.png" alt="blog"/>
          <div className="px-6 py-1">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Founder and CEO</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Dhyvik GJ</h1>
           
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full rounded-lg overflow-hidden">
          <img className="mx-auto mb-4 w-36 h-36 rounded-full object-cover object-center " src="https://res.cloudinary.com/dtyombve3/image/upload/v1718075450/xgou4kugolndyijrssre.jpg" alt="blog"/>
          <div className="px-6 py-1">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Co-founder , CTO </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Jeevan M</h1>
           
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full  rounded-lg overflow-hidden">
          <img className="mx-auto mb-4 w-36 h-36 rounded-full object-cover object-center" src="https://res.cloudinary.com/dtyombve3/image/upload/v1718074511/nfmntnoxtrsm9enok97c.jpg" alt="blog"/>
          <div className="px-6 py-1">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">CTO</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">R Chetan Jaydeep</h1>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</section> 
      <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          <div className="text-center text-gray-500 dark:text-gray-400">
              <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="https://res.cloudinary.com/dtyombve3/image/upload/v1718074512/zrrws9h6cvi8ua8xmy8o.jpg" alt="Bonnie Avatar"/>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 ">
                  <a href="#">GOWTHAM N</a>
              </h3>
              <p>TECHNICAL SUPPORT ENGINEER</p>
              
          </div>
          <div className="text-center text-gray-500 dark:text-gray-400">
              <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="https://res.cloudinary.com/dtyombve3/image/upload/v1718074513/egj9dltlmlhjacj3t7sb.jpg" alt="Helene Avatar"/>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 ">
                  <a href="#">NIVEDITHA DEVADIGA</a>
              </h3>
              <p>SENIOR MERCHANT SUPPORT ENGINEER</p>
              
          </div>
          <div className="text-center text-gray-500 dark:text-gray-400">
              <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="https://res.cloudinary.com/dtyombve3/image/upload/v1718074511/ackhgxqhlyhmpnnfoe5z.jpg" alt="Jese Avatar"/>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 ">
                  <a href="#">Chandana S</a>
              </h3>
              <p>Technical Support Engineer </p>
              
          </div>

        
      </div>  
  </div>
</section>
<Faqs/>
  </>
  );
}
