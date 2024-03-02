import React from 'react'
import HomeData from '../component/HOmeData'
import Footer from '../headers/Footer'

function MenuPage() {
  return (
    <div className=' text-black bg-[#f2f6f9] pt-7 flex flex-col w-full h-full space-y-6'>
      <h1 className=' text-8xl font-bold text-center'>Menu</h1>
      <div className=' mb-6 h-full'>
      <HomeData/>
      </div>
      <div className=' w-full h-full mt-6'>
        <Footer/>
      </div>
    </div>
  )
}

export default MenuPage
