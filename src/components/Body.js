import React, { useState } from "react";
import { data } from "./data";

const Body = ({ getFilteredData }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleInputChange = (event) => {
    const search = event.target.value.toLowerCase();
    setSearchTerm(search);
    const filtered = data.filter(
    (item) =>item.type.toLowerCase().includes(search));
    setFilteredData(filtered)
    getFilteredData(filteredData)
    
  };

  return (
    <>
      <div className="body-main-container">
        <div className="heading">
          <h1>Search properties to rent</h1>
          <div className="search-form">
          <div>
            <input
              type="search"
              className="search-box"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleInputChange}
            ></input>
            </div>
        </div>
        </div>

        <div className="filters">
          <div className="location">
            <h3>Location</h3>
            <h2>New York, USA</h2>
          </div>
          <div className="location">
            <h3>Select Move-in Date</h3>
            <h2>
              <input className="date" type="date" />
            </h2>
          </div>
          <div className="location">
            <h3>Price</h3>

            <div class="dropdown">
              <button class="dropbtn1">
                $500-$2500
                <img className="arrow-image" src="/arrow.png" alt="a" />{" "}
              </button>
              <div class="dropdown-content ">
                <button className="dropdown-btn" >$500-$2500</button>
                <button className="dropdown-btn">$2500-$3500</button>
                <button className="dropdown-btn">$3500-$4500</button>
              </div>
            </div>
          </div>
          <div className="location">
            <h3>Property Type</h3>
            <div class="dropdown">
              <button class="dropbtn1">
                Houses
                <img className="arrow-image" src="/arrow.png" alt="a" />{" "}
              </button>
              <div class="dropdown-content">
                <button className="dropdown-btn">Villa</button>
                <button className="dropdown-btn">Pent House</button>
                <button className="dropdown-btn">Mansion</button>
              </div>
            </div>
          </div>
          <div className="search-button-div">
          <button className="search-button">Search</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
