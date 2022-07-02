import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './pages/Homepages';
import './App.css';
import LibBuku from './pages/LibBuku';
import { Route, Routes } from 'react-router-dom';
import DaftarBacaan from './pages/DaftarBacaan';
import Profil from './pages/Profil';
import KelinciKura from './pages/BacaCerita/KelinciKura';
import Loginn from './components/FormLogin/Login';
import PhoneSignUp from './components/FormLogin/SiginPhone';
import Signup from './components/FormLogin/SignUp';
import { UserAuthContextProvider } from './context';
import KancilBuaya from './pages/BacaCerita/KancilBuaya';
import BebekBurukRupa from './pages/BacaCerita/Bebek';
import KancilHarimau from './pages/BacaCerita/KancilHarimau';
import AboutUs from './pages/AboutUs';
import Team from './pages/Team';
import Faq from './pages/Faq';
import FormUlasan from './pages/FormUlasan';

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
          </Routes>
        </UserAuthContextProvider>
      </div>
    </>
  );
}

export default App;
