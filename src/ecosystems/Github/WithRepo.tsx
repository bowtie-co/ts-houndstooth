import React, { FunctionComponent, useState, useEffect } from 'react';
import { WithLoader, WithChildren } from '../';
import { DebugProps } from '../../organisms';

export const WithGithubRepo: FunctionComponent<{}> = ({ children, ...props }) => {
  console.debug('WithGithubRepo', { children, props });

  const [repo, setRepo] = useState();
  const [loading, setLoading] = useState(true);
  const { github, pageProps } = props;

  useEffect(() => {
    setLoading(true);

    github
      .repo(pageProps)
      .then((data) => {
        setRepo(data.repo);
        setLoading(false);
      })
      .catch((err) => {
        console.warn(err);
        setLoading(false);
      });
  }, [github, pageProps]);

  return (
    <WithLoader isLoading={loading}>
      <WithChildren children={children} {...props} {...{ repo }} />
      <DebugProps debug {...repo} />
    </WithLoader>
  );
};
