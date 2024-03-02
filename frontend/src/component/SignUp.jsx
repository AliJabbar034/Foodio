import React from 'react'
import { useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import { RegisterUser } from '../store/orderApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { actions } from '../store/DataReducer';


function SignUp() {
 const dispatch=useDispatch()
 const navigate=useNavigate()
 const queryClient=useQueryClient();
    const {mutate} =useMutation(
        RegisterUser,{
        onSuccess:(data)=>{
            queryClient.invalidateQueries({
                queryKey:['user']
            })
            
            toast("Registered successfully");
            dispatch(actions.userData(data.user))
            navigate("/")
        },
        onError:(error)=>{
          
            toast.error("Something went wrong");
        }
        }
    )
    const notify = () => toast("Wow so easy!");


    const {register,handleSubmit , formState:{errors}}=useForm();
    const onSubmit = (data)=>{
        mutate(data);
    }

  return (
    <div className=' h-auto'>
          <form  onSubmit={handleSubmit(onSubmit)} className=' py-2 px-5 space-y-7 flex flex-col'>

<div className=' flex flex-col space-y-2'>
<h1   className=' text-sm md:text-lg'>First Name:</h1>
    <input type="text" name="first_name" {...register("first_name",{required:true})} className=' inputClass' placeholder='Enter your first name' minLength={3} />
    {errors.first_name && <span className=' flex  text-red-600'>Fisrt Name is required</span>}
</div>

<div className=' flex flex-col space-y-2'>
<h1   className=' text-sm md:text-lg'>Last Name:</h1>
    <input type="text" name="last_name" {...register("last_name")} className=' inputClass' placeholder='Enter your last name' />
    
</div>

<div className=' flex flex-col space-y-2'>
<h1   className=' text-sm md:text-lg'>Email:</h1>
    <input type="email" name="email" {...register("email",{required:true})} className=' inputClass' placeholder='Enter your email' />
    {errors.email && <span className=' flex  text-red-600'>Email is required</span>}
</div>



<div className=' flex flex-col space-y-2'>
<h1   className=' text-sm md:text-lg'>Password:</h1>
    <input type="password" name="password" {...register("password",{required:true})} className=' inputClass' placeholder='Enter your password'  minLength={6}/>
    {errors.password && <span className=' flex  text-red-600'>Password is required</span>}
</div>


<div className=' flex justify-between px-1'>
    <p>Already have a account?</p>

    <Link to="/login" className=' text-red-600 border-red-500 border-b-2 hover:text-black hover:border-black'>Login</Link>
</div>

<input type="submit" value="Register"  className=' bg-red-500 text-white text-xl py-3 rounded-lg cursor-pointer  mt-5 hover:bg-red-300 transition duration-150'/>
</form>
<ToastContainer />
    </div>
  )
}


export default SignUp