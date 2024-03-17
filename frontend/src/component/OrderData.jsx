import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate, useNavigation } from 'react-router-dom'
import log from "./../assets/food/main.png"
 import {useDispatch}  from 'react-redux'
import { Rating, Typography } from '@mui/material'
import { actions } from '../store/DataReducer'

const data =[
    { 
       title :"Fist Category",
       description:"Fist Category Description  and Description and Description and Description and Description",
       category:"lunch",
       price:"100",
       image:log
    },
    { 
      title :"Fist Category",
      description:"Fist Category Description  and Description and Description and Description and Description",
      category:"lunch",
      price:"100",
      image:log
   },
   { 
      title :"Fist Category",
      description:"Fist Category Description  and Description and Description and Description and Description",
      category:"lunch",
      price:"100",
      image:log
   },
   { 
      title :"Fist Category",
      description:"Fist Category Description  and Description and Description and Description and Description",
      category:"lunch",
      price:"100",
      image:log
   },
   { 
      title :"Fist Category",
      description:"Fist Category Description  and Description and Description and Description and Description",
      category:"lunch",
      price:"100",
      image:log
   },
   { 
      title :"Fist Category",
      description:"Fist Category Description  and Description and Description and Description and Description",
      category:"lunch",
      price:"100",
      image:log
   },
  
  ]
function OrderData() {
    const navigate = useNavigate();
    const dispatch=useDispatch()
    
  const [rating,setRating]=useState(3)
 const [activeClass,setAective] =useState('all')
    const [menuData,setData]=useState([])
    const [quantity,setQuantity]=useState(1)

  

    useEffect(()=>{
        
        function run(){
         setData(data)
        }
    run()

    },[data])

 const quantityHandler=(oper,item)=>{
  if (oper ==="add"){
      const q=quantity+1
      setQuantity(q)
      console.log(quantity);
     dispatch(actions.addToCart({item: item , quantity: quantity}))
    return
  }
   if (oper ==="remove" && quantity === 0 || quantity < 0){
    console.log("bad quantity");
    
    return
   }
   if (oper ==="remove" && quantity > 0){
    const q=quantity -1
    setQuantity(q)
    dispatch(actions.removeFromCart({name:item.title}))
    return
   }
   
   
 }

    const filterData=(name)=>{
        console.log("name: " + menuData);
      const  newData=data.filter((item)=> item.category===name)
      console.log("newData: " + newData);
    setData([newData])
        setData(newData)
    }

    const activeHandler =(data)=>{
        setAective(data)
        console.log(activeClass);

    }
  return (

    <>

<div className=' px-3 grid   mb-4  grid-cols-3 md:grid-cols-5 gap-1 md:px-10 md:gap-6 pt-4'>


<div className={`category ${activeClass ==="all" ? "bg-red-500 text-white" :"bg-gray-200"}`}    onClick={(e)=>{
    e.preventDefault();
    filterData("all")
    activeHandler("all")
}} >
All Category

</div>
<div className={`category ${activeClass ==="dinner" ? "bg-red-500 text-white md:font-bold" :"bg-gray-200"}`}    onClick={(e)=>{
    e.preventDefault();
    activeHandler("dinner")
    filterData("dinner")
}} >
Dinner

</div>
<div className={`category ${activeClass ==="lunch" ? "bg-red-500 text-white md:font-bold" :"bg-gray-200"}`}    onClick={(e)=>{
    e.preventDefault();
    activeHandler("lunch")
   
    filterData("lunch")
}} >
Lunch

</div>
<div className={`category ${activeClass ==="drink" ? "bg-red-500 text-white md:font-bold" :"bg-gray-200"}`}    onClick={(e)=>{
    e.preventDefault();
    activeHandler("drink")
    filterData("drink")
}} >
Drink

</div>

<div className={`category ${activeClass ==="dessert" ? "bg-red-500 text-white md:font-bold" :"bg-gray-200"}`}    onClick={(e)=>{
    e.preventDefault();
    activeHandler("dessert")
    filterData("dessert")
}} >
Dessert

</div>

</div>
  <div>
  { 
  menuData?.length >0  ?

    <div className=' w-[95%] m-auto  grid-cols-1  h-1/3 grid md:grid-cols-3  gap-5  items-center justify-center space-x-3 space-y-3'>

        
 
 {
    menuData.map((item,key)=>(
    <div  className=' items-center space-y-4  justify-center m-auto flex flex-col hover:bg-white hover:shadow-lg  rounded-lg hover: shadow-black p-3'>

      <img src={item.image} alt=""  className=' items-center justify-center' />
      <div className=' flex flex-1 items-center justify-center flex-col'>
        <h1 className=' text-xl text-center font-bold  '>{item.title}</h1>
        <p className=' text-center text-lg'>{item.description}</p>
        {/* rating  */}

     
        <Rating
      name="simple-controlled"
       value={rating}
       disabled
/>

    <div className=' flex flex-col items-center'>

        <p className=' text-xl font-bold'>${item.price}</p>

    <div className=' flex flex-row  w-full items-center justify-center pt-3 space-x-3'>
      
      <div className=' bg-white shadow-lg shadow-black  rounded-full h-6 w-6 cursor-pointer' onClick={(e)=>{
  e.preventDefault();
  quantityHandler("remove",item)
      }}>  <p className=' text-center'>-</p> </div>
      <p>1</p>
      <div className=' bg-white shadow-lg shadow-black  rounded-full h-6 w-6 cursor-pointer' onClick={(e)=>{
          e.preventDefault();
          quantityHandler("add",item)
      }}>  <p className=' text-center'>+</p> </div>
              </div>
        </div>
        </div>

        </div>
))

 }


</div>




   
    :
<div className=' flex items-center justify-center w-full'>
    <h2 className=' text-center'>No data found</h2>
    </div>
    }
  </div>

{ menuData?.length > 0  && 
<div className='m-auto flex  w-[100%] items-center justify-center  flex-col py-7 '>
         <Link className=' bg-red-700 text-white py-2 px-3 rounded-lg  hover:bg-red-400 hover:text-white hover:transition-all hover:duration-150'>Load More..</Link>
         </div>}





 {/* pagination  */}
 
    </>
  )
}



export default OrderData