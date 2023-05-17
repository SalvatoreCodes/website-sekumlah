import React from "react";
import "./style.css";
import Hero from "./components/Hero";
import Sponsors from "./components/Sponsors";
import Progli from "./components/Progli";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Hero />
      <Sponsors />
      <Progli />
      <Footer />
    </div>
  );
}

export default App;
