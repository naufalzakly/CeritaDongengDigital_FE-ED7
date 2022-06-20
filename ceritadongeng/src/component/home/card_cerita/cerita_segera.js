import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import "./style.css";
import db from '../../../Firebase'
import {collection, onSnapshot } from "firebase/firestore"
import {useEffect,useState} from "react"

const Card_cerita_Segera = ({ title}) => {
  const [Thumbnail , setThumbnail] = useState([]);

  useEffect(
    () =>
      onSnapshot(collection(db,"thumb_homepage"), (snapshot) =>
          setThumbnail(snapshot.docs.map((doc) => ({...doc.data(), id:doc.id})))
      ),
      

    []
  );
  return (
    <Container>
      <br></br>
      <h3>{title}</h3>
      <hr width={90} />
        <Row  className="Container_Card">
          <CardGroup className="">

            <Col >
              <Card border="light">
                {Thumbnail
                  .filter((thumb) => thumb.index === 5)
                  .map((thumb, id) => {
                    return (
                      <div key={id}>
                        <img src={thumb.img} width ={355} alt="pict"></img>

                      </div>
                    )
                  })}
              </Card>
            </Col>

            <Col >
              <Card border="light">
                {Thumbnail
                  .filter((thumb) => thumb.index === 6)
                  .map((thumb, id) => {
                    return (
                      <div key={id}>
                        <img src={thumb.img} width ={355} alt="pict"></img>

                      </div>
                    )
                  })}
              </Card>
            </Col>

            <Col >
              <Card border="light">
                {Thumbnail
                  .filter((thumb) => thumb.index === 7)
                  .map((thumb, id) => {
                    return (
                      <div key={id}>
                        <img src={thumb.img} width ={355} alt="pict"></img>

                      </div>
                    )
                  })}
              </Card>
            </Col>

          </CardGroup>
        </Row>



    </Container>
  );
};
export default Card_cerita_Segera;