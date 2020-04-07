import { ReactNode } from 'react';

export interface IPageProps {
  repo?: string;
  owner?: string;
  collection?: string;
}

export interface IDefaultProps {
  children?: ReactNode;
  pageProps: IPageProps;
}
