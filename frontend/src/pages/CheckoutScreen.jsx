import React from 'react'
import Checkout from '../component/Checkout'

function CheckoutScreen() {
  return (
    <div className=' bg-white w-full flex flex-col justify-center  h-auto m-auto py-5'>

    <div  className=' w-[50%]  justify-center flex flex-col m-auto pt-5'>
    <Checkout/>
    </div>
    </div>
  )
}

export default CheckoutScreen