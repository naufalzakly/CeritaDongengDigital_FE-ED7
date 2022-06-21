import SectionTitle from "../../component/sectionTitle/index";
import CardWishlist from "../../component/cardWishlist/index";
import "./index.css";
import { Container } from "react-bootstrap";

const Wishlist = () => {
  return (
    <div className="wishlist">
      <Container>
        <SectionTitle title="Daftar Bacaan" />
        <CardWishlist />
      </Container>
    </div>
  );
};

export default Wishlist;
