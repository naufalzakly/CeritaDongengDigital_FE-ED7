import {
    Nav,
    Button,
  } from "react-bootstrap";
import { BsList, BsFillPersonFill} from "react-icons/bs";

const ButtonMenuProfil = () => {
  
    return(
        <div>
            <Nav.Item>
                <Nav.Link href="#features">
                  <Button variant="outline-dark" className="button">
                    <BsList size="1.5em" className="mx-2" />
                    <BsFillPersonFill size="1.5em" />
                  </Button>
                </Nav.Link>
              </Nav.Item>
        </div>
    )
}

export default ButtonMenuProfil;
