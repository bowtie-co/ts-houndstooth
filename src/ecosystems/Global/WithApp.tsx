import React, { FC } from 'react';
import { WithNavbar, WithAlert, WithChildren } from '.';
import { IHasGithubRepoProps, IHasGithubUserProps } from '../';
// import { IDefaultProps } from '../../types';

export interface IWithAppProps extends IHasGithubRepoProps, IHasGithubUserProps {
  // ...
}

export const WithApp: FC<IWithAppProps> = ({ children, ...props }) => {
  console.debug('WithApp', { children, props });

  const app = {
    name: 'Houndstooth'
  };

  return (
    <WithNavbar {...props}>
      <WithAlert>
        <WithChildren children={children} {...props} {...{ app }} />
      </WithAlert>
    </WithNavbar>
  );
};

export interface IHasAppProps extends IHasGithubRepoProps, IHasGithubUserProps {
  app?: string;
}
