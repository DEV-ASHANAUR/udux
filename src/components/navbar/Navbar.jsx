import React from 'react'
import "./navbar.css"
import logo from '../../assets/logo/logo.svg'
import shoppingCart from '../../assets/navbar/shopping-cart.svg'

const Navbar = () => {
  return (
    <nav className='nav__area'>
      <div className="container">
        <div className="row nav__wrapper">
          <div className="col-lg-3">
            <div className="nav__logo">
              <img src={logo} alt="logo" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="nav__menu">
              <ul>
                <li><a href="#">StreamPasses</a></li>
                <li><a href="#">FAQ's</a></li>
                <li><a href="#">About Us</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="nav__right">
              <div className="nav__shopping__cart">
                <img src={shoppingCart} alt="cart" />
              </div>
              <div className="nav__sign">
                <button className='site_button'>Login/SignUp</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar