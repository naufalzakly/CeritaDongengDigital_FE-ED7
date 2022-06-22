import React from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import db from '../../../Firebase';
import {collection, onSnapshot } from "firebase/firestore"
import {useEffect,useState} from "react"

const FeedbackHome = ({img}) => {

  const [Feedback , setFeedback] = useState([]);

  useEffect(
    () =>
      onSnapshot(collection(db,"thumb_homepage"), (snapshot) =>
        setFeedback(snapshot.docs.map((doc) => ({...doc.data(), id:doc.id})))
      ), []
  );
  
  
  return (
    <Container>
      <br></br>
      <Row>
        <Col>
          <div className="Container_Card">
            <Card border="light">
              {Feedback
                .filter((feedback) => feedback.judul === "feedback")
                .map((feedback, id) => {
                  return (
                    <div key={id}>
                      <Card.Img  src={feedback.img} width="100%" height="100%" alt="pict"/>

                    </div>
                  )
              })}
                <Card.ImgOverlay>
                  <Button variant="dark" className="button_feedback">
                    Beri Ulasan
                  </Button>{" "}
                </Card.ImgOverlay>
            </Card>
          </div>
        </Col>
       </Row>
      

    </Container>
  );
};
export default FeedbackHome;
