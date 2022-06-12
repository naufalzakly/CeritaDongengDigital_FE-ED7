import Home from "../../component/home/slider";
import React from 'react';
import NavbarHome from '../../component/home/navbar';
import Card_cerita from "../../component/home/card_cerita";
import FeedbackHome from "../../component/home/feedback";

import logo from '../../icon/garis.png';
import garis from '../../icon/garis.png';
import profile from '../../icon/profile.png';
import slider1 from '../../img/bebek_buruk_rupa_thumbnail.png';
import slider2 from '../../img/kancil_buaya_thumbnail.png';
import slider3 from '../../img/Kancil_dan_harimau_thumbnail.png';
import slider4 from '../../img/kelinci_kura_thumbnail.png'

import cardImg1 from '../../img/homepage_bangau_kepiting.png'
import cardImg2 from '../../img/homepage_bebek_buruk_rupa.png'
import cardImg3 from '../../img/homepage_dua_anak_ayam.png'
import cardImg4 from '../../img/homepage_bangau_kepiting.png'
import cardImg5 from '../../img/homepage_kancil_buaya.png'
import cardImg6 from '../../img/homepage_kancil_harimau.png'
import cardImg7 from '../../img/homepage_kelinci_kura.png'
import cardImg8 from '../../img/homepage_singa_tikus.png'
import cardImg9 from '../../img/homepage_kera_ayam.png'

import img_feedbacck from '../../img/FeedBack.png'

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
                    title = "Baru Rilis"
                    cerita1 = {cardImg1}
                    cerita2 = {cardImg2}
                    cerita3 = {cardImg3}
                />

                <Card_cerita
                    title = "Cerita Terpopuler"
                    cerita1 = {cardImg4}
                    cerita2 = {cardImg5}
                    cerita3 = {cardImg6}
                />

                <Card_cerita
                    title = "Segera Rilis"
                    cerita1 = {cardImg7}
                    cerita2 = {cardImg8}
                    cerita3 = {cardImg9}
                />
                <FeedbackHome
                    img_feedback = {img_feedbacck}
                />
            </div>


        </div>
    )
}
export default PageHome;