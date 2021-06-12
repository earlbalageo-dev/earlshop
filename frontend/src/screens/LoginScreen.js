import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/userActions';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import Loader from '../components/Loader';

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  useEffect(() => {
    if (userInfo) {
      history.push('/');
    }
  }, [history, userInfo]);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(`Location: ${location.search}`);

    dispatch(login(email, password));
  };

  return (
    <Container>
      <Row className='justify-content-md-center my-4'>
        <Col md={4}>
          <h1 className='text-center'>Login</h1>
          {loading && <Loader />}
          {error && <Alert variant='danger'>{error}</Alert>}
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Text className='text-muted'>
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
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

export default LoginScreen;
