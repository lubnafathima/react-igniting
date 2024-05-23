import React from "react";
import ReactDOM from "react-dom";

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("h1", {}, "Hello"),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);