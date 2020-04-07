import React, { FunctionComponent, useState, useEffect } from 'react';
// import { navigate } from 'hookrouter';
import { GitHub } from '@bowtie/houndstooth-sdk';
import { auth, storage } from '../../lib';
import { WithGithubAuth, WithGithubUser, WithChildren } from '../';
import { LoginGithub } from '../../organisms';
// import Api from '@bowtie/api';
import { GithubClient } from '@bowtie/ts-github';

export const WithGithub: FunctionComponent<{}> = ({ children, token, ...props }) => {
  const github = new GithubClient({ token });

  useEffect(() => {
    github.auth(token);
  }, [github, token]);

  return <WithChildren children={children} {...props} {...{ github }} />;
};
