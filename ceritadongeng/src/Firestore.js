import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfigg = {
  apiKey: 'AIzaSyBUf5_CnpHfPOfAme_wNGEieECB2IW9JA4',
  authDomain: 'cerita-dongeng-digital.firebaseapp.com',
  databaseURL: 'https://cerita-dongeng-digital-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'cerita-dongeng-digital',
  storageBucket: 'cerita-dongeng-digital.appspot.com',
  messagingSenderId: '485479888361',
  appId: '1:485479888361:web:fdda295a57c1ac2c290778',
  measurementId: 'G-SL8J46LSP2'
  // apiKey : process.env.REACT_APP_APIKEY,
  // authDomain : process.env.REACT_APP_AUTHDOMAIN,
  // databaseURL : process.env.REACT_APP_DATABASEURL,
  // projectId : process.env.REACT_APP_PROJECTID,
  // storageBucket :process.env.REACT_APP_STORAGEBUCKET,
  // messagingSenderId : process.env.REACT_APP_MESSAGINGSENDERID,
  // appId : process.env.REACT_APP_APPID,
  // measurementId : process.env.REACT_APP_MEASUREMENTID
};

const app = initializeApp(firebaseConfigg);
export const auth = getAuth(app);

export default getFirestore(app);
