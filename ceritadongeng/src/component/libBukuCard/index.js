import { Carousel, Card, Button } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import "./index.css";

const LibBukuCard = ({ cerita1, cerita2, cerita3, judul }) => {
  return (
    <div className="lib-buku-card mx-2">
      <Card>
        <div className="card-img d-flex">
          <Carousel className="carousel-size">
            <Carousel.Item>
              <img
                className="d-block"
                src={cerita1}
                width="100%"
                alt="First slide"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img className="d-block" src={cerita2} alt="Second slide" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="d-block" src={cerita3} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </div>
        <Card.Body className="d-flex">
          <Card.Title>
            {judul}
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
