import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/layouts/header/Header';
import { Home } from './components/pages/home/Home';
import Series from './components/pages/series/Series';
import Series2 from './components/pages/series/Series2';
import Libros from './components/pages/libros/Libros';
import Libros2 from './components/pages/libros/Libros2';
import { Slider } from './components/layouts/slider/Slider';

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Inicio" element={<Home />} />
          <Route path="/Seriespage1" element={<Series />} />
          <Route path="/Seriespage2" element={<Series2 />} />
          <Route path="/Librospage1" element={<Libros />} />
          <Route path="/Librospage2" element={<Libros2 />} />
          <Route path="/Slider" element={<Slider />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
