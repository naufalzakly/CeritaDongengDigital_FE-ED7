import React from 'react';
import { Carousel, Card, Button } from 'react-bootstrap';
import { BsHeart } from 'react-icons/bs';
import './index.css';
import { collection, onSnapshot, query, where, orderBy, addDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import db from '../../firestore';
import { Link } from 'react-router-dom';
import { object } from 'prop-types';
import { useUserAuth } from '../../context';
import ModalComponent from '../ModalComponent';
import { COLLECTION_DONGENG, COLLECTION_WISHLIST, CERITA, INDEX } from '../../constants';

const CardStory = ({ item }) => {
  const { title, writer, dbaseId, idIcon, img, dbCollection } = item;
  const [cardStory, setCardStory] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [pesan, setPesan] = useState('');

  const { user } = useUserAuth();
  const alertLogin = () => {
    setPesan('Silahkan login terlebih dahulu');
    setIsShow(true);
  };

  const selectedNumber = async () => {
    const IconCollection = collection(db, COLLECTION_WISHLIST);
    const payload = {
      IdIcons: idIcon,
      Judul: title,
      pengarang: writer,
      img: img,
      dbCollection: dbCollection,
      tanggal: date
    };
    await addDoc(IconCollection, payload);
    setPesan(`Cerita ${title} ditambahkan ke daftar bacaan`);
    setIsShow(true);
  };

  const todayDate = new Date();
  const date = `${todayDate.getDate()}-${todayDate.getMonth() + 1}-${todayDate.getFullYear()}`;

  useEffect(() => {
    const q = query(
      collection(db, COLLECTION_DONGENG),
      where(CERITA, '==', dbaseId),
      orderBy(INDEX)
    );
    onSnapshot(q, (snapshot) => {
      setCardStory(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);

  return (
    <div className="lib-buku-card mx-2 mb-4">
      <Card className="no-outline">
        <div className="card-img d-flex">
          <Carousel className="carousel-size" data-interval="false">
            {cardStory.map((thumb, idx) => {
              return (
                <Carousel.Item key={idx}>
                  <Link to={`/baca-cerita/${dbCollection}`}>
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
            <button onClick={user ? selectedNumber : alertLogin} className="btn-heart-kura">
              <BsHeart size="1.5em" color="red" />
            </button>
          </Card.Title>
          <Card.Text className="text-muted">Pengarang: {writer}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Link to={`/baca-cerita/${dbCollection}`}>
            <Button variant="success">Baca</Button>
          </Link>
        </Card.Footer>
      </Card>

      <ModalComponent isShow={isShow} setIsShow={setIsShow} pesan={pesan} />
    </div>
  );
};

CardStory.propTypes = {
  item: object
};
export default CardStory;
