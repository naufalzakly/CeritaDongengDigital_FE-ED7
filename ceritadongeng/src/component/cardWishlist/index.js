import "./index.css";
import { Button, Card, Col} from "react-bootstrap";

const CardWishlist = () => {
  return (
    <div className="card-wishlist">
      <Col>
          <Card className="no-outline">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/cerita-dongeng-digital.appspot.com/o/thumbnail_lib_dongeng%2Fbebek_buruk_rupa%2Fbebek_buruk_rupa_thumbnail.png?alt=media&token=882c7bba-8573-40e3-8e8f-59313bc2dca3"
              width="400"
              alt="pict"/>
            <Card.Body>
              <Card.Title>Bebek Buruk Rupa</Card.Title>
              <Card.Text>Ditambahkan pada 23 Maret 2022</Card.Text>
              <Button variant="primary" className="mx-2">Baca</Button>
              <Button variant="danger">Hapus</Button>
            </Card.Body>
          </Card>
      </Col>
    </div>
  );
};

export default CardWishlist;
