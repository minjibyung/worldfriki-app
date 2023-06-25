import React from "react";
import Categoria1 from "../../layouts/categorias/Categoria1";
import SliderBooks from "../../layouts/slider/SliderBooks";
import Search1 from "../../layouts/search/Search1";

export const Libros1 = () => {
    return(
        <>

    <Search1/>
    <Categoria1 />

    <h1 className="title">LIBROS</h1>
    <section className="Aside">
        <aside className="Aside1" category="romance">
            <h5>Boulevard</h5>
            <a href="https://www.panamericana.com.co/el-resplandor/p" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1687038280/WorldFriki/libros/boulevard_mltlx7.jpg"/></a>
 {/* <!-- <h5>Sipnosis</h5>           
<p>Cuando un niño desaparece, sus amigos,
la familia y la policía se ven envueltos 
en una serie de eventos misteriosos al 
tratar de encontrarlo. Su ausencia coincide 
con el avistamiento de una criatura terrorífica 
y la aparición de una extraña niña.</p><br>
<li>Cantidad de temporadas: 4</li> --> */}
    </aside>
    <aside className="Aside1" category="romance">
            <h5>Antes De Diciembre</h5>
            <a href="https://www.panamericana.com.co/carrie/p" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1687038282/WorldFriki/libros/diciembre_vpezmr.jpg"/></a>
{/* <!-- <h5>Sipnosis</h5>
<p>Un cirujano joven y autista que padece el síndrome del sabio empieza a trabajar en un hospital prestigioso.
 Allá tendrá que vencer el escepticismo con el que sus colegas lo reciben.</p><br>
<li>Cantidad de temporadas: 5</li>  --> */}
        </aside>
        <aside className="Aside1" category="romance">
        <h5>Bajo La Misma Extrella</h5>
        <a href="https://www.panamericana.com.co/misery-3/p" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1687038283/WorldFriki/libros/ESTRELLA_uwxvld.png"/></a> 

{/* <!-- <h5>Sipnosis</h5>
<p>Dos familias poderosas, reyes y reinas, caballeros y renegados, hombres falsos y honestos, haciendo
 parte de un juego mortal por el control de los Siete Reinados de Westeros y por sentarse en el trono
más alto. Martin es el co productor ejecutivo y uno de los escritores de la serie que fue filmada
 en el Norte de Irlanda y Malta.</p><br>
<li>Cantidad de temporadas: 8</li> --> */}
    </aside>
    <aside className="Aside1" category="suspenso">
        <h6>Harry Potter Y La Pierdra Filosofal</h6>
        <a href="https://www.panamericana.com.co/cementerio-de-animales/p" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1687038284/WorldFriki/libros/HARRY_rqj7qs.jpg"/></a> 
 
{/* <!-- <h5>Sipnosis</h5> -->
<!-- <p>Han pasado tres años desde que Alison quien era la reina del grupo se desapareció. Spencer, Aria, Hanna y Emily
 continúan sus vidas aunque se han apartado. Ahora en la secundaria, cada chica está enfrentando diferentes retos
 cuando mensajes de texto anónimos de "A" amenazan con exponer todos sus secretos. ¿Quién es "A" y cómo sabe tanto?.
 Basada en la series de novelas de Sara Shepard.</p><br>
<li>Último episodio: 27 de junio de 2017</li>    
<li>Cantidad de temporadas: 7</li>
<li>Duración: 41-80 minutos</li> --> */}
    </aside>
    <aside className="Aside1" category="suspenso">
        <h5>Coraline</h5>
        <a href="https://www.amazon.com/-/es/Stephen-King/dp/8466357238" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1687038282/WorldFriki/libros/CORALNE_uhwpgs.jpg"/></a> 

{/* <!-- <h5>Sipnosis</h5> -->
<!-- <p>Han pasado tres años desde que Alison quien era la reina del grupo se desapareció. Spencer, Aria, Hanna y Emily
 continúan sus vidas aunque se han apartado. Ahora en la secundaria, cada chica está enfrentando diferentes retos
 cuando mensajes de texto anónimos de "A" amenazan con exponer todos sus secretos. ¿Quién es "A" y cómo sabe tanto?.
 Basada en la series de novelas de Sara Shepard.</p><br>
<li>Último episodio: 27 de junio de 2017</li>    
<li>Cantidad de temporadas: 7</li>
<li>Duración: 41-80 minutos</li> --> */}
    </aside>
    <aside className="Aside1" category="terror">
        <h5>Damian</h5>
        <a href="https://www.casadellibro.com/libro-el-visitante/9788401021190/7099713" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1687038283/WorldFriki/libros/DAMIAN_ihmsva.jpg"/></a> 

{/* <!-- <h5>Sipnosis</h5>
<p>Han pasado tres años desde que Alison quien era la reina del grupo se desapareció. Spencer, Aria, Hanna y Emily
 continúan sus vidas aunque se han apartado. Ahora en la secundaria, cada chica está enfrentando diferentes retos
 cuando mensajes de texto anónimos de "A" amenazan con exponer todos sus secretos. ¿Quién es "A" y cómo sabe tanto?.
 Basada en la series de novelas de Sara Shepard.</p><br>
<li>Último episodio: 27 de junio de 2017</li>    
<li>Cantidad de temporadas: 7</li>
<li>Duración: 41-80 minutos</li> --> */}
    </aside>
    <aside className="Aside1" category="suspenso">
        <h5>Cien Años De Soledad</h5>
        <a href="https://www.panamericana.com.co/doctor-sueno-588241/p" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1687038290/WorldFriki/libros/CIEN_s0u3h9.jpg"/></a> 

{/* <!-- <h5>Sipnosis</h5>
<p>Han pasado tres años desde que Alison quien era la reina del grupo se desapareció. Spencer, Aria, Hanna y Emily
 continúan sus vidas aunque se han apartado. Ahora en la secundaria, cada chica está enfrentando diferentes retos
 cuando mensajes de texto anónimos de "A" amenazan con exponer todos sus secretos. ¿Quién es "A" y cómo sabe tanto?.
 Basada en la series de novelas de Sara Shepard.</p><br>
<li>Último episodio: 27 de junio de 2017</li>    
<li>Cantidad de temporadas: 7</li>
<li>Duración: 41-80 minutos</li> --> */}
    </aside>
    <aside className="Aside1" category="accion">
        <h5>Destroza Este Diario</h5>
        <a href="https://www.panamericana.com.co/el-instituto-585646/p" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1687038293/WorldFriki/libros/DIARIO_es2gtc.jpg"/></a> 

    </aside>
    <aside className="Aside1" category="suspenso">
        <h5>El Diario De Ana Frank</h5>
        <a href="https://www.alibrate.com/libro/ojos-de-fuego/59872eadcba2bce50c1f053f" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1687038281/WorldFriki/libros/FRANK_xcjpsy.webp"/></a> 

    </aside>
    <aside className="Aside1" category="suspenso">
        <h5>Lazos De Sangre</h5>
        <a href="https://www.panamericana.com.co/la-cupula-553539/p" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1687038289/WorldFriki/libros/LAZOS_ydwbjr.jpg"/></a> 

    </aside>
    <aside className="Aside1" category="suspenso">
        <h5>Lugares Asombrosos</h5>
        <a href="https://libreriatemis.com/product/eleanor-y-park/" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1687038289/WorldFriki/libros/LUGARES_slsgvs.jpg"/></a> 
    
    </aside>
    <aside className="Aside1" category="romance">
        <h5>Nosotros En La Luna</h5>
        <a href="https://www.buscalibre.com.co/libro-stranger-things-mentes-peligrosas/9788401022975/p/51446345" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1687038283/WorldFriki/libros/LUNA_bfeafg.jpg"/></a> 
    
    </aside>
    <aside className="Aside1" category="suspenso">
        <h5>El Mapa De Los Anhelos</h5>
        <a href="https://librerianacional.com/producto/stranger-things-mundos-del-reves-la-guia-oficial-" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1687038282/WorldFriki/libros/MAPA_bnt4jd.jpg"/></a> 
    
    </aside>
    <aside className="Aside1" category="suspenso">
        <h5>Narraciones Extraordinaria</h5>
        <a href="https://www.panamericana.com.co/stranger-things-a-oscuras-en-la-ciudad-621041/p" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1687038285/WorldFriki/libros/narraciones_bvbxye.jpg"/></a> 
    
    </aside>
    <aside className="Aside1" category="suspenso">
        <h6>Cronica De Una Muerte Anunciada</h6>
        <a href="https://www.amazon.com/-/es/Martí-Pallàs/dp/8494791710" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1687038283/WorldFriki/libros/CRONICA_l7enig.jpg"/></a> 

    </aside> 
    <aside className="Aside1" category="terror">
        <h5>It</h5>
        <a href="https://www.penguinlibros.com/co/novela-negra-misterio-y-thriller/25479-ebook-guerra-mundial-z-9788490628096" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1687038283/WorldFriki/libros/IT_szztnx.jpg"/></a> 

    </aside> 
    <SliderBooks/>
    </section>
    </>
    );
};
export default Libros1;