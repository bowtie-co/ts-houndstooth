import React, { FunctionComponent, useState, useEffect } from 'react';
import { WithLoader, WithChildren } from '../';
import { IHasGithubProps } from '../';
import { IGithubRepo } from '@bowtie/ts-github';

export const WithGithubRepo: FunctionComponent<IHasGithubProps> = ({ children, ...props }) => {
  console.debug('WithGithubRepo', { children, props });

  const [repo, setRepo] = useState<IGithubRepo>();
  const [loading, setLoading] = useState<boolean>(true);
  const { github, pageProps } = props;

  useEffect(() => {
    const loadRepo = async (): Promise<void> => {
      if (github) {
        const repo = await github.repo(pageProps);
        console.log('loaded repo', repo);
        setRepo(repo);
      }
    };

    try {
      setLoading(true);
      loadRepo();
    } catch (err) {
      console.warn('Caught Error:', err.message || err);
    }

    setLoading(false);
  }, [github, setLoading, setRepo, pageProps]);

  return (
    <WithLoader isLoading={loading}>
      <WithChildren children={children} {...props} {...{ repo }} />
    </WithLoader>
  );
};

export interface IHasGithubRepoProps extends IHasGithubProps {
  repo: IGithubRepo;
}
