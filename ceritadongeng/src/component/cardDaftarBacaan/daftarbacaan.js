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
      {Whislist.map((whislistt) => (
        <Container key={whislistt.id} className="cerita-thumb">
          <Row className="Container_Card">
            <CardGroup>
              <Col>
                <div>
                  {Thumbnail.filter((thumb) => thumb.index === 1).map((thumb, id) => {
                    return (
                      <Card key={thumb.id} border="light mx-2">
                        <Link to="/bacaCerita/KancilBuaya">
                          <div key={id}>
                            <img src={thumb.img} width={250} alt="pict" />
                          </div>
                        </Link>
                        <Card.Body>
                          <Card.Title>{thumb.judul}</Card.Title>
                          <Card.Text className="text-muted">Pengarang: {thumb.pengarang}</Card.Text>
                        </Card.Body>
                        <Button onClick={() => deleteCard(whislistt.id)} variant="danger">
                          Hapus
                        </Button>
                      </Card>
                    );
                  })}
                </div>
              </Col>
              <Col>
                <div>
                  {Thumbnail.filter((thumb) => thumb.index === 2).map((thumb, id) => {
                    return (
                      <Card key={thumb.id} border="light mx-2">
                        <Link to="/bacaCerita/KancilBuaya">
                          <div key={id}>
                            <img src={thumb.img} width={250} alt="pict" />
                          </div>
                        </Link>
                        <Card.Body>
                          <Card.Title>{thumb.judul}</Card.Title>
                          <Card.Text className="text-muted">Pengarang: {thumb.pengarang}</Card.Text>
                        </Card.Body>
                        <Button onClick={() => deleteCard(whislistt.id)} variant="danger">
                          Hapus
                        </Button>
                      </Card>
                    );
                  })}
                </div>
              </Col>
              <Col>
                <div>
                  {Thumbnail.filter((thumb) => thumb.index === 3).map((thumb, id) => {
                    return (
                      <Card key={thumb.id} border="light mx-2">
                        <Link to="/bacaCerita/KancilBuaya">
                          <div key={id}>
                            <img src={thumb.img} width={250} alt="pict" />
                          </div>
                        </Link>
                        <Card.Body>
                          <Card.Title>{thumb.judul}</Card.Title>
                          <Card.Text className="text-muted">Pengarang: {thumb.pengarang}</Card.Text>
                        </Card.Body>
                        <Button onClick={() => deleteCard(whislistt.id)} variant="danger">
                          Hapus
                        </Button>
                      </Card>
                    );
                  })}
                </div>
              </Col>
            </CardGroup>
          </Row>
        </Container>
      ))}
    </div>
  );
};
export default CardBacaaan;
