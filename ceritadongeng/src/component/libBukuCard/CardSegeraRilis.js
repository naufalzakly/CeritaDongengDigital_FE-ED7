import React from "react";
import { Card, CardGroup, Row } from "react-bootstrap";
import "./index.css";
import {
  collection,
  onSnapshot,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "../../Firestore";

const CardSegeraRilis = () => {
  const [cardSegeraRilis, setCardSegeraRilis] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "thumb_lib_dongeng"),
      where("rilis", "==", "segera"),
      orderBy("index")
    );
    onSnapshot(q, (snapshot) => {
      setCardSegeraRilis(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
  }, []);

  return (
    <Row className="Container_Card">
      <CardGroup>
        {cardSegeraRilis.map((thumb, idx) => {
          return (
            <div className="lib-buku-card mx-2 " key={idx}>
              <Card className="no-outline">
                <div className="card-img d-flex">
                  <img
                    className="d-block"
                    src={thumb.img}
                    width="100%"
                    alt=""
                  />
                </div>
                <Card.Body>
                  <Card.Title>{thumb.cerita}</Card.Title>
                  <Card.Text className="text-muted">
                    Pengarang: {thumb.pengarang}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </CardGroup>
    </Row>
  );
};

export default CardSegeraRilis;
