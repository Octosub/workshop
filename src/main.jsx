import './index.css';
import App from "./App.jsx";
import React from "react";
import * as ReactDOM from "react-dom/client";


const rootElement = document.querySelector("#root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);










// function Hello({name, age}) {
//   // 1. const name = props.name;
//   // 2. const {name, age} = props;
//   // 3. Do it directly as a parameter

//   return(
//     <div className="container">
//       <h1>Hello, I'm {name}! I'm {age} years old. </h1>
//     </div>
//   );
// }
