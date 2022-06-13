// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase} from "firbase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBUf5_CnpHfPOfAme_wNGEieECB2IW9JA4",
  authDomain: "cerita-dongeng-digital.firebaseapp.com",
  projectId: "cerita-dongeng-digital",
  storageBucket: "cerita-dongeng-digital.appspot.com",
  messagingSenderId: "485479888361",
  appId: "1:485479888361:web:fdda295a57c1ac2c290778",
  measurementId: "G-SL8J46LSP2"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getDatabase(app);