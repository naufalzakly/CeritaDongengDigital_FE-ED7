import './index.css';
import { Container } from 'react-bootstrap';
import { MdDone } from 'react-icons/md';
import { useUserAuth } from '../../../context/index';
import { collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import db from '../../../Firestore';
const TentangAkun = () => {
  const [Users, setUser] = useState([]);
  useEffect(
    () =>
      onSnapshot(collection(db, 'user'), (snapshot) =>
        setUser(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),

    []
  );
  const { user } = useUserAuth();
  return (
    <div className="profil">
      <Container>
        <div className="avatar">
          <div className="img-avatar">
            <img src="user.photoURL" />
          </div>
          <p className="text-center">Upload Avatar</p>
        </div>
        <div className="tentang-saya">
          <h5>Tentang Saya</h5>
          <p>
            Saya sangat senang dengan adanya website ini, sebab bisa mengajarkan anak saya ilmu
            tentang cerita hewan disekitar kita
          </p>
        </div>
        <div className="terhubung">
          <h5>Terhubung</h5>
          <p>
            {user.email ? (
              <>
                <div>
                  <MdDone />
                  {user.email}
                </div>
              </>
            ) : (
              <div>
                {Users.filter((userss) => userss.index === 1).map((userss, id) => {
                  return (
                    <>
                      <div key={id}>
                        <MdDone /> {userss.email}
                      </div>
                    </>
                  );
                })}
              </div>
            )}
          </p>
          <p>
            {user.phoneNumber ? (
              <div>
                <MdDone /> <p>{user.phoneNumber}</p>
              </div>
            ) : (
              <div>
                {Users.filter((userss) => userss.index === 1).map((userss, id) => {
                  return (
                    <>
                      <div key={id}>
                        <MdDone /> {userss.PhoneNumber}
                      </div>
                    </>
                  );
                })}
              </div>
            )}
          </p>
        </div>
      </Container>
    </div>
  );
};

export default TentangAkun;
