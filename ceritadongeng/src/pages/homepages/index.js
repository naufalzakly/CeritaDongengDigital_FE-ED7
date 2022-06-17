import HomeSlider from "../../component/home/slider";
import React from 'react';
import NavbarHome from '../../component/home/navbar';
import FeedbackHome from "../../component/home/feedback";
import logo from '../../icon/garis.png';
import garis from '../../icon/garis.png';
import profil from '../../icon/profile.png';
import CardCerita from "../../component/home/card_cerita";



// import Newsletter from "../../component/newsletter/index";

import img_feedbacck from '../../img/feedback_compressed.png'

const PageHome = ()=>{

    return(
        <div className="Container">
            <div className="Home">
                <div className="Navbar">
                    <NavbarHome
                        logo = {logo}
                        garis = {garis}
                        profil = {profil}
                    />
                </div>
                <div className="Content">
                    <HomeSlider
                    />
                    
                    <CardCerita
                        title = {"Baru Rilis"}
                    />

                    <CardCerita
                        title = {"Cerita Terpopuler"}
                    />

                    <CardCerita
                        title = {"Segera Rilis"}
                    />
                </div>
                <div className="feedback">
                    <FeedbackHome
                        img_feedback = {img_feedbacck}
                    />
                </div>
                {/* <Newsletter /> */}
            </div>


        </div>
    )
}
export default PageHome;