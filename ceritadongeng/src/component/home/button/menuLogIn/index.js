import { Nav, Dropdown, Button } from "react-bootstrap";
import { BsList, BsFillPersonFill } from "react-icons/bs";
import "./index.css";
<<<<<<< HEAD
import React from "react";
=======
import React, { useState } from "react";
>>>>>>> 3842f0c8b8ac88d0dd79973adc78001dda6f1d28

import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../../../context/index";

const ButtonMenuProfil = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
<<<<<<< HEAD
  // const [login , setLogIn] = useState(true);

  const handleLogIn = () => {
    navigate("/login");
  };

=======
  const [login, setLogIn] = useState(true);
>>>>>>> 3842f0c8b8ac88d0dd79973adc78001dda6f1d28
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
<<<<<<< HEAD
=======
      if (login === true) {
        setLogIn(false);
      }
>>>>>>> 3842f0c8b8ac88d0dd79973adc78001dda6f1d28
    } catch (error) {
      console.log(error.message);
    }
  };

<<<<<<< HEAD
=======
  const handleLogIn = () => {
    if (login === false) {
      setLogIn(true);
      navigate("/login");
    }
  };

>>>>>>> 3842f0c8b8ac88d0dd79973adc78001dda6f1d28
  return (
    <div>
      <Nav.Item>
        <Dropdown>
          <Dropdown.Toggle
            variant="success"
            id="dropdown-basic"
<<<<<<< HEAD
            className="mt-4 menu-color"
          >
            <BsList color="white" size="1.5em" />{" "}
=======
            className="mt-4 menu-color">
            <BsList color="white" size="1.5em" />
>>>>>>> 3842f0c8b8ac88d0dd79973adc78001dda6f1d28
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
<<<<<<< HEAD
                {" "}
                <Link to="/libBuku">Pustakaan </Link>
              </li>
              {user ? (
                <li className="dropdown-item">
                  {" "}
=======
                <Link to="/libBuku">Pustakaan </Link>
              </li>
              {login ? (
                <li className="dropdown-item">
>>>>>>> 3842f0c8b8ac88d0dd79973adc78001dda6f1d28
                  <Link to="/DaftarBacaan">Daftar Bacaan</Link>
                </li>
              ) : null}

<<<<<<< HEAD
              {user ? (
=======
              {login ? (
>>>>>>> 3842f0c8b8ac88d0dd79973adc78001dda6f1d28
                <li className="dropdown-item">
                  <Link to="/Profil">Profil</Link>
                </li>
              ) : (
                <li className="dropdown-item">
                  <Button variant="primary" onClick={handleLogIn}>
<<<<<<< HEAD
                    {" "}
                    LogIN
                  </Button>{" "}
                </li>
              )}
              {user ? (
=======
                    LogIN
                  </Button>
                </li>
              )}
              {login ? (
>>>>>>> 3842f0c8b8ac88d0dd79973adc78001dda6f1d28
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
