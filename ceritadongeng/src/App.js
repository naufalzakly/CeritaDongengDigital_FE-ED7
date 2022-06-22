// import logo from './logo.svg';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Homepage from "./pages/homepages/index";
import Footer from "./component/footer/index";
import "./App.css";
import NavbarHome from "./component/home/navbar/index";
<<<<<<< HEAD
import LibDongeng from "./pages/libDongeng/index";
// import EditAkun from "./pages/editAkun/index";
// import MyAkun from "./pages/myAkun/index";

import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import ButtonBergabung from "./component/home/button/bergabung";
import ProtectedRoute from "./route";
import { UserAuthContextProvider } from "./auth_firabase";

function App() {
  return (
    <Container style={{ width: "400px" }}>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <ButtonBergabung />
                    
                  </ProtectedRoute>
                }
              />
              <Route
                path="/LibDongeng"
                element={
                  <ProtectedRoute>
                    <NavbarHome />
                    <LibDongeng />
                    <Footer />
                  </ProtectedRoute>
                }
              />
             
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
=======
import LibBuku from "./pages/libBuku/index";

function App() {
  return (
    <div className="Container">
      <NavbarHome />
      <LibBuku />
      <Footer />
    </div>
  
>>>>>>> aff9cbc645086e7a59af46034c93c613340096f1
  );
}

export default App;

