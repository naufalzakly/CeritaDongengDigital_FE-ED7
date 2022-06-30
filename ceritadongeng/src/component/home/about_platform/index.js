import { Container, Row, Col, Button } from 'react-bootstrap';
import SectionTitle from '../../sectionTitle/index';
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
              OEPPAK Dongeng adalah paltform untuk membaca cerita dongeng digital dengan fitur audio
              untuk memberikan rangsangan minat kesukaan anak terhadap buku dan memicu rasa ingin
              tahu anak...
            </p>
            <div className="link-pilihan">
              <Link to="/About-us" className="mx-4">
                Lanjutkan Baca
              </Link>
              <a target="_blank" href="https://www.dgip.go.id/" rel="noreferrer">
                Pelajari Hak Cipta
              </a>
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
