import SectionTitle from "../../component/sectionTitle/index";
import CardWishlist from "../../component/cardWishlist/index";
import "./index.css";
import { Container, Row, CardGroup } from "react-bootstrap";

const Wishlist = () => {
  return (
    <div className="wishlist">
      <Container>
      <SectionTitle title="Daftar Bacaan" />
        <Row className="Container_Card">
        <CardGroup>
        <CardWishlist gambar1="https://firebasestorage.googleapis.com/v0/b/cerita-dongeng-digital.appspot.com/o/thumbnail_lib_dongeng%2Fbebek_buruk_rupa%2Fbebek_buruk_rupa_thumbnail.png?alt=media&token=882c7bba-8573-40e3-8e8f-59313bc2dca3"/>
        </CardGroup>
        </Row>
      </Container>
    </div>
  );
};

export default Wishlist;