import React from 'react';

import { BrowserRouter as Router, Routes, Route, Link }
  from "react-router-dom";
import './App.css';
import HomePage from './pages/homePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import TablePage from './pages/tablePage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/showData" element={<TablePage />} />
      </Routes>
    </Router>
  );
}

export default App;
