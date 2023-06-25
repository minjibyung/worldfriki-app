import React, { useState, useEffect } from "react";
import "./series.css";
import Categoria1 from "../../layouts/categorias/Categoria1";
import SliderSeries from "../../layouts/slider/SliderSeries";

export const Series2 = () => {
    return(
    <>
    
    {/* <Header /> */}
    <Categoria1 />

    <h1 className="title">SERIES</h1>
    <section className="Aside">
        <aside className="Aside1" category="suspenso">
            <h5>Palpito</h5>
            <a href="https://www.youtube.com/watch?v=YITf1X6hNls" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1687030697/WorldFriki/PALPITO_cv8ced.jpg"/></a>
    </aside>
    <aside className="Aside1" category="romance">
        <h5>Propuesta Laboral</h5>
        <a href="https://www.youtube.com/watch?v=Ed5mtVeLHLI" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1687030693/WorldFriki/propuestalaboral_rysqzm.jpg"/></a>
{/* <!-- <h5>Sipnosis</h5>
<p>Un cirujano joven y autista que padece el síndrome del sabio empieza a trabajar en un hospital prestigioso.
Allá tendrá que vencer el escepticismo con el que sus colegas lo reciben.</p><br>
<li>Cantidad de temporadas: 5</li>  --> */}
    </aside>
    <aside className="Aside1" category="terror">
    <h5>Estamos Muertos</h5>
    <a href="https://www.youtube.com/watch?v=62jVLZ4JfjM" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1687030694/WorldFriki/MUERTOS_izhxbs.webp"/></a> 

{/* <!-- <h5>Sipnosis</h5>
<p>Dos familias poderosas, reyes y reinas, caballeros y renegados, hombres falsos y honestos, haciendo
parte de un juego mortal por el control de los Siete Reinados de Westeros y por sentarse en el trono
más alto. Martin es el co productor ejecutivo y uno de los escritores de la serie que fue filmada
en el Norte de Irlanda y Malta.</p><br>
<li>Cantidad de temporadas: 8</li> --> */}
</aside>
<aside className="Aside1" category="romance">
    <h5>Anne With An E</h5>
    <a href="https://www.youtube.com/watch?v=S5qJXYNNINo" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1687030688/WorldFriki/ANNE_iklsuf.jpg"/></a> 
   
{/* <!-- <h5>Sipnosis</h5> -->
<!-- <p>Han pasado tres años desde que Alison quien era la reina del grupo se desapareció. Spencer, Aria, Hanna y Emily
continúan sus vidas aunque se han apartado. Ahora en la secundaria, cada chica está enfrentando diferentes retos
cuando mensajes de texto anónimos de "A" amenazan con exponer todos sus secretos. ¿Quién es "A" y cómo sabe tanto?.
Basada en la series de novelas de Sara Shepard.</p><br>
<li>Último episodio: 27 de junio de 2017</li>    
<li>Cantidad de temporadas: 7</li>
<li>Duración: 41-80 minutos</li> --> */}
</aside>
<aside className="Aside1" category="romance">
    <h5>Hotel Del Luna</h5>
    <a href="https://www.youtube.com/watch?v=v0-wlgkg23Y" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1687030688/WorldFriki/HOTEL_eoorh1.webp"/></a> 

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
    <h5>Dulce Hogar</h5>
    <a href="https://www.youtube.com/watch?v=3dayGclG6Yo" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1687030687/WorldFriki/HOME_ydc4rf.webp"/></a> 

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
    <h5>Sweet Tooth</h5>
    <a href="https://www.youtube.com/watch?v=0jFtt5Fe5CM" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1687030698/WorldFriki/SWEET_gcxaes.webp"/></a> 
 
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
    <h5>The Boys</h5>
    <a href="https://www.youtube.com/watch?v=GXM7SRdos2A" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1687030691/WorldFriki/BOYS_f29np1.jpg"/></a> 
 

</aside>
<aside className="Aside1" category="suspenso">
    <h5>Atypical</h5>
    <a href="https://www.youtube.com/watch?v=aSqWJdx_sqQ" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1687030688/WorldFriki/ATYPICAL_aihjjd.jpg"/></a> 


</aside>
<aside className="Aside1" category="suspenso">
    <h5>The 100</h5>
    <a href="https://www.youtube.com/watch?v=2NUnsXkcX4E" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1687030689/WorldFriki/100_s6b1w1.jpg"/></a> 


</aside>
<aside className="Aside1" category="suspenso">
    <h5>You</h5>
    <a href="https://www.youtube.com/watch?v=nqSQUrlnB9s" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1687030687/WorldFriki/YOU_wbig27.jpg"/></a> 


</aside>
<aside className="Aside1" category="accion">
    <h5>The Witcher</h5>
    <a href="https://www.youtube.com/watch?v=ETY44yszyNc" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1687030688/WorldFriki/WITCHER_zxsgjq.webp"/></a> 


</aside>
<aside className="Aside1" category="suspenso">
    <h5>Dark</h5>
    <a href="https://www.youtube.com/watch?v=IJ_AZCvCacw" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1687030692/WorldFriki/DARK_bydh9j.jpg"/></a> 

</aside>
<aside className="Aside1" category="suspenso">
    <h5>Lucifer</h5>
    <a href="https://www.youtube.com/watch?v=X4bF_quwNtw" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1687030689/WorldFriki/LUCIFER_yrecmc.jpg"/></a> 


</aside>
<aside className="Aside1" category="romance">
    <h5>Heartstopper</h5>
    <a href="https://www.youtube.com/watch?v=YtJ9uwqY1M4" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1687030686/WorldFriki/Heartstopper_vlhewo.jpg"/></a> 

</aside> 
<aside className="Aside1" category="accion">
    <h5>The Umbrella Academy</h5>
    <a href="https://www.youtube.com/watch?v=KHucKOK-Vik" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1687030698/WorldFriki/UMBRELLA_dnskqf.jpg"/></a> 

</aside> 
<SliderSeries/>
    </section>
</>
);
};
export default Series2;