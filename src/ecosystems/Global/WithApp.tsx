import React, { FunctionComponent } from 'react';
import { WithNavbar, WithAlert, WithChildren } from '.';
import { IDefaultProps } from '../../types';

export const WithApp: FunctionComponent<IDefaultProps> = ({ children, ...props }) => {
  console.debug('WithApp', { children, props });

  return (
    <WithNavbar {...props}>
      <WithAlert>
        <WithChildren {...props} children={children} />
      </WithAlert>
    </WithNavbar>
  );
};
