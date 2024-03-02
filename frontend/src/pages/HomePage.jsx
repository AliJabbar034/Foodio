import React from 'react'

import logo  from  "../assets/food/main.png"
import first from "./../assets/food/third.png"
import { Link } from 'react-router-dom'
import HomeData from '../component/HOmeData'
import Footer from '../headers/Footer'
import { useQuery } from 'react-query'
import { getProfile } from '../store/orderApi'

function HomePage() {
 useQuery(
    {
      queryFn:getProfile,
      queryKey:["user"],
      onSuccess:(data)=>{
        console.log(data ,"profile");
      }
      ,
      onError:(error)=>{
        console.log(error);
      }
    }
  )
  return (
    <div className='h-screen'>
     
 {/* main  */}

 <div className=' bg-pink-100 flex flex-col space-y-3 px-10 py-3 items-center md:flex-row'>
 
 <div className='w-full  h-1/3 items-center pt-20 justify-center space-y-3'>
 <h1 className='text-4xl  font-bold md:text-5xl  lg:text-7xl'>Best Resturant <br></br>in <span className=' text-red-700'>Town.</span>
 
 </h1>

 <p className=' text-lg md:text-2xl'>We provide best food in town, we provide home delivery and dine in services.</p>

 <div className='space-x-4 flex mt-3'>

    <Link className='bg-red-600 py-1 px-3 rounded text-white  font-bold md:py-3 md:px-5 hover:bg-red-400 translate-x-2 transform duration-75'>
    Order Now
    </Link>

    <Link className='bg-red-400 py-1 px-3 rounded text-white  transform duration-75 font-bold md:py-3 md:px-5'>
    Reservation
    </Link>
 </div>
 
 </div>

 <div className=' flex w-full  pt-10'>

    <img src={logo} alt=""  className=' h-1/2 w-full' />
    
 </div>


 </div>


 {/* Menu button  */}

 {/* second container  */}


 <div className=' bg-cyan-100 flex flex-col px-4  py-4 space-y-5 items-center justify-center md:flex-row md:space-x-4 md:px-5'>

<div className='w-1/2 items-center justify-center flex'>
<img src={first} alt="" srcset=""  className=' w-4/5 items-center justify-center'/>
</div>

<div className=' w-1/2 space-y-4 flex items-center justify-center'>
<div className=' space-y-4 flex-col items-center justify-center'>
<h1 className=' text-3xl font-bold md:text-4xl lg:text-6xl text-center md:text-start'> Our Most<br></br>
Popular Dish.



</h1>

<p className=' text-lg md:text-2xl flex text-center md:text-start'>

This dish is full of flavor and nutrition! Quinoa is a complete protein, providing all the essential amino acids your body needs, and is also a good source of fiber.
</p>

<div className='flex w-full items-center justify-center md:items-start md:justify-start'>
<Link className='bg-red-600 py-4 px-3 w-32 text-center rounded text-white  font-bold hover:bg-red-400  transform duration-75'>
Order Now 

</Link>
</div>
</div>
</div>


 </div>


 <div className=' flex-col flex bg-white mx-auto py-7' >

  <div className=' w-11/12 py-3 flex justify-center'>
  <h1 className=' text-center text-4xl md:text-7xl'>Our Popular Menu</h1>
  </div>


{/* Menu  */}
<div >
<HomeData/>
</div>

 </div>


 {/* Bootom  */}


<div className=''>
   
<Footer/>
</div>

     
    </div>
       
      
  )
}

export default HomePage