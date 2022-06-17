import HomeSlider from "../../component/home/slider";
import React from "react";
import FeedbackHome from "../../component/home/feedback";
import CardCerita from "../../component/home/card_cerita";
import Newsletter from "../../component/newsletter/index";
import SectionTitle from "../../component/sectionTitle/index";
import AboutPlatform from "../../component/home/about_platform/index";
// import {Table} from 'react-bootstrap';
import slider1 from "../../img/bebek_buruk_rupa_thumbnail.png";
import slider2 from "../../img/kancil_buaya_thumbnail.png";
import slider3 from "../../img/Kancil_dan_harimau_thumbnail.png";
import slider4 from "../../img/kelinci_kura_thumbnail.png";

import cardImg1 from "../../img/homepage_bangau_kepiting.png";
import cardImg2 from "../../img/homepage_bebek_buruk_rupa.png";
import cardImg3 from "../../img/homepage_dua_anak_ayam.png";
import cardImg4 from "../../img/homepage_kancil_buaya.png";
import cardImg5 from "../../img/homepage_kancil_harimau.png";
import cardImg6 from "../../img/homepage_kelinci_kura.png";
import cardImg7 from "../../img/homepage_singa_tikus.png";
import cardImg8 from "../../img/homepage_kera_ayam.png";

import img_feedbacck from "../../img/feedback_compressed.png";

const PageHome = () => {
  return (
    <div className="Container">
      <div className="Home">
        <div className="Content">
          <HomeSlider
            slider1={slider1}
            slider2={slider2}
            slider3={slider3}
            slider4={slider4}
          />

          <SectionTitle title={"Baru Rilis"} />
          <CardCerita
            cerita1={cardImg1}
            cerita2={cardImg2}
            cerita3={cardImg3}
          />

          <SectionTitle title={"Cerita Terpopuler"} />
          <CardCerita
            cerita1={cardImg5}
            cerita2={cardImg1}
            cerita3={cardImg4}
          />

          <SectionTitle title={"Segera Rilis"} />
          <CardCerita
            cerita1={cardImg6}
            cerita2={cardImg7}
            cerita3={cardImg8}
          />
        </div>

        <AboutPlatform  cerita1={cardImg1}/>
        <div className="feedback">
          <FeedbackHome img_feedback={img_feedbacck} />
        </div>

        <Newsletter />
      </div>
    </div>
  );
};
export default PageHome;
