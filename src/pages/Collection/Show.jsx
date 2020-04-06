import React from 'react';
// import { useTitle } from 'hookrouter';
import { WithApp, WithGithubAuth, WithGithubRepo, WithCollection } from '../../ecosystems';
// import {
//   NotFound
// } from '../../pages';
import { CollectionSingle } from '../../organisms';

export const CollectionShowPage = ({ children, ...props }) => {
  console.debug('CollectionShowPage', { props });

  return (
    <WithCollection {...props}>
      <WithApp>
        <CollectionSingle />
      </WithApp>
    </WithCollection>
  );
};
