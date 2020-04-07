import React, { FunctionComponent, useState, useEffect, useCallback } from 'react';
import { storage, github } from '../../lib';
import { WithGithub, WithLoader, WithChildren } from '../';

export const WithGithubUser: FunctionComponent<{}> = ({ children, ...props }) => {
  console.debug('WithGithubUser', { children, props });

  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const { github } = props;

  useEffect(() => {
    setLoading(true);

    github
      .user()
      .then((data) => {
        console.log('hopsdfsdfsdfsdfs');
        setUser(data.user);
        setLoading(false);
      })
      .catch((err) => {
        console.warn('WithGithubUser: Caught Error', err);
        setLoading(false);
      });
  }, [github]);

  return (
    <WithLoader isLoading={loading}>
      <WithChildren children={children} {...props} {...{ user }} />
    </WithLoader>
  );
};
