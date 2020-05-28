import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
import "./scss/App.scss";

import Home from "./view/Home";
import Program from "./view/Program";
import Partner from "./view/Partner";
import TimeLine from "./view/TimeLine";

function App() {
  return (
    <div className="App">
      <section id="Home">
        <Home />
      </section>
      <section id="Program">
        <Program />
      </section>

      <section id="pageC">
        <Partner />
      </section>

      <section id="pageD">
        <TimeLine />
      </section>

      <section id="pageE">
        <h1>Page 5</h1>

        <h2>Verry Gusti Andrea</h2>
      </section>
    </div>
  );
}

export default App;
