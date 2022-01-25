import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import MyCities from '../pages/MyCities';
import Sandbox from '../pages/Sandbox';
import Detail from '../pages/Detail';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'

// SUP!

function App() { // LIKE A SOMEBODY
  return (<div className="body">
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timezone-info" element={<Detail />} />
        <Route path="/MyCities" element={<MyCities />} />
        <Route path="/sandbox/:name" element={<Sandbox />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  </div>
  );
}

export default App;
