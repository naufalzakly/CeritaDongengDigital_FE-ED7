import { Nav, Container, Row, Col } from "react-bootstrap";
import "./style.css";
// import ButtonBergabung from "../button/bergabung/index";
import ButtonMenuProfil from "../button/menuLogIn";
import {Link} from "react-router-dom";

const NavbarHome = () => {
  // const [color, setColor] = useState(false);
  // const changeColor = () => {
  //   if (window.scrollY >= 20) {
  //     setColor(true);
  //   } else {
  //     setColor(false);
  //   }};
  // window.addEventListener("scroll", changeColor);

  return (
    <div className="header">
      <Container>
        <Row>
          <Col>
            <Nav className="justify-content-start">
              <Nav.Item>
                <Link to="/">
                  <h4>Cerita Dongeng</h4>
                </Link>
              </Nav.Item>
            </Nav>
            <br />
          </Col>

          <Col>
            <Nav className="justify-content-end">
            <ButtonMenuProfil/>

            </Nav>
          </Col>
        </Row>
      </Container>

    </div>
  );
};
export default NavbarHome;
