import './index.css';
import React from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import db from '../../../firestore';
import { COLLECTION_USER } from '../../../constants';
const WelcomeText = () => {
  const [Users, setUser] = useState([]);
  useEffect(
    () =>
      onSnapshot(collection(db, COLLECTION_USER), (snapshot) =>
        setUser(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),

    []
  );

  return (
    <div className="welcome">
      {Users.filter((userss) => userss.index === 1).map((userss, id) => {
        return (
          <div key={id}>
            {userss.nama ? <h3> {userss.nama} </h3> : <h3> Halo Kak, Silahkan Input Nama</h3>}
          </div>
        );
      })}
      <p>Bergabung Sejak 2022</p>
    </div>
  );
};

export default WelcomeText;
