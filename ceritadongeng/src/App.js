import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './Pages/Homepages/index';
import './App.css';
import LibBuku from './Pages/LibBuku/index';
import { Route, Routes } from 'react-router-dom';
import DaftarBacaan from './Pages/DaftarBacaan/index';
import Profil from './Pages/Profil/index';
import KelinciKura from './Pages/BacaCerita/KelinciKura';
import Loginn from './Component/FormLogin/Login/index';
import PhoneSignUp from './Component/FormLogin/SiginPhone';
import Signup from './Component/FormLogin/Signup';
// import ProtectedRoute from "./context/protectRoute";
import { UserAuthContextProvider } from './Context/index';
import KancilBuaya from './Pages/BacaCerita/KancilBuaya';
import BebekBurukRupa from './Pages/BacaCerita/Bebek';
import KancilHarimau from './Pages/BacaCerita/KancilHarimau';
import AboutUs from './Pages/AboutUs/index';
import Team from './Pages/Team/index';
import Faq from './Pages/Faq/index';
import FormUlasan from './Pages/FormUlasan/index';
// import CardDaftarBacaan from '../src/Component/CardDaftarBacaan/index';

function App() {
  return (
    <>
      <div className="Container">
        <UserAuthContextProvider>
          <Routes>
            <Route path="/login" element={<Loginn />} />
            <Route path="/" element={<Homepage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/phonesignup" element={<PhoneSignUp />} />
            <Route path="/libBuku" element={<LibBuku />} />
            <Route path="/DaftarBacaan" element={<DaftarBacaan />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/bacaCerita/KelinciKura" element={<KelinciKura />} />
            <Route path="/BacaCerita/KancilHarimau" element={<KancilHarimau />} />
            <Route path="/BacaCerita/KancilBuaya" element={<KancilBuaya />} />
            <Route path="/BacaCerita/BebekBurukRupa" element={<BebekBurukRupa />} />
            <Route path="/About-us" element={<AboutUs />} />
            <Route path="/Team" element={<Team />} />
            <Route path="/Faq" element={<Faq />} />
            <Route path="/Form-ulasan" element={<FormUlasan />} />
          </Routes>
        </UserAuthContextProvider>
      </div>
    </>
  );
}

export default App;
