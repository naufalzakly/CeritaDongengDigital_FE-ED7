import React from "react";
import { Card, CardGroup, Col, Container, Row, Button } from "react-bootstrap";
import "./style.css";
import db from "../../../Firestore";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../../sectionTitle";
import { BsHeart } from "react-icons/bs";
import { useUserAuth } from "../../../context/index";

const Card_cerita_Rilis = ({ title }) => {
  const [Thumbnail, setThumbnail] = useState([]);
  const { user } = useUserAuth();
  const selectedNumber_1 = async () => {
    const IconCollection = collection(db, "whislist");
    const payload = { IdIcons: 1, Judul: "Kancil dan Buaya" };
    await addDoc(IconCollection, payload);
    alert("Berhasil ditambahkan");
  };
  const selectedNumber_2 = async () => {
    const IconCollection = collection(db, "whislist");
    const payload = { IdIcons: 2, Judul: "Kancil dan Harimau" };
    await addDoc(IconCollection, payload);
    alert("Berhasil ditambahkan");
  };
  const selectedNumber_3 = async () => {
    const IconCollection = collection(db, "whislist");
    const payload = { IdIcons: 3, Judul: "Bebek Buruk Rupa" };
    await addDoc(IconCollection, payload);
    alert("Berhasil ditambahkan");
  };
  const selectedNumber_4 = async () => {
    const IconCollection = collection(db, "whislist");
    const payload = { IdIcons: 4, Judul: "Kelinci dan Kura Kura" };
    await addDoc(IconCollection, payload);
    alert("Berhasil ditambahkan");
  };

  useEffect(
    () =>
      onSnapshot(collection(db, "thumb_homepage"), (snapshot) =>
        setThumbnail(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        )
      ),

    []
  );

  return (
    <Container className="cerita-thumb">
      <SectionTitle title={title} />
      <Row className="Container_Card">
        <CardGroup>
          <Col>
            <Card border="light mx-2">
              <Link to="/BacaCerita/BebekBurukRupa">
                {Thumbnail.filter((thumb) => thumb.index === 3).map(
                  (thumb, id) => {
                    return (
                      <div key={id}>
                        <img src={thumb.img} width={250} alt="pict"></img>
                      </div>
                    );
                  }
                )}
              </Link>
              <Card.ImgOverlay>
                <button
                  onClick={user ? selectedNumber_3 : alert("Anda Belum Login")}
                  className="right"
                >
                  <BsHeart size="2em" color="red" />
                </button>
              </Card.ImgOverlay>
              <Card.Body>
                <Card.Title>Bebek Buruk Rupa</Card.Title>
                <Card.Text className="text-muted">
                  Pengarang: Hans Christian Andersen
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Link to="/BacaCerita/BebekBurukRupa">
                  <Button variant="success">Baca</Button>
                </Link>
              </Card.Footer>
            </Card>
          </Col>

          <Col>
            <Card border="light mx-2">
              <Link to="/bacaCerita/KelinciKura">
                {Thumbnail.filter((thumb) => thumb.index === 4).map(
                  (thumb, id) => {
                    return (
                      <div key={id}>
                        <img src={thumb.img} width={250} alt="pict"></img>
                      </div>
                    );
                  }
                )}
              </Link>
              <Card.ImgOverlay>
                <button onClick={selectedNumber_4} className="right">
                  <BsHeart size="2em" color="red" />
                </button>
              </Card.ImgOverlay>
              <Card.Body>
                <Card.Title>Kelinci dan Kura Kura</Card.Title>
                <Card.Text className="text-muted">Pengarang: Aesop</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Link to="/BacaCerita/KelinciKura">
                  <Button variant="success">Baca</Button>
                </Link>
              </Card.Footer>
            </Card>
          </Col>

          <Col>
            <Card border="light mx-2">
              <Link to="/BacaCerita/KancilHarimau">
                {Thumbnail.filter((thumb) => thumb.index === 2).map(
                  (thumb, id) => {
                    return (
                      <div key={id}>
                        <img src={thumb.img} width={250} alt="pict"></img>
                      </div>
                    );
                  }
                )}
              </Link>
              <Card.ImgOverlay>
                <button onClick={selectedNumber_2} className="right">
                  <BsHeart size="2em" color="red" />
                </button>
              </Card.ImgOverlay>
              <Card.Body>
                <Card.Title>Kancil dan Harimau</Card.Title>
                <Card.Text className="text-muted">
                  Pengarang: Dhanny Larito
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Link to="/BacaCerita/KancilHarimau">
                  <Button variant="success">Baca</Button>
                </Link>
              </Card.Footer>
            </Card>
          </Col>

          <Col>
            <Card border="light mx-2">
              <Link to="/bacaCerita/KancilBuaya">
                {Thumbnail.filter((thumb) => thumb.index === 1).map(
                  (thumb, id) => {
                    return (
                      <div key={id}>
                        <img src={thumb.img} width={250} alt="pict"></img>
                      </div>
                    );
                  }
                )}
              </Link>
              <Card.ImgOverlay>
                <button onClick={selectedNumber_1} className="right">
                  <BsHeart size="2em" color="red" />
                </button>
              </Card.ImgOverlay>
              <Card.Body>
                <Card.Title>Kancil dan Buaya</Card.Title>
                <Card.Text className="text-muted">
                  Pengarang: Kathy Morris John Morris
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Link to="/BacaCerita/KancilBuaya">
                  <Button variant="success">Baca</Button>
                </Link>
              </Card.Footer>
            </Card>
          </Col>
        </CardGroup>
      </Row>
    </Container>
  );
};
export default Card_cerita_Rilis;
