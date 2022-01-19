import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import Favorites from '../pages/Favorites';
import Sandbox from '../pages/Sandbox';
import Timezone from '../pages/Timezone';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timezone-info" element={<Timezone />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/sandbox/:name" element={<Sandbox />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
