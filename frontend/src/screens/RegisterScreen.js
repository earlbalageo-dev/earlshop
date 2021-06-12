import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import { register } from '../actions/userActions';
import Loader from '../components/Loader';
const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [validated, setValidated] = useState(false);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);

  const { loading, error, userInfo } = userRegister;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(firstName, lastName, email, password, confirmPassword));
  };
  return (
    <Container>
      <Row className='justify-content-md-center my-4'>
        <Col md={4}>
          <h1 className='text-center'>Register</h1>
          {loading && <Loader />}
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='formBasicPassword'>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type='name'
                placeholder='First Name'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                isInvalid={error && error.firstName ? true : false}
              />
              <Form.Control.Feedback type='invalid'>
                {error && error.firstName}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId='lastName'>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type='name'
                placeholder='Last Name'
                value={lastName}
                onChange={(e) => setlastName(e.target.value)}
                isInvalid={error && error.lastName ? true : false}
              />
              <Form.Control.Feedback type='invalid'>
                {error && error.lastName}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId='email'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                isInvalid={error && error.email ? true : false}
              />
              <Form.Control.Feedback type='invalid'>
                {error && error.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                isInvalid={error && error.password ? true : false}
              />
              <Form.Control.Feedback type='invalid'>
                {error && error.password}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId='confirmPassword'>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Confirm Password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                isInvalid={error && error.confirmPassword ? true : false}
              />
              <Form.Control.Feedback type='invalid'>
                {error && error.confirmPassword}
              </Form.Control.Feedback>
            </Form.Group>

            <Button
              variant='info'
              type='submit'
              className='my-3 d-block ml-auto'
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterScreen;
