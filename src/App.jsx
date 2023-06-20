import React, { useState} from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from './components/layouts/header/Header';
import { Series } from './components/pages/series/Series';
import { Series2 } from "./components/pages/series/Series2";
import { Libros } from "./components/pages/libros/libros";
import { Libros2 } from "./components/pages/libros/libros2";
import { Slider } from "./components/layouts/slider/Slider";

function App() {
  const [headerComponent, setHeaderComponent] = useState(<Header />);
  
  return (
<Router>
  <div>
    <Header />
    <Series />
    <Series2 />
    <Libros />
    <Libros2 />
    <Slider />
  </div>
</Router>

  );
}

export default App
