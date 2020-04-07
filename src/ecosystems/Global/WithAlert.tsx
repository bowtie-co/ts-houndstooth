import React, { Dispatch, SetStateAction, FunctionComponent, useState, Fragment } from 'react';
import { WithChildren } from '.';
import { AppAlert } from '../../organisms';
import { IDefaultProps } from '../../types';

export const WithAlert: FunctionComponent<IDefaultProps> = ({ children, ...props }) => {
  console.debug('WithAlert', { props });

  const [alertOpen, setAlertOpen] = useState<boolean>(false);
  const [alertText, setAlertText] = useState<string>();
  const [alertColor, setAlertColor] = useState<string>();

  const toggleAlert = (): void => setAlertOpen((prevState) => !prevState);
  const dismissAlert = (): void => setAlertOpen(false);

  const setAlert = (text: string, color = 'info'): void => {
    setAlertText(text);
    setAlertColor(color);
    setAlertOpen(true);
  };

  const alertProps = {
    setAlert,
    alertOpen,
    setAlertOpen,
    alertText,
    setAlertText,
    alertColor,
    setAlertColor,
    toggleAlert,
    dismissAlert
  };

  return (
    <Fragment>
      <AppAlert {...alertProps} />
      <WithChildren {...props} children={children} />
    </Fragment>
  );
};

export interface IHasAlertProps extends IDefaultProps {
  alertOpen?: boolean;
  alertText?: string;
  alertColor?: string;
  setAlert?: (text: string, color: string) => void;
  setAlertOpen?: Dispatch<SetStateAction<boolean>>;
  setAlertText?: Dispatch<SetStateAction<string | undefined>>;
  setAlertColor?: Dispatch<SetStateAction<string | undefined>>;
  toggleAlert?: () => void;
  dismissAlert?: () => void;
}
