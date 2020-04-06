import React, { Fragment } from 'react';
// import { navigate } from 'hookrouter';

import { Container, Row, Col } from 'reactstrap';

export const AppDashboard = ({ children, ...props }) => {
  console.debug('AppDashboard', { props });

  const { user } = props;

  return (
    <Container fluid className="AppDashboard">
      <Row>
        <Col>
          <h1>AppDashboard</h1>
          <p>Welcome, {user.login}</p>
          <img alt={`${user.login}'s Avatar`} src={user.avatar_url} />
        </Col>
      </Row>
    </Container>
  );
};
