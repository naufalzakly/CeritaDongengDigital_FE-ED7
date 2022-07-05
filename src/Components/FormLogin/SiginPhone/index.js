import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Alert } from 'react-bootstrap';
import { Button, Container } from 'react-bootstrap';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { useUserAuth } from '../../../context/index';
import { RiCloseCircleFill } from 'react-icons/ri';
import '../index.css';

const PhoneSignUp = () => {
  const [error, setError] = useState('');
  const [number, setNumber] = useState('');
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState('');
  const [result, setResult] = useState('');
  const { setUpRecaptha } = useUserAuth();
  const navigate = useNavigate();

  const getOtp = async (e) => {
    e.preventDefault();
    console.log(number);
    setError('');
    if (number === '' || number === undefined)
      return setError('Please enter a valid phone number!');
    try {
      const response = await setUpRecaptha(number);
      setResult(response);
      setFlag(true);
    } catch (err) {
      setError(err.message);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setError('');
    if (otp === '' || otp === null) return;
    try {
      await result.confirm(otp);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container className="login-page">
      <div className="p-4 box">
        <Link to="/">
          <RiCloseCircleFill color="red" size="3em" className="btn-close-login" />
        </Link>
        <h2>Phone Auth</h2>
        <hr className="mb-4" />
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={getOtp} style={{ display: !flag ? 'block' : 'none' }}>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <PhoneInput
              defaultCountry="ID"
              value={number}
              onChange={setNumber}
              placeholder="Enter Phone Number"
            />
            <div id="recaptcha-container"></div>
          </Form.Group>

          <div className="button-right">
            <Link to="/login">
              <Button variant="secondary">Cancel</Button>
            </Link>
            &nbsp;
            <Button type="submit" variant="primary">
              Send Otp
            </Button>
          </div>
        </Form>

        <Form onSubmit={verifyOtp} style={{ display: flag ? 'block' : 'none' }}>
          <Form.Group className="mb-3" controlId="formBasicOtp">
            <Form.Control
              type="otp"
              placeholder="Enter OTP"
              onChange={(e) => setOtp(e.target.value)}
            />
          </Form.Group>
          <div className="button-right">
            <Link to="/login">
              <Button variant="secondary">Cancel</Button>
            </Link>
            &nbsp;
            <Button type="submit" variant="primary">
              Verify
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default PhoneSignUp;
