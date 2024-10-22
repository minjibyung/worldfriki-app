import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'react-router-dom'
import { Header } from './components/layouts/header/Header';
import { Home } from './components/pages/home/Home';
import Movie from './components/pages/peliculas/Movie';
import Movies2 from './components/pages/peliculas/Movies2';
import Series from './components/pages/series/Series';
import Series2 from './components/pages/series/Series2';
import Libros from './components/pages/libros/Libros1';
import Libros22 from './components/pages/libros/Libros22';
import SliderBooks from './components/layouts/slider/SliderBooks';
import SliderMovies from './components/layouts/slider/SliderMovies';
import SliderSeries from './components/layouts/slider/SliderSeries';
import Categoria1 from './components/layouts/categorias/Categoria1';

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Inicio" element={<Home />} />
          <Route path="/Pelispage1" element={<Movie />} />
          <Route path="/Pelispage2" element={<Movies2 />} />
          <Route path="/Seriespage1" element={<Series />} />
          <Route path="/Seriespage2" element={<Series2 />} />
          <Route path="/Librospage1" element={<Libros />} />
          <Route path="/Librospage2" element={<Libros22 />} />
          <Route path="/Slider" element={<SliderMovies />} />
          <Route path="/Slider" element={<SliderBooks />} />
          <Route path="/Slider" element={<SliderSeries />} />
          <Route path="/Categoria1" element={<Categoria1 />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
