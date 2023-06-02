import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing, Welcome } from "./pages";
import { EthereumContext } from "./context/EthereumContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App: React.FC = () => {
  const [provider, setProvider] = useState<any>(null);
  const [currentAcc, setCurrentAcc] = useState("");

  return (
    <EthereumContext.Provider
      value={{
        provider,

        currentAcc,
        setProvider,
        setCurrentAcc,
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Landing />} />
        </Routes>
      </Router>
      <ToastContainer />
    </EthereumContext.Provider>
  );
};

export default App;
