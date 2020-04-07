import React, { FunctionComponent } from 'react';
import { A, navigate } from 'hookrouter';
import { Container, Row, Col, Card, CardTitle, CardBody, Button } from 'reactstrap';

export const RepoSingle = ({ children, github, user, repo, ...props }) => {
  console.debug('RepoSingle', { props });

  return (
    <Container className="RepoSingle">
      <Row className="ActionsRow">
        <Col sm="12">
          <h1>
            {repo.full_name} - {repo.default_branch}
          </h1>
        </Col>
        <Col sm="12" md="6">
          <Button onClick={() => navigate(`/${repo.full_name}/collections`)} block color="primary">
            View Collections
          </Button>
        </Col>
        <Col sm="12" md="6">
          <Button block color="info">
            File Editor
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
