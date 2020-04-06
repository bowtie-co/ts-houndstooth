import React, { useState, useEffect } from 'react';
import { WithLoader, WithChildren } from '../';
// import {
//   DebugProps
// } from '../../organisms';

export const WithGithubRepos = ({ children, ...props }) => {
  console.debug('WithGithubRepos', { children, props });

  const [repos, setRepos] = useState();
  const [loading, setLoading] = useState(true);
  const { github } = props;

  useEffect(() => {
    setLoading(true);

    github
      .repos()
      .then((data) => {
        setRepos(data.repos);
        setLoading(false);
      })
      .catch((err) => {
        console.warn(err);
        setLoading(false);
      });
  }, [github]);

  return (
    <WithLoader loader="Pacman" isLoading={loading}>
      <WithChildren children={children} {...props} {...{ repos }} />
    </WithLoader>
  );
};
