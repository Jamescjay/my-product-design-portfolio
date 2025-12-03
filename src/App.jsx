import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PortfolioHome from "./components/PortfolioHome";
import ProjectDetail from "./components/ProjectDetail";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<PortfolioHome />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
