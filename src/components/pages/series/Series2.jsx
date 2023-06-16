import React, { useState, useEffect } from "react";
import "./series.css";
import { Header } from "../../layouts/header/Header";
import { Categoria } from "../../layouts/categorias/Categoria";

export const Series2 = () => {
    return(
    <>
    
    <Header />
    <Categoria />

    <h1 className="title">SERIES</h1>
    <section className="Aside">
        <aside className="Aside1" category="suspenso">
            <h5>Palpito</h5>
            <a href="https://www.youtube.com/watch?v=YITf1X6hNls" target="_blank "><img src="img/palpito.jpg"/></a>
    </aside>
    <aside className="Aside1" category="romance">
        <h5>Propuesta Laboral</h5>
        <a href="https://www.youtube.com/watch?v=Ed5mtVeLHLI" target="_blank "><img src="img/propuestalaboral.jpg"/></a>
{/* <!-- <h5>Sipnosis</h5>
<p>Un cirujano joven y autista que padece el síndrome del sabio empieza a trabajar en un hospital prestigioso.
Allá tendrá que vencer el escepticismo con el que sus colegas lo reciben.</p><br>
<li>Cantidad de temporadas: 5</li>  --> */}
    </aside>
    <aside className="Aside1" category="terror">
    <h5>Estamos Muertos</h5>
    <a href="https://www.youtube.com/watch?v=62jVLZ4JfjM" target="_blank "><img src="img/muertos.jpg"/></a> 

{/* <!-- <h5>Sipnosis</h5>
<p>Dos familias poderosas, reyes y reinas, caballeros y renegados, hombres falsos y honestos, haciendo
parte de un juego mortal por el control de los Siete Reinados de Westeros y por sentarse en el trono
más alto. Martin es el co productor ejecutivo y uno de los escritores de la serie que fue filmada
en el Norte de Irlanda y Malta.</p><br>
<li>Cantidad de temporadas: 8</li> --> */}
</aside>
<aside className="Aside1" category="romance">
    <h5>Anne With An E</h5>
    <a href="https://www.youtube.com/watch?v=S5qJXYNNINo" target="_blank "><img src="img/anne.jpg"/></a> 
   
{/* <!-- <h5>Sipnosis</h5> -->
<!-- <p>Han pasado tres años desde que Alison quien era la reina del grupo se desapareció. Spencer, Aria, Hanna y Emily
continúan sus vidas aunque se han apartado. Ahora en la secundaria, cada chica está enfrentando diferentes retos
cuando mensajes de texto anónimos de "A" amenazan con exponer todos sus secretos. ¿Quién es "A" y cómo sabe tanto?.
Basada en la series de novelas de Sara Shepard.</p><br>
<li>Último episodio: 27 de junio de 2017</li>    
<li>Cantidad de temporadas: 7</li>
<li>Duración: 41-80 minutos</li> --> */}
</aside>
<aside clasnamesname="Aside1" category="romance">
    <h5>Hotel Del Luna</h5>
    <a href="https://www.youtube.com/watch?v=v0-wlgkg23Y" target="_blank "><img src="img/hotel.jpg"/></a> 

{/* <!-- <h5>Sipnosis</h5> -->
<!-- <p>Han pasado tres años desde que Alison quien era la reina del grupo se desapareció. Spencer, Aria, Hanna y Emily
continúan sus vidas aunque se han apartado. Ahora en la secundaria, cada chica está enfrentando diferentes retos
cuando mensajes de texto anónimos de "A" amenazan con exponer todos sus secretos. ¿Quién es "A" y cómo sabe tanto?.
Basada en la series de novelas de Sara Shepard.</p><br>
<li>Último episodio: 27 de junio de 2017</li>    
<li>Cantidad de temporadas: 7</li>
<li>Duración: 41-80 minutos</li> --> */}
</aside>
<aside class="Aside1" category="terror">
    <h5>Dulce Hogar</h5>
    <a href="https://www.youtube.com/watch?v=3dayGclG6Yo" target="_blank "><img src="img/home.jpg"/></a> 

{/* <!-- <h5>Sipnosis</h5>
<p>Han pasado tres años desde que Alison quien era la reina del grupo se desapareció. Spencer, Aria, Hanna y Emily
continúan sus vidas aunque se han apartado. Ahora en la secundaria, cada chica está enfrentando diferentes retos
cuando mensajes de texto anónimos de "A" amenazan con exponer todos sus secretos. ¿Quién es "A" y cómo sabe tanto?.
Basada en la series de novelas de Sara Shepard.</p><br>
<li>Último episodio: 27 de junio de 2017</li>    
<li>Cantidad de temporadas: 7</li>
<li>Duración: 41-80 minutos</li> --> */}
</aside>
<aside class="Aside1" category="suspenso">
    <h5>Sweet Tooth</h5>
    <a href="https://www.youtube.com/watch?v=0jFtt5Fe5CM" target="_blank "><img src="img/sweet.jpg"/></a> 
 
{/* <!-- <h5>Sipnosis</h5>
<p>Han pasado tres años desde que Alison quien era la reina del grupo se desapareció. Spencer, Aria, Hanna y Emily
continúan sus vidas aunque se han apartado. Ahora en la secundaria, cada chica está enfrentando diferentes retos
cuando mensajes de texto anónimos de "A" amenazan con exponer todos sus secretos. ¿Quién es "A" y cómo sabe tanto?.
Basada en la series de novelas de Sara Shepard.</p><br>
<li>Último episodio: 27 de junio de 2017</li>    
<li>Cantidad de temporadas: 7</li>
<li>Duración: 41-80 minutos</li> --> */}
</aside>
<aside class="Aside1" category="accion">
    <h5>The Boys</h5>
    <a href="https://www.youtube.com/watch?v=GXM7SRdos2A" target="_blank "><img src="img/boys.jpg"/></a> 
 

</aside>
<aside class="Aside1" category="suspenso">
    <h5>Atypical</h5>
    <a href="https://www.youtube.com/watch?v=aSqWJdx_sqQ" target="_blank "><img src="img/atypical.jpg"/></a> 


</aside>
<aside class="Aside1" category="suspenso">
    <h5>The 100</h5>
    <a href="https://www.youtube.com/watch?v=2NUnsXkcX4E" target="_blank "><img src="img/100.jpg"/></a> 


</aside>
<aside class="Aside1" category="suspenso">
    <h5>You</h5>
    <a href="https://www.youtube.com/watch?v=nqSQUrlnB9s" target="_blank "><img src="img/you.jpg"/></a> 


</aside>
<aside class="Aside1" category="accion">
    <h5>The Witcher</h5>
    <a href="https://www.youtube.com/watch?v=ETY44yszyNc" target="_blank "><img src="img/witcher.jpg"/></a> 


</aside>
<aside class="Aside1" category="suspenso">
    <h5>Dark</h5>
    <a href="https://www.youtube.com/watch?v=IJ_AZCvCacw" target="_blank "><img src="img/dark.jpg"/></a> 

</aside>
<aside class="Aside1" category="suspenso">
    <h5>Lucifer</h5>
    <a href="https://www.youtube.com/watch?v=X4bF_quwNtw" target="_blank "><img src="img/lucifer.jpg"/></a> 


</aside>
<aside class="Aside1" category="romance">
    <h5>Heartstopper</h5>
    <a href="https://www.youtube.com/watch?v=YtJ9uwqY1M4" target="_blank "><img src="img/Heartstopper.jpg"/></a> 

</aside> 
<aside class="Aside1" category="accion">
    <h5>The Umbrella Academy</h5>
    <a href="https://www.youtube.com/watch?v=KHucKOK-Vik" target="_blank "><img src="img/umbrella.jpg"/></a> 

</aside> 
<ul class="menu">
    <li>
      <a href="series.html">1</a>
    </li>
    <li>
      <a href="series2.html">2</a>
    </li>
     {/* <!-- <li>
      <a href="#slide3">3</a>
    </li> --> */}
  </ul>
</section>
</>
);
};