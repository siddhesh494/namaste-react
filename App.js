import React from "react"
import ReactDOM from "react-dom/client" // As react-dom give warning
// Here we are just creating a element inside react, 
// So this is a core react job

/*
<div id="parent">
  <div id="child">
    <h1>I'm an h1 tag</h1>
    <h2>I'm an h2 tag</h2>
  </div>
</div>
*/
const parent = React.createElement(
  "div", 
  {id: "parent"}, 
  React.createElement(
    "div",
    {id: "child"},
    [
      React.createElement("h1", {}, "I'm an h1 tag"),
      React.createElement("h2", {}, "I'm an h2 tag")
    ]
  )
)
console.log(parent)
// We have to create a root inside react to do all the DOM operations
// To create a root in react, it is a job of react DOM
const root = ReactDOM.createRoot(document.getElementById("root"))

// Now we just have to render the root with the heading
root.render(parent)