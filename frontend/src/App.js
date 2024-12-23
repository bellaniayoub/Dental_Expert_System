import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import DiseasesPage from './DiseasesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/DiseasesPage" element={<DiseasesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
