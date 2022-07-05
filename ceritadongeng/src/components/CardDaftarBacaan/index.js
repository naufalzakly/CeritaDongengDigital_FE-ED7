import React from 'react';
import { Card, CardGroup, Col, Container, Row, Button } from 'react-bootstrap';
import db from '../../firestore';
import { deleteDoc, collection, onSnapshot, doc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const CardBacaaan = () => {
  const [wishlist, setWishlist] = useState([]);

  const deleteCard = async (id) => {
    const IconDoc = doc(db, 'whislist', id);
    await deleteDoc(IconDoc);
    alert('Berhasil dihapus');
  };

  useEffect(
    () =>
      onSnapshot(collection(db, 'whislist'), (snapshot) =>
        setWishlist(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),

    []
  );
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
      </Row>
    </>
  );
};

export default CardBacaaan;
