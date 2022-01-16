import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Features from "./Features";
import BuildGUI from "./pages/BuildGUI";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Features />} />
          <Route path="/build" element={<BuildGUI />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
