import './index.css';
import { Container, CardGroup, Col } from 'react-bootstrap';
import Footer from '../../Components/Footer';
import SectionTitle from '../../Components/SectionTitle';
import CardBacaaan from '../../Components/CardDaftarBacaan/DaftarBacaan';
import NavbarHome from '../../Components/Navbar';

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
