import { Nav, Container, Row, Col } from "react-bootstrap";
import "./style.css";
import useState from "react-hook-use-state";
 //import ButtonBergabung from "../button/bergabung/index";
import ButtonMenuProfil from "../button/menuProfil";


const NavbarHome = () => {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 20) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  // const  [login, setLogin] = useState(false);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Container>
        <Row>
          <Col>
            <Nav className="justify-content-start">
              <Nav.Item>
                <Nav.Link href="./home">
                  <h4>Cerita Dongeng</h4>
                </Nav.Link>
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
