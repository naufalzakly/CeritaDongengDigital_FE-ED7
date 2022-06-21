import { Nav, Dropdown } from "react-bootstrap";
import { BsList, BsFillPersonFill } from "react-icons/bs";
import "./index.css";

const ButtonMenuProfil = () => {
  return (
    <div>
      <Nav.Item>
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic" className=" mt-3">
            <BsList /> <BsFillPersonFill/>
          </Dropdown.Toggle>

          <Dropdown.Menu className="dropdown-menu">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav.Item>
    </div>
  );
};

export default ButtonMenuProfil;
