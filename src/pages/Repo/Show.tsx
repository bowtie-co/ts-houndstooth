import React, { FunctionComponent } from 'react';
import { useTitle } from 'hookrouter';
import { storage } from '../../lib';
import { WithApp, WithGithubAuth, WithGithubRepo } from '../../ecosystems';
import { RepoSingle } from '../../organisms';

export const RepoShowPage = ({ children, ...props }) => {
  console.debug('RepoShowPage', { props });

  return (
    <WithGithubAuth {...props}>
      <WithGithubRepo>
        <WithApp>
          <RepoSingle />
        </WithApp>
      </WithGithubRepo>
    </WithGithubAuth>
  );
};
