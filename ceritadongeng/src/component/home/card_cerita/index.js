import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import "./style.css";
import db from '../../../Firebase'
import {collection, onSnapshot} from "firebase/firestore"
import {useEffect,useState} from "react"

const Card_cerita = ({ title}) => {

  const [User , setUser] = useState([]);
  console.log(User);
  useEffect(
    () =>
      onSnapshot(collection(db,"thumb_homepage"), (snapshot) =>
        setUser(snapshot.docs.map((doc) => ({...doc.data(), id:doc.id})))
      ),
    []
  );

  return (
    <Container>
      <br></br>
      <h3>{title}</h3>
      <hr width={90} />
      {User
        .filter((content) => content.category === 'rilis')
        .map((content) => (
        
          <Row key={content.index} className="Container_Card">
            <CardGroup className="">
              <Col>
                <div className="Container_Card">
                  <Card border="light">
                    <img src={content.img} width="100%" alt="pict"></img>
                    <Card.ImgOverlay>
                      <br></br>
                      <br></br>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>Sinopsi</Card.Text>
                    </Card.ImgOverlay>
                  </Card>
                </div>
              </Col>
              <Col>
                <div className="Container_Card">
                  <Card border="light">
                    <img src={content.img} width={310} height={240} alt="pict"></img>
                    <Card.ImgOverlay>
                      <Card.Title>title</Card.Title>
                    </Card.ImgOverlay>
                  </Card>
                </div>
              </Col>
              <Col>
                <div className="Container_Card">
                  <Card border="light">
                    <img
                      className="card__img"
                      src={content.img}
                      width={310}
                      height={240}
                      alt="pict"
                    ></img>
                    <Card.ImgOverlay>
                      <Card.Title>title</Card.Title>
                    </Card.ImgOverlay>
                  </Card>
                </div>
              </Col>
            </CardGroup>
          </Row>
      ))}


    </Container>
  );
};
export default Card_cerita;
