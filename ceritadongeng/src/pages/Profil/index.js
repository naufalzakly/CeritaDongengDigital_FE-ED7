import TentangAkun from '../../components/Akun/TentangAkun';
import WelcomeText from '../../components/Akun/WelcomeText';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './index.css';
import { Link } from 'react-router-dom';

const Profil = () => {
  return (
    <div className="profil-section">
      <Container>
        <Row>
          <Col md="4">
            <TentangAkun />
          </Col>
          <Col md="8">
            <WelcomeText />
            <div className="edit-akun">
              <Link to="/daftar-bacaan">
                <Button variant="link">Disukai oleh Anda</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profil;
