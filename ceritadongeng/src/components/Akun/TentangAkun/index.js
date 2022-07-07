import './index.css';
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { MdDone } from 'react-icons/md';
import { collection, onSnapshot, setDoc, doc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import db from '../../../firestore';
import { COLLECTION_USER } from '../../../constants';
import { IoPersonCircle } from 'react-icons/io5';

const tentangAkun = () => {
  const [Users, setUser] = useState([]);

  const UpdateUserProfil_Email = async (id) => {
    const index = 1;
    const email = prompt('Masukan Email baru Anda: ');
    const nama = prompt('Masukan Nama baru Anda: ');
    const phoneNumber = prompt('Masukan Nomer Hp baru Anda: ');
    const Profildoc = doc(db, 'user', id);
    const userPlayload = { index, email, nama, phoneNumber };
    setDoc(Profildoc, userPlayload);
  };

  useEffect(
    () =>
      onSnapshot(collection(db, COLLECTION_USER), (snapshot) =>
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
          {Users.filter((userss) => userss.index === 1).map((userss, id) => {
            return (
              <div key={id}>
                {userss.email ? <MdDone /> : null}
                {userss.email ? userss.email : <p>Belum Verifikasi</p>}
              </div>
            );
          })}
          {Users.filter((userss) => userss.index === 1).map((userss, id) => {
            return (
              <div key={id}>
                {userss.phoneNumber ? <MdDone /> : null}
                {userss.phoneNumber ? userss.phoneNumber : <p>Belum Verifikasi</p>}
              </div>
            );
          })}
        </div>
        {Users.map((userss) => {
          return (
            <div key={userss.id} className="d-grid gap-2 mt-3">
              <Button
                onClick={() => UpdateUserProfil_Email(userss.id)}
                className="div-Button"
                variant="success">
                Edit
              </Button>
            </div>
          );
        })}
      </Container>
    </div>
  );
};

export default tentangAkun;
