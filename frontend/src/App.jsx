import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MenuPage from './pages/MenuPage'
import MenuLayout from './pages/MenuLayout'
import FoodDetailScreen from './pages/FoodDetailScreen'
import OrderOnline from './pages/OrderOnline'
import ReservationScreen from './pages/ReservationScreen'
import ReservationDetail from './pages/ReservationDetail'
import ReservationSuccess from './pages/ReservationSuccess'
import CancelScreen from './pages/CancelScreen'
import CheckoutScreen from './pages/CheckoutScreen'
import SignUpScreen from './pages/SignUpScreen'
import LoginScreen from './pages/LoginScreen'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { Provider } from 'react-redux'
import store from './store/store'


function App() {
  const [count, setCount] = useState(0)

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
         staleTime:0
      },
    },
  })
  return (
   <QueryClientProvider client={queryClient}>

<Provider store={store}>
    <BrowserRouter basename='/'>
    <Routes>
      <Route path="/" element={<MenuLayout />} >
      <Route index element={<HomePage />} />
      <Route path='/menu' element={<MenuPage/>} />
      <Route path="/detail" element={<FoodDetailScreen/>} />
      <Route path='/order-online' element ={<OrderOnline/>} />
      <Route path='/reservation' element ={<ReservationScreen/>}/>
      <Route path='/reservation/res-detail' element ={<ReservationDetail/>} />
      <Route path='/checkout' element={<CheckoutScreen/>}/>
      <Route path='/register' element={<SignUpScreen/>}/>

      <Route path='/login' element={<LoginScreen/>}/>
      </Route>
      <Route path='/reservationConfirm' element ={<ReservationSuccess/>}/>
      <Route path='/cance' element ={<CancelScreen/>}/>
      
      
    </Routes>
    </BrowserRouter> 
    </Provider>
   </QueryClientProvider>
  )
}

export default App
