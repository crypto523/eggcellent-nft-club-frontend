import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing, Welcome } from "./pages";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Landing />} />
      </Routes>
    </Router>
  );
};

export default App;
