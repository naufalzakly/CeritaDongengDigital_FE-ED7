import { Carousel, Card, Button } from 'react-bootstrap';
import { BsHeart } from 'react-icons/bs';
import './index.css';
import { collection, onSnapshot, query, where, orderBy, addDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import db from '../../Firestore';
import { Link } from 'react-router-dom';
import { object } from 'prop-types';
import { useUserAuth } from '../../context';
import ModalComponent from '../ModalComponent';
import { COLLECTION_DONGENG } from '../../constants';

const CardStory = ({ item }) => {
  const { id, title, writer, link, dbaseId, idIcon } = item;
  const [cardBebek, setCardBebek] = useState([]);
  const [isShow, setIsShow] = useState(false);

  const { user } = useUserAuth();
  const Alert_login = () => {
    alert('Anda Belum Login');
  };

  const selectedNumber_4 = async () => {
    const IconCollection = collection(db, 'whislist');
    const payload = { IdIcons: idIcon, Judul: title };
    await addDoc(IconCollection, payload);
    setIsShow(true);
  };

  useEffect(() => {
    const q = query(
      collection(db, COLLECTION_DONGENG),
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
                  <Link to={link}>
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
            <button onClick={user ? selectedNumber_4 : Alert_login} className="btn-heart-kura">
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

      <ModalComponent isShow={isShow} setIsShow={setIsShow} />
    </div>
  );
};

CardStory.propTypes = {
  item: object
};
export default CardStory;
