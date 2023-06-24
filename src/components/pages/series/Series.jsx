import React, { useState, useEffect } from "react";
import './series.css';
import { Header } from "../../layouts/header/Header";
import { Categoria } from "../../layouts/categorias/Categoria";
import { Slider } from "../../layouts/slider/Slider";

export const Series = () => {
    return(
    <>

    {/* <Header /> */}
    <Categoria />

    <h1 className="title">SERIES</h1>
    <section className="Aside">
        <aside className="Aside1" category="suspenso">
            <h5>Stranger Things</h5>
            <a href="https://www.youtube.com/watch?v=220ClSxwhxY" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1687030696/WorldFriki/strangerthings1_jiue4t.webp"/></a>
            
 {/* <!-- <h5>Sipnosis</h5>           
<p>Cuando un niño desaparece, sus amigos,
la familia y la policía se ven envueltos 
en una serie de eventos misteriosos al 
tratar de encontrarlo. Su ausencia coincide 
con el avistamiento de una criatura terrorífica 
y la aparición de una extraña niña.</p><br>
<li>Cantidad de temporadas: 4</li> --> */}
    </aside>
    <aside className="Aside1" category="suspenso">
            <h5>The Good Doctor</h5>
            <a href="https://www.youtube.com/watch?v=xsIFtGfAJ14" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1687030696/WorldFriki/thegooddoctor_hyy6vq.jpg"/></a>
{/* <!-- <h5>Sipnosis</h5>
<p>Un cirujano joven y autista que padece el síndrome del sabio empieza a trabajar en un hospital prestigioso.
 Allá tendrá que vencer el escepticismo con el que sus colegas lo reciben.</p><br>
<li>Cantidad de temporadas: 5</li>  --> */}
        </aside>
        <aside className="Aside1" category="accion">
        <h5>Juego De Tronos</h5>
        <a href="https://www.youtube.com/watch?v=9bwcu6rewSY" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1687030688/WorldFriki/juegodetronos_hddcbs.jpg"/></a> 

{/* <!-- <h5>Sipnosis</h5>
<p>Dos familias poderosas, reyes y reinas, caballeros y renegados, hombres falsos y honestos, haciendo
 parte de un juego mortal por el control de los Siete Reinados de Westeros y por sentarse en el trono
más alto. Martin es el co productor ejecutivo y uno de los escritores de la serie que fue filmada
 en el Norte de Irlanda y Malta.</p><br>
<li>Cantidad de temporadas: 8</li> --> */}
    </aside>
    <aside className="Aside1" category="suspenso">
        <h5>Pretty Little Liars</h5>
        <a href="https://www.youtube.com/watch?v=nwHvFNQG5UE" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1687030693/WorldFriki/prettylittleliars_cwx9vc.jpg"/></a> 

{/* <!-- <h5>Sipnosis</h5> -->
<!-- <p>Han pasado tres años desde que Alison quien era la reina del grupo se desapareció. Spencer, Aria, Hanna y Emily
 continúan sus vidas aunque se han apartado. Ahora en la secundaria, cada chica está enfrentando diferentes retos
 cuando mensajes de texto anónimos de "A" amenazan con exponer todos sus secretos. ¿Quién es "A" y cómo sabe tanto?.
 Basada en la series de novelas de Sara Shepard.</p><br>
<li>Último episodio: 27 de junio de 2017</li>    
<li>Cantidad de temporadas: 7</li>
<li>Duración: 41-80 minutos</li> --> */}
    </aside>
    <aside className="Aside1" category="accion">
        <h5>Peaky Blinders</h5>
        <a href="https://www.youtube.com/watch?v=H282c9q2MUU" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1687030698/WorldFriki/peakybleanders_hsppqo.webp"/></a> 

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
        <h5>The End Of The F***ing World</h5>
        <a href="https://www.youtube.com/watch?v=tJqIvhprg10" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1687030696/WorldFriki/fuckingworld_tfbimu.webp"/></a> 

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
        <h5>Riverdale</h5>
        <a href="https://www.youtube.com/watch?v=oTfzt6C7PYw" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1687030697/WorldFriki/riverdale_cbpi38.jpg"/></a> 

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
        <h5>El Oculto Mundo De Sabrina</h5>
        <a href="https://www.youtube.com/watch?v=51fOujPcgIE" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1687030694/WorldFriki/SABRINA_aifmwp.webp"/></a> 
    </aside>

    <aside className="Aside1" category="suspenso">
        <h5>Gambito De Dama</h5>
        <a href="https://www.youtube.com/watch?v=-BBgzgNgzeQ" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1687030686/WorldFriki/gambitodedama_qmlxnt.jpg"/></a> 

    </aside>
    
    <aside className="Aside1" category="accion">
        <h5>The Sex Education</h5>
        <a href="https://www.youtube.com/watch?v=1ATuTj8cBy8" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1687030695/WorldFriki/sexeducation_ulsh1v.jpg"/></a> 

    </aside>
    <aside className="Aside1" category="suspenso">
        <h5>Euphoria</h5>
        <a href="https://www.youtube.com/watch?v=nqSQUrlnB9s" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1687030693/WorldFriki/EUPHORIA_brtm3y.jpg"/></a> 
    
    </aside>
    <aside className="Aside1" category="accion">
        <h5>Elite</h5>
        <a href="https://www.youtube.com/watch?v=4rTBAlB1JkQ" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1687030691/WorldFriki/ELITE_nrs3di.jpg"/></a> 
    
    </aside>
    <aside className="Aside1" category="suspenso">
        <h5>Mr. Robot</h5>
        <a href="https://www.youtube.com/watch?v=NcgfoRpWLTs" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1687030691/WorldFriki/mr.robot_fmmddv.jpg"/></a> 
    
    </aside>
    <aside className="Aside1" category="terror">
        <h5>La Maldicion De La hillhouse</h5>
        <a href="https://www.youtube.com/watch?v=mTvNeafShH0" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1687030689/WorldFriki/maldicion_p9agyi.jpg"/></a> 

    
    </aside>
    <aside className="Aside1" category="accion">
        <h5>La chica nueva</h5>
        <a href="https://www.youtube.com/watch?v=TKbLLGRcbcI" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1687030688/WorldFriki/lachicanueva_lqbimx.jpg"/></a> 

    </aside> 
    <aside className="Aside1" category="accion">
        <h5>Vagabond</h5>
        <a href="https://www.youtube.com/watch?v=tyhnEHCUtv4" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1687030686/WorldFriki/VAGABOND_et2h0y.webp"/></a> 

<Slider />
    </aside> 
    </section>
    </>
    );
};
export default Series;


