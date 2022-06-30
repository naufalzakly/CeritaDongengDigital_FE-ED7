import React from "react";
import SectionTitle from "../../sectionTitle";

const TentangText = () => {
  return (
    <>
      <SectionTitle title="Tentang Kami" />
      <div className="about-us-col">
        <div>
          <p>
            Rendahnya minat baca anak Indonesia di tengah tingginya angka melek
            huruf merupakan latar belakang kami mengembangkan project Website
            OEPPAK Dongeng ini. Website OEPPAK Dongeng diharapkan dapat
            merangsang minat, kegemaran, dan rasa ingin tahu anak-anak terhadap
            kesusastraan. Website OEPPAK Dongeng diharapkan pula dapat
            memberikan perasaan menyenangkan kepada anak saat membaca karena
            pada website ini cerita dongeng disajikan secara interaktif dengan
            audio.
          </p>

          <p>
            Pembentukan kebiasaan membaca khususnya bagi anak-anak usia dini
            amat penting untuk diperhatikan, selain karena pada usia demikian
            anak berada pada tahap krusial pemberian rangsangan pendidikan,
            alasan lainnya yaitu demi persiapan menyongsong periode bonus
            demografi 2030-2040. Hal ini tentu agar target bonus demografi
            Indonesia yang berkualitas di masa depan dapat tercapai.
          </p>
        </div>
        <div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cerita-dongeng-digital.appspot.com/o/logo-yabb-gojek%2Ffavicon.png?alt=media&token=6ea9b75f-85f6-40f3-8f1c-f8e77dae10e4"
            alt="logo"
          />
        </div>
      </div>
    </>
  );
};

export default TentangText;
