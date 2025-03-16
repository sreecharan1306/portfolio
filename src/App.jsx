import React from "react";
import "./app.css"
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";

const App = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
    </div>
  )
}

export default App;