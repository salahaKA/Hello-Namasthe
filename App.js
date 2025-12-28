import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "Good Morning!");
// React.createElemnt=> It will create an object  => when we render this to DOM then it'll become an TML element

console.log(heading)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
