// import logo from './logo.svg';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./pages/homepages/index";
// import Footer from "./component/footer/index";
import "./App.css";
// import NavbarHome from "./component/home/navbar/index";
import LibBuku from "./pages/libBuku/index";
import {Route,Routes} from 'react-router-dom';
import Wishlist from "./pages/wishlist/index";
import MyAkun from "./pages/myAkun/index";
import KelinciKura from "./pages/bacaCerita/KelinciKura";
import Loginn from "./component/home/button/login/index"
import PhoneSignUp from "./component/home/button/SiginPhone";
import Signup from "./component/home/button/Signup";
import ProtectedRoute from "./context/protectRoute";
import { UserAuthContextProvider } from "./context/index";

function App() {
  return (
    <>
      <div className="Container">
        
        <UserAuthContextProvider>
          <Routes>
            <Route 
              path="/home" 
              element={
                <ProtectedRoute>
                   <Homepage />
                </ProtectedRoute>
               
              } 
            />
            <Route path="/" element={<Loginn />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/phonesignup" element={<PhoneSignUp />} />
            <Route path="/libBuku" element={<LibBuku />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/profil" element={<MyAkun />} />
            <Route path="/bacaCerita/KelinciKura" element={<KelinciKura />} />

          </Routes>
        </UserAuthContextProvider>
      </div>
  
    </>

  );
}

export default App;

