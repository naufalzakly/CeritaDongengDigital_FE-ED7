import './index.css';
import { Container, CardGroup, Col } from 'react-bootstrap';
import Footer from '../../components/Footer';
import SectionTitle from '../../components/SectionTitle';
import CardBacaaan from '../../components/CardDaftarBacaan';
import NavbarHome from '../../components/Navbar';

const DaftarBacaan = () => {
  return (
    <>
      <NavbarHome />
      <div className="daftar-bacaan">
        <Container>
          <SectionTitle title={'Daftar Bacaan'} />
          <CardGroup>
            <Col>
              <CardBacaaan />
            </Col>
          </CardGroup>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default DaftarBacaan;
