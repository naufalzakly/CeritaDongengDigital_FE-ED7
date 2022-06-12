import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import "./style.css";

const CardCerita = ({ cerita1, cerita2, cerita3, title }) => {
  return (
    <Container>
      <br></br>
      <h3>{title}</h3>
      <hr width={90} />
      <Row className="Container_Card">
        <CardGroup>
          <Col>
            <div className="Container_Card">
              <Card border="light">
                <img src={cerita1} width={210} height={240} alt=""></img>
                <Card.ImgOverlay>
                  <br></br>
                  <br></br>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>Sinopsis</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </div>
          </Col>
          <Col>
            <div className="Container_Card">
              <Card border="light">
                <img src={cerita2} width={210} height={240} alt=""></img>
                <Card.ImgOverlay>
                  <Card.Title>title</Card.Title>
                  <Card.Text>Sinopsis</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </div>
          </Col>
          <Col>
            <div className="Container_Card">
              <Card border="light">
                <img
                  className="card__img"
                  src={cerita3}
                  width={210}
                  height={240}
                  alt=""
                ></img>
                <Card.ImgOverlay>
                  <Card.Title>title</Card.Title>
                  <Card.Text>Sinopsis</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </div>
          </Col>
        </CardGroup>
      </Row>
    </Container>
  );
};
export default CardCerita;
