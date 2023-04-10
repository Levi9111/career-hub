import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./Elements/Header";
import Footer from "./Elements/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default App;
