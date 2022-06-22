import { Container, Row, Col, Button } from "react-bootstrap";
import SectionTitle from "../../sectionTitle/index";
import "./index.css";
import db from '../../../Firebase'
import {collection, onSnapshot } from "firebase/firestore"
import {useEffect,useState} from "react"

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
