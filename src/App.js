import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./request";
import Banner from "./Banner";
//import Nav from "./Nav";
import Sidebar from "./Sidebar.js";

function App() {
  return (
    <div className="App">
       <Sidebar/>
      
      <Banner />
      <br />
      <br />
      <Row  />
      
      
    </div>
  );
}

export default App;
