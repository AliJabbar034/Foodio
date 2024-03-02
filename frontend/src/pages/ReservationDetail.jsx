import React, { useEffect, useState } from 'react'
 import logo from "./../assets/food/reservation.png"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import NestedModal from './ChildModal'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { useMutation } from 'react-query'
import { CreateReservation } from '../store/orderApi'
function ReservationDetail() {
  const {mutate}= useMutation(CreateReservation,{
    onSuccess:(data)=>{
        console.log(data)
        navigate("/reservationConfirm",{
          state:{
             item:data.id,
          }
        })
    },
    onError:(error)=>{
        console.log(error)
    }
   })
  const [resData,setResData]=useState()
  const {reservationData}= useSelector((state)=>state.data)
 

    const navigate =useNavigate();
   
    useEffect(()=>{
      if(Object.keys(reservationData).length !== 0) {
      
        setResData(reservationData);
      }
     
    },[
      reservationData
    ])
  const { register,
    handleSubmit,
    watch,
    formState: { errors },} =useForm()
    const [openModel,setOpenModal]=useState(false)
     
    const onSubmit =(inputData)=>{

      const data ={
        first_name: inputData.first_name,
		last_name:  inputData.last_name,
		email:     inputData.email,
		phone:     inputData.phoneNo,
		notes:     inputData.request,
		date:      resData?.date,
		time:      resData?.time,
		seats:     resData?.seats,
      }
      console.log(data)
      mutate(data);
     
    }
  return (
    <div className=' bg-white items-center   m-auto  pt-5 '>

        <div className=' grid grid-cols-1 gap-10  md:grid-cols-2 m-auto    h-screen w-[90%]'>
        
        <div className='flex  flex-col   space-y-3 py-5 px-3 bg-white shadow-sm shadow-black rounded-lg m-auto  w-full'>

          <h1 className=' font-bold text-xl'>Order Data</h1>

          <form className=' space-y-3' onSubmit={handleSubmit(onSubmit)}>

          <div className=' flex flex-col space-y-3'>


            {/* First Name  */}
    <h1 className=' text-xl'> First Name:</h1>
   <input  type='text' name='first_name' {...register("first_name",{required:true})}  className=' border-gray-400 border  focus:border-red-500 focus:border  rounded-lg py-2 px-1'  />
   {errors.first_name && <span className=' flex  text-red-600'>this field is required</span>}
   </div>

   {/* Last Name  */}


   <div className=' flex flex-col space-y-3'>
    <h1 className=' text-xl'>Last Name:</h1>
   <input  type='text' name='last_name' {...register("last_name",{required:true})}  className=' border-gray-400 border  focus:border-red-500 focus:border  rounded-lg py-2 px-1'  />
   {errors.last_name && <span className=' flex  text-red-600'>this field is required</span>}
   </div>

   <div className=' flex flex-col space-y-3'>
    <h1 className=' text-xl'>Email:</h1>
   <input  type='email' name='email' {...register("email",{required:true})}  className=' border-gray-400 border  focus:border-red-500 focus:border  rounded-lg py-2 px-1'  />
   {errors.email && <span className=' flex  text-red-600'>this field is required</span>}
   </div>
   <div className=' flex flex-col space-y-3'>
    <h1 className=' text-xl'>Phone No:</h1>
   <input  type='text' name='phoneNo' {...register("phoneNo",{required:true})}  className=' border-gray-400 border  focus:border-red-500 focus:border  rounded-lg py-2 px-1' minLength={10} />
   {errors.phoneNo && <span className=' flex  text-red-600'>this field is required</span>}
   </div>
   <div className=' flex flex-col space-y-3'>
    <h1 className=' text-xl'>Special Request</h1>
   <input  type='text' name='request' {...register("request",{required:true})}  className=' border-gray-400 border  focus:border-red-500 focus:border  rounded-lg py-2 px-1' min={1} />
   {errors.request && <span className=' flex  text-red-600'>this field is required</span>}
   </div>

   <input type="submit" value="Confirm Booking" title='Confirm Booking'  className="flex  w-full items-center flex-col py-2   cursor-pointer rounded-lg mt-6 bg-red-500 text-white hover:bg-red-300 transform duration-200 "/>


          </form>
          
        </div>

<div className='flex flex-col w-full   py-5 space-y-3    md:space-y-9 md:mt-12 ' >
   
  {/* detail reservation  */}
   <div className=' flex flex-col bg-gray-300 rounded-lg px-3 py-6
    space-y-6'>

<h1 className=' text-lg md:text-3xl text-slate-900 font-semibold '>Reservation Detail</h1>

<div className=' flex flex-col space-y-5'>
  <div className=' flex space-x-5'>
  <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.06329 8.15189C1.06329 5.60719 3.12618 3.54429 5.67089 3.54429H22.6836C25.2283 3.54429 27.2912 5.60719 27.2912 8.15189V22.3291C27.2912 24.8738 25.2283 26.9367 22.6836 26.9367H5.67089C3.12619 26.9367 1.06329 24.8738 1.06329 22.3291V8.15189Z" stroke="#311F09" stroke-width="2.125"/>
<path d="M1.41756 10.9873H26.9366" stroke="#311F09" stroke-width="2.125"/>
<path d="M7.08828 1.06329L7.08828 5.31646" stroke="#311F09" stroke-width="2.125" stroke-linecap="round"/>
<path d="M22.6834 1.06329L22.6834 5.31646" stroke="#311F09" stroke-width="2.125" stroke-linecap="round"/>
</svg>

<p className=' text-lg text-slate-950'>{resData?.date}</p>
  </div>

  <div className=' flex space-x-5'>
  <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="14.5" cy="14.5" r="13.4375" stroke="#311F09" stroke-width="2.125"/>
<path d="M14.4998 5.79999V14.5L19.5748 18.125" stroke="#311F09" stroke-width="2.125" stroke-linecap="round"/>
</svg>

<p className=' text-lg text-slate-950'>{resData?.time}</p>
  </div>
  <div className=' flex space-x-5'>
  <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="14.4997" cy="7.25001" r="6.18751" stroke="#311F09" stroke-width="2.125"/>
<rect x="1.0625" y="17.0125" width="26.875" height="10.925" rx="5.3125" stroke="#311F09" stroke-width="2.125"/>
</svg>


<p className=' text-lg text-slate-950'>{resData?.seats} Member Seat</p>
  </div>
</div>

   </div>


   {/* About Resturant  */}


   <div className=' space-y-5'>
    <h1 className='  text-slate-950 text-lg font-semibold md:text-3xl'>Restaurant informations</h1>
    <p className=' text-lg '>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
    </p>
   </div>


</div>


{/* <NestedModal  openModel={openModel} handleOpenModal={handleOpenModal}/> */}
        </div>

    </div>
  )
}


export default ReservationDetail