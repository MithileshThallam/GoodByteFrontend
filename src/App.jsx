import React from 'react'
import HomePage from './pages/HomePage/HomePage'

import { Routes, Route } from "react-router-dom";
import Signup from './pages/SignUp/SignUp';
import Login from './pages/LoginPage/Login';
import Dashboard from './pages/DashBoard/DashBoard';
import DonateFood from './pages/DonateFood/DonateFood';
import GetFood from './pages/FoodListPage/GetFood';






const App = () => {

  return (
    
    <div>
      <Routes>
  <Route path="/signup" element={<Signup/>} />
  <Route path="/login" element={<Login/>} />
  <Route path="/" element={ <HomePage/>} />
  <Route path='/dashboard' element={<Dashboard/>}/>
  <Route path="/donate" element={<DonateFood />} />
  <Route path='/get-food' element={<GetFood/>}/>

</Routes>
     
    </div>
  )
}

export default App
