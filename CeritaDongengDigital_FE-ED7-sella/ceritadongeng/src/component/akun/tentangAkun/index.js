import "./index.css";
import { Container } from "react-bootstrap";
import { MdAccountCircle, MdDone } from "react-icons/md";

const TentangAkun = () => {
  return (
    <div className="profil">
      <Container>
        <div className="avatar">
          <div className="img-avatar">
            <MdAccountCircle size="10em" />
          </div>
          <p className="text-center">Upload Avatar</p>
        </div>
        <div className="tentang-saya">
          <h5>Tentang Saya</h5>
          <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
        </div>
        <div className="terhubung">
            <h5>Terhubung</h5>
          <p>
            <MdDone /> Email Terhubung
          </p>
          <p>
            <MdDone /> No.Tlp Terhubung
          </p>
        </div>
      </Container>
    </div>
  );
};

export default TentangAkun;
