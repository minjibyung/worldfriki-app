import React, { useState } from "react";
import './categoria.css';

const Categoria1 = () => {
  const categories = [
    { name: "Todo", id: "all" },
    { name: "Terror", id: "terror" },
    { name: "Accion", id: "accion" },
    { name: "Romance", id: "romance" },
    { name: "Suspenso", id: "suspenso" },
  ];

  // Inicializamos con la categoría "all" seleccionada
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className="categoria">
      <h1>Categorías</h1>
      <div className="category_list">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`category_item ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => handleCategoryClick(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categoria1;
