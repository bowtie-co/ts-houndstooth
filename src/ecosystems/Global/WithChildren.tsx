import React, { FC, DetailedReactHTMLElement } from 'react';
import { IDefaultProps } from '../../types';

export const WithChildren: FC<IDefaultProps> = ({ children, ...props }): JSX.Element => {
  console.debug('WithChildren', { props });

  return (Array.isArray(children) ? children : [children]).map((c, i) =>
    React.cloneElement(c, Object.assign(props, { key: i }))
  );
};
