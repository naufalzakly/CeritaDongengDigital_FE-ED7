import "./index.css";
import { Button, Card, Col } from "react-bootstrap";
import db from "../../Firestore";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";

function CardDaftarBacaan({ gambar1 }) {
  const [Thumbnail, setThumbnail] = useState([]);
  const [WhisList, setWhisList] = useState([]);
  useEffect(
    () =>
      onSnapshot(collection(db, "thumb_homepage"), (snapshot) =>
        setThumbnail(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        )
      ),

    []
  );
  useEffect(
    () =>
      onSnapshot(collection(db, "whislist"), (snapshot) =>
        setWhisList(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),

    []
  );
  return (
    <div className="card-wishlist mx-2">
      {Thumbnail.filter((thumb) => thumb.index === 4).map((thumb, id) => {
        return (
          <Col key={id}>
            <Card className="no-outline">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/cerita-dongeng-digital.appspot.com/o/kelinci_kura%2F1.png?alt=media&token=854bbf20-eeae-4a7f-becf-1a41097f9c2b"
                width="400"
                alt="pict"
              />
              <Card.Body>
                <Card.Title>{thumb.judul}</Card.Title>
                <Card.Text>Pengarang : {thumb.pengarang}</Card.Text>
              </Card.Body>
              <Card.Footer variant="danger">
                <Button variant="danger">Hapus</Button>
              </Card.Footer>
            </Card>
          </Col>
        );
      })}
    </div>
  );
}

export default CardDaftarBacaan;
