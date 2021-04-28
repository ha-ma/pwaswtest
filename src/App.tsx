import React, { useState, useEffect } from "react";
import "./App.css";
import Sw from "./sw";

function App() {
  return (
    <div className="App">
      <Sw />
      <div>Service Worker working! New!</div>
    </div>
  );
}

export default App;
