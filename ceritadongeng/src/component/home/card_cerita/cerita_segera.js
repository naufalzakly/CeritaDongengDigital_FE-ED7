import React from "react";
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import "./style.css";
import db from '../../../Firestore'
import {collection, onSnapshot } from "firebase/firestore"
import {useEffect,useState} from "react"
import {Link} from "react-router-dom";

const Card_cerita_Segera = ({ title}) => {
  const [Thumbnail , setThumbnail] = useState([]);

  useEffect(
    () =>
      onSnapshot(collection(db,"thumb_homepage"), (snapshot) =>
          setThumbnail(snapshot.docs.map((doc) => ({...doc.data(), id:doc.id})))
      ), []);
      
  return (
    <Container>
      <br></br>
      <h3>{title}</h3>
      <hr width={90} />
        <Row  className="Container_Card">
          <CardGroup>

            <Col >
              <Card border="light">
                <Link to="/">
                {Thumbnail
                  .filter((thumb) => thumb.index === 5)
                  .map((thumb, id) => {
                    return (
                      <div key={id}>
                        <img src={thumb.img} width ={250} alt="pict"></img>

                      </div>
                    )
                  })}
                  </Link>
              </Card>
            </Col>

            <Col >
              <Card border="light">
              <Link to="/">
                {Thumbnail
                  .filter((thumb) => thumb.index === 6)
                  .map((thumb, id) => {
                    return (
                      <div key={id}>
                        <img src={thumb.img} width ={250} alt="pict"></img>

                      </div>
                    )
                  })}
                </Link>
              </Card>
            </Col>

            <Col >
              <Card border="light">
              <Link to="/">
                {Thumbnail
                  .filter((thumb) => thumb.index === 7)
                  .map((thumb, id) => {
                    return (
                      <div key={id}>
                        <img src={thumb.img} width ={250} alt="pict"/>

                      </div>
                    )
                  })}
                </Link>
              </Card>
            </Col>

            <Col >
              <Card border="light">
              <Link to="/">
                {Thumbnail
                  .filter((thumb) => thumb.index === 9)
                  .map((thumb, id) => {
                    return (
                      <div key={id}>
                        <img src={thumb.img} width ={250} alt="pict"></img>

                      </div>
                    )
                  })}
                </Link>
              </Card>
            </Col>


          </CardGroup>
        </Row>



    </Container>
  );
};
export default Card_cerita_Segera;