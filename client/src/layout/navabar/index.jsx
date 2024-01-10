import React from 'react'

import './index.scss'
import { Link, NavLink } from 'react-router-dom'


function Navbar() {
  return (
    <div id='navbar'>
      <div className="container">
        <div className="mainlogo">
          <img src="https://preview.colorlib.com/theme/aroma/img/logo.png" alt="" />
        </div>
        <div className="links">
          <NavLink className="selected" to='/' > HOOme</NavLink>
          <Link to={'/'}> shop</Link>
          <Link to={'/'}> blog</Link>
          <Link to={'/'}> pages</Link>
          <Link to={'/'}> contact</Link>
          <NavLink className="selected" to='/add'> ADD</NavLink>
        </div>
        <div className="buy_now">
          <div className='shearch'>
          <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className='basket'>
          <i className="fa-solid fa-cart-shopping"></i>
          </div>
          <div className='buy'>
            BOY NOW
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar