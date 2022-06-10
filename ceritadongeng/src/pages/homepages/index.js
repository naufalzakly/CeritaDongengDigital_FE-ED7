import Home from "../../component/home/slider";
import React from 'react';
import NavbarHome from '../../component/home/navbar';

import logo from '../../icon/garis.png';
import garis from '../../icon/garis.png';
import profile from '../../icon/profile.png';
import slider1 from '../../img/bebek_buruk_rupa_thumbnail.png';
import slider2 from '../../img/kancil_buaya_thumbnail.png';
import slider3 from '../../img/Kancil_dan_harimau_thumbnail.png';
import slider4 from '../../img/kelinci_kura_thumbnail.png'

const PageHome = ()=>{
    return(
        <div className="Container">
            <div className="Home">
                <NavbarHome
                    logo = {logo}
                    garis = {garis}
                    profil = {profile}
                />
                <Home
                    slider1 = {slider1}
                    slider2 = {slider2}
                    slider3 = {slider3}
                    slider4 = {slider4}
                    
                />
            </div>


        </div>
    )
}
export default PageHome;