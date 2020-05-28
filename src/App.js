import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
import "./scss/App.scss";

import Home from "./view/Home";
import Program from "./view/Program";
import Partner from "./view/Partner";
import TimeLine from "./view/TimeLine";
import Testimonial from "./view/Testimonial";
import Apply from "./view/Apply";
import FAQ from "./view/FAQ";

function App() {
  return (
    <div className="App">
      <section id="Home">
        <Home />
      </section>
      <section id="Program">
        <Program />
      </section>

      <section id="Partner">
        <Partner />
      </section>

      <section id="Timeline">
        <TimeLine />
      </section>

      <section id="Testimonial">
        <Testimonial />
      </section>

      <section id="Apply">
        <Apply />
      </section>
      <section id="FAQ">
        <FAQ />
      </section>
    </div>
  );
}

export default App;
