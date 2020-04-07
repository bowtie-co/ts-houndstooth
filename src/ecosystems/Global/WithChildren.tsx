import React, { FC, ReactElement, ReactNode } from 'react';

export const WithChildren: ReactNode = ({ children, ...props }): ReactNode => {
  console.debug('WithChildren', { props });

  return (Array.isArray(children) ? children : [children]).map((c, i) =>
    React.cloneElement(c as ReactElement, Object.assign(props, { key: i }))
  );
};

export interface IHasChildrenProps {
  children: ReactNode;
}
