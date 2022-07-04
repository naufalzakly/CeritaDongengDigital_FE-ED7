import React from 'react';
import { Card, CardGroup, Col, Container, Row, Button } from 'react-bootstrap';
import db from '../../Firestore';
import { deleteDoc, collection, onSnapshot, doc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CardBacaaan = () => {
  const [Thumbnail, setThumbnail] = useState([]);
  const [Whislist, setWhislist] = useState([]);

  const deleteCard = async (id) => {
    const IconDoc = doc(db, 'whislist', id);

    await deleteDoc(IconDoc);
    alert('Berhasil dihapus');
  };

  useEffect(
    () =>
      onSnapshot(collection(db, 'thumb_homepage'), (snapshot) =>
        setThumbnail(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),

    []
  );
  useEffect(
    () =>
      onSnapshot(collection(db, 'whislist'), (snapshot) =>
        setWhislist(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),

    []
  );
  return (
    <div>
      <Container className="cerita-thumb">
        <Row className="Container_Card">
          <CardGroup>
            {Whislist.filter((whislistt) => whislistt.IdIcons === 1).map((whislistt) => (
              <Col key={whislistt.id}>
                <Card border="light mx-2">
                  <Link to="/baca-cerita/kancil-buaya">
                    <div>
                      <img src={whislistt.img} width={250} alt="pict" />
                    </div>
                  </Link>
                  <Card.Body>
                    <Card.Title>{whislistt.judul}</Card.Title>
                    <Card.Text className="text-muted">Pengarang: {whislistt.pengarang}</Card.Text>
                  </Card.Body>
                  <Button onClick={() => deleteCard(whislistt.id)} variant="danger">
                    Hapus
                  </Button>
                </Card>
              </Col>
            ))}
            {Whislist.filter((whislistt) => whislistt.IdIcons === 2).map((whislistt) => (
              <Col key={whislistt.id}>
                <Card border="light mx-2">
                  <Link to="/baca-cerita/kancil-harimau">
                    <div>
                      <img src={whislistt.img} width={250} alt="pict" />
                    </div>
                  </Link>
                  <Card.Body>
                    <Card.Title>{whislistt.judul}</Card.Title>
                    <Card.Text className="text-muted">Pengarang: {whislistt.pengarang}</Card.Text>
                  </Card.Body>
                  <Button onClick={() => deleteCard(whislistt.id)} variant="danger">
                    Hapus
                  </Button>
                </Card>
              </Col>
            ))}
            {Whislist.filter((whislistt) => whislistt.IdIcons === 3).map((whislistt) => (
              <Col key={whislistt.id}>
                <Card border="light mx-2">
                  <Link to="/baca-cerita/bebek-buruk-rupa">
                    <div>
                      <img src={whislistt.img} width={250} alt="pict" />
                    </div>
                  </Link>
                  <Card.Body>
                    <Card.Title>{whislistt.judul}</Card.Title>
                    <Card.Text className="text-muted">Pengarang: {whislistt.pengarang}</Card.Text>
                  </Card.Body>
                  <Button onClick={() => deleteCard(whislistt.id)} variant="danger">
                    Hapus
                  </Button>
                </Card>
              </Col>
            ))}
            {Whislist.filter((whislistt) => whislistt.IdIcons === 4).map((whislistt) => (
              <Col key={whislistt.id}>
                <Card border="light mx-2">
                  <Link to="/baca-cerita/kelinci-kura">
                    <div>
                      <img src={whislistt.img} width={250} alt="pict" />
                    </div>
                  </Link>
                  <Card.Body>
                    <Card.Title>{whislistt.judul}</Card.Title>
                    <Card.Text className="text-muted">Pengarang: {whislistt.pengarang}</Card.Text>
                  </Card.Body>
                  <Button onClick={() => deleteCard(whislistt.id)} variant="danger">
                    Hapus
                  </Button>
                </Card>
              </Col>
            ))}
          </CardGroup>
        </Row>
      </Container>
    </div>
  );
};
export default CardBacaaan;
