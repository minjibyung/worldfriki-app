import React from "react";
import './series.css';
import Categoria1 from "../../layouts/categorias/Categoria1";
import SliderSeries from "../../layouts/slider/SliderSeries";
import Search1 from "../../layouts/search/Search1";


const booksData = [
    {
      title: "Stranger Things",
      category: "suspenso",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687030696/WorldFriki/series/strangerthings1_jiue4t.webp",
      link: "https://www.panamericana.com.co/el-resplandor/p"
    },
     {
      title: "The Good Doctor",
      category: "accion",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687030696/WorldFriki/series/thegooddoctor_hyy6vq.jpg",
      link: "https://www.casadellibro.com/libro-el-visitante/9788401021190/7099713"
    },
     {
      title: "Juego De Tronos",
      category: "accion",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687030688/WorldFriki/series/juegodetronos_hddcbs.jpg",
      link: "https://www.casadellibro.com/libro-el-visitante/9788401021190/7099713"
    },
     {
      title: "Pretty Little Liars",
      category: "suspenso",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687030693/WorldFriki/series/prettylittleliars_cwx9vc.jpg",
      link: "https://www.casadellibro.com/libro-el-visitante/9788401021190/7099713"
    }, 
    {
      title: "Peaky Blinders",
      category: "accion",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687030698/WorldFriki/series/peakybleanders_hsppqo.webp",
      link: "https://www.casadellibro.com/libro-el-visitante/9788401021190/7099713"
    },
     {
      title: "The End Of The F***ing World",
      category: "accion",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687030696/WorldFriki/series/fuckingworld_tfbimu.webp",
      link: "https://www.casadellibro.com/libro-el-visitante/9788401021190/7099713"
    },
     {
      title: "Riverdale",
      category: "suspenso",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687030697/WorldFriki/series/riverdale_cbpi38.jpg",
      link: "https://www.casadellibro.com/libro-el-visitante/9788401021190/7099713"
    },
     {
      title: "Gambito De Dama",
      category: "accion",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687030686/WorldFriki/series/gambitodedama_qmlxnt.jpg",
      link: "https://www.casadellibro.com/libro-el-visitante/9788401021190/7099713"
    },
     {
      title: "The Sex Education",
      category: "comedia",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687030695/WorldFriki/series/sexeducation_ulsh1v.jpg",
      link: "https://www.casadellibro.com/libro-el-visitante/9788401021190/7099713"
    },
     {
      title: "Euphoria",
      category: "suspenso",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687030693/WorldFriki/series/EUPHORIA_brtm3y.jpg",
      link: "https://www.casadellibro.com/libro-el-visitante/9788401021190/7099713"
    },
     {
      title: "Elite",
      category: "suspenso",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687030691/WorldFriki/series/ELITE_nrs3di.jpg",
      link: "https://www.casadellibro.com/libro-el-visitante/9788401021190/7099713"
    },
     {
      title: "Mr. Robot",
      category: "suspenso",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687030691/WorldFriki/series/mr.robot_fmmddv.jpg",
      link: "https://www.casadellibro.com/libro-el-visitante/9788401021190/7099713"
    },
     {
      title: "La Maldicion De La Hillhouse",
      category: "terror",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687030689/WorldFriki/series/maldicion_p9agyi.jpg",
      link: "https://www.casadellibro.com/libro-el-visitante/9788401021190/7099713"
    },
     {
      title: "La Chica Nueva",
      category: "suspenso",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687030688/WorldFriki/series/lachicanueva_lqbimx.jpg",
      link: "https://www.casadellibro.com/libro-el-visitante/9788401021190/7099713"
    },
     {
      title: "Vagabond",
      category: "accion",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687030686/WorldFriki/series/VAGABOND_et2h0y.webp",
      link: "https://www.casadellibro.com/libro-el-visitante/9788401021190/7099713"
    },
     {
      title: "Young Royals",
      category: "Romance",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1749070121/WorldFriki/series/youngroyals_ce7nlx.jpg",
      link: "https://www.casadellibro.com/libro-el-visitante/9788401021190/7099713"
    },
    ];

export const Series = () => {
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

    <SliderSeries />
    </section>
    
    </>
     );
};

export default Series;


