import React, { useState, useEffect } from "react";
import "./series.css";
import Categoria1 from "../../layouts/categorias/Categoria1";
import SliderSeries from "../../layouts/slider/SliderSeries";
import Search1 from "../../layouts/search/Search1";

const booksData = [
    {
      title: "Palpito",
      category: "suspenso",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687030697/WorldFriki/series/PALPITO_cv8ced.jpg",
      link: "https://www.panamericana.com.co/el-resplandor/p"
    },
     {
      title: "Propuesta Laboral",
      category: "romance",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687030693/WorldFriki/series/propuestalaboral_rysqzm.jpg",
      link: "https://www.casadellibro.com/libro-el-visitante/9788401021190/7099713"
    },
     {
      title: "Estamos Muertos",
      category: "terror",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687030694/WorldFriki/series/MUERTOS_izhxbs.webp",
      link: "https://www.casadellibro.com/libro-el-visitante/9788401021190/7099713"
    },
     {
      title: "Anne Whit An E",
      category: "romance",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687030688/WorldFriki/series/ANNE_iklsuf.jpg",
      link: "https://www.casadellibro.com/libro-el-visitante/9788401021190/7099713"
    }, 
    {
      title: "Hotel Del Luna",
      category: "romance",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687030688/WorldFriki/series/HOTEL_eoorh1.webp",
      link: "https://www.casadellibro.com/libro-el-visitante/9788401021190/7099713"
    },
     {
      title: "Dulce Hogar",
      category: "accion",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687030687/WorldFriki/series/HOME_ydc4rf.webp",
      link: "https://www.casadellibro.com/libro-el-visitante/9788401021190/7099713"
    },
     {
      title: "Sweet Tooth",
      category: "suspenso",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687030698/WorldFriki/series/SWEET_gcxaes.webp",
      link: "https://www.casadellibro.com/libro-el-visitante/9788401021190/7099713"
    },
     {
      title: "The Boys",
      category: "accion",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687030691/WorldFriki/series/BOYS_f29np1.jpg",
      link: "https://www.casadellibro.com/libro-el-visitante/9788401021190/7099713"
    },
     {
      title: "Atypical",
      category: "comedia",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687030688/WorldFriki/series/ATYPICAL_aihjjd.jpg",
      link: "https://www.casadellibro.com/libro-el-visitante/9788401021190/7099713"
    },
     {
      title: "The 100",
      category: "suspenso",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687030689/WorldFriki/series/100_s6b1w1.jpg",
      link: "https://www.casadellibro.com/libro-el-visitante/9788401021190/7099713"
    },
     {
      title: "You",
      category: "suspenso",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687030687/WorldFriki/series/YOU_wbig27.jpg",
      link: "https://www.casadellibro.com/libro-el-visitante/9788401021190/7099713"
    },
     {
      title: "The Witcher",
      category: "suspenso",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687030688/WorldFriki/series/WITCHER_zxsgjq.webp",
      link: "https://www.casadellibro.com/libro-el-visitante/9788401021190/7099713"
    },
     {
      title: "Dark",
      category: "suspenso",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687030692/WorldFriki/series/DARK_bydh9j.jpg",
      link: "https://www.casadellibro.com/libro-el-visitante/9788401021190/7099713"
    },
     {
      title: "Lucifer",
      category: "accion",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687030689/WorldFriki/series/LUCIFER_yrecmc.jpg",
      link: "https://www.casadellibro.com/libro-el-visitante/9788401021190/7099713"
    },
     {
      title: "Heartstopper",
      category: "romance",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687030686/WorldFriki/series/Heartstopper_vlhewo.jpg",
      link: "https://www.casadellibro.com/libro-el-visitante/9788401021190/7099713"
    },
     {
      title: "The Umbrella Academy",
      category: "accion",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687030698/WorldFriki/series/UMBRELLA_dnskqf.jpg",
      link: "https://www.casadellibro.com/libro-el-visitante/9788401021190/7099713"
    },
    ];

export const Series2 = () => {
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
          <h1 className="title">Series</h1>
          <section className="Aside">
            {filteredBooks.map((book, index) => (
              <aside key={index} className="Aside1" category={book.category}>
                <h5>{book.title}</h5>
                <a href={book.link} target="_blank" rel="noopener noreferrer">
                  <img src={book.img} alt={book.title} />
                </a>
              </aside>
            ))}
<SliderSeries/>
    </section>
</>
);
};
export default Series2;