import './index.css';
import { useUserAuth } from '../../../context/index';
import { collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import db from '../../../Firestore';
const WelcomeText = () => {
  const { user } = useUserAuth();
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
      {user.displayName ? (
        <h3>{user.displayName}</h3>
      ) : (
        <div>
          {Users.filter((userss) => userss.index === 1).map((userss, id) => {
            return (
              <div key={id}>
                <h3>{userss.nama}</h3>
              </div>
            );
          })}
        </div>
      )}

      <p>Bergabung Sejak 2022</p>
    </div>
  );
};

export default WelcomeText;
