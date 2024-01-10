import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import logo from './utils/img/logo.png'
import './App.css'

const App = () => {

  return (
    <div>
      <h1 className="text-3xl font-bold underline">
      Hello world! Tailwind installed! ✨
      </h1>
      <img src={logo} alt="Trip In Sight" />
      <Routes>
        <Route path='/'  />
        <Route path='/login' />
        <Route path='/aboutus' />
        <Route path='/guides' />
        <Route path='/tours' />
        <Route path='/profile' />
        <Route path='/tour' />
        <Route path='/guide' />
      </Routes>
    </div>
  )
}

export default App
