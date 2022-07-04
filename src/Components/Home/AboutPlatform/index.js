import { Container, Row, Col } from 'react-bootstrap';
import SectionTitle from '../../SectionTitle';
import './index.css';
import { Link } from 'react-router-dom';

const AboutPlatform = () => {
  return (
    <div className="about-platform">
      <Container>
        <SectionTitle title="Selengkapnya mengenai platform kami" className="about-title" />
        <Row>
          <Col md="8">
            <p className="mx-2">
              Rendahnya minat baca anak Indonesia di tengah tingginya angka melek huruf merupakan
              latar belakang kami mengembangkan project Website OEPPAK Dongeng ini. Website OEPPAK
              Dongeng diharapkan dapat merangsang minat, kegemaran, dan rasa ingin tahu anak-anak
              terhadap kesusastraan. Website OEPPAK Dongeng diharapkan pula dapat memberikan
              perasaan menyenangkan kepada anak saat membaca karena pada website ini cerita dongeng
              disajikan secara interaktif dengan audio...
            </p>
            <div className="link-pilihan">
              <Link to="/about-us" className="mx-4">
                Lanjutkan Baca
              </Link>
              <Link to="/legal-information">Pelajari Hak Cipta</Link>
            </div>
          </Col>
          <Col md="4">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/cerita-dongeng-digital.appspot.com/o/logo-yabb-gojek%2Ffavicon.png?alt=media&token=6ea9b75f-85f6-40f3-8f1c-f8e77dae10e4"
              width="89%"
              alt="pict"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutPlatform;
