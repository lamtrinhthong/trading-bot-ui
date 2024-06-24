import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Updated imports
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import Trade from './components/Trade';
import Portfolio from './components/Portfolio';
import MarketData from './components/MarketData';
import Settings from './components/Settings';
import Charts from './components/Charts';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <div className="logo">Trading Wave</div>
        <ul className="nav-links">
          <li><Link to="/">Landing</Link></li>
          <li><Link to="/charts">Chart</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/trade">Trade</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/marketdata">Market Data</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </ul>
      </nav>
      <Routes> {/* Changed Switch to Routes */}
        <Route path="/" element={<LandingPage />} /> {/* Updated Route syntax */}
        <Route path="/charts" element={<Charts />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/trade" element={<Trade />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/marketdata" element={<MarketData />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
