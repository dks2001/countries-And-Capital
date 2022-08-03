import React, { useState } from "react";
import Signin from "./Signin";
import Signup from "./Signup";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {


  const [sign, setSign] = useState("in");

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route index element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>

    </div >
  );
}


export default App;
