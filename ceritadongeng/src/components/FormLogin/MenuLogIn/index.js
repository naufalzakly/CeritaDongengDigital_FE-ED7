import { Nav, Dropdown, Button } from 'react-bootstrap';
import { BsList, BsFillPersonFill } from 'react-icons/bs';
import './index.css';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../../../context';

const ButtonMenuProfil = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  // const [login , setLogIn] = useState(true);

  const handleLogIn = () => {
    navigate('/login');
  };

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <Nav.Item>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic" className="mt-4 menu-color">
            <BsList color="white" size="1.5em" /> <BsFillPersonFill color="white" size="1.5em" />
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-menu">
            <Link to="/" className="dropdown-item">
              Home
            </Link>
            <Link to="/library-buku" className="dropdown-item">
              Pustakaan
            </Link>

            {user ? (
              <Link to="/daftar-bacaan" className="dropdown-item">
                Daftar Bacaan
              </Link>
            ) : null}

            {user ? (
              <Link to="/profil" className="dropdown-item">
                Profil
              </Link>
            ) : (
              <Button variant="primary" onClick={handleLogIn} className="mx-3 mt-2 mb-2">
                Masuk
              </Button>
            )}
            {user ? (
              <Button variant="danger" onClick={handleLogout} className="mx-3 mt-2 mb-2">
                Keluar
              </Button>
            ) : null}
          </Dropdown.Menu>
        </Dropdown>
      </Nav.Item>
    </div>
  );
};

export default ButtonMenuProfil;
