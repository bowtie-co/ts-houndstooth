import React, { FunctionComponent, useState, useEffect } from 'react';
import { WithGithubAuth, WithGithubRepo, WithChildren, IHasGithubRepoProps, IHasGithubUserProps } from '../';
import { IDefaultProps } from '../../types';

export interface IWithCollectionProps extends IHasGithubRepoProps, IHasGithubUserProps {
  // ...
}

export const WithCollection: FunctionComponent<IWithCollectionProps> = ({ children, ...props }) => {
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
        <WithChildren children={children} {...props} {...{ collection: pageP }} />
      </WithGithubRepo>
    </WithGithubAuth>
  );
};
