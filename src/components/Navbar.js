import React from 'react'
import {Link,useNavigate} from "react-router-dom";
import { useLocation } from 'react-router-dom'

const Navbar = () => {

    

  return (
    <>

    <div className="navbar-main">
        <div className="logo">

        <img className="logo-image"src="/logo.png" alt="logo"/>
        <button className="dropbtn" > Rent</button>
        <button className="dropbtn" > Buy</button>
        <button className="dropbtn" > Sell</button>
        <div class="dropdown">
  <button class="dropbtn">Manage Property <img className="arrow-image"src='/arrow.png' alt='a'/> </button>
  <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>

<div class="dropdown">
<button class="dropbtn">Resources <img className="arrow-image"src='/arrow.png' alt='a'/> </button>
  <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>
        </div>

        
          <div className="profile-button">
            <button className="login-button" > Login</button>
            <button className="login-button" > Sign up</button>
            
          </div>
        
    </div>


    </>
  )
}

export default Navbar
