import React from "react"
import { Routes, Route, Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="home" />
        <Route path="about" />
      </Routes>
    </div>
  );
}

export default App;
