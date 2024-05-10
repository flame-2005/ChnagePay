import Image from "next/image";
import { Inter } from "next/font/google";
import Testimonials from './components/Testimonials'
import Faqs from './components/Faqs'
const inter = Inter({ subsets: ["latin"] });
import Landing from "./components/landing/Landing";

export default function Home() {
  return (
  <>
  <Landing/>
  {/* <section class="text-gray-600 body-font">
    <div>
    
    <div className="">
      <p className="text-black text-center text-4xl font-bold">               Elevate campus living:
 
</p>
<p className="text-custom-orange text-center text-4xl font-bold">Unleash local commerce across India</p>
    </div>
    </div>
  <div class="container mx-auto flex md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src="https://res.cloudinary.com/dtyombve3/image/upload/v1710568167/Group_2_2_jj8ukg.png"/>
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
      {/* </div>
    </div>
  </div>
// </section> */} 
{/* <section class="text-gray-600 body-font">
<div className="">
      <p className="text-black text-center text-4xl font-bold">               Where students unite to cultivate sustainable 
 
</p>
<p className="text-custom-orange text-center text-4xl font-bold">campus businesses.</p>
    </div>
  <div class="container mx-auto flex px-5 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
        <br class="hidden lg:inline-block"/>readymade gluten
      </h1>
      <p class="mb-8 leading-relaxed text-custom-orange"> 

      Transform campus life with a unique entrepreneurial experience tailored for students. Our platform offers immersive challenges, mentorship, and a vibrant community, empowering students to unleash their entrepreneurial potential. Elevate your institutions impact and inspire innovation today. Click below to explore!





</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-custom-orange border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full text-lg">Explore</button>
        {/* <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
      {/* </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="https://res.cloudinary.com/dtyombve3/image/upload/v1710569211/Group_4_kdhqu8.png"/>
    </div>
  </div>
</section> */} 
<section class="text-gray-600 body-font">
<div class="text-center font-bold">
  <p class="inline-block text-4xl text-black">Our</p>
  <span class="inline-block">&nbsp;</span>
  <span class="inline-block">&nbsp;</span>
  <p class="inline-block text-4xl text-custom-orange">Presence</p>
</div>

  <div class="container px-5 py-4 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/3 ">
        <div class="h-full border-4 border-custom-orange shadow-md shadow-custom-orange rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 mx-auto object-cover object-center" src="https://res.cloudinary.com/dtyombve3/image/upload/v1706348568/download_1_gnhond.png" alt="blog"/>
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">One of best technical collage</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">National Institute of technology Karnataka</h1>
            {/* */}
            
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3 ">
        <div class="h-full border-4 border-custom-orange shadow-md shadow-custom-orange rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36  mx-auto object-cover object-center" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRozHEJ9lxt8ZFVX6xhU4AbRC8dvYe_osDc8SzcjnlNbg&s" alt="blog"/>
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">One of best technical collage</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">MIT-Manipal</h1>
            
            
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3 ">
        <div class="h-full border-4 border-custom-orange shadow-md shadow-custom-orange rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 mx-auto object-cover object-center" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv-wKWMAscw-cVOtTOs87TvVeoZp5O0-LrvWwN3azvAw&s" alt="blog"/>
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">One of best technical collage</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">IIM KOZHIKODE
</h1>
            
            
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap justify-center -m-4">
    <div class="p-4 md:w-1/3 ">
        <div class="h-full border-4 border-custom-orange shadow-md shadow-custom-orange rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 mx-auto object-cover object-center" src="https://www.financialexpress.com/wp-content/uploads/2022/05/MAHE-logo.png" alt="blog"/>
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">One of best technical collage</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">MAHE Manipal</h1>
            
            
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3 ">
        <div class="h-full border-4 border-custom-orange shadow-md shadow-custom-orange rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 mx-auto object-cover object-center" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyH1NTivJQTg1zZ8GDf5MFQ2BA8MhxSZJlc4Q_fOhSzg&s" alt="blog"/>
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">One of best technical collage</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">NIT Calicut</h1>
            
            
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
  <div class="text-center font-bold mb-10">
  <p class="inline-block text-4xl text-black">We are</p>
  <span class="inline-block">&nbsp;</span>
  <span class="inline-block">&nbsp;</span>
  <p class="inline-block text-4xl text-custom-orange">Backed By</p>
</div>
    <div class="flex flex-wrap -m-4">
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="p-6 rounded-lg">
          <div class="w-full h-10 inline-flex items-center justify-center rounded-full text-custom-orange mb-4">
            <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1710580187/Vector_m5vju9.png" className="h-20" alt="" />
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2 text-center">Contactless delivery</h2>
          <p class="leading-relaxed text-base text-center">In-campus merchants can provide super fast deliveries at affordable price to students</p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="p-6 rounded-lg">
          <div class="w-full h-10 inline-flex items-center justify-center rounded-full text-custom-orange mb-4">
            <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1710580470/fluent_people-team-48-regular_wp4aay.png" className="h-20" alt="" />
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2 text-center">Dedicated Team</h2>
          <p class="leading-relaxed text-base text-center">24*7 Quick response</p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="p-6 rounded-lg">
          <div class="w-full h-10 inline-flex items-center justify-center rounded-full text-custom-orange mb-4">
            <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1710580658/clarity_building-line_i3crrg.png" className="h-20" alt="" />
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2 text-center">Intercampus Connect</h2>
          <p class="leading-relaxed text-base text-center">Connect with different campus students to do projects, publicise about campus events</p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="p-6 rounded-lg">
          <div class="w-full h-10 inline-flex items-center justify-center rounded-full text-custom-orange mb-4">
            <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1710580687/mingcute_happy-line_hxpavk.png" className="h-20" alt="" />
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2 text-center">Happy Customers</h2>
          <p class="leading-relaxed text-base text-center">Hostel deliveries, Curated student discounts and coupons</p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="p-6 rounded-lg">
          <div class="w-full h-10 inline-flex items-center justify-center rounded-full text-custom-orange mb-4">
            <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1710580741/material-symbols_diamond-outline_fjsmc4.png" className="h-20" alt="" />
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2 text-center">Best Quality</h2>
          <p class="leading-relaxed text-base text-center">All in one app for your campus for - Personalized engagements</p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="p-6 rounded-lg">
          <div class="w-full h-10 inline-flex items-center justify-center rounded-full text-custom-orange mb-4">
            <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1710580746/Group_56_qeeko5.png" className="h-20" alt="" />
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2 text-center">Save time and money</h2>
          <p class="leading-relaxed text-base text-center">Get exclusive student discount, no more queuing at merchant places</p>
        </div>
      </div>
    </div>
    {/* <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button> */}
  </div>
</section>
<section class="text-gray-600 body-font">
  <div class="container px-5 mx-auto">
  <div class="text-center font-bold">
  <p class="inline-block text-4xl text-black mb-4">We are</p>
  <span class="inline-block">&nbsp;</span>
  <span class="inline-block">&nbsp;</span>
  <p class="inline-block text-4xl text-custom-orange">Internet Famous</p>
</div>
    <div class="flex flex-wrap -m-4">
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://res.cloudinary.com/dtyombve3/image/upload/v1710581655/famous-1_c6dig6.png"/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-custom-orange mb-1">THE SUBTITLE</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
            <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://res.cloudinary.com/dtyombve3/image/upload/v1710581654/famous3_tct86g.png"/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-custom-orange mb-1">THE SUBTITLE</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
            <p class="leading-relaxed">NITK students CHANGE the way they PAY

<link rel="stylesheet" href="" />Read more at: https://www.deccanherald.com/content/602201/nitk-students-change-way-they.html</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://res.cloudinary.com/dtyombve3/image/upload/v1710581654/famous-2_fhsy2t.png"/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-custom-orange mb-1">What they wanna Say</h2>
            {/* <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1> */}
            <p class="leading-relaxed">Speaking to Bangalore Mirror of their achievement, Dhyvik GJ

Read more at:
https://bangaloremirror.indiatimes.com/news/state/the-way-you-pay-may-soon-change/articleshow/57723069.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://res.cloudinary.com/dtyombve3/image/upload/v1710581644/famous4_wihrju.png"/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-custom-orange mb-1">THE SUBTITLE</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Neptune</h1>
            <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://res.cloudinary.com/dtyombve3/image/upload/v1710581643/famous-6_nbieua.png"/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-custom-orange mb-1">THE SUBTITLE</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Holden Caulfield</h1>
            <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://res.cloudinary.com/dtyombve3/image/upload/v1710581643/famous-7_swbhju.png"/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-custom-orange mb-1">THE SUBTITLE</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1>
            <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<Testimonials/>
<Faqs/>
  </>
  );
}
