import React from 'react';
// import { A } from 'hookrouter';
import { Container, Row, Col, Card, CardTitle, CardBody, Button } from 'reactstrap';

export const CollectionSingle = ({ children, collection, ...props }) => {
  console.debug('CollectionSingle', { props });

  return (
    <Container className="CollectionSingle">
      <Row className="ActionsRow">
        <Col sm="12">
          <h1>{collection}</h1>
        </Col>
      </Row>
    </Container>
  );
};
