import React from 'react';
import Listview from './components/Listview';
import './App.css';
import ReactGA from 'react-ga';
import Dummy from './components/Dummy.js';
import { withRouter, Routes, Route } from 'react-router-dom';

console.log('main test');
function App() {
  const TRACKING_ID = 'UA-247618624-1';
  ReactGA.initialize(TRACKING_ID);
  return (
    <div>
      <p>HELLO WORLD</p>
      <Routes>
        <Route path="/" element={<Listview />} />
        <Route path="/dummy" element={<Dummy />} />
      </Routes>
    </div>
  );
}

export default App;
