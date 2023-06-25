import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/layouts/header/Header';
import { Home } from './components/pages/home/Home';
import Movie from './components/pages/peliculas/Movie';
import Series from './components/pages/series/Series';
import Series2 from './components/pages/series/Series2';
import Libros from './components/pages/libros/libros';
import Libros2 from './components/pages/libros/libros2';
import SliderBooks from './components/layouts/slider/SliderBooks';
import SliderMovies from './components/layouts/slider/SliderMovies';
import SliderSeries from './components/layouts/slider/SliderSeries';

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Inicio" element={<Home />} />
          <Route path="/Pelispage1" element={<Movie />} />
          <Route path="/Seriespage1" element={<Series />} />
          <Route path="/Seriespage2" element={<Series2 />} />
          <Route path="/Librospage1" element={<Libros />} />
          <Route path="/Librospage2" element={<Libros2 />} />
          <Route path="/Slider" element={<SliderMovies />} />
          <Route path="/Slider" element={<SliderBooks />} />
          <Route path="/Slider" element={<SliderSeries />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
