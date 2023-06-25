import React from "react";
import './categoria.css';

export const Categoria1 = () => {
  return(
    <div className="categoria">
        <h1>Categorias</h1>
        <div className="category_list">
<a href="#" className="category_item" category="all">Todo</a>
<a href="#" className="category_item" category="terror">Terror</a>
<a href="#" className="category_item" category="accion">Accion</a>
<a href="#" className="category_item" category="romance">Romance</a>
<a href="#" className="category_item" category="suspenso">Suspenso</a>
        </div>
      </div>
  );
};
export default Categoria1;