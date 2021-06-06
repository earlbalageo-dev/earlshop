import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
const LoginScreen = () => {
  return (
    <Container>
      <Row className='justify-content-md-center my-4'>
        <Col md={4}>
          <h1 className='text-center'>Login</h1>
          <Form>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control type='email' placeholder='Enter email' />
              <Form.Text className='text-muted'>
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' placeholder='Password' />
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
