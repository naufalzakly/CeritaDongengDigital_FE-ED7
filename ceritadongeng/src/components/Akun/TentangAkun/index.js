import './index.css';
import { Container } from 'react-bootstrap';
import { MdDone } from 'react-icons/md';
import { useUserAuth } from '../../../context';
import { collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import db from '../../../Firestore';
import { IoPersonCircle } from 'react-icons/io5';

const tentangAkun = () => {
  const [Users, setUser] = useState([]);
  const { user } = useUserAuth();
  useEffect(
    () =>
      onSnapshot(collection(db, 'user'), (snapshot) =>
        setUser(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),

    []
  );

  return (
    <div className="profil">
      <Container>
        <div className="avatar">
          <div className="img-avatar">
            <IoPersonCircle size="10em" />
          </div>
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
                  <div key={id}>
                    <MdDone /> {userss.email}
                  </div>
                );
              })}
            </div>
          )}

          {user.phoneNumber ? (
            <div>
              <MdDone /> {user.phoneNumber}
            </div>
          ) : (
            <div>
              {Users.filter((userss) => userss.index === 1).map((userss, id) => {
                return (
                  <div key={id}>
                    <MdDone /> {userss.PhoneNumber}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default tentangAkun;
