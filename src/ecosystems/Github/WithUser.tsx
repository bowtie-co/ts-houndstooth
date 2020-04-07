import React, { FunctionComponent, useState, useEffect } from 'react';
import { IGithubUser } from '@bowtie/ts-github';
import { WithLoader, WithChildren } from '../';
import { IHasGithubProps } from '../';

export const WithGithubUser: FunctionComponent<IHasGithubProps> = ({ children, ...props }) => {
  console.debug('WithGithubUser', { children, props });

  const [user, setUser] = useState<IGithubUser>();
  const [loading, setLoading] = useState<boolean>(true);
  const { github } = props;

  useEffect(() => {
    const loadUser = async (): Promise<void> => {
      if (github) {
        const user = await github.user();
        console.log('loaded user', user);
        setUser(user);
      }
    };

    try {
      setLoading(true);
      loadUser();
    } catch (err) {
      console.warn('Caught Error:', err.message || err);
    }

    setLoading(false);
  }, [github, setLoading, setUser]);

  return (
    <WithLoader isLoading={loading}>
      <WithChildren children={children} {...props} {...{ user }} />
    </WithLoader>
  );
};

export interface IHasGithubUserProps extends IHasGithubProps {
  user: IGithubUser;
}
