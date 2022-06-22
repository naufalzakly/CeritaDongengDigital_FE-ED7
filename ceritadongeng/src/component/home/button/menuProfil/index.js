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
             <Dropdown.Item><Link to="/">Home</Link></Dropdown.Item>
             <Dropdown.Item><Link to="/libBuku">Pustakaan </Link> </Dropdown.Item>
              <Dropdown.Item><Link to="/wishlist">Daftar Bacaan</Link></Dropdown.Item>
              <Dropdown.Item><Link to="/profil">Profil</Link></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav.Item>
    </div>
  );
};

export default ButtonMenuProfil;