import React from 'react';
import HomeSlider from '../../components/Home/HomeSlider';
import AboutPlatform from '../../components/Home/AboutPlatform';
import CardCeritaRilis from '../../components/Home/CardCerita/CeritaRilis';
import CardCeritaPopuler from '../../components/Home/CardCerita/CeritaPopuler';
import CardCeritaSegera from '../../components/Home/CardCerita/CeritaSegera';
import Footer from '../../components/Footer';
import NavbarHome from '../../components/Navbar';
import Feedback from '../../components/Home/Ulasan';
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
