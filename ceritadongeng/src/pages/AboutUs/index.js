import NavbarHome from '../../component/navbar/index';
import { Container} from 'react-bootstrap';
import Footer from '../../component/footer/index';
import React from 'react';
import './index.css';
import SectionTitle from '../../component/sectionTitle/index';

const AboutUs = () => {
  return (
    <>
      <NavbarHome />
      <div className="about-us">
        <Container>
          <SectionTitle title="Tentang Kami" />
          <div className="about-us-col">
            <div>
              <p>
                Menurut data BPS pada tahun 2021 tingkat melek huruf di Indonesia menyentuh angka
                98,44 persen. Berdasarkan survei terhadap 80 negara, Indonesia berada pada posisi
                ke-75 dalam minat baca. Data dari UNESCO menunjukkan bahwa persentase anak yang suka
                membaca hanya 0,01%. Artinya, hanya 1 dari 1000 anak di Indonesia yang suka membaca.
              </p>

              <p>
                Karena itu kami membuat website cerita dongeng digital ini untuk meningkatkan minat
                baca sejak usia dini. Membaca cerita dongeng dapat memberikan rangsangan minat
                kesukaan anak terhadap buku dan memicu rasa ingin tahu anak. Website cerita dongeng
                digital ini akan memberikan rasa menyenangkan kepada anak dalam membaca dongeng
                karena pada website ini cerita dongeng akan disajikan secara interaktif dengan audio
              </p>
            </div>
            <div>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/cerita-dongeng-digital.appspot.com/o/logo-yabb-gojek%2Ffavicon.png?alt=media&token=6ea9b75f-85f6-40f3-8f1c-f8e77dae10e4"
                alt=""
              />
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
