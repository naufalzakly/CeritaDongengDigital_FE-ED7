import { Nav, Dropdown, Button } from "react-bootstrap";
import { BsList, BsFillPersonFill } from "react-icons/bs";
import "./index.css";
import React from "react";

import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../../../context/index";

const ButtonMenuProfil = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  // const [login , setLogIn] = useState(true);

  const handleLogIn = () => {
    navigate("/login");
  };

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <Nav.Item>
        <Dropdown>
          <Dropdown.Toggle
            variant="success"
            id="dropdown-basic"
            className="mt-4 menu-color"
          >
            <BsList color="white" size="1.5em" />{" "}
            <BsFillPersonFill color="white" size="1.5em" />
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-menu">
            <ul className="dropdown-list">
              <li className="dropdown-item">
                <Link to="/">Home</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/libBuku">Pustakaan </Link>
              </li>
              {user ? (
                <li className="dropdown-item">
                  <Link to="/DaftarBacaan">Daftar Bacaan</Link>
                </li>
              ) : null}

              {user ? (
                <li className="dropdown-item">
                  <Link to="/Profil">Profil</Link>
                </li>
              ) : (
                <li className="dropdown-item">
                  <Button variant="primary" onClick={handleLogIn}>
                    Masuk
                  </Button>
                </li>
              )}
              {user ? (
                <li className="dropdown-item">
                  <Button variant="danger" onClick={handleLogout}>
                    Keluar
                  </Button>
                </li>
              ) : null}
            </ul>
          </Dropdown.Menu>
        </Dropdown>
      </Nav.Item>
    </div>
  );
};

export default ButtonMenuProfil;
