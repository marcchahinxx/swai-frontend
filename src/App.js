import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./Home";
import Results from "./Results";
import Checkout from "./Checkout";

function App() {
    return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<Results />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      );
}

export default App;