import React, { FunctionComponent, DetailedReactHTMLElement } from 'react';
// import { IDefaultProps } from '../../types';

export const WithChildren: FunctionComponent<any> = ({ children, ...props }) => {
  console.debug('WithChildren', { props });

  return (Array.isArray(children) ? children : [children]).map((c, i) =>
    React.cloneElement(c, Object.assign(props, { key: i }))
  );
};
