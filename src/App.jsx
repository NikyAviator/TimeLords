import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import MyCities from './pages/MyCities';
import Clock from './pages/Clock';
import store from './utilities/localStore';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'



function App() {

  store.cityListLocalStorage = store.cityListLocalStorage || []

  return (<div className="body">
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:city" element={<Clock />} />
        <Route path="/my_cities" element={<MyCities />} />
        <Route path="/my_cities/:city" element={<Clock />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </div>
  );
}

export default App;
