import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";


// ACTIONS -> Increment
const increment = () => {
  return {
    type: "INCREMENT",
  };
};

// ACTIONS -> Decrement
const decrement = () => {
  return {
    type: "DECREMENT",
  };
};


// REDUCER
const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};


// STORE -> Globalized State
let store = createStore(counter); // Creating the store (globalized state)


// DISPLAY the values of state on the console
store.subscribe(() => console.log(store.getState())); // Prints value of the state on the console.


// DISPATCH
store.dispatch(increment()); // Increments the state by 1. (Makes it 1, beacuse initial value is 0)
store.dispatch(decrement()); // Decrements the state by 1. (Makes it 0, beacuse current value is 1)
store.dispatch(decrement()); // Decrements the state by 1. (Makes it -1, beacuse current value is 0)
store.dispatch(decrement()); // Decrements the state by 1. (Makes it -2, beacuse current value is -1)



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
