import TentangAkun from '../../Components/Akun/TentangAkun';
import WelcomeText from '../../Components/Akun/WelcomeText';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './index.css';
import Footer from '../../Components/Footer';
import NavbarHome from '../../Components/Navbar';
import { Link } from 'react-router-dom';

const Profil = () => {
  return (
    <>
      <NavbarHome />
      <div className="profil-section">
        <Container>
          <Row>
            <Col md="4">
              <TentangAkun />
            </Col>
            <Col md="8">
              <WelcomeText />
              <div className="edit-akun">
                <hr />
                <Link to="/daftar-bacaan">
                  <Button variant="link">Disukai oleh Anda</Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Profil;
