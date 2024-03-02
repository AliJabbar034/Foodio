import React, { useEffect, useState } from 'react'
import HomeData from '../component/HOmeData'
import OrderData from '../component/OrderData'

import  {useSelector,useDispatch} from 'react-redux'
import { useScrollTrigger } from '@mui/material'
import { Link } from 'react-router-dom'
import { actions } from '../store/DataReducer'

const taxfee=56
function OrderOnline() {
  const {cartData} =useSelector ((state)=>state.data)
  const [cart,setCart]=useState([])
  const dispatch=useDispatch()


  useEffect (()=>{
    setCart(cartData)
    console.log(cart)
    console.log(cartData);
  },[cartData])

 
  const quantityHandler=(oper,item,quantity)=>{

    console.log(item.item);
    if (oper ==="add"){
        const q=quantity+1
      
        console.log(q);
       dispatch(actions.addToCart(item))
      return
    }
     if (oper ==="remove" && quantity === 0 || quantity < 0){
      console.log("bad quantity");
      
      return
     }
     if (oper ==="remove" && quantity > 0){
      const q=quantity -1
  
      dispatch(actions.removeFromCart({name:item.item.title}))
      return
     }
     
     
   }
  return (
<div className=" flex flex-col py-3 bg-[#f2f6f9]  m-auto  px-5 rounded-sm  h-[100%]">

<h1 className=' text-3xl md:text-6xl font-bold text-center'>Menu</h1>
    <div className="grid grid-cols-1  md:grid-cols-3 gap-1">

      
      <div className=' md:col-span-2 h-screen'>
     <OrderData/>
      </div>

      <div className=' bg-white shadow-sm shadow-black col-span-1 flex flex-col py-6 rounded-lg items-center space-y-6'>


<h1 className=' text-xl font-bold divide-y-4'>Order List </h1>


<hr className=' w-full h-2'/>

{
  cart?.map((item,key)=>(
    <div  className=' px-4 flex flex-col items-start w-full space-y-3'>
      <h className='font-bold text-lg md:text-2xl  px-3 text-start'>{item.item.title}</h>
      
      <div className=' flex flex-1 justify-between flex-row w-full pt-3 px-5'>
      <div className=' flex flex-row  w-full  pt-3 space-x-3'>
      
      <div className=' bg-white shadow-lg shadow-black  rounded-full h-6 w-6 cursor-pointer' onClick={(e)=>{
  e.preventDefault();
  quantityHandler("remove",item, item.quantity)
      }}>  <p className=' text-center'>-</p> </div>
      <p>{item.quantity }</p>
      <div className=' bg-white shadow-lg shadow-black  rounded-full h-6 w-6 cursor-pointer' onClick={(e)=>{
          e.preventDefault();
          quantityHandler("add",item,item.quantity)
      }}>  <p className=' text-center'>+</p> </div>
              </div>
        {/* <h1 className='  text-lg md:text-3xl  '>{item.quantity}</h1> */}
        <p className=' text-lg md:text-3xl'>${item.quantity * item.item.price}</p>
        {/* rating  */}

     </div>
     </div>
  ))
    
}
<hr className=' w-full h-2'/>

{
  cart?.map((item, index) =>(
    
    <div className=' flex flex-col w-full space-y-6'>
<di className ="flex flex-row w-full justify-between px-7">
  <h1 className=' text-3xl'>Subtotal</h1>
  <h1 className=' text-3xl'>${item.item.price * item.quantity}</h1>
</di>
<div className ="flex flex-row w-full justify-between px-7">
  <h1 className=' text-3xl'>Tax Fee</h1>
  <h1 className=' text-3xl'>${taxfee}</h1>

  
</div>

<div className ="flex flex-row w-full justify-between px-7">
  <h1 className=' text-3xl'>Total</h1>
  <h1 className=' text-3xl'> {(item.item.price * item.quantity)+taxfee}</h1>

  
</div>
</div>
  ))
}



 {cart?.length >0 && <div className=' flex bg-red-500 rounded-lg w-40  font-bold  text-white px-5 py-3 items-center justify-center hover:bg-red-300 transform duration-150'>

<Link className=' text-center' to={"/checkout"} > Check out</Link>
</div>}
   
      </div>
 
    </div>

</div>
  )
}

export default OrderOnline