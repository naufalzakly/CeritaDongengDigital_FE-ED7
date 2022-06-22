import TentangAkun from "../../component/akun/tentangAkun/index";
import WelcomeText from "../../component/akun/welcomeText/index";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./index.css";

const MyAkun = () => {
  return (
    <div className="myAkun-section">
      <Container>
        <Row>
          <Col md="4">
            <TentangAkun />
          </Col>
          <Col md="8">
            <WelcomeText />
            <div className="edit-akun">
                <hr/>
                <Button variant="link">Disukai oleh Anda</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyAkun;
