import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "Good Morning!");
// React.createElemnt=> It will create an object  => when we render this to DOM then it'll become an TML element

console.log(heading)

// JSX

// Facebook developers introduced JSX => Esier to create react element
// We can use both structuredClone(HTML) and logic(JS) in one file and can reuse, JS is convention , where we can merge HTML and JS together
// JSX in not React/HTML/XML or HTML in JS, it is HTML like syntax
const JSXHeading = <h1 id="heading">Hello JSX!</h1>
console.log(JSXHeading)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(JSXHeading);
