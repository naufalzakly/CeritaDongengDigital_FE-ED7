import {initializeApp} from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfigg = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: REACT_APP_AUTHDOMAIN,
  databaseURL: REACT_APP_DATABASEURL,
  projectId: REACT_APP_PROJECTID,
  storageBucket: REACT_APP_STORAGEBUCKET,
  messagingSenderId: REACT_APP_MESSAGINGSENDERID,
  appId: REACT_APP_APPID ,
  measurementId: REACT_APP_MEASUREMENTID 


};


const app = initializeApp(firebaseConfigg);
export default getFirestore(app);