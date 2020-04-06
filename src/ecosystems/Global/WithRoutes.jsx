import React from 'react';
import { useRoutes } from 'hookrouter';
import { NotFound } from '../../pages';

export const WithRoutes = ({ children, ...props }) => {
  console.debug('WithRoutes', { children, props });

  const { auth, routes } = props;

  const authRouteAction = useRoutes(auth.routes);
  const appRouteAction = useRoutes(routes);

  if (authRouteAction && typeof authRouteAction === 'function') {
    return authRouteAction(props);
  }

  return typeof appRouteAction === 'function' ? appRouteAction(props) : <NotFound {...props} />;
};
