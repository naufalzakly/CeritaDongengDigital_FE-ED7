import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './Pages/Homepages';
import './App.css';
import LibBuku from './Pages/LibBuku';
import { Route, Routes } from 'react-router-dom';
import DaftarBacaan from './Pages/DaftarBacaan';
import Profil from './Pages/Profil';
import KelinciKura from './Pages/BacaCerita/KelinciKura';
import Loginn from './Components/FormLogin/Login';
import PhoneSignUp from './Components/FormLogin/SiginPhone';
import Signup from './Components/FormLogin/SignUp';
import { UserAuthContextProvider } from './Context';
import KancilBuaya from './Pages/BacaCerita/KancilBuaya';
import BebekBurukRupa from './Pages/BacaCerita/Bebek';
import KancilHarimau from './Pages/BacaCerita/KancilHarimau';
import AboutUs from './Pages/AboutUs';
import Team from './Pages/Team';
import Faq from './Pages/Faq';
import FormUlasan from './Pages/FormUlasan';
import Legal from './Pages/Legal';

function App() {
  return (
    <>
      <div className="Container">
        <UserAuthContextProvider>
          <Routes>
            <Route path="/login" element={<Loginn />} />
            <Route path="/" element={<Homepage />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/phone-sign-up" element={<PhoneSignUp />} />
            <Route path="/library-buku" element={<LibBuku />} />
            <Route path="/daftar-bacaan" element={<DaftarBacaan />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/baca-cerita/kelinci-kura" element={<KelinciKura />} />
            <Route path="/baca-cerita/kancil-harimau" element={<KancilHarimau />} />
            <Route path="/baca-cerita/kancil-buaya" element={<KancilBuaya />} />
            <Route path="/baca-cerita/bebek-buruk-rupa" element={<BebekBurukRupa />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/team" element={<Team />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/form-ulasan" element={<FormUlasan />} />
            <Route path="/legal-information" element={<Legal />} />
          </Routes>
        </UserAuthContextProvider>
      </div>
    </>
  );
}

export default App;
