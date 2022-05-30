import React from "react";
import "./App.css";
import Hero from "./components/Hero.js";
import Navbar from "./components/Navbar.js";

import Categories from "../src/components/Categories";
import SectionThree from './components/SectionThree.js';
function App() {
  return (
    <main className="main">
      <div className="container">
      <Navbar />
			<Hero />
          <Categories />
          <SectionThree />
          
      </div>
    </main>
  );
}
export default App;
