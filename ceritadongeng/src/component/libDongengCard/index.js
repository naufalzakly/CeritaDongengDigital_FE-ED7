import { Carousel, Card, Button } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import "./index.css";

const LibDongengCard = ({ cerita1, cerita2, cerita3 }) => {
  return (
    <div className="lib-dongeng-card">
      <Card className="my-card">
        <div className="card-img d-flex">
          <Carousel className="carousel-size">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={cerita1}
                width="100%"
                alt="First slide"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img className="d-block w-100" src={cerita2} alt="Second slide" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="d-block w-100" src={cerita3} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </div>
        <Card.Body clasName="d-flex">
          <Card.Title>Kancil dan Buaya <Button><FaHeart size="1.5em" /></Button></Card.Title>
         
        </Card.Body>
      </Card>
    </div>
  );
};

export default LibDongengCard;
