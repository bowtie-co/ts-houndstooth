import React, { FC } from 'react';
import { useRoutes } from 'hookrouter';
import { IGithubRepoParams } from '@bowtie/ts-github';
import { NotFound } from '../../pages';
import { IDefaultProps } from '../../types';

export interface IPageProps extends IGithubRepoParams {
  // repo?: string;
  // owner?: string;
  collection?: string;
}

export interface IWithRoutesProps extends IDefaultProps {
  auth?: any;
  routes?: any;
  // pageProps?: IPageProps;
}

export const WithRoutes: FC<IWithRoutesProps> = ({ children, ...props }) => {
  console.debug('WithRoutes', { children, props });

  const { auth, routes } = props;

  const authRouteAction = useRoutes(auth.routes);
  const appRouteAction = useRoutes(routes);

  if (authRouteAction && typeof authRouteAction === 'function') {
    return authRouteAction(props);
  }

  return typeof appRouteAction === 'function' ? appRouteAction(props) : <NotFound {...props} />;
};

export interface IHasRoutesProps extends IDefaultProps {
  pageProps?: IPageProps;
}
