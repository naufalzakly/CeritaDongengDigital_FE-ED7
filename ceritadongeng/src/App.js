// import logo from './logo.svg';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./pages/homepages/index";
import Footer from "./component/footer/index";
import "./App.css";
import NavbarHome from "./component/home/navbar/index";
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
                    <NavbarHome/>
                    <Homepage />
                    
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/phonesignup" element={<PhoneSignUp />} />
             
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

