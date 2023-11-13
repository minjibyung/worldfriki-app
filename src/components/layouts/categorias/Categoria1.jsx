// Categoria1.jsx
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

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className="categoria">
      <h1>Categorias</h1>
      <div className="category_list">
        {categories.map((category) => (
          <a
            key={category.id}
            href="#"
            className={`category_item ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => handleCategoryClick(category.id)}
          >
            {category.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Categoria1;
