import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const ProfileScreen = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  return (
    <Container>
      <Row>
        <Col>
          <h3>
            {userInfo.firstName} {userInfo.lastName}
          </h3>
        </Col>
      </Row>
      <Row>
        <Col md='4'>asdasd</Col>
        <Col md='8'>asdasd</Col>
      </Row>
    </Container>
  );
};

export default ProfileScreen;
