import { Nav, Dropdown,Button } from "react-bootstrap";
import { BsList, BsFillPersonFill } from "react-icons/bs";
import "./index.css";
import React from "react";

import { Link } from "react-router-dom";
import { useUserAuth } from "../../../../context/index";
import { useNavigate } from "react-router";

const ButtonMenuProfil = () => {
  const { logOut } = useUserAuth();
  const navigate = useNavigate();
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
            variant="light"
            id="dropdown-basic"
            className=" mt-3"
          >
            <BsList /> <BsFillPersonFill />
            
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-menu">
            <ul className="dropdown-list">
              <li className="dropdown-item"><Link to="/home">Home</Link></li>
              <li className="dropdown-item"> <Link to="/libBuku">Pustakaan </Link></li>
              <li className="dropdown-item"> <Link to="/wishlist">Daftar Bacaan</Link></li>
              <li className="dropdown-item"><Link to="/profil">Profil</Link></li>

              <li className="dropdown-item"><Button onClick={handleLogout}>LogOut</Button></li>
              
            </ul>
          </Dropdown.Menu>
        </Dropdown>
      </Nav.Item>
    </div>
  );
};

export default ButtonMenuProfil;
