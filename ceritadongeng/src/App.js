import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './pages/Homepages';
import './App.css';
import LibBuku from './pages/LibBuku';
import { Route, Routes } from 'react-router-dom';
import DaftarBacaan from './pages/DaftarBacaan';
import Profil from './pages/Profil';
import Loginn from './components/FormLogin/Login';
import PhoneSignUp from './components/FormLogin/SiginPhone';
import Signup from './components/FormLogin/SignUp';
import { UserAuthContextProvider } from './context';
import AboutUs from './pages/AboutUs';
import Team from './pages/Team';
import Faq from './pages/Faq';
import FormUlasan from './pages/FormUlasan';
import Legal from './pages/Legal';
import BacaCerita from './pages/BacaCerita';
import NavbarHome from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="Container">
      <UserAuthContextProvider>
        <NavbarHome />
        <Routes>
          <Route path="/login" element={<Loginn />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/phone-sign-up" element={<PhoneSignUp />} />
          <Route path="/library-buku" element={<LibBuku />} />
          <Route path="/daftar-bacaan" element={<DaftarBacaan />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/baca-cerita/:judul" element={<BacaCerita />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/team" element={<Team />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/form-ulasan" element={<FormUlasan />} />
          <Route path="/legal-information" element={<Legal />} />
        </Routes>
        <Footer />
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
