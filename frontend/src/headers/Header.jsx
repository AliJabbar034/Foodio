import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
    const [open,setOpen]=useState(false)
  return (
   <div>

    {/* desktop  */}
     <div  id ="menu" className={` flex bg-white ${open ==true ? "" : "hidden"}   space-y-5  justify-center shadow-lg flex-col block  px-4 py-2 md:flex-row md:flex md:justify-between md:items-center md:mx-w-10/12 md:px-12`}>
<div className='flex justify-between items-center'>
<Link  to={"/"}>
<svg width="120"  viewBox="0 0 124 51" fill="none" xmlns="http://www.w3.org/2000/svg" className='items-center mt-4'>
<path d="M66.778 19.5183V21.5132H61.5265V24.6734H65.5508V26.633H61.5265V31.8411H59V19.5183H66.778Z" fill="#311F09"/>
<path d="M73.0089 32C72.0465 32 71.1802 31.794 70.4103 31.3821C69.6403 30.9584 69.0327 30.364 68.5876 29.599C68.1545 28.834 67.9379 27.9512 67.9379 26.9508C67.9379 25.9504 68.1605 25.0677 68.6056 24.3026C69.0628 23.5376 69.6824 22.9491 70.4644 22.5372C71.2464 22.1135 72.1187 21.9016 73.0811 21.9016C74.0436 21.9016 74.9158 22.1135 75.6979 22.5372C76.4799 22.9491 77.0934 23.5376 77.5386 24.3026C77.9958 25.0677 78.2243 25.9504 78.2243 26.9508C78.2243 27.9512 77.9897 28.834 77.5205 29.599C77.0634 30.364 76.4378 30.9584 75.6437 31.3821C74.8617 31.794 73.9834 32 73.0089 32ZM73.0089 29.8462C73.4661 29.8462 73.8932 29.7402 74.2902 29.5284C74.6993 29.3048 75.0241 28.9752 75.2647 28.5397C75.5054 28.1042 75.6257 27.5746 75.6257 26.9508C75.6257 26.021 75.373 25.309 74.8677 24.8146C74.3745 24.3085 73.7669 24.0555 73.045 24.0555C72.3232 24.0555 71.7156 24.3085 71.2223 24.8146C70.7411 25.309 70.5005 26.021 70.5005 26.9508C70.5005 27.8806 70.7351 28.5986 71.2043 29.1047C71.6855 29.599 72.2871 29.8462 73.0089 29.8462Z" fill="#311F09"/>
<path d="M84.517 32C83.5546 32 82.6883 31.794 81.9184 31.3821C81.1484 30.9584 80.5408 30.364 80.0957 29.599C79.6626 28.834 79.446 27.9512 79.446 26.9508C79.446 25.9504 79.6686 25.0677 80.1137 24.3026C80.5709 23.5376 81.1905 22.9491 81.9725 22.5372C82.7545 22.1135 83.6268 21.9016 84.5892 21.9016C85.5517 21.9016 86.4239 22.1135 87.206 22.5372C87.988 22.9491 88.6015 23.5376 89.0467 24.3026C89.5039 25.0677 89.7325 25.9504 89.7325 26.9508C89.7325 27.9512 89.4978 28.834 89.0286 29.599C88.5715 30.364 87.9459 30.9584 87.1518 31.3821C86.3698 31.794 85.4915 32 84.517 32ZM84.517 29.8462C84.9742 29.8462 85.4013 29.7402 85.7983 29.5284C86.2074 29.3048 86.5322 28.9752 86.7728 28.5397C87.0135 28.1042 87.1338 27.5746 87.1338 26.9508C87.1338 26.021 86.8811 25.309 86.3758 24.8146C85.8826 24.3085 85.275 24.0555 84.5531 24.0555C83.8313 24.0555 83.2237 24.3085 82.7304 24.8146C82.2492 25.309 82.0086 26.021 82.0086 26.9508C82.0086 27.8806 82.2432 28.5986 82.7124 29.1047C83.1936 29.599 83.7952 29.8462 84.517 29.8462Z" fill="#311F09"/>
<path d="M90.9361 26.9155C90.9361 25.9269 91.1346 25.05 91.5316 24.285C91.9406 23.52 92.4941 22.9315 93.1919 22.5195C93.8897 22.1076 94.6656 21.9016 95.5198 21.9016C96.1695 21.9016 96.7891 22.0429 97.3786 22.3253C97.9681 22.596 98.4373 22.9609 98.7862 23.4199V18.7768H101.349V31.8411H98.7862V30.3934C98.4734 30.876 98.0343 31.2644 97.4689 31.5586C96.9034 31.8529 96.2477 32 95.5018 32C94.6596 32 93.8897 31.7881 93.1919 31.3644C92.4941 30.9407 91.9406 30.3464 91.5316 29.5813C91.1346 28.8045 90.9361 27.9159 90.9361 26.9155ZM98.8043 26.9508C98.8043 26.3506 98.684 25.8386 98.4434 25.4149C98.2027 24.9794 97.8779 24.6499 97.4689 24.4262C97.0598 24.1908 96.6207 24.0731 96.1515 24.0731C95.6823 24.0731 95.2491 24.185 94.8521 24.4086C94.4551 24.6322 94.1303 24.9617 93.8776 25.3972C93.637 25.8209 93.5167 26.327 93.5167 26.9155C93.5167 27.504 93.637 28.0219 93.8776 28.4691C94.1303 28.9046 94.4551 29.24 94.8521 29.4754C95.2612 29.7108 95.6943 29.8285 96.1515 29.8285C96.6207 29.8285 97.0598 29.7167 97.4689 29.4931C97.8779 29.2577 98.2027 28.9281 98.4434 28.5044C98.684 28.0689 98.8043 27.5511 98.8043 26.9508Z" fill="#311F09"/>
<path d="M105.098 20.8953C104.653 20.8953 104.28 20.76 103.979 20.4893C103.69 20.2068 103.546 19.8596 103.546 19.4477C103.546 19.0357 103.69 18.6944 103.979 18.4237C104.28 18.1412 104.653 18 105.098 18C105.543 18 105.91 18.1412 106.199 18.4237C106.499 18.6944 106.65 19.0357 106.65 19.4477C106.65 19.8596 106.499 20.2068 106.199 20.4893C105.91 20.76 105.543 20.8953 105.098 20.8953ZM106.343 22.0605V31.8411H103.816V22.0605H106.343Z" fill="#311F09"/>
<path d="M113.278 32C112.316 32 111.45 31.794 110.68 31.3821C109.91 30.9584 109.302 30.364 108.857 29.599C108.424 28.834 108.207 27.9512 108.207 26.9508C108.207 25.9504 108.43 25.0677 108.875 24.3026C109.332 23.5376 109.952 22.9491 110.734 22.5372C111.516 22.1135 112.388 21.9016 113.351 21.9016C114.313 21.9016 115.185 22.1135 115.967 22.5372C116.749 22.9491 117.363 23.5376 117.808 24.3026C118.265 25.0677 118.494 25.9504 118.494 26.9508C118.494 27.9512 118.259 28.834 117.79 29.599C117.333 30.364 116.707 30.9584 115.913 31.3821C115.131 31.794 114.253 32 113.278 32ZM113.278 29.8462C113.736 29.8462 114.163 29.7402 114.56 29.5284C114.969 29.3048 115.294 28.9752 115.534 28.5397C115.775 28.1042 115.895 27.5746 115.895 26.9508C115.895 26.021 115.643 25.309 115.137 24.8146C114.644 24.3085 114.036 24.0555 113.315 24.0555C112.593 24.0555 111.985 24.3085 111.492 24.8146C111.011 25.309 110.77 26.021 110.77 26.9508C110.77 27.8806 111.005 28.5986 111.474 29.1047C111.955 29.599 112.557 29.8462 113.278 29.8462Z" fill="#311F09"/>
<path d="M121.466 31.9647C121.009 31.9647 120.63 31.8293 120.329 31.5586C120.04 31.2762 119.896 30.929 119.896 30.517C119.896 30.1051 120.04 29.7638 120.329 29.4931C120.63 29.2106 121.009 29.0694 121.466 29.0694C121.911 29.0694 122.278 29.2106 122.567 29.4931C122.856 29.7638 123 30.1051 123 30.517C123 30.929 122.856 31.2762 122.567 31.5586C122.278 31.8293 121.911 31.9647 121.466 31.9647Z" fill="#F54748"/>
<path d="M51 25.5C51 39.5833 39.5833 51 25.5 51C11.4167 51 0 39.5833 0 25.5C0 11.4167 11.4167 0 25.5 0C39.5833 0 51 11.4167 51 25.5Z" fill="#F54748"/>
<path d="M28.8048 15.9553L29.536 18.684L22.5089 20.5669L23.6671 24.8894L29.0521 23.4465L29.7704 26.127L24.3853 27.5699L26.2941 34.6936L22.9134 35.5994L18.397 18.744L28.8048 15.9553Z" fill="white"/>
</svg>
</Link>
<Link className='md:hidden' onClick={
    ()=>{
        setOpen(false)
    }
} >
Close
</Link>
</div>

<div className='flex flex-col md:flex-row md:space-x-6'>
    <Link to="/"  className='menu'>Home</Link>
    <Link to="/menu"  className='menu'>Menu</Link>
    <Link to="/order-online"  className='menu'>Order online</Link>
    <Link to="/reservation"  className=' menu'>Reservation</Link>
    
</div>

<div className=' flex flex-row space-x-5 items-center'>
 
   <Link>
    <svg width="35px" height="35px" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className=' bg-cyan-100 rounded-full p-2 hover:bg-red-800'>
<path d="M18.5996 21.57C19.7042 21.57 20.5996 20.6746 20.5996 19.57C20.5996 18.4654 19.7042 17.57 18.5996 17.57C17.495 17.57 16.5996 18.4654 16.5996 19.57C16.5996 20.6746 17.495 21.57 18.5996 21.57Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.59961 21.57C9.70418 21.57 10.5996 20.6746 10.5996 19.57C10.5996 18.4654 9.70418 17.57 8.59961 17.57C7.49504 17.57 6.59961 18.4654 6.59961 19.57C6.59961 20.6746 7.49504 21.57 8.59961 21.57Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 3.55997C2 3.55997 6.64 3.49997 6 7.55997L5.31006 11.62C5.20774 12.1068 5.21778 12.6105 5.33954 13.0929C5.46129 13.5752 5.69152 14.0234 6.01263 14.4034C6.33375 14.7833 6.73733 15.0849 7.19263 15.2854C7.64793 15.4858 8.14294 15.5797 8.64001 15.56H16.64C17.7479 15.5271 18.8119 15.1196 19.6583 14.404C20.5046 13.6884 21.0834 12.7069 21.3 11.62L21.9901 7.50998C22.0993 7.0177 22.0939 6.50689 21.9744 6.017C21.8548 5.52712 21.6242 5.07126 21.3005 4.68467C20.9767 4.29807 20.5684 3.99107 20.1071 3.78739C19.6458 3.58371 19.1438 3.48881 18.64 3.50998H9.94" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </Link>

   <Link  to="/login" className=' bg-red-500 text-white rounded px-3 py-1 font-bold md:hover: bg-none md:hover:border md:hover:border-red-500'>
    Login
    </Link>
 
</div>
    </div>


{/* mobile  */}

<div className={`flex flow-row justify-between ${open ==true ? "hidden" :""} px-4 py-2 items-center bg-white shadow-lg  md:hidden `}>

<Link to={"/"}>
<svg width="120"  viewBox="0 0 124 51" fill="none" xmlns="http://www.w3.org/2000/svg" className=' items-center mt-1  z-40'>
<path d="M66.778 19.5183V21.5132H61.5265V24.6734H65.5508V26.633H61.5265V31.8411H59V19.5183H66.778Z" fill="#311F09"/>
<path d="M73.0089 32C72.0465 32 71.1802 31.794 70.4103 31.3821C69.6403 30.9584 69.0327 30.364 68.5876 29.599C68.1545 28.834 67.9379 27.9512 67.9379 26.9508C67.9379 25.9504 68.1605 25.0677 68.6056 24.3026C69.0628 23.5376 69.6824 22.9491 70.4644 22.5372C71.2464 22.1135 72.1187 21.9016 73.0811 21.9016C74.0436 21.9016 74.9158 22.1135 75.6979 22.5372C76.4799 22.9491 77.0934 23.5376 77.5386 24.3026C77.9958 25.0677 78.2243 25.9504 78.2243 26.9508C78.2243 27.9512 77.9897 28.834 77.5205 29.599C77.0634 30.364 76.4378 30.9584 75.6437 31.3821C74.8617 31.794 73.9834 32 73.0089 32ZM73.0089 29.8462C73.4661 29.8462 73.8932 29.7402 74.2902 29.5284C74.6993 29.3048 75.0241 28.9752 75.2647 28.5397C75.5054 28.1042 75.6257 27.5746 75.6257 26.9508C75.6257 26.021 75.373 25.309 74.8677 24.8146C74.3745 24.3085 73.7669 24.0555 73.045 24.0555C72.3232 24.0555 71.7156 24.3085 71.2223 24.8146C70.7411 25.309 70.5005 26.021 70.5005 26.9508C70.5005 27.8806 70.7351 28.5986 71.2043 29.1047C71.6855 29.599 72.2871 29.8462 73.0089 29.8462Z" fill="#311F09"/>
<path d="M84.517 32C83.5546 32 82.6883 31.794 81.9184 31.3821C81.1484 30.9584 80.5408 30.364 80.0957 29.599C79.6626 28.834 79.446 27.9512 79.446 26.9508C79.446 25.9504 79.6686 25.0677 80.1137 24.3026C80.5709 23.5376 81.1905 22.9491 81.9725 22.5372C82.7545 22.1135 83.6268 21.9016 84.5892 21.9016C85.5517 21.9016 86.4239 22.1135 87.206 22.5372C87.988 22.9491 88.6015 23.5376 89.0467 24.3026C89.5039 25.0677 89.7325 25.9504 89.7325 26.9508C89.7325 27.9512 89.4978 28.834 89.0286 29.599C88.5715 30.364 87.9459 30.9584 87.1518 31.3821C86.3698 31.794 85.4915 32 84.517 32ZM84.517 29.8462C84.9742 29.8462 85.4013 29.7402 85.7983 29.5284C86.2074 29.3048 86.5322 28.9752 86.7728 28.5397C87.0135 28.1042 87.1338 27.5746 87.1338 26.9508C87.1338 26.021 86.8811 25.309 86.3758 24.8146C85.8826 24.3085 85.275 24.0555 84.5531 24.0555C83.8313 24.0555 83.2237 24.3085 82.7304 24.8146C82.2492 25.309 82.0086 26.021 82.0086 26.9508C82.0086 27.8806 82.2432 28.5986 82.7124 29.1047C83.1936 29.599 83.7952 29.8462 84.517 29.8462Z" fill="#311F09"/>
<path d="M90.9361 26.9155C90.9361 25.9269 91.1346 25.05 91.5316 24.285C91.9406 23.52 92.4941 22.9315 93.1919 22.5195C93.8897 22.1076 94.6656 21.9016 95.5198 21.9016C96.1695 21.9016 96.7891 22.0429 97.3786 22.3253C97.9681 22.596 98.4373 22.9609 98.7862 23.4199V18.7768H101.349V31.8411H98.7862V30.3934C98.4734 30.876 98.0343 31.2644 97.4689 31.5586C96.9034 31.8529 96.2477 32 95.5018 32C94.6596 32 93.8897 31.7881 93.1919 31.3644C92.4941 30.9407 91.9406 30.3464 91.5316 29.5813C91.1346 28.8045 90.9361 27.9159 90.9361 26.9155ZM98.8043 26.9508C98.8043 26.3506 98.684 25.8386 98.4434 25.4149C98.2027 24.9794 97.8779 24.6499 97.4689 24.4262C97.0598 24.1908 96.6207 24.0731 96.1515 24.0731C95.6823 24.0731 95.2491 24.185 94.8521 24.4086C94.4551 24.6322 94.1303 24.9617 93.8776 25.3972C93.637 25.8209 93.5167 26.327 93.5167 26.9155C93.5167 27.504 93.637 28.0219 93.8776 28.4691C94.1303 28.9046 94.4551 29.24 94.8521 29.4754C95.2612 29.7108 95.6943 29.8285 96.1515 29.8285C96.6207 29.8285 97.0598 29.7167 97.4689 29.4931C97.8779 29.2577 98.2027 28.9281 98.4434 28.5044C98.684 28.0689 98.8043 27.5511 98.8043 26.9508Z" fill="#311F09"/>
<path d="M105.098 20.8953C104.653 20.8953 104.28 20.76 103.979 20.4893C103.69 20.2068 103.546 19.8596 103.546 19.4477C103.546 19.0357 103.69 18.6944 103.979 18.4237C104.28 18.1412 104.653 18 105.098 18C105.543 18 105.91 18.1412 106.199 18.4237C106.499 18.6944 106.65 19.0357 106.65 19.4477C106.65 19.8596 106.499 20.2068 106.199 20.4893C105.91 20.76 105.543 20.8953 105.098 20.8953ZM106.343 22.0605V31.8411H103.816V22.0605H106.343Z" fill="#311F09"/>
<path d="M113.278 32C112.316 32 111.45 31.794 110.68 31.3821C109.91 30.9584 109.302 30.364 108.857 29.599C108.424 28.834 108.207 27.9512 108.207 26.9508C108.207 25.9504 108.43 25.0677 108.875 24.3026C109.332 23.5376 109.952 22.9491 110.734 22.5372C111.516 22.1135 112.388 21.9016 113.351 21.9016C114.313 21.9016 115.185 22.1135 115.967 22.5372C116.749 22.9491 117.363 23.5376 117.808 24.3026C118.265 25.0677 118.494 25.9504 118.494 26.9508C118.494 27.9512 118.259 28.834 117.79 29.599C117.333 30.364 116.707 30.9584 115.913 31.3821C115.131 31.794 114.253 32 113.278 32ZM113.278 29.8462C113.736 29.8462 114.163 29.7402 114.56 29.5284C114.969 29.3048 115.294 28.9752 115.534 28.5397C115.775 28.1042 115.895 27.5746 115.895 26.9508C115.895 26.021 115.643 25.309 115.137 24.8146C114.644 24.3085 114.036 24.0555 113.315 24.0555C112.593 24.0555 111.985 24.3085 111.492 24.8146C111.011 25.309 110.77 26.021 110.77 26.9508C110.77 27.8806 111.005 28.5986 111.474 29.1047C111.955 29.599 112.557 29.8462 113.278 29.8462Z" fill="#311F09"/>
<path d="M121.466 31.9647C121.009 31.9647 120.63 31.8293 120.329 31.5586C120.04 31.2762 119.896 30.929 119.896 30.517C119.896 30.1051 120.04 29.7638 120.329 29.4931C120.63 29.2106 121.009 29.0694 121.466 29.0694C121.911 29.0694 122.278 29.2106 122.567 29.4931C122.856 29.7638 123 30.1051 123 30.517C123 30.929 122.856 31.2762 122.567 31.5586C122.278 31.8293 121.911 31.9647 121.466 31.9647Z" fill="#F54748"/>
<path d="M51 25.5C51 39.5833 39.5833 51 25.5 51C11.4167 51 0 39.5833 0 25.5C0 11.4167 11.4167 0 25.5 0C39.5833 0 51 11.4167 51 25.5Z" fill="#F54748"/>
<path d="M28.8048 15.9553L29.536 18.684L22.5089 20.5669L23.6671 24.8894L29.0521 23.4465L29.7704 26.127L24.3853 27.5699L26.2941 34.6936L22.9134 35.5994L18.397 18.744L28.8048 15.9553Z" fill="white"/>
</svg>
</Link>

<Link onClick={(e)=>{
     e.preventDefault()
  
     setOpen(true)
     console.log('open',open);
   
}}>
Menu
</Link>
</div>
   </div>
  )
}

export default Header