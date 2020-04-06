import React, { useState, useEffect } from 'react';
import { WithGithubAuth, WithGithubRepo, WithChildren } from '../';
// import {
//   DebugProps
// } from '../../organisms';

export const WithCollection = ({ children, ...props }) => {
  console.debug('WithCollection', { children, props });

  const { pageProps } = props;
  const { collection } = pageProps;
  // const [ collection, setCollection ] = useState(pageProps.collection);

  // useEffect(() => {
  //   setCollection(Object.assign({}, props, {
  //     path: '/examples',
  //     name: 'Example Collection',
  //     stuff: 'things'
  //   }));
  // }, [ pageProps ]);

  return (
    <WithGithubAuth {...props}>
      <WithGithubRepo>
        <WithChildren children={children} {...props} {...{ collection }} />
      </WithGithubRepo>
    </WithGithubAuth>
  );
};
