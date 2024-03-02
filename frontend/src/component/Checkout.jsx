import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

function Checkout() {
     const {register , handleSubmit }=useForm()
     const [isCash,setIsCash] = useState(false)
     const [isCredit,setIsCredit] = useState(false)
     const [paymentError,setPaymentError]=useState(false)
     const [paymentMethod,setPaymentMethod] = useState("")
   
     const onSubmit =(data)=>{
      let orderData ={...data}
       if ( !isCredit && !isCash ) {
        setPaymentError(true);
        return
       }
       if (isCredit){
        setPaymentMethod("credit");
       
        orderData.debit="credit";
        
       }
       if (isCash){
        
        orderData.cash ="cash"
       }

      
       
       console.log(orderData)

     }
  return (
    <div className=' relative bg-white shadow-black rounded-lg shadow-sm w-full flex flex-col py-5  h-auto'>
     <h1 className=' text-center text-2xl font-semibold text-slate-800' >Checkout</h1>

   <form  onSubmit={handleSubmit(onSubmit)} className=' py-2 px-5 space-y-7 flex flex-col'>

    <div className=' flex flex-col space-y-2'>
    <h1   className=' text-sm md:text-lg'>First Name:</h1>
        <input type="text" name="first_name" {...register("first_name",{required:true})} className=' inputClass' />
    </div>
    <div className=' flex flex-col space-y-2'>
    <h1   className=' text-lg'>Last Name:</h1>
        <input type="text" name="last_name" {...register("last_name",{required:true})} className=' inputClass' />
    </div>

    <div className=' flex flex-col space-y-2'>
    <h1   className=' text-lg'>Email:</h1>
        <input type="email" name="email" className='inputClass'{...register("email",{required:true})}  />
    </div>
    <div className=' flex flex-col space-y-2'>
    <h1   className=' text-lg'>Address:</h1>
        <input type="text" name="address" className=' inputClass' {...register("address",{required:true})} />
    </div>
    <div className=' flex flex-col space-y-2'>
    <h1   className=' text-lg'>ZipCode:</h1>
        <input type="tel" name="zipcode"  {...register("zipcode",{required:true})} className=' inputClass' />
    </div>

    <div className=' flex flex-col space-y-2'>
    <h1   className=' text-lg'>Phone No:</h1>
        <input type="tel" name="phone"  {...register("phone",{required:true})} className=' inputClass' />
    </div>

    <div className=' flex  items-center space-x-5 '>
     <input type='checkbox' name='cash' {...register("cash")}  className=' items-center justify-center p-2 h-6 rounded-xl shadow-sm shadow-black bg-white w-6 cursor-pointer' checked={isCash} onClick={()=>{
        setIsCash(true)
        setIsCredit(false)
        setPaymentError(false)
     }}/>
      <p className=' text-lg '>Cash on delivery</p>
     </div>
      <div className=' flex  items-center space-x-5 '>
     <input type='checkbox' name='debit' {...register("debit")}  className=' items-center justify-center p-2 h-6 rounded-xl shadow-sm shadow-black bg-white w-6 cursor-pointer' checked={isCredit}
    onClick={ ()=>{
        setIsCash(false)
        setIsCredit(true)
        setPaymentError(false)
     }}
     />
      <p className=' text-lg '>DebitCard or MasterCard</p>
     </div>

   {paymentError  &&   <span className=' flex text-red-500'> Please select at least one  Payment method</span>}

<input type="submit" value="Checkout"  className=' bg-red-500 text-white text-xl py-3 rounded-lg cursor-pointer  mt-5 hover:bg-red-300 transition duration-150'/>
  
   </form>

   
    </div>
  )
}

export default Checkout