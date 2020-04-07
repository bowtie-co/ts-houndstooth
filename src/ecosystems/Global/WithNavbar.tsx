import React, { Fragment, useState, useEffect } from 'react';
import { WithChildren } from '.';
import { AppNavbar } from '../../organisms';

export const WithNavbar: FC<{}> = ({ children, ...props }) => {
  return (
    <Fragment>
      <AppNavbar {...props} />
      <WithChildren {...props} children={children} />
    </Fragment>
  );
};
