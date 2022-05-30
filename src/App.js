import React from "react";
import "./App.css";
import Hero from "./components/Hero.js";
import Navbar from "./components/Navbar.js";

import Categories from "../src/components/Categories";
function App() {
  return (
    <main className="main">
      <div className="container">
      <Navbar />
			<Hero />
          <Categories />
          
      </div>
    </main>
  );
}
export default App;
