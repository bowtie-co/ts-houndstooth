import React, { useState, useEffect } from 'react';
// import { navigate } from 'hookrouter';
import { GitHub } from '@bowtie/houndstooth-sdk';
import { auth, storage } from '../../lib';
import { WithGithubAuth, WithGithubUser, WithChildren } from '../';
import { LoginGithub } from '../../organisms';
// import Api from '@bowtie/api';

export const WithGithub = ({ children, token, ...props }) => {
  const github = new GitHub({ token });

  useEffect(() => {
    github.auth(token);
  }, [github, token]);

  return <WithChildren children={children} {...props} {...{ github }} />;
};
