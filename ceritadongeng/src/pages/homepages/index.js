import HomeSlider from "../../component/home/HomeSlider";
import React from "react";
import AboutPlatform from "../../component/home/about_platform";
import CardCeritaRilis from "../../component/home/card_cerita/cerita_rilis.js";
import CardCeritaPopuler from "../../component/home/card_cerita/cerita_populer.js";
import CardCeritaSegera from "../../component/home/card_cerita/cerita_segera.js";
import Footer from "../../component/footer";
import NavbarHome from "../../component/home/navbar";
const PageHome = () => {
  return (
    <div className="Container">
      <div className="Home">
        <div>
          <NavbarHome />
        </div>
        <div className="Content">
          
          <HomeSlider />

          <CardCeritaRilis title={"Baru Rilis"} />

          <CardCeritaPopuler title={"Cerita Terpopuler"} />

          <CardCeritaSegera title={"Segera Rilis"} />
        </div>
        <div className="About_platform">
          <AboutPlatform />
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    </div>
  );
};
export default PageHome;
