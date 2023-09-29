import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = (
  <h1 id="title1" key="t1">
    heading1
  </h1>
);
const heading2 = (
  <h1 id="title2" key="t2">
    heading2
  </h1>
);
const container = (
  <div>
    {heading1}
    {heading2}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
