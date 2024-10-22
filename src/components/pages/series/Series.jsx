import React, { useState, useEffect } from "react";
import './series.css';
import Categoria1 from "../../layouts/categorias/Categoria1";
import SliderSeries from "../../layouts/slider/SliderSeries";
import Search1 from "../../layouts/search/Search1";

export const Series = () => {
    return(
    <>
    <Search1/>
    <Categoria1 />

    <h1 className="title">SERIES</h1>
    <section className="Aside">

        <aside className="Aside1" id="suspenso">
            <h5>Stranger Things</h5>
            <a href="https://www.youtube.com/watch?v=220ClSxwhxY" target="_blank" rel="noopener noreferrer">
                <img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1687030696/WorldFriki/strangerthings1_jiue4t.webp" alt="Stranger Things"/></a>
    </aside>

    <aside className="Aside1" category="suspenso">
            <h5>The Good Doctor</h5>
            <a href="https://www.youtube.com/watch?v=xsIFtGfAJ14" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1687030696/WorldFriki/thegooddoctor_hyy6vq.jpg"/></a>
        </aside>

        <aside className="Aside1" category="accion">
        <h5>Juego De Tronos</h5>
        <a href="https://www.youtube.com/watch?v=9bwcu6rewSY" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1687030688/WorldFriki/juegodetronos_hddcbs.jpg"/></a> 
    </aside>

    <aside className="Aside1" category="suspenso">
        <h5>Pretty Little Liars</h5>
        <a href="https://www.youtube.com/watch?v=nwHvFNQG5UE" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1687030693/WorldFriki/prettylittleliars_cwx9vc.jpg"/></a> 
    </aside>

    <aside className="Aside1" category="accion">
        <h5>Peaky Blinders</h5>
        <a href="https://www.youtube.com/watch?v=H282c9q2MUU" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1687030698/WorldFriki/peakybleanders_hsppqo.webp"/></a> 
    </aside>

    <aside className="Aside1" category="suspenso">
        <h5>The End Of The F***ing World</h5>
        <a href="https://www.youtube.com/watch?v=tJqIvhprg10" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1687030696/WorldFriki/fuckingworld_tfbimu.webp"/></a> 
    </aside>

    <aside className="Aside1" category="suspenso">
        <h5>Riverdale</h5>
        <a href="https://www.youtube.com/watch?v=oTfzt6C7PYw" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1687030697/WorldFriki/riverdale_cbpi38.jpg"/></a> 
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
    </aside>

    <aside className="Aside1" category="suspenso">
            <h5>Young Royals</h5>
            <a href="https://www.youtube.com/watch?v=xsIFtGfAJ14" target="_blank "><img src="https://res.cloudinary.com/dhypxlezc/image/upload/v1729628548/uGGAoM8ojRHOXj16n6xWiccKr34_fd18kq.jpg"/></a>
        </aside>

    <SliderSeries />
    </section>
    
    </>
     );
};

export default Series;


