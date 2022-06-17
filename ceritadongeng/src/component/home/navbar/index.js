import { Nav, Container, Row, Col, Button } from "react-bootstrap";
import "./style.css";
import useState from "react-hook-use-state";
import { BsList, BsFillPersonFill } from "react-icons/bs";

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

              <Nav.Item>
                <Nav.Link href="#features">
                  <Button variant="outline-dark" className="button">
                    <h5 className="text_nav">BERGABUNG</h5>
                  </Button>
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link href="#features">
                  <Button variant="outline-dark" className="button">
                    <BsList size="1.5em" className="mx-2"/>
                    <BsFillPersonFill size="1.5em" />
                  </Button>
                </Nav.Link>
              </Nav.Item>

            </Nav>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default NavbarHome;
