import React, { FC } from 'react';
import { A, navigate } from 'hookrouter';
import {
  // Badge,
  Container,
  Row,
  Col,
  Button,
  ListGroup,
  ListGroupItem
} from 'reactstrap';

export const CollectionList = ({ collections }) => {
  return (
    <Container className="CollectionList">
      <Row>
        <Col sm={{ size: 10, offset: 1 }} md={{ size: 8, offset: 2 }} lg={{ size: 6, offset: 3 }}>
          <ListGroup>
            {collections.map((coll, index) => (
              <ListGroupItem
                key={index}
                className="justify-content-between"
                onClick={() => navigate(`collections/${coll.path}`)}
              >
                {coll.name}
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};
