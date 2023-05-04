import React from "react";
import { ReactDOM } from "react";
// const element = document.createElement("h1");
// element.textContent = "Hello, React!";
// element.className = "Message";
// const div = document.querySelector("#root");
// div.append(element);

//JSX
// ReactDOM.render(<h1>Hello, React!</h1>, document.querySelector("#root"));

// you get a javascript object when you write JSX
const nvbar = (
  <nav>
    <h1 className="header">Sehaj.com</h1>
    <ul>
      <li>Pricing</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
);
// ReactDOM.render(nvbar, document.querySelector("#root"));
ReactDOM.createRoot(document.querySelector("#root")).render(nvbar);
