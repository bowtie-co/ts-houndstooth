import React from 'react';
import { useTitle } from 'hookrouter';
import { storage } from '../../lib';
import { WithGithubAuth, WithGithubRepo, WithApp, WithCollections } from '../../ecosystems';
import { CollectionList } from '../../organisms';

export const CollectionListPage = ({ children, ...props }) => {
  console.debug('CollectionList', { props });

  return (
    <WithCollections {...props}>
      <WithApp>
        <CollectionList />
      </WithApp>
    </WithCollections>
  );
};
