import React, { useState } from "react";
import Categoria1 from "../../layouts/categorias/Categoria1";
import SliderBooks from "../../layouts/slider/SliderBooks";
import Search1 from "../../layouts/search/Search1";

const booksData = [
    {
    title: "El resplandor",
    category: "terror",
    img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687038287/WorldFriki/libros/resplandor_spxth1.jpg",
    link: ""
    },
    {
        title: "Carrie",
        category: "terror",
        img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687038280/WorldFriki/libros/CARRIE_ouam8p.jpg",
        link: ""
    },
    {
      title: "Guerra mundial Z",
      category: "suspenso",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687038295/WorldFriki/libros/GUERRA_y5s2js.jpg",
      link: ""
    },
    {
      title: "Doctor sueño",
      category: "terror",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687038292/WorldFriki/libros/DOCTOR_v77cpo.jpg",
      link: ""
    },
    {
      title: "El visitante",
      category: "terror",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687038292/WorldFriki/libros/visitante_ogsoew.jpg",
      link: ""
    },
    {
      title: "Mundos del reves",
      category: "suspenso",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687038290/WorldFriki/libros/REVES_aghcdq.jpg",
      link: ""
    },
    {
      title: "La cupula",
      category: "suspenso",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687038286/WorldFriki/libros/CUPULA_mbil0m.jpg",
      link: ""
    },
    {
      title: "The stand",
      category: "terror",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687038286/WorldFriki/libros/STAND_hkqvx0.jpg",
      link: ""
    },
    {
      title: "Cementerio de animales",
      category: "terror",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687038280/WorldFriki/libros/ANIMALES_tytvz5.jpg",
      link: ""
    },
    {
      title: "Ojos de fuego",
      category: "terror",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687038280/WorldFriki/libros/OJOS_ckcukn.jpg",
      link: ""
    },
     {
      title: "Mentes peligrosas",
      category: "terror",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687038281/WorldFriki/libros/PELIGRO_pff4n8.jpg",
      link: ""
    },
     {
      title: "A oscuras en la ciudad",
      category: "terror",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687038282/WorldFriki/libros/oscuridad_qci19l.webp",
      link: ""
    },
     {
      title: "El instituto",
      category: "terror",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687038282/WorldFriki/libros/instituto_ckigl1.jpg",
      link: ""
    },
     {
      title: "Misery",
      category: "terror",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687038284/WorldFriki/libros/MISERY_by0wp7.jpg",
      link: ""
    },
     {
      title: "A traves de Stranger Things",
      category: "terror",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687038282/WorldFriki/libros/recordando_epg6cx.jpg",
      link: ""
    },
    {
      title: "Eleanor & Park",
      category: "romance",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687038282/WorldFriki/libros/ELEANOR_ft3z3w.jpg",
      link: ""
    }
];

    export const Libros22 = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");
      
        const filteredBooks = selectedCategory === "all"
          ? booksData
          : booksData.filter(book => book.category === selectedCategory);

          return (
            <>
              <Search1 />
              <Categoria1
                selectedCategory={selectedCategory}
                onCategoryClick={setSelectedCategory}
              />
        
              <h1 className="title">LIBROS</h1>
              <section className="Aside">
                {filteredBooks.map((book, index) => (
                  <aside key={index} className="Aside1" category={book.category}>
                    <h5>{book.title}</h5>
                    <a href={book.link} target="_blank" rel="noopener noreferrer">
                      <img src={book.img} alt={book.title} />
                    </a>
                  </aside>
                ))}
                <SliderBooks />
              </section>
            </>
          );
        };
export default Libros22;