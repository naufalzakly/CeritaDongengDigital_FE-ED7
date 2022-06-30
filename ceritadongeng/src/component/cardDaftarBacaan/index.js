import "./index.css";
import { Button, Card, Col } from "react-bootstrap";

function CardDaftarBacaan({ gambar1 }) {
  return (
    <div className="card-wishlist mx-2">
      <Col>
        <Card className="no-outline">
          <img src={gambar1} width="400" alt="pict" />
          <Card.Body>
            <Card.Title>Bebek Buruk Rupa</Card.Title>
            <Card.Text>Ditambahkan pada 23 Maret 2022</Card.Text>
            <Button variant="success" className="mx-2">
              Baca
            </Button>
            <Button variant="danger">Hapus</Button>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
}

export default CardDaftarBacaan;
