import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';

function Login() {

    const {register,handleSubmit , formState:{errors}}=useForm();
    const onSubmit = (data)=>{
        console.log(data)
    }

  return (
    <div>
          <form  onSubmit={handleSubmit(onSubmit)} className=' py-2 px-5 space-y-7 flex flex-col'>

<div className=' flex flex-col space-y-2'>
<h1   className=' text-sm md:text-lg'>First Name:</h1>
    <input type="email" name="email" {...register("email",{required:true})} className=' inputClass' placeholder='Enter your Email' />
    {errors.email && <span className=' flex  text-red-600'>Email is required</span>}
</div>

<div className=' flex flex-col space-y-2'>
<h1   className=' text-sm md:text-lg'>Password:</h1>
    <input type="password" name="password" {...register("password",{required:true})} className=' inputClass' placeholder='Enter your Password' />
    {errors.password && <span className=' flex  text-red-600'>Password is required</span>}
</div>


<div className=' flex justify-between px-1'>
    <p>Don't have any account?</p>

    <Link to="/register" className=' text-red-600 border-red-500 border-b-2 hover:text-black hover:border-black'>Sign Up</Link>
</div>

<input type="submit" value="Login"  className=' bg-red-500 text-white text-xl py-3 rounded-lg cursor-pointer  mt-5 hover:bg-red-300 transition duration-150'/>
</form>
    </div>
  )
}

export default Login