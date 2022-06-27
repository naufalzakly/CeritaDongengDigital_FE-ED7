import { Container, Row, Col, Button } from "react-bootstrap";
import SectionTitle from "../../sectionTitle/index";
import "./index.css";
import db from '../../../Firestore';
import {collection, onSnapshot } from "firebase/firestore";
import {useEffect,useState} from "react";
import {Link} from "react-router-dom";

const AboutPlatform = () => {
  const [Platform , setPlatform] = useState([]);

  useEffect(
    () =>
      onSnapshot(collection(db,"thumb_homepage"), (snapshot) =>
        setPlatform(snapshot.docs.map((doc) => ({...doc.data(), id:doc.id})))
      ),
      

    []
  );
  return (
    <div className="about-platform">
      <Container>
      <SectionTitle title="Selengkapnya mengenai platform kami" className="about-title"/>
        <Row>
          <Col md="8">
            
            <p classname="mx-2">OEPPAK Dongeng adalah paltform untuk membaca cerita dongeng digital dilengkapi dengan audio untuk memberikan rangsangan minat kesukaan anak terhadap buku dan memicu rasa ingin tahu anak...</p>
            <div className="link-pilihan">
                <Link to="" > <Button size="sm" className="mx-2" variant="light">Lanjutkan Baca </Button> </Link>
                <a target="_blank"  href="https://www.dgip.go.id/" rel="noreferrer">Pelajari Hak Cipta</a>
            </div>
            <Button variant="primary" >Hubungi Kami</Button>
          </Col>
          <Col md="4">
            <div>
            {Platform
                  .filter((platform) => platform.index === 1)
                  .map((platform, id) => {
                    return (
                      <div key={id}>
                        <img src={platform.img}width="89%"  alt="pict"></img>

                      </div>
                    )
                  })}
            </div>

          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutPlatform;
