import Home from "../../component/home/slider";
import React from 'react';
import NavbarHome from '../../component/home/navbar';
import Card_cerita from "../../component/home/card_cerita";
import {Table} from 'react-bootstrap'

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
                
                <Card_cerita
                    title = {"Baru Rilis"}
                    cerita1 = {slider1}
                    cerita2 = {slider2}
                    cerita3 = {slider3}
                />

                <Card_cerita
                    title = {"Cerita Terpopuler"}
                    cerita1 = {slider2}
                    cerita2 = {slider3}
                    cerita3 = {slider1}
                />

                <Card_cerita
                    title = {"Segera Rilis"}
                    cerita1 = {slider2}
                    cerita2 = {slider1}
                    cerita3 = {slider3}
                />
            </div>


        </div>
    )
}
export default PageHome;