import React from 'react';
import { Card, Row, CardGroup } from 'react-bootstrap';
import SectionTitle from '../../SectionTitle';
import db from '../../../Firestore';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { useState, useEffect } from 'react';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'ulasan'), where('relevan', '==', 'ya'));
    onSnapshot(q, (snapshot) => {
      setReviews(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);

  return (
    <>
      <SectionTitle title="Reviews" />
      <Row className="Container_Card">
        <CardGroup>
          {reviews.map((review, idx) => {
            return (
              <div className="reviews mx-2 mb-3" key={idx}>
                <Card border="success">
                  <Card.Header>{review.nama}</Card.Header>
                  <Card.Body>
                    <Card.Text>{review.saran}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </CardGroup>
      </Row>
    </>
  );
};

export default Reviews;
