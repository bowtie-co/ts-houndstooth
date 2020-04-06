import React from 'react';
import { navigate } from 'hookrouter';
import { Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

export const RepoCards = ({ repos }) => {
  return (
    <Row>
      {repos.map((repo, index) => (
        <Col key={index}>
          <Card>
            <CardImg top width="100%" src={repo.owner.avatar_url} alt={repo.owner.login} />
            <CardBody>
              <CardTitle>{repo.name}</CardTitle>
              <CardSubtitle>Default Branch: {repo.default_branch}</CardSubtitle>
              <CardText>{JSON.stringify(repo.permissions)}</CardText>
              <Button onClick={() => navigate(`/${repo.full_name}`)}>Select</Button>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
