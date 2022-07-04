import React from 'react';
import HomeSlider from '../../Components/Home/HomeSlider';
import AboutPlatform from '../../Components/Home/AboutPlatform';
import CardCeritaRilis from '../../Components/Home/CardCerita/CeritaRilis';
import CardCeritaPopuler from '../../Components/Home/CardCerita/CeritaPopuler';
import CardCeritaSegera from '../../Components/Home/CardCerita/CeritaSegera';
import Footer from '../../Components/Footer';
import NavbarHome from '../../Components/Navbar';
import Feedback from '../../Components/Home/Ulasan';
import './index.css';

const PageHome = () => {
  return (
    <div className="Container">
      <div className="Home">
        <NavbarHome />
        <div className="Content">
          <HomeSlider />

          <CardCeritaRilis title={'Baru Rilis'} />

          <CardCeritaPopuler title={'Cerita Terpopuler'} />

          <CardCeritaSegera title={'Segera Rilis'} />
        </div>
        <Feedback />
        <AboutPlatform />
        <Footer />
      </div>
    </div>
  );
};
export default PageHome;
