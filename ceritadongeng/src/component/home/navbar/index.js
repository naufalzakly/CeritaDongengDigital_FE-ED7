import { Nav, Container, Row, Col, Button,ButtonGroup,ButtonToolbar } from "react-bootstrap";
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
              <h4 className = "logo">Cerita Dongeng</h4>
            </Nav>
            <br />
          </Col>

          <Col>
            <Nav className="justify-content-end">
              <ButtonToolbar>
                <ButtonGroup className="me-2">
                  <Button variant="outline-dark" className="button">
                    <h5 className="text_nav">BERGABUNG</h5>
                  </Button>
                </ButtonGroup>

                <ButtonGroup className="me-2">
                  <Button variant="outline-dark" className="button">
                    <BsList size="1.5em" className="mx-2"/>
                    <BsFillPersonFill size="1.5em" />
                  </Button>
                </ButtonGroup>
              </ButtonToolbar>
            </Nav>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default NavbarHome;
