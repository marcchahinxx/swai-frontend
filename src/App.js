import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Results from "./Results";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/results" element={<Results />} />
    </Routes>
  );
}