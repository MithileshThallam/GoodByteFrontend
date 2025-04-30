import React from 'react'
import HomePage from './pages/HomePage/HomePage'

import { Routes, Route } from "react-router-dom";
import Signup from './pages/SignUp/SignUp';
import Login from './pages/LoginPage/Login';





const App = () => {

  return (
    
    <div>
      <Routes>
  <Route path="/signup" element={<Signup/>} />
  <Route path="/login" element={<Login/>} />
  <Route path="/" element={ <HomePage/>} />

</Routes>
     
    </div>
  )
}

export default App
