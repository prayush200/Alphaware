import React, { useContext } from 'react'
import '../styles/navbar.css'

import { Link } from 'react-router-dom'
import { Cartcontext } from '../ContextAPI/Context';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';

import { color } from '@mui/system'
const Navbar = () => {

  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;








  return (

    <div>

      <nav className="navbar">
      
        <div className="navbar-container container">
      
          <input type="checkbox" name="" id="" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          
          <ul className="menu-items">
            <Link to='/'> <li className='li'>Home</li></Link>
            <Link  to='/cart' className='li'>
            <li><ShoppingCartIcon>
            </ShoppingCartIcon> <sup style={{"color":"red"}}>{state.length}</sup></li></Link>
      
          </ul>
          <h1 className="logo">α-ware
          </h1>
        
        </div>
       
      </nav>
    </div>





  )
}

export default Navbar