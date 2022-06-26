import { Nav, Container, Row, Col } from "react-bootstrap";
import "./style.css";
 //import ButtonBergabung from "../button/bergabung/index";
import ButtonMenuProfil from "../home/button/menuProfil";
import {Link} from "react-router-dom";


const NavbarHome = () => {

  // const  [login, setLogin] = useState(false);

  return (
    <div className="header">
      <Container>
        <Row>
          <Col>
            <Nav className="justify-content-start">
              <Nav.Item>
                <Link to="/">
                  <img src="https://firebasestorage.googleapis.com/v0/b/cerita-dongeng-digital.appspot.com/o/logo-yabb-gojek%2Flogo-web.png?alt=media&token=e1f0218a-7fc3-446f-adc9-ad6758fc05c5" alt="logo"/>
                </Link>
              </Nav.Item>
            </Nav>
            <br />
          </Col>

          <Col>
            <Nav className="justify-content-end">

            {/* <ButtonBergabung /> */}
            <ButtonMenuProfil />

            </Nav>
          </Col>
        </Row>
      </Container>

    </div>
  );
};
export default NavbarHome;
