/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button, Container } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../../../../context/index";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Container className="login-page">
      <div className="p-4 box">
        <h2>Login or Signup</h2>
        <hr className="mb-4" />
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2 mb-4">
            <Button variant="primary" type="Submit">
              Log In
            </Button>
          </div>
        </Form>
        <hr />
        <div className="btn-login">
          <GoogleButton
            className="g-btn mt-2"
            type="dark"
            onClick={handleGoogleSignIn}
          />
          <Link to="/phonesignup">
            <Button variant="success" type="Submit" className="mt-2">
              Sign in with Phone
            </Button>
          </Link>
        </div>
      </div>
      <div className="p-4 box mt-3 text-center">
        <p>Don't have an account?</p> <Link to="/signup">Sign up</Link>
      </div>
    </Container>
  );
};

export default Login;
