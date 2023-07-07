import React from 'react';
import { Routes, Route } from 'react-router';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Rates from './components/Rates';
import './App.css';

function App() {
  return (

    <div className="App">
      <div>
        <NavBar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Rates/:id" element={<Rates />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
