import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import DiseasesPage from './DiseasesPage';
import About from './About';
import Agencies from './Agencies';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/DiseasesPage" element={<DiseasesPage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Agencies" element={<Agencies />} />
      </Routes>
    </Router>
  );
}

export default App;
