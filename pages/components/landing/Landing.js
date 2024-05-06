import React, { useState } from 'react';
// import landing from 'pages\components\landing\landing.css'
const Landing = () => {
  const [positionT,setPostionT] = useState('10')
  const [positionL,setPostionL] = useState('32')
  const [positionA,setPostionA] = useState('0')
  const [image,setImage] = useState('https://res.cloudinary.com/dtyombve3/image/upload/v1713083430/Group_69_gjkx35.png')

  const middle = () =>{
    setPostionA('45')
    setPostionL('72')
    setPostionT('0')
    setImage('https://res.cloudinary.com/dtyombve3/image/upload/v1714787335/Group_70_wzfvpa.png')
  }
  const Right = () =>{
    setPostionA('90')
    setPostionL('[450px]')
    setPostionT('10')
    setImage('https://res.cloudinary.com/dtyombve3/image/upload/v1714794481/Group_71_hwmgul.png')

  }
  const Left = () =>{
    setPostionA('0')
    setPostionL('32')
    setPostionT('10')
    setImage('https://res.cloudinary.com/dtyombve3/image/upload/v1713083430/Group_69_gjkx35.png')
  }
  
  return (
    <div>
      <section class="text-gray-600 body-font">
    <div>
    
    <div className="">
      <p className="text-black text-center text-4xl font-bold">               Elevate campus living:
 
</p>
<p className="text-custom-orange text-center text-4xl font-bold">Unleash local commerce across India</p>
    </div>
    </div>
<div>
    <div className='max-w-2xl mx-auto '>
        <div className='flex'>
        <button onClick={Left}>

        <div className='mx-auto  text-center hover:text-custom-orange'>

        <h1 className='hover:text-custom-orange text-2xl font-bold mx-auto mt-20'>Students</h1> 
        <p className =  'hover:text-custom-orange text-xl ' >
          
          Elevate campus living:
 Unleash local commerce across India
              
          </p>
        </div>
        </button>
        <button onClick={middle}>
          
        <div className='mx-auto   text-center hover:text-custom-orange'>

        <h1 className='hover:text-custom-orange text-2xl font-bold mx-auto'>Seller</h1>
        <p className =  'hover:text-custom-orange text-xl ' >

        Elevate campus living:
 Unleash local commerce across India
        </p>
        </div>
        </button>
        <button onClick={Right}>

        <div className='mx-auto  text-center hover:text-custom-orange'>

        <h1 className='hover:text-custom-orange text-2xl font-bold mx-auto mt-20'>Campus</h1>
        <p  className =  'hover:text-custom-orange text-xl ' >

        Elevate campus living:
 Unleash local commerce across India
        </p>
        </div>
        </button>
        </div>
    <div>
        <img className={`h-24 relative top-${positionT} left-${positionL} rotate-${positionA} transition-all`} src="https://res.cloudinary.com/dtyombve3/image/upload/v1713096385/bxs_up-arrow_jgztwr.png" alt="" />
    </div>
    </div>
    <img className='h-screen -mt-20 transition-all mx-auto' src={image} alt="" />
</div> 
</section>
      <section class="text-gray-600 body-font">
    <div>
    
    <div className="">
      <p className="text-black text-center text-4xl font-bold">              Join the Movement: Students Leading the Charge for
 
</p>
<p className="text-custom-orange text-center text-4xl font-bold">Sustainable Campus Businesses!</p>
    </div>
    </div>
    <div className='h-screen flex items-center justify-center'>
  <div className='relative h-[100vh]'>
    <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1714183227/Group_70_fgiz6x.png" className='h-full' alt="" />
    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-72 w-72 bg-white rounded-full text-center flex flex-col justify-center items-center'>
    <p className='mx-10 text-xl font-semibold text-custom-orange'> A unique way for students to experience entrepreneurship for students, elevating campus life for institutions. Explore button.</p>
    <button className='bg-custom-orange rounded-2xl mt-5 text-white px-5 font-bold py-1'>Explore</button>
    </div>
  </div>
</div>


</section>
</div>

  )
}

export default Landing
