import React, { FC, useState, useEffect } from 'react';
import { WithChildren, WithGithubAuth, WithGithubRepo } from '../';
// import {
//   DebugProps
// } from '../../organisms';

export const WithCollections: FC<{}> = ({ children, ...props }) => {
  console.debug('WithCollections', { children, props });

  const [collections, setCollections] = useState([]);

  useEffect(() => {
    setCollections([
      {
        path: `examples`,
        name: 'Example Collection',
        stuff: 'things'
      }
    ]);
  }, []);

  return (
    <WithGithubAuth {...props}>
      <WithGithubRepo>
        <WithChildren children={children} {...props} {...{ collections }} />
      </WithGithubRepo>
    </WithGithubAuth>
  );
};
