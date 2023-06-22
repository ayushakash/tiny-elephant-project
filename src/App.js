import { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Body from "./components/Body";
import {data} from "./components/data"
import Cards from "./components/Cards";
// import 'bootstrap/dist/css/bootstrap.css';


function App() {
  const [filteredData, setFilteredData] = useState(data);

  const getFilteredData = (filteredData) => {
    setFilteredData(filteredData);
  };

  return (
    <div className="App">
      <Navbar />
      <Body getFilteredData = {getFilteredData}/>
      <Cards data={filteredData}/>
    </div>
  );
}

export default App;
