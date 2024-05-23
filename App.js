import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement("h1", { id: "heading" }, "Hello");

const jsxHeading = <h1 className="hi">Hi</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
