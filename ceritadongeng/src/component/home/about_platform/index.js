import { Container, Row, Col, Button } from "react-bootstrap";
import SectionTitle from "../../sectionTitle/index";
import "./index.css";

const AboutPlatform = ({cerita1}) => {
  return (
    <div className="about-platform">
      <Container>
      <SectionTitle title="Selengkapnya mengenai platform kami"/>
        <Row>
          <Col md="8">
            
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar magna ut nisl molestie ullamcorper vel consectetur mauris. Nunc massa odio, pulvinar non porttitor vel, molestie ac turpis. Aliquam suscipit purus vitae est tempor, a tristique lectus vehicula. </p>
            <div className="link-pilihan">
                <Button size="sm" className="mx-2" variant="light">Lanjutkan Baca </Button>
                <Button size="sm" variant="light"> Pelajari Hak Cipta</Button>
            </div>
            <Button variant="primary" >Hubungi Kami</Button>
          </Col>
          <Col md="4">
            <img src={cerita1} alt="gambar" width="50%"/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutPlatform;
