import React from "react";
import Categoria1 from "../../layouts/categorias/Categoria1";
import SliderMovies from "../../layouts/slider/SliderMovies";
import Search1 from "../../layouts/search/Search1";


const booksData = [
    {
      title: "Avengers: Era de ultron",
      category: "accion",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687637207/WorldFriki/peliculas/avengers_sir7ux.jpg",
      link: "https://www.panamericana.com.co/el-resplandor/p"
    },
     {
      title: "Joker",
      category: "suspenso",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687648132/WorldFriki/peliculas/joker_hpley4.jpg",
      link: "https://www.casadellibro.com/libro-el-visitante/9788401021190/7099713"
    },
     {
      title: "Top Gun: Pasion y Gloria",
      category: "accion",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687648134/WorldFriki/peliculas/topgun_muzg2s.jpg",
      link: "https://www.casadellibro.com/libro-el-visitante/9788401021190/7099713"
    },
     {
      title: "Top Gun: Maverick",
      category: "accion",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687648134/WorldFriki/peliculas/maverick_ihfoak.jpg",
      link: "https://www.casadellibro.com/libro-el-visitante/9788401021190/7099713"
    }, 
    {
      title: "After: Amor infinito",
      category: "romance",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687648132/WorldFriki/peliculas/after_t51sm9.jpg",
      link: "https://www.casadellibro.com/libro-el-visitante/9788401021190/7099713"
    },
     {
      title: "Thor: Amor y Trueno",
      category: "accion",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687648135/WorldFriki/peliculas/thor_q8fnj8.jpg",
      link: "https://www.casadellibro.com/libro-el-visitante/9788401021190/7099713"
    },
     {
      title: "Zombie Apocalypse",
      category: "suspenso",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687648136/WorldFriki/peliculas/zombie_hhmlow.png",
      link: "https://www.casadellibro.com/libro-el-visitante/9788401021190/7099713"
    },
     {
      title: "Fall",
      category: "suspenso",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687637207/WorldFriki/peliculas/fall_w2c3ph.jpg",
      link: "https://www.casadellibro.com/libro-el-visitante/9788401021190/7099713"
    },
     {
      title: "La chica salvaje",
      category: "suspenso",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687637207/WorldFriki/peliculas/selva_mc6qaz.jpg",
      link: "https://www.casadellibro.com/libro-el-visitante/9788401021190/7099713"
    },
     {
      title: "Godzilla VS. Kong",
      category: "accion",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687648132/WorldFriki/peliculas/godzilla_tpvjvt.jpg",
      link: "https://www.casadellibro.com/libro-el-visitante/9788401021190/7099713"
    },
     {
      title: "Beast",
      category: "suspenso",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687637208/WorldFriki/peliculas/beast_kdaos5.jpg",
      link: "https://www.casadellibro.com/libro-el-visitante/9788401021190/7099713"
    },
     {
      title: "Black Adam",
      category: "suspenso",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687648132/WorldFriki/peliculas/blackadam_sbsxpm.jpg",
      link: "https://www.casadellibro.com/libro-el-visitante/9788401021190/7099713"
    },
     {
      title: "Revenant: El Renacido",
      category: "accion",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687648136/WorldFriki/peliculas/renacido_l0pn0v.jpg",
      link: "https://www.casadellibro.com/libro-el-visitante/9788401021190/7099713"
    },
     {
      title: "King Kong",
      category: "suspenso",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687648135/WorldFriki/peliculas/king_qylgj9.jpg",
      link: "https://www.casadellibro.com/libro-el-visitante/9788401021190/7099713"
    },
     {
      title: "El dia del fin del mundo",
      category: "accion",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687648132/WorldFriki/peliculas/finmundo_ktsb72.jpg",
      link: "https://www.casadellibro.com/libro-el-visitante/9788401021190/7099713"
    },
     {
      title: "El sorprendente hombre araña",
      category: "accion",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687648134/WorldFriki/peliculas/menara%C3%B1a_ofznfn.jpg",
      link: "https://www.casadellibro.com/libro-el-visitante/9788401021190/7099713"
    },
    ];


export const Movie = () => {
     const [selectedCategory, setSelectedCategory] = useState("all");
      
        const filteredBooks = selectedCategory === "all"
          ? booksData
          : booksData.filter(book => book.category === selectedCategory);

    return(
        <>
        <Search1/>
            <Categoria1 
             selectedCategory={selectedCategory}
            onCategoryClick={setSelectedCategory}
            />


          <h1 className="title">Peliculas</h1>
          <section className="Aside">
            {filteredBooks.map((book, index) => (
              <aside key={index} className="Aside1" category={book.category}>
                <h5>{book.title}</h5>
                <a href={book.link} target="_blank" rel="noopener noreferrer">
                  <img src={book.img} alt={book.title} />
                </a>
              </aside>
            ))}
<SliderMovies/>
</section>
        </>
    );
};
export default Movie;