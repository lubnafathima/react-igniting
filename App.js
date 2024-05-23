import React from "react";
import ReactDOM from "react-dom";

const Title = () => <h1 className="title">Hello</h1>;

const Header = () => {
  return (
    <div className="header">
      <Title />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header />);
