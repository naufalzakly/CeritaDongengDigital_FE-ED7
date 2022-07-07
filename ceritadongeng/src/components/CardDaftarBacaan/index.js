import React from 'react';
import { Card, CardGroup, Col, Row, Button } from 'react-bootstrap';
import db from '../../firestore';
import { deleteDoc, collection, onSnapshot, doc, orderBy, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ModalComponent from '../ModalComponent';
import './index.css';
import { COLLECTION_WISHLIST, TANGGAL, DESC } from '../../constants';

const CardBacaaan = () => {
  const [wishlist, setWishlist] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [pesan, setPesan] = useState('');

  const deleteCard = async (id) => {
    const IconDoc = doc(db, COLLECTION_WISHLIST, id);
    await deleteDoc(IconDoc);
    setPesan('Cerita berhasil dihapus');
    setIsShow(true);
  };

  useEffect(() => {
    const q = query(collection(db, COLLECTION_WISHLIST), orderBy(TANGGAL, DESC));
    onSnapshot(q, (snapshot) => {
      setWishlist(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);

  return (
    <>
      <Row>
        <CardGroup>
          {wishlist.map((wishlist) => (
            <Col key={wishlist.id} className="wishlist-thumb">
              <Card className="mx-2 mb-4">
                <Link to={`/baca-cerita/${wishlist.dbCollection}`}>
                  <img src={wishlist.img} alt="pict" />
                </Link>
                <Card.Body>
                  <Card.Title>{wishlist.Judul}</Card.Title>
                  <Card.Text className="text-muted">Pengarang: {wishlist.pengarang}</Card.Text>
                  <Card.Text className="text-muted">Ditambahkan pada {wishlist.tanggal}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Link to={`/baca-cerita/${wishlist.dbCollection}`}>
                    <Button variant="success">Baca</Button>
                  </Link>
                  <Button className="mx-3" onClick={() => deleteCard(wishlist.id)} variant="danger">
                    Hapus
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </CardGroup>
        <ModalComponent pesan={pesan} setIsShow={setIsShow} isShow={isShow} />
      </Row>
    </>
  );
};

export default CardBacaaan;
