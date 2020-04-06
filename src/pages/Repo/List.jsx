import React from 'react';
import { useTitle } from 'hookrouter';
import { storage } from '../../lib';
import { WithApp, WithGithubAuth, WithGithubRepos } from '../../ecosystems';
import { RepoList, RepoCards } from '../../organisms';

export const RepoListPage = ({ children, ...props }) => {
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
