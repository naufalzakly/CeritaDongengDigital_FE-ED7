// import logo from './logo.svg';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./pages/Homepages/index";
import Footer from "./component/footer/index";
import "./App.css";
import NavbarHome from "./component/home/navbar/index";
import LibBuku from "./pages/libBuku/index";
import {Route} from 'react-router-dom';
import DaftarBacaan from "./pages/DaftarBacaan/index";
import Profil from "./pages/Profil/index";
import KelinciKura from "./pages/bacaCerita/KelinciKura";
import KancilBuaya from "./pages/bacaCerita/KancilBuaya";
import BebekBurukRupa from "./pages/bacaCerita/Bebek";
import KancilHarimau from "./pages/bacaCerita/KancilHarimau";

function App() {
  return (
    <div className="Container">
      <NavbarHome />
      <Route exact path="/" component={Homepage}/>
      <Route path="/LibBuku" component={LibBuku}/>
      <Route path="/DaftarBacaan" component={DaftarBacaan}/>
      <Route path="/Profil" component={Profil}/>
      <Route path="/BacaCerita/KelinciKura" component={KelinciKura} />
      <Route path="/BacaCerita/KancilHarimau" component={KancilHarimau} />
      <Route path="/BacaCerita/KancilBuaya" component={KancilBuaya} />
      <Route path="/BacaCerita/BebekBurukRupa" component={BebekBurukRupa} />
      <Footer />
    </div>
  
  );
}

export default App;

