import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate, useNavigation } from 'react-router-dom'
import log from "./../assets/food/main.png"

import { Rating, Typography } from '@mui/material'

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
function HomeData() {
    const navigate = useNavigate();
  const [rating,setRating]=useState(3)
 const [activeClass,setAective] =useState('all')
    const [menuData,setData]=useState([])

    useEffect(()=>{
        
        function run(){
         setData(data)
        }
    run()

    },[data])

 const changScreen=(e)=>{
   
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
  { menuData?.length >0  ?
    <div className=' w-[95%] m-auto  grid-cols-1  h-1/3 grid md:grid-cols-3  gap-5  items-center justify-center space-x-3 space-y-3'>

        
 
 {
    menuData.map((item,key)=>(
    <div  className=' items-center space-y-4  justify-center m-auto flex flex-col rounded-lg hover:bg-white hover:shadow-sm  hover:shadow-black hover:transform  hover:translate-y-1 p-3'>

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

     <div className=' flex flex-row justify-between w-full'>
        <p className=' text-center font-bold text-xl'>${item.price}</p>
        <div    onClick={(e)=>{
             e.preventDefault();
            
             navigate('/detail', { state: { item: item } });
        }}
       
        className=' bg-red-500 text-white px-4 py-2 rounded font-bold cursor-pointer'>Order Now</div>

        </div>
        </div>

 

        </div>
))
 }

    </div>
    :
<div className=' flex items-center justify-center w-full'>
    <h2 className=' text-center'>No data found</h2>
    </div>}




         {/* pagination  */}
       {   menuData?.length > 0  && <div className=' flex flex-col items-center justify-center w-full py-7'>
         <Link className=' bg-red-700 text-white py-2 px-3 rounded-lg'>Load More..</Link>
         </div>}

    </>
  )
}

export default HomeData