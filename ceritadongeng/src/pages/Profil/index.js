import TentangAkun from "../../component/akun/tentangAkun/index";
import WelcomeText from "../../component/akun/welcomeText/index";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./index.css";
import Footer from "../../component/footer";
import NavbarHome from "../../component/navbar";
import { Link } from "react-router-dom";

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
                <Link to="/DaftarBacaan">
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
