// Backend API endpoint: https://matcha-and-keyboard-f549965e60e7.herokuapp.com/api/v1/cafes
import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import CafeList from "./components/CafeList/CafeList";

export default function App() {
  //React hooks for states
  const [cafes, setCafes] = React.useState([]);
  //In the line above we create 1. cafes, which is the state AND 2. setCafes is a function that changes the state with

  //React hooks Effect
  React.useEffect(() => {
    const url = "https://matcha-and-keyboard-f549965e60e7.herokuapp.com/api/v1/cafes"
    fetch(url)
      .then(response => response.json ())
      .then(data => {
        setCafes(data);
        /*
          data.forEach( (cafeData) => {
          console.log(cafeData);
          setCafes();
        });
        */
      });
  }, []);

  return(
    <div className="app-frame">
      <Navbar />
      <div className="app-body">
        <Sidebar />
        <CafeList cafes={cafes}/>
      </div>
    </div>
  );
};
