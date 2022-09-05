import React from 'react'

const Body = () => {
  return (
    <>
    <div className="body-main-container">

    <div className="heading">
    <h1>Search properties to rent</h1>
    <form className="search-form">
  <input type="search" className="search-box" placeholder="Search..."></input><img className="arrow-image"src='/arrow.png' alt='a'/>
</form>
    
    </div>

    <div className="filters">
    <div className="location">
        <h3>Location</h3>
        <h2>New York, USA</h2>
    </div>
    <div className="location" >
        <h3>Select Move-in Date</h3>
        <h2><input className="date" type="date" /></h2>
    </div>
    <div className="location">
        <h3>Price</h3>
        
        <div class="dropdown">
<button class="dropbtn1">$500-$2500<img className="arrow-image"src='/arrow.png' alt='a'/> </button>
  <div class="dropdown-content">
    <a href="#">$500-$2500</a>
    <a href="#">$2500-$3500</a>
    <a href="#">$3500-$4500</a>
    
  </div>
</div>
    </div>
    <div className="location">
        <h3>Property Type</h3>
        <div class="dropdown">
<button class="dropbtn1">Houses<img className="arrow-image"src='/arrow.png' alt='a'/> </button>
  <div class="dropdown-content">
    <a href="#">Villa</a>
    <a href="#">Pent House</a>
    <a href="#">Mansion</a>
  </div>
</div>
    </div>
    <button className="search-button" >Search</button>

        
    </div>

    


    </div>
      
    </>
  )
}

export default Body
