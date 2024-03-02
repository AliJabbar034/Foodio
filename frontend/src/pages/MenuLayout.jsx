import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../headers/Header'
import Footer from '../headers/Footer'

function MenuLayout() {
  return (
    <div>
        <Header/>
       
        <Outlet/>

    
    </div>
  )
}

export default MenuLayout