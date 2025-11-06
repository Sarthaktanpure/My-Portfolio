import React from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Project from "./Components/Projects";
import Contact from "./Components/ContactCard";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <main className=""> 
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Project />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
}

export default App;
