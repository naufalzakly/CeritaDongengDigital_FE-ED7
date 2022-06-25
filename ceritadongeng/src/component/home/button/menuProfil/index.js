import { Nav, Dropdown } from "react-bootstrap";
import { BsList, BsFillPersonFill } from "react-icons/bs";
import "./index.css";
import { Link } from "react-router-dom";

const ButtonMenuProfil = () => {
  return (
    <div>
      <Nav.Item>
        <Dropdown>
          <Dropdown.Toggle
            variant="light"
            id="dropdown-basic"
            className=" mt-3"
          >
            <BsList /> <BsFillPersonFill />
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-menu">
            <ul className="dropdown-list">
              <li className="dropdown-item"><Link to="/">Home</Link></li>
              <li className="dropdown-item"> <Link to="/LibBuku">Pustakaan </Link></li>
              <li className="dropdown-item"> <Link to="/DaftarBacaan">Daftar Bacaan</Link></li>
              <li className="dropdown-item"><Link to="/Profil">Profil</Link></li>
              <li className="dropdown-item"><Link to="/">Logout</Link></li>
            </ul>
          </Dropdown.Menu>
        </Dropdown>
      </Nav.Item>
    </div>
  );
};

export default ButtonMenuProfil;
