import React, { FunctionComponent, useEffect } from 'react';
import { GithubClient } from '@bowtie/ts-github';
import { WithChildren } from '../';
import { IDefaultProps } from '../../types';

export interface IWithGithubProps extends IDefaultProps {
  token: string;
}

export const WithGithub: FunctionComponent<IWithGithubProps> = ({ children, token, ...props }) => {
  const github = new GithubClient({ token });

  useEffect(() => {
    github.auth(token);
  }, [github, token]);

  return <WithChildren children={children} {...props} {...{ github }} />;
};

export interface IHasGithubProps extends IDefaultProps {
  github?: GithubClient;
}
