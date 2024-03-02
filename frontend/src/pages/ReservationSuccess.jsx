import React, { useEffect, useState } from 'react'

import logo from './../assets/food/resdetail/confirmSCreen.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
function ReservationSuccess() {
    const location =useLocation()
  const {reservationData}= useSelector((state)=>state.data)
  const[reservation,setResData] =useState()
  const[resId,setId]=useState()

    const navigate =useNavigate();
   
    useEffect(()=>{
      if(Object.keys(reservationData).length !== 0) {
      
        setResData(reservationData);
      }
     
    },[
      reservationData
    ])

    useEffect(()=>{
      console.log(location);
       const id =location?.state?.item;
        setId(id);
    },[location])
  return (
    <div className='  h-screen w-full  bg-white  pt-5 m-auto  justify-center space-y-9'>

       <div className=' flex flex-col items-center pt-5'>
       <h1 className=' text-3xl items-center font-semibold'>Reservation</h1>
       </div>

       <div className=' w-[80%] bg-green-500 m-auto rounded-lg px-5 py-5 flex flex-col space-y-5'>
        <h1 className=' text-3xl items-center font-semibold text-white'>Confirmed</h1>
        <div className=' flex space-x-5'>
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.2" width="30" height="30" rx="6.81818" fill="white"/>
<path d="M18.3556 13.2413L14.2412 17.3557L11.9999 15.1144" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
<path d="M7.75 10.1822C7.75 8.83893 8.83893 7.75 10.1822 7.75H19.8178C21.1611 7.75 22.25 8.83893 22.25 10.1822V19.8178C22.25 21.1611 21.1611 22.25 19.8178 22.25H10.1822C8.83893 22.25 7.75 21.1611 7.75 19.8178V10.1822Z" stroke="white" stroke-width="1.5"/>
</svg>

<p className=' text-xl text-white'>Confirmation email has been sent please check your inbox</p>
        </div>

        <div className=' flex space-x-5'>
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.2" width="30" height="30" rx="6.81818" fill="white"/>
<path d="M8.24805 12.1815C8.24805 10.8382 9.33698 9.74927 10.6802 9.74927H19.3177C20.6609 9.74927 21.7499 10.8382 21.7499 12.1815V19.3187C21.7499 20.662 20.6609 21.7509 19.3177 21.7509H10.6803C9.33698 21.7509 8.24805 20.662 8.24805 19.3187V12.1815Z" stroke="white" stroke-width="1.5"/>
<path d="M8.24854 13.4998H21.7502" stroke="white" stroke-width="1.5"/>
<path d="M11.249 8.24919L11.249 10.4992" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
<path d="M19.5 8.24919L19.5 10.4992" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
</svg>


<p className=' text-xl text-white'>Booking ID: #{resId}</p>
        </div>
       </div>

{/* Confirm Detail  */}



<div className=' grid  grid-cols-1  gap-2  md:grid-cols-3  w-[80%] m-auto'>
    <div className='flex m-auto items-center justify-center'>
       <img src={logo} alt="" srcset=""  className='w-[80%] h-[80%]  object-contain'/>
    </div>
    <div className=' flex flex-col space-y-7 justify-center'>
        <h1 className=' text-3xl font-semibold'>Reservation detail</h1>

        <div className=' flex flex-col space-y-5'>
  <div className=' flex space-x-5'>
  <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.06329 8.15189C1.06329 5.60719 3.12618 3.54429 5.67089 3.54429H22.6836C25.2283 3.54429 27.2912 5.60719 27.2912 8.15189V22.3291C27.2912 24.8738 25.2283 26.9367 22.6836 26.9367H5.67089C3.12619 26.9367 1.06329 24.8738 1.06329 22.3291V8.15189Z" stroke="#311F09" stroke-width="2.125"/>
<path d="M1.41756 10.9873H26.9366" stroke="#311F09" stroke-width="2.125"/>
<path d="M7.08828 1.06329L7.08828 5.31646" stroke="#311F09" stroke-width="2.125" stroke-linecap="round"/>
<path d="M22.6834 1.06329L22.6834 5.31646" stroke="#311F09" stroke-width="2.125" stroke-linecap="round"/>
</svg>

<p className=' text-xl text-slate-950'>{reservation?.date}</p>
  </div>

  <div className=' flex space-x-5'>
  <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="14.5" cy="14.5" r="13.4375" stroke="#311F09" stroke-width="2.125"/>
<path d="M14.4998 5.79999V14.5L19.5748 18.125" stroke="#311F09" stroke-width="2.125" stroke-linecap="round"/>
</svg>

<p className=' text-xl text-slate-950'>{reservation?.time}</p>
  </div>
  <div className=' flex space-x-5'>
  <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="14.4997" cy="7.25001" r="6.18751" stroke="#311F09" stroke-width="2.125"/>
<rect x="1.0625" y="17.0125" width="26.875" height="10.925" rx="5.3125" stroke="#311F09" stroke-width="2.125"/>
</svg>


<p className=' text-xl text-slate-950'>{reservation?.seats} Member Seat</p>
  </div>
</div>
    </div>



<div className=' items-center justify-center flex  space-y-4 flex-col'>


   <div className=' flex  bg-green-600  hover:bg-green-300 md:py-2 md:px-3 items-center justify-center h-10 w-32  md:w-52  md:h-16 cursor-pointer text-white font-semibold rounded-lg   transition duration-150'>

<Link className=' text-center flex items-center justify-center' >Confirm</Link>
</div>

   <div className=' flex    md:w-52  md:h-16 bg-red-300  items-center justify-center  w-32  h-10 cursor-pointer text-white font-semibold rounded-lg  hover:bg-red-500  transition duration-150'
   
   onClick={(e)=>{
    e.preventDefault();
    navigate("/cance" ,{
      state :{
        item:id
      }
    })
    
   }}
   >

    <Link  className=' text-center flex items-center justify-center' >Cancel</Link>
   </div>

</div>

</div>


    </div>
  )
}

export default ReservationSuccess