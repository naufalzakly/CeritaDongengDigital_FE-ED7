import React from 'react';
import { Link } from 'react-router-dom';
import { BsHeart } from 'react-icons/bs';
import { Card, Button, Col } from 'react-bootstrap';
import ModalComponent from '../../ModalComponent';
import { object } from 'prop-types';
import db from '../../../firestore';
import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import { useUserAuth } from '../../../context';
import { COLLECTION_WISHLIST } from '../../../constants';

const CardCerita = ({ item }) => {
  const { id, judul, pengarang, idIcon, img, dbCollection } = item;
  const [isShow, setIsShow] = useState(false);
  const [pesan, setPesan] = useState('');

  const { user } = useUserAuth();
  const alertLogin = () => {
    setPesan('Silahkan login terlebih dahulu');
    setIsShow(true);
  };

  const todayDate = new Date();
  const date = `${todayDate.getDate()}-${todayDate.getMonth() + 1}-${todayDate.getFullYear()}`;

  const selectedNumber = async () => {
    const IconCollection = collection(db, COLLECTION_WISHLIST);
    const payload = {
      IdIcons: idIcon,
      Judul: judul,
      pengarang: pengarang,
      img: img,
      dbCollection: dbCollection,
      tanggal: date
    };
    await addDoc(IconCollection, payload);
    setPesan(`Cerita ${judul} ditambahkan ke daftar bacaan`);
    setIsShow(true);
  };

  return (
    <Col>
      <Card border="light mx-2" key={id}>
        <Link to={`/baca-cerita/${dbCollection}`}>
          <img src={img} width={250} alt="pict" />
        </Link>
        <Card.ImgOverlay>
          <button onClick={user ? selectedNumber : alertLogin} className="right">
            <BsHeart size="2em" color="red" />
          </button>
        </Card.ImgOverlay>
        <Card.Body>
          <Card.Title>{judul}</Card.Title>
          <Card.Text className="text-muted">Pengarang: {pengarang}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Link to={`/baca-cerita/${dbCollection}`}>
            <Button variant="success">Baca</Button>
          </Link>
        </Card.Footer>
      </Card>
      <ModalComponent pesan={pesan} setIsShow={setIsShow} isShow={isShow} />
    </Col>
  );
};

CardCerita.propTypes = {
  item: object
};

export default CardCerita;
