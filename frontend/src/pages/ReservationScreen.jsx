import React, { useState } from 'react'
 import logo from "./../assets/food/reservation.png"
import { Link, useNavigate, useNavigation } from 'react-router-dom'
import NestedModal from './ChildModal'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { actions } from '../store/DataReducer'
function ReservationScreen() {
  const { register,
    handleSubmit,
    watch,
    formState: { errors },} =useForm()
    const [resData,setResData]=useState()
     const navigate =useNavigate()
    const [openModel,setOpenModal]=useState(false)
    const handleOpenModal=()=>{
        setOpenModal(false)
    }

    const dispatch=useDispatch();

    const onSubmit = (data) => {
      
      
      dispatch(actions.getRes(data))

      navigate("/reservation/res-detail")
    }
  return (
    <div className=' bg-white items-center justify-center m-auto h-screen'>

        <div className=' grid grid-cols-1 gap-10  md:grid-cols-2 m-auto max-w-screen-lg items-center  h-screen'>
        
        <div className=' items-center flex h-full'>
            <img src={logo} alt="" srcset=""  className=' '/>
        </div>

<form className=' flex flex-col w-full space-y-5'  onSubmit={handleSubmit(onSubmit)} >
    <h1 className=' text-3xl md:text-6xl font-bold'>Book a table</h1>
   <div className=' flex flex-col space-y-5'>
    <h1 className=' text-xl'>Date:</h1>
   <input  type='date'  name='data'
    {...register("date",{required:true})}
   className=' border-gray-400 border  focus:border-red-500 focus:border  rounded-lg py-2 px-1'/>
   {errors.date && <span className=' flex  text-red-600'>this field is required</span>}
   </div>
   <div className=' flex flex-col space-y-5'>
    <h1 className=' text-xl'>Time:</h1>
   <input  type='time'  {...register("time",{required:true})} name='time' className=' border-gray-400 border  focus:border-red-500 focus:border  rounded-lg py-2 px-1'/>
   {errors.time && <span className=' flex  text-red-600'>this field is required</span>}
   </div>
   <div className=' flex flex-col space-y-5'>
    <h1 className=' text-xl'>Number of Party</h1>
   <input  type='number' name='seats' {...register("seats",{required:true})}  className=' border-gray-400 border  focus:border-red-500 focus:border  rounded-lg py-2 px-1' min={1} />
   {errors.seats && <span className=' flex  text-red-600'>this field is required</span>}
   </div>

    <input type="submit" value="Book Now" title='Book Now'  className="flex items-center flex-col py-2  cursor-pointer rounded-lg mt-3 bg-red-500 text-white hover:bg-red-300 transform duration-200 "/>


</form>

        </div>

    </div>
  )
}

export default ReservationScreen