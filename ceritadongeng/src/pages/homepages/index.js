import HomeSlider from "../../component/home/slider";
import React from "react";
import FeedbackHome from "../../component/home/feedback";
import CardCeritaRilis from "../../component/home/card_cerita/cerita_rilis.js";
import CardCeritaPopuler from "../../component/home/card_cerita/cerita_populer.js";
import CardCeritaSegera from "../../component/home/card_cerita/cerita_segera.js";
import Newsletter from "../../component/newsletter/index";

const PageHome = ()=>{
    
    
    return(
        <div className="Container">
            <div className="Home">
            
                <div className="Content">
                    <div className="Sliderr">
                        <HomeSlider/>
                    </div>

                    
                    <CardCeritaRilis
                        title = {"Baru Rilis"}
                    />

                    <CardCeritaPopuler
                        title = {"Cerita Terpopuler"}
                    />

                    <CardCeritaSegera
                        title = {"Segera Rilis"}
                    />
                </div>
                <div className="feedback">
                    <FeedbackHome/>
                    {/* <Newsletter /> */}
                </div>
                <div className="news_letter">
                    <Newsletter />
                </div>
                
                
            </div>
    </div>
  );
};
export default PageHome;
