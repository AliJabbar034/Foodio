import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function FoodDetailScreen() {
    const location=useLocation();
    useEffect(()=>{
         console.log(location);
    const data= location.state?.item;
    console.log("data",data);
    },[location])
   
  return (
    <div>FoodDetailScreen</div>
  )
}

export default FoodDetailScreen