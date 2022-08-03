import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
