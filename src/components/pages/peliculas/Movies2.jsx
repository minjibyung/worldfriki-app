import React from "react";
import Categoria1 from "../../layouts/categorias/Categoria1";
import SliderMovies from "../../layouts/slider/SliderMovies";
import Search1 from "../../layouts/search/Search1";

export const Movies2 = () => {
    return(
        <>
        <Search1/>
            <Categoria1 />

<h1 className="title">Peliculas</h1>
<section className="Aside">
    <aside className="Aside1" category="accion">
        <h5>The breakfast club</h5>
        <a href="https://www.youtube.com/watch?v=DMFBm_lp4rU" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1729559272/WorldFriki/peliculas/breakfast_club_1985_french_petite_original_film_art_f_1200x_l4skwo.jpg"/></a>
</aside>

<aside className="Aside1" category="suspenso">
        <h5>Clueless</h5>
        <a href="https://www.youtube.com/watch?v=EIyZqNbZQI8" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1729559425/WorldFriki/peliculas/8AwVTcgpTnmeOs4TdTWqcFDXEsA_akb9ax.jpg"/></a>
    </aside>

    <aside className="Aside1" category="accion">
    <h5>Beetlejuice</h5>
    <a href="https://www.panamericana.com.co/misery-3/p" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1729559483/WorldFriki/peliculas/wWSNj89K7ljvZbhxiQjjZJv95kaDE0sRQ8RIJ1s6Vb3NlfPXplOed5IM8C9vI8hU_UVb8g_edp6wv.jpg"/></a> 
</aside>

<aside className="Aside1" category="accion">
    <h6>Beetlejuice 2</h6>
    <a href="https://www.panamericana.com.co/cementerio-de-animales/p" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1729559589/WorldFriki/peliculas/452349_vqjbtg.jpg"/></a> 
</aside>

<aside className="Aside1" category="romance">
    <h5>Scissorhands</h5>
    <a href="https://www.amazon.com/-/es/Stephen-King/dp/8466357238" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1729559704/WorldFriki/peliculas/q2zy8qAzR5Bnoh8nP4jdePM8YbXuo4ie_qJJpfZgWSZtLrVFwfdckqZrNml2kVcrJ9A_ah2gi4.jpg"/></a> 
</aside>

<aside className="Aside1" category="accion">
    <h5>Harry potter y la piedra filosofal</h5>
    <a href="https://www.casadellibro.com/libro-el-visitante/9788401021190/7099713" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1729559862/WorldFriki/peliculas/360_vicres.jpg"/></a> 
</aside>

<aside className="Aside1" category="suspenso">
    <h5>Terminator: Dark fate</h5>
    <a href="https://www.panamericana.com.co/doctor-sueno-588241/p" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1729560747/WorldFriki/peliculas/MV5BOTU2OGFhYjktNDJhMC00NmU5LWE1OWItNzg5ODU1MzdmNTZkXkEyXkFqcGc_._V1__zujmle.jpg"/></a> 
</aside>

<aside className="Aside1" category="suspenso">
    <h5>Mean girls</h5>
    <a href="https://www.panamericana.com.co/el-instituto-585646/p" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1729561202/WorldFriki/peliculas/FBSC_Mean_Girls_2024_FE_Website.jpg_h3xquw.jpg"/></a> 

</aside>
{/* <aside className="Aside1" category="accion">
    <h5>La chica salvaje</h5>
    <a href="https://www.alibrate.com/libro/ojos-de-fuego/59872eadcba2bce50c1f053f" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1687637207/WorldFriki/peliculas/selva_mc6qaz.jpg"/></a> 

</aside>
<aside className="Aside1" category="accion">
    <h5>Godzilla VS. Kong</h5>
    <a href="https://www.panamericana.com.co/la-cupula-553539/p" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1687648132/WorldFriki/peliculas/godzilla_tpvjvt.jpg"/></a> 

</aside>
<aside className="Aside1" category="accion">
    <h5>Beast</h5>
    <a href="https://libreriatemis.com/product/eleanor-y-park/" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1687637208/WorldFriki/peliculas/beast_kdaos5.jpg"/></a> 

</aside>
<aside className="Aside1" category="accion">
    <h5>Black Adam</h5>
    <a href="https://www.buscalibre.com.co/libro-stranger-things-mentes-peligrosas/9788401022975/p/51446345" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1687648132/WorldFriki/peliculas/blackadam_sbsxpm.jpg"/></a> 

</aside>
<aside className="Aside1" category="suspenso">
    <h5>Revenant: El Renacido</h5>
    <a href="https://librerianacional.com/producto/stranger-things-mundos-del-reves-la-guia-oficial-" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1687648136/WorldFriki/peliculas/renacido_l0pn0v.jpg"/></a> 

</aside>
<aside className="Aside1" category="accion">
    <h5>King Kong</h5>
    <a href="https://www.panamericana.com.co/stranger-things-a-oscuras-en-la-ciudad-621041/p" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1687648135/WorldFriki/peliculas/king_qylgj9.jpg"/></a> 

</aside>
<aside className="Aside1" category="suspenso">
    <h6>El dia del fin del mundo</h6>
    <a href="https://www.amazon.com/-/es/Martí-Pallàs/dp/8494791710" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1687648132/WorldFriki/peliculas/finmundo_ktsb72.jpg"/></a> 

</aside> 
<aside className="Aside1" category="accion">
    <h5>El sorprendente hombre araña</h5>
    <a href="https://www.penguinlibros.com/co/novela-negra-misterio-y-thriller/25479-ebook-guerra-mundial-z-9788490628096" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1687648134/WorldFriki/peliculas/menara%C3%B1a_ofznfn.jpg"/></a> 
</aside> */}

<SliderMovies/>
</section>
        </>
    );
};
export default Movies2;