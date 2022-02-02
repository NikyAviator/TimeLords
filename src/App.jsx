import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import MyCities from './pages/MyCities';
import Clock from './pages/Clock';
import store from './utilities/localStore';
import MissingPage from './pages/MissingPage';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'



function App() {

  store.cityList = store.cityList || [];

  return (<div className="body">
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clock/:city" element={<Clock />} />
        <Route path="/my_cities" element={<MyCities />} />
        <Route path="/*" element={<MissingPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </div>
  );
}

export default App;
