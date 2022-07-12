import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Docs from './pages/Docs';
import Arena from './pages/Arena';
import Farms from './pages/Farms';
import Swap from './pages/Swap';
import Exchange from './pages/Exchange';
import Pools from './pages/Pools';
import Nft_Collections from './pages/Nft_Collections';
import Nft_Exproler from './pages/Nft_Exproler';

function App() {
  return (
    <Router>
    <div className="">
    
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/arena" element={<Arena />}/>
        <Route path="/exchange" element={<Exchange />} />
        <Route path="/farms" element={<Farms />} />
        <Route path="/pools" element={<Pools />}/>
        <Route path="/swap" element={<Swap />} />
        <Route path="/nft_collections" element={<Nft_Collections />} />
        <Route path="/nft_exproler" element={<Nft_Exproler />} />
    
      </Routes>
    </div>
    </Router>
  )
}

export default App
