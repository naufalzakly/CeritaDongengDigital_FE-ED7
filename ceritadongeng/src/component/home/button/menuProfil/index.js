import { Nav, Dropdown } from "react-bootstrap";
import { BsList, BsFillPersonFill } from "react-icons/bs";
import "./index.css";
import { Link } from "react-router-dom";

const ButtonMenuProfil = () => {
  return (
    <div>
      <Nav.Item>
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic" className=" mt-3">
            <BsList /> <BsFillPersonFill/>
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-menu">
            <Link to="/" > <Dropdown.Item>Home</Dropdown.Item></Link>
            <Link to="/libBuku" > <Dropdown.Item>Pustakaan </Dropdown.Item></Link>
            <Link to="/" >  <Dropdown.Item>Daftar Bacaan</Dropdown.Item></Link>
          </Dropdown.Menu>
        </Dropdown>
      </Nav.Item>
    </div>
  );
};

export default ButtonMenuProfil;