import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {
  Carousel,
  Row,
  Col,
  Nav,
  Button,
  ButtonGroup,
  ButtonToolbar,
} from "react-bootstrap";
import "./style.css";
import db from "../../../Firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import {Link} from "react-router-dom";

const Home = () => {
  const [Slider, setSlider] = useState([]);

  useEffect(
    () =>
      onSnapshot(collection(db, "thumb_landscape"), (snapshot) =>
        setSlider(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        {Slider.filter((slider) => slider.index === 1).map((slider, id) => {
          return (
            <div key={id}>
              <img
                className="d-block w-100"
                src={slider.img}
                alt="First slide"
              />
            </div>
          );
        })}
        <Carousel.Caption>
          <Row>
            <Col>
              <Nav className="justify-content-end">
                <ButtonToolbar>
                  <ButtonGroup className="me-2">
                    <h5 className="h5_slider">BACA DONGENG</h5>
                  </ButtonGroup>
                  <ButtonGroup>
                    <Link to="/libBuku">
                    <Button variant="primary" className="rounded">
                      <AiOutlineArrowRight />
                    </Button>
                    </Link>
                  </ButtonGroup>
                </ButtonToolbar>
              </Nav>
            </Col>
          </Row>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {Slider.filter((slider) => slider.index === 2).map((slider, id) => {
          return (
            <div key={id}>
              <img
                className="d-block w-100"
                src={slider.img}
                alt="Second slide"
              />
            </div>
          );
        })}
        <Carousel.Caption>
          <Row>
            <Col>
              <Nav className="justify-content-end">
                <ButtonToolbar>
                  <ButtonGroup className="me-2">
                    <h5 className="h5_slider">BACA DONGENG</h5>
                  </ButtonGroup>
                  <ButtonGroup>
                    <Button variant="primary" className="rounded">
                      <AiOutlineArrowRight />
                    </Button>
                  </ButtonGroup>
                </ButtonToolbar>
              </Nav>
            </Col>
          </Row>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {Slider.filter((slider) => slider.index === 3).map((slider, id) => {
          return (
            <div key={id}>
              <img
                className="d-block w-100"
                src={slider.img}
                alt="Third slide"
              />
            </div>
          );
        })}
        <Carousel.Caption>
          <Row>
            <Col>
              <Nav className="justify-content-end">
                <ButtonToolbar>
                  <ButtonGroup className="me-2">
                    <h5 className="h5_slider">BACA DONGENG</h5>
                  </ButtonGroup>
                  <ButtonGroup>
                    <Button variant="primary" className="rounded">
                      <AiOutlineArrowRight />
                    </Button>
                  </ButtonGroup>
                </ButtonToolbar>
              </Nav>
            </Col>
          </Row>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {Slider.filter((slider) => slider.index === 4).map((slider, id) => {
          return (
            <div key={id}>
              <img
                className="d-block w-100"
                src={slider.img}
                alt="Fourth slide"
              />
            </div>
          );
        })}
        <Carousel.Caption>
          <Row>
            <Col>
              <Nav className="justify-content-end">
                <ButtonToolbar>
                  <ButtonGroup className="me-2">
                    <h5 className="h5_slider">BACA DONGENG</h5>
                  </ButtonGroup>
                  <ButtonGroup>
                    <Button variant="primary" className="rounded">
                      <AiOutlineArrowRight />
                    </Button>
                  </ButtonGroup>
                </ButtonToolbar>
              </Nav>
            </Col>
          </Row>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default Home;
