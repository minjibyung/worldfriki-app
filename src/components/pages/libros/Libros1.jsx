import React, { useState } from "react";
import Categoria1 from "../../layouts/categorias/Categoria1";
import SliderBooks from "../../layouts/slider/SliderBooks";
import Search1 from "../../layouts/search/Search1";

const booksData = [
    {
      title: "Boulevard",
      category: "romance",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687038280/WorldFriki/libros/boulevard_mltlx7.jpg",
      link: "https://www.panamericana.com.co/el-resplandor/p"
    },
    {
      title: "Damian",
      category: "terror",
      img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687038283/WorldFriki/libros/DAMIAN_ihmsva.jpg",
      link: "https://www.casadellibro.com/libro-el-visitante/9788401021190/7099713"
    },
    {
        title: "Antes De Diciembre",
        category: "romance",
        img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687038282/WorldFriki/libros/diciembre_vpezmr.jpg",
        link: "https://www.panamericana.com.co/carrie/p"
    },
{
    title: "Bajo La Misma Extrella",
    category: "romance",
    img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687038283/WorldFriki/libros/ESTRELLA_uwxvld.png",
    link: "https://www.panamericana.com.co/misery-3/p"
},
{
    title: "Harry Potter Y La Pierdra Filosofal",
    category: "suspenso",
    img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687038284/WorldFriki/libros/HARRY_rqj7qs.jpg",
    link: "https://www.panamericana.com.co/cementerio-de-animales/p"
},
{
  title: "Coraline",
  category: "suspenso",
  img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687038282/WorldFriki/libros/CORALNE_uhwpgs.jpg",
  link: ""
},
{
  title: "Cien años de soledad",
  category: "suspenso",
  img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687038290/WorldFriki/libros/CIEN_s0u3h9.jpg",
  link: ""
},
{
  title: "Destroza este diario",
  category: "accion",
  img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687038293/WorldFriki/libros/DIARIO_es2gtc.jpg",
  link: ""
},
{
  title: "El Diario de Ana Frank",
  category: "suspenso",
  img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687038281/WorldFriki/libros/FRANK_xcjpsy.webp",
  link: ""
},
{
  title: "Lazos de sangre",
  category: "terror",
  img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687038289/WorldFriki/libros/LAZOS_ydwbjr.jpg",
  link: ""
},
{
  title: "Lugares Asombrosos",
  category: "suspenso",
  img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687038289/WorldFriki/libros/LUGARES_slsgvs.jpg",
  link: ""
},
{
  title: "Nosotros en la luna",
  category: "romance",
  img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687038283/WorldFriki/libros/LUNA_bfeafg.jpg",
  link: ""
},
{
  title: "El mapa de los anhelos",
  category: "romance",
  img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687038282/WorldFriki/libros/MAPA_bnt4jd.jpg",
  link: ""
},
{
  title: "Narraciones Extraordinarias",
  category: "suspenso",
  img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687038285/WorldFriki/libros/narraciones_bvbxye.jpg",
  link: ""
},
{
  title: "Cronica de una muerte anunciada",
  category: "suspenso",
  img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687038283/WorldFriki/libros/CRONICA_l7enig.jpg",
  link: ""
},
{
  title: "It",
  category: "terror",
  img: "https://res.cloudinary.com/dhypxlezc/image/upload/v1687038283/WorldFriki/libros/IT_szztnx.jpg",
  link: ""
},

    // ...añade todos los demás libros aquí
  ];

  export const Libros1 = () => {
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
    
    export default Libros1;

    // estreuctura HTML 
    // <aside className="Aside1" category="suspenso">
    //     <h5>El Diario De Ana Frank</h5>
    //     <a href="https://www.alibrate.com/libro/ojos-de-fuego/59872eadcba2bce50c1f053f" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1687038281/WorldFriki/libros/FRANK_xcjpsy.webp"/></a> 

    // </aside>
//     <SliderBooks/>
//     </section>
//     </>
//     );
// };
// export default Libros1;