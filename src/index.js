/*global chrome*/
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

var s = document.createElement("script");
s.src = chrome.extension.getURL("pageScript.js");
(document.head || document.documentElement).appendChild(s);
s.onload = function() {
  s.remove();
};

document.addEventListener(
  "RW759_connectExtension",
  function(e) {
    console.log(e.detail, "fired from index.js");
  },
  false
);

// Get the element to prepend our app to from the website
// This could be a specific element on a website or something more general like `document.body`.
const metabar = document.querySelector(".metabar");

// Create a div to render the App component to.
const app = document.createElement("div");

// Set the app element's id to `root`.
// This name is the same as the element that create-react-app renders to by default
// so it will work on the development server too.
app.id = "ext-root";

// Prepend the App to the metabar element in production if it exists on the page.
// You could also use `appendChild` depending on your needs.
if (metabar) metabar.prepend(app);

// Render the App.
ReactDOM.render(<App />, document.getElementById("ext-root"));
