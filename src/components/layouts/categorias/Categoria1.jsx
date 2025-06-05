import './categoria.css';

const Categoria1 = ({ selectedCategory, onCategoryClick }) => {
  const categories = [
    { name: "Todo", id: "all" },
    { name: "Terror", id: "terror" },
    { name: "Accion", id: "accion" },
    { name: "Romance", id: "romance" },
    { name: "Suspenso", id: "suspenso" },
    { name: "Comedia", id: "comedia" },
  ];

  return (
    <div className="categoria">
      <h1>Categorías</h1>
      <div className="category_list">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`category_item ${
              selectedCategory === category.id ? "active" : ""
            }`}
            onClick={() => onCategoryClick(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};
export default Categoria1;