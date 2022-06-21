// import logo from './logo.svg';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Homepage from "./pages/homepages/index";
import Footer from "./component/footer/index";
import "./App.css";
import NavbarHome from "./component/home/navbar/index";
// import LibDongeng from "./pages/libDongeng/index";
// import EditAkun from "./pages/editAkun/index";
import MyAkun from "./pages/myAkun/index";
// import CardWishlist from "./component/cardWishlist/index";


function App() {
  return (
    <div className="Container">
      <NavbarHome />
      <MyAkun/>
      <Footer />
    </div>
  
  );
}

export default App;
