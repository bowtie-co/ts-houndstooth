import React, { FunctionComponent, useState, useEffect } from 'react';
import { WithLoader, WithChildren } from '../';
import { IHasGithubProps } from '../';
import { IGithubRepo } from '@bowtie/ts-github';

export const WithGithubRepos: FunctionComponent<IHasGithubProps> = ({ children, ...props }) => {
  console.debug('WithGithubRepos', { children, props });

  const [repos, setRepos] = useState<IGithubRepo[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const { github } = props;

  useEffect(() => {
    const loadRepos = async (): Promise<void> => {
      if (github) {
        const repos = await github.repos();
        console.log('loaded repos', repos);
        setRepos(repos);
      }
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

export interface IHasGithubReposProps extends IHasGithubProps {
  repos: IGithubRepo[];
}
