// import logo from './logo.svg';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./pages/homepages/index";
import Footer from "./component/footer/index";
import "./App.css";
import NavbarHome from "./component/home/navbar/index";
import logo from "./icon/garis.png";
import garis from "./icon/garis.png";
import profile from "./icon/profile.png";

function App() {
  return (
    <div className="Container">
      <NavbarHome logo={logo} garis={garis} profil={profile} />
      <Homepage />
      <Footer />
    </div>
  
  );
}

export default App;
