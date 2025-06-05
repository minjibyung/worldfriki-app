import React from "react";
import Categoria1 from "../../layouts/categorias/Categoria1";
import SliderMovies from "../../layouts/slider/SliderMovies";
import Search1 from "../../layouts/search/Search1";


const booksData = [
    {
      title: "The breakfast club",
      category: "suspenso",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1729559272/WorldFriki/peliculas/breakfast_club_1985_french_petite_original_film_art_f_1200x_l4skwo.jpg",
      link: "https://www.panamericana.com.co/el-resplandor/p"
    },
     {
      title: "Clueless",
      category: "comedia",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1729559425/WorldFriki/peliculas/8AwVTcgpTnmeOs4TdTWqcFDXEsA_akb9ax.jpg",
      link: "https://www.casadellibro.com/libro-el-visitante/9788401021190/7099713"
    },
     {
      title: "Beetlejuice",
      category: "suspenso",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1729559483/WorldFriki/peliculas/wWSNj89K7ljvZbhxiQjjZJv95kaDE0sRQ8RIJ1s6Vb3NlfPXplOed5IM8C9vI8hU_UVb8g_edp6wv.jpg",
      link: "https://www.casadellibro.com/libro-el-visitante/9788401021190/7099713"
    },
     {
      title: "Beetlejuice 2",
      category: "romance",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1729559589/WorldFriki/peliculas/452349_vqjbtg.jpg",
      link: "https://www.casadellibro.com/libro-el-visitante/9788401021190/7099713"
    }, 
    {
      title: "Scissorhands",
      category: "suspenso",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1729559704/WorldFriki/peliculas/q2zy8qAzR5Bnoh8nP4jdePM8YbXuo4ie_qJJpfZgWSZtLrVFwfdckqZrNml2kVcrJ9A_ah2gi4.jpg",
      link: "https://www.casadellibro.com/libro-el-visitante/9788401021190/7099713"
    },
     {
      title: "Harry potter y la piedra filosofal",
      category: "suspenso",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1729559862/WorldFriki/peliculas/360_vicres.jpg",
      link: "https://www.casadellibro.com/libro-el-visitante/9788401021190/7099713"
    },
     {
      title: "Terminator: Dark fate",
      category: "accion",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1729560747/WorldFriki/peliculas/MV5BOTU2OGFhYjktNDJhMC00NmU5LWE1OWItNzg5ODU1MzdmNTZkXkEyXkFqcGc_._V1__zujmle.jpg",
      link: "https://www.casadellibro.com/libro-el-visitante/9788401021190/7099713"
    },
     {
      title: "Mean girls",
      category: "comedia",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1729561202/WorldFriki/peliculas/FBSC_Mean_Girls_2024_FE_Website.jpg_h3xquw.jpg",
      link: "https://www.casadellibro.com/libro-el-visitante/9788401021190/7099713"
    },
    ];

export const Movies2 = () => {
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
export default Movies2;