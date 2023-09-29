import React from "react";
import ReactDOM from "react-dom/client";

const HeaderComponent = () => {
  return <h1>my first functional component</h1>;
};

const container = (
  <div>
    <HeaderComponent />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
//root.render(<headerComponent />)
