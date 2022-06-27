import { Nav, Dropdown, Button } from "react-bootstrap";
import { BsList, BsFillPersonFill } from "react-icons/bs";
import "./index.css";
import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../../../context/index";

const ButtonMenuProfil = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const [login, setLogIn] = useState(true);
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
      if (login === true) {
        setLogIn(false);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleLogIn = () => {
    if (login === false) {
      setLogIn(true);
      navigate("/login");
    }
  };

  return (
    <div>
      <Nav.Item>
        <Dropdown>
          <Dropdown.Toggle
            variant="success"
            id="dropdown-basic"
            className="mt-4 menu-color">
            <BsList color="white" size="1.5em" />
            <BsFillPersonFill color="white" size="1.5em" />
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-menu">
            <ul className="dropdown-list">
              <li className="dropdown-item">
                <Link to="/">Home</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/">{user && user.email}</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/libBuku">Pustakaan </Link>
              </li>
              {login ? (
                <li className="dropdown-item">
                  <Link to="/DaftarBacaan">Daftar Bacaan</Link>
                </li>
              ) : null}

              {login ? (
                <li className="dropdown-item">
                  <Link to="/Profil">Profil</Link>
                </li>
              ) : (
                <li className="dropdown-item">
                  <Button variant="primary" onClick={handleLogIn}>
                    LogIN
                  </Button>
                </li>
              )}
              {login ? (
                <li className="dropdown-item">
                  <Button variant="danger" onClick={handleLogout}>
                    LogOut
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
