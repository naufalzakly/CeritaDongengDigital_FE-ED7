import HomeSlider from "../../component/home/slider";
import React from 'react';
import NavbarHome from '../../component/home/navbar';
import FeedbackHome from "../../component/home/feedback";
import logo from '../../icon/garis.png';
import garis from '../../icon/garis.png';
import profil from '../../icon/profile.png';
import CardCerita from "../../component/home/card_cerita";

import db from '../../../Firebase'
import {collection, onSnapshot} from "firebase/firestore"
import {useEffect,useState} from "react"

import Newsletter from "../../component/newsletter/index";

import img_feedbacck from '../../img/feedback_compressed.png'

const PageHome = ()=>{
    const [User , setUser] = useState([]);
    console.log(User);
    useEffect(
      () =>
        onSnapshot(collection(db,"kancil_buaya"), (snapshot) =>
          setUser(snapshot.docs.map((doc) => ({...doc.data(), id:doc.id})))
        ),
      []
    );
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
                        
                        slider1 = {slider1}
                        slider2 = {slider2}
                        slider3 = {slider3}
                        slider4 = {slider4}
                    />
                    
                    <CardCerita
                        title = {"Baru Rilis"}
                        cerita1 = {cardImg1}
                        cerita2 = {cardImg2}
                        cerita3 = {cardImg3}
                    />

                    <CardCerita
                        title = {"Cerita Terpopuler"}
                        cerita1 = {cardImg5}
                        cerita2 = {cardImg1}
                        cerita3 = {cardImg4}
                    />

                    <CardCerita
                        title = {"Segera Rilis"}
                        cerita1 = {cardImg6}
                        cerita2 = {cardImg7}
                        cerita3 = {cardImg8}
                    />
                </div>
                <div className="feedback">
                    <FeedbackHome
                        img_feedback = {img_feedbacck}
                    />
                </div>

                <ReadDataCerita/>

                <Newsletter />
            </div>


        </div>
    )
}
export default PageHome;