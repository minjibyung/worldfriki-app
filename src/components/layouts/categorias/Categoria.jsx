import React from "react";
import './categoria.css';

export const Categoria = () => {
  return(
    
    <div className="categoria">
        <h1>Categorias</h1>
        <div className="category_list">
<a href="#" className="category_item" category="all">todo</a>
<a href="#" className="category_item" category="terror">terror</a>
<a href="#" className="category_item" category="accion">accion</a>
<a href="#" className="category_item" category="romance">romance</a>
<a href="#" className="category_item" category="suspenso">suspenso</a>
        </div>
      </div>

  );
};