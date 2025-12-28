import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "Good Morning!");
// React.createElemnt=> It will create an object  => when we render this to DOM then it'll become an TML element

// console.log(heading);

// JSX

// Facebook developers introduced JSX => Esier to create react element
// We can use both structuredClone(HTML) and logic(JS) in one file and can reuse, JS is convention , where we can merge HTML and JS together
// JSX in not React/HTML/XML or HTML in JS, it is HTML like syntax
const JSXHeading = <h1 id="heading">Hello JSX!</h1>;
// console.log(JSXHeading);

// React Componet
// React Functional Component - Is normal JS Function

// Sort and Code with Arrow function
// const NewFunction = ()=> true;
// const NewFunction = ()=> <h1 className= "heading">Hello</h1>;

// const NewFunction = ()=>{
//     return true;
// }

// const NewFunction1 = () => <h1 className="heading">Hello</h1>;

const TitleComponent = () => {
  return (
    <>
      <h4>Hello Title Component</h4>
    </>
  );
};

const HeadingComponent = () => {
  return (
    <>
      <TitleComponent />
      <h1>Hello React Functional Component</h1>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(JSXHeading);
root.render(<HeadingComponent />);
