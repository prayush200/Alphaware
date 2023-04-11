import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
     <Router>
     <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/cart' element={<Cart/>} exact/>
      </Routes>
     </Router>
    </div>
  )
}

export default App
