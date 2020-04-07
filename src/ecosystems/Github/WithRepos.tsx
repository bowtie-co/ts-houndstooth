import React, { FunctionComponent, useState, useEffect } from 'react';
import { WithLoader, WithChildren } from '../';
import { GithubClient, IGithubRepo } from '@bowtie/ts-github';
// import {
//   DebugProps
// } from '../../organisms';

export interface IGithubProps {
  github: GithubClient;
}

export const WithGithubRepos: FunctionComponent<IGithubProps> = ({ children, ...props }) => {
  console.debug('WithGithubRepos', { children, props });

  const [repos, setRepos] = useState<IGithubRepo[]>();
  const [loading, setLoading] = useState(true);
  const { github } = props;

  useEffect(() => {
    const loadRepos = async (): Promise<void> => {
      setRepos(await github.repos());
    };

    try {
      setLoading(true);
      loadRepos();
    } catch (err) {
      console.warn('Caught Error:', err.message || err);
    }

    setLoading(false);
  }, [github, setLoading, setRepos]);

  return (
    <WithLoader loader="Pacman" isLoading={loading}>
      <WithChildren children={children} {...props} {...{ repos }} />
    </WithLoader>
  );
};
