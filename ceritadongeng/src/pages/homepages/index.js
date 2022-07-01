import React from 'react';
import HomeSlider from '../../Component/Home/HomeSlider';
import AboutPlatform from '../../Component/Home/About_Platform';
import CardCeritaRilis from '../../Component/Home/CardCerita/cerita_rilis.js';
import CardCeritaPopuler from '../../Component/Home/CardCerita/cerita_populer.js';
import CardCeritaSegera from '../../Component/Home/CardCerita/cerita_segera.js';
import Footer from '../../Component/Footer';
import NavbarHome from '../../Component/Navbar';
import Feedback from '../../Component/Home/Ulasan/index';
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
