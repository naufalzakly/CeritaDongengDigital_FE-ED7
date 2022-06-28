import React from 'react';
import HomeSlider from '../../component/home/HomeSlider';
import AboutPlatform from '../../component/home/about_platform';
import CardCeritaRilis from '../../component/home/card_cerita/cerita_rilis.js';
import CardCeritaPopuler from '../../component/home/card_cerita/cerita_populer.js';
import CardCeritaSegera from '../../component/home/card_cerita/cerita_segera.js';
import Footer from '../../component/footer';
import NavbarHome from '../../component/navbar';
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
        <AboutPlatform />
        <Footer />
      </div>
    </div>
  );
};
export default PageHome;
