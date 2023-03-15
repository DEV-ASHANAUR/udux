import React, { useState } from 'react'
import "./navbar.css"
import logo from '../../assets/logo/logo.svg'
import shoppingCart from '../../assets/navbar/shopping-cart.svg'

import { AiOutlineMenu } from 'react-icons/ai'
import { RxCross1 } from 'react-icons/rx'

const Navbar = () => {
  const [trigger, setTirgger] = useState(false);
  return (
    <nav className='nav__area'>
      <div className="container">
        <div className="row nav__wrapper">
          <div className="col-lg-3 col-md-3 col-6">
            <div className="nav__logo">
              <img src={logo} alt="logo" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 menu__item__wrapper">
            <div className="nav__menu">
              <ul>
                <li><a href="#">StreamPasses</a></li>
                <li><a href="#">FAQ's</a></li>
                <li><a href="#">About Us</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-6">
            <div className="nav__right">
              <div className="nav__shopping__cart">
                <img src={shoppingCart} alt="cart" />
              </div>
              <div className="nav__sign">
                <button className='site_button'>Login/SignUp</button>
                <div className="trigger">
                  {/* open and close mobile menu trigger */}

                  {
                    trigger ? (<RxCross1 onClick={() => setTirgger(false)} className='trigger__icon' />) :
                      (<AiOutlineMenu onClick={() => setTirgger(true)} className='trigger__icon' />)
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* mobile menu */}
        <div className={`mobile__menu ${trigger && 'in__mobile'}`}>
          <ul>
            <li><a onClick={() => setTirgger(false)} href="#">StreamPasses</a></li>
            <li><a onClick={() => setTirgger(false)} href="#">FAQ's</a></li>
            <li><a onClick={() => setTirgger(false)} href="#">About Us</a></li>
          </ul>
          <button onClick={() => setTirgger(false)} className='site_button'>Login/SignUp</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar