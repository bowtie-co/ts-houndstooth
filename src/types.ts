import { ReactNode } from 'react';
import { IGithubRepoParams } from '@bowtie/ts-github';

export interface IPageProps extends IGithubRepoParams {
  // repo?: string;
  // owner?: string;
  collection?: string;
}

export interface IDefaultProps {
  children?: ReactNode;
  pageProps?: IPageProps;
}
