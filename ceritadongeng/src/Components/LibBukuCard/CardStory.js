import { Carousel, Card, Button } from 'react-bootstrap';
import { BsHeart } from 'react-icons/bs';
import './index.css';
import { collection, onSnapshot, query, where, orderBy } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import db from '../../Firestore';
import { Link } from 'react-router-dom';
import { object } from 'prop-types';

const CardStory = ({ item }) => {
  const { id, title, writer, link, dbaseId } = item;
  const [cardBebek, setCardBebek] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, 'thumb_lib_dongeng'),
      where('cerita', '==', dbaseId),
      orderBy('index')
    );
    onSnapshot(q, (snapshot) => {
      setCardBebek(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);

  return (
    <div className="lib-buku-card mx-2 mb-4">
      <Card className="no-outline">
        <div className="card-img d-flex">
          <Carousel className="carousel-size" data-interval="false">
            {cardBebek.map((thumb, idx) => {
              return (
                <Carousel.Item key={idx}>
                  <Link to="/BacaCerita/BebekBurukRupa">
                    <img className="d-block" src={thumb.img} width="100%" alt="" />
                  </Link>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
        <Card.Body>
          <Card.Title>
            {title}
            <button className="btn-heart">
              <BsHeart size="1.5em" color="red" />
            </button>
          </Card.Title>
          <Card.Text className="text-muted">Pengarang: {writer}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Link to={link}>
            <Button variant="success">Baca</Button>
          </Link>
        </Card.Footer>
      </Card>
    </div>
  );
};

CardStory.propTypes = {
  item: object
};
export default CardStory;
