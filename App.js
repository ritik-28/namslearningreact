import React from "react";
import ReactDOM from "react-dom/client";

const heading = (
  <h1 id="heading1" key="h1">
    ritik heading element not component
  </h1>
);

const HeaderComponent = () => {
  return <h1>my first functional component</h1>;
};

const container = (
  <div>
    {heading}
    <h2>this is my h2</h2>
    <HeaderComponent />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
//root.render(<HeaderComponent />)
//root.render({HeaderComponent()})
