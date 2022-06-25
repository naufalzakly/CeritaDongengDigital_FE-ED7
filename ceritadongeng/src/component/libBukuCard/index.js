import { Carousel, Card, Button } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import "./index.css";
import { dataLibBukuBebek } from "../../Data/dataLibBukuBebek";

const LibBukuCard = () => {
  return (
    <div className="lib-buku-card mx-2">
      <Card>
        <div className="card-img d-flex">
          <Carousel className="carousel-size">
            {dataLibBukuBebek.map((thumb, idx) => {
              return (
                <Carousel.Item key={idx}>
                  <img
                    className="d-block"
                    src={thumb.img}
                    width="100%"
                    alt=""
                  />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
        <Card.Body className="d-flex">
          <Card.Title>
            Bebek Buruk Rupa
            <Button>
              <FaHeart size="1.5em" />
            </Button>
          </Card.Title>
        </Card.Body>
      </Card>

      <Card>
        <div className="card-img d-flex">
          <Carousel className="carousel-size">
            {dataLibBukuBebek.map((thumb, idx) => {
              return (
                <Carousel.Item key={idx}>
                  <img
                    className="d-block"
                    src={thumb.img}
                    width="100%"
                    alt=""
                  />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
        <Card.Body className="d-flex">
          <Card.Title>
            Bebek Buruk Rupa
            <Button>
              <FaHeart size="1.5em" />
            </Button>
          </Card.Title>
        </Card.Body>
      </Card>

      <Card>
        <div className="card-img d-flex">
          <Carousel className="carousel-size">
            {dataLibBukuBebek.map((thumb, idx) => {
              return (
                <Carousel.Item key={idx}>
                  <img
                    className="d-block"
                    src={thumb.img}
                    width="100%"
                    alt=""
                  />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
        <Card.Body className="d-flex">
          <Card.Title>
            Bebek Buruk Rupa
            <Button>
              <FaHeart size="1.5em" />
            </Button>
          </Card.Title>
        </Card.Body>
      </Card>

      <Card>
        <div className="card-img d-flex">
          <Carousel className="carousel-size">
            {dataLibBukuBebek.map((thumb, idx) => {
              return (
                <Carousel.Item key={idx}>
                  <img
                    className="d-block"
                    src={thumb.img}
                    width="100%"
                    alt=""
                  />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
        <Card.Body className="d-flex">
          <Card.Title>
            Bebek Buruk Rupa
            <Button>
              <FaHeart size="1.5em" />
            </Button>
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LibBukuCard;
