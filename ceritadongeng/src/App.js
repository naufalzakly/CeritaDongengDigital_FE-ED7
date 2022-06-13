// import logo from './logo.svg';
import React from "react";
import Homepage from "./pages/homepages/index";
import "./App.css";
import NavbarHome from "./component/home/navbar/index";
import LibDongeng from "./pages/libDongeng/index";
import logo from "./icon/garis.png";
import garis from "./icon/garis.png";
import profile from "./icon/profile.png";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router> 
    <div className="Container">
      <NavbarHome logo={logo} garis={garis} profil={profile} />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/libDongeng">
          <LibDongeng />
        </Route>
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
