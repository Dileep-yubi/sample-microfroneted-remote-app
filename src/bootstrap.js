import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import App from "./App";
import StyleProvider from "@yubi/yb-style-provider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StyleProvider baseUrl="https://design-system-qa.go-yubi.in/tokens">
    <App />
  </StyleProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//  <React.StrictMode>
//    <StyleProvider baseUrl="https://design-system-qa.go-yubi.in/tokens">
//      <App />
//    </StyleProvider>
//  </React.StrictMode>;
