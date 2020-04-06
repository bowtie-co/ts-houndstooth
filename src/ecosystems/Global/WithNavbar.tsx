import React, { Fragment, useState, useEffect } from 'react';
import { WithChildren } from '.';
import { AppNavbar } from '../../organisms';

export const WithNavbar = ({ children, ...props }) => {
  return (
    <Fragment>
      <AppNavbar {...props} />
      <WithChildren {...props} children={children} />
    </Fragment>
  );
};
