import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="navbar-main">
        <div className="logo">
          <img className="logo-image" src="/logo.png" alt="logo" />
          <button className="dropbtn"> Rent</button>
          <button className="dropbtn"> Buy</button>
          <button className="dropbtn"> Sell</button>
          <div className="dropdown">
            <button className="dropbtn">
              Manage Property{" "}
              <img className="arrow-image" src="/arrow.png" alt="a" />{" "}
            </button>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">
              Resources <img className="arrow-image" src="/arrow.png" alt="a" />{" "}
            </button>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
        </div>

        <div className="profile-button">
          <button className="login-button"> Login</button>
          <button className="login-button"> Sign up</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
