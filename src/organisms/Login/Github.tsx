import React, { FunctionComponent } from 'react';
import { Button } from 'reactstrap';

import { auth } from '../../lib';

export const LoginGithub = (props) => {
  console.debug('LoginGithub', { props });

  return (
    <Button onClick={() => auth.login('GITHUB')} block size="lg" color="secondary">
      <i className="fab fa-github" />
      &nbsp; Sign in with GitHub
    </Button>
  );
};
