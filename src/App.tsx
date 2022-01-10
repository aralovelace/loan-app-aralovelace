import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Features from "./Features";
import Build from './pages/Build';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Features/>} />
          <Route path="/build" element={<Build/>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
