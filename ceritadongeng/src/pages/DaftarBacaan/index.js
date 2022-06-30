import SectionTitle from '../../component/sectionTitle/index';
import card_bebek from '../../component/cardDaftarBacaan/card_bebek';
import './index.css';
import { Container, Row, CardGroup } from 'react-bootstrap';
import Footer from '../../component/footer';
import NavbarHome from '../../component/navbar';

const DaftarBacaan = () => {
  return (
    <>
      <NavbarHome />
      <div className="wishlist">
        <Container>
          <SectionTitle title="Daftar Bacaan" />
          <Row className="Container_Card">
            <CardGroup>
              <card_bebek />
            </CardGroup>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default DaftarBacaan;
