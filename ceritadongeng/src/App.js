// import logo from './logo.svg';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./pages/homepages/index";
import Footer from "./component/footer/index";
import "./App.css";
import NavbarHome from "./component/home/navbar/index";
import LibBuku from "./pages/libBuku/index";
import {Route} from 'react-router-dom';
import Wishlist from "./pages/wishlist/index";
import MyAkun from "./pages/myAkun/index";

function App() {
  return (
    <div className="Container">
      <NavbarHome />
      <Route exact path="/" component={Homepage}/>
      <Route path="/libBuku" component={LibBuku}/>
      <Route path="/wishlist" component={Wishlist}/>
      <Route path="/profil" component={MyAkun}/>
      <Footer />
    </div>
  
  );
}

export default App;
