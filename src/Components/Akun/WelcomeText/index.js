import './index.css';
import { collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import db from '../../../Firestore';

const WelcomeText = () => {
  const [Users, setUser] = useState([]);
  useEffect(
    () =>
      onSnapshot(collection(db, 'user'), (snapshot) =>
        setUser(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),

    []
  );

  return (
    <div className="welcome">
      {Users.filter((userss) => userss.index === 1).map((userss, id) => {
        return (
          <div key={id}>
            <h3>{userss.nama}</h3>
          </div>
        );
      })}
      <p>Bergabung Sejak 2022</p>
    </div>
  );
};

export default WelcomeText;
