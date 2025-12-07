// {/* <div id="parent">
//     <div id="child">
//         <h1>Hello World!</h1>
//     </div>
// </div> */}

// converting HTML to React

// const parent = React.createElement(
//     "div",
//     { id: "parent" },
//     React.createElement(
//         "div",
//         { id: "child" },
//         React.createElement("h1", {}, "ello Worllld!")
//     )
// );

// Array of child, Make siblings

{/* <div id="parent">
    <div id="child">
        <h1>Hello World!</h1>
        <h2>Hello World!</h2>
        <h3>Hello World!</h3>
    </div>
    <div id="child">
        <h1>Hello World!</h1>
        <h2>Hello World!</h2>
        <h3>Hello World!</h3>
    </div>
</div> */}

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "ello Worllld!"),
    React.createElement("h2", {}, "ello Worllld2!"),
    React.createElement("h3", {}, "ello Worllld3!"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "ello Worllld!"),
    React.createElement("h2", {}, "ello Worllld2!"),
    React.createElement("h3", {}, "ello Worllld3!"),
  ]),
]);

console.log(parent, "parent");

const newRoot = ReactDOM.createRoot(document.getElementById("root"));

newRoot.render(parent);
