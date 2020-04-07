import React, { FC } from 'react';
import { useTitle } from 'hookrouter';
import { storage } from '../../lib';
import { WithApp, WithGithubAuth, WithGithubRepos } from '../../ecosystems';
import { RepoList, RepoCards } from '../../organisms';
import { GithubClient, IGithubRepo } from '@bowtie/ts-github';
// import {
//   DebugProps
// } from '../../organisms';

export interface IRepoListPageProps {
  github: GithubClient;
  repos: IGithubRepo[];
}

export const RepoListPage: FC<IRepoListPageProps> = ({ children, ...props }) => {
  console.debug('RepoListPage', { props });

  useTitle(`Select a project (repository)`);

  return (
    <WithGithubAuth {...props}>
      <WithGithubRepos>
        <WithApp>
          <RepoCards />
        </WithApp>
      </WithGithubRepos>
    </WithGithubAuth>
  );
};
