import { Octokit } from '@octokit/rest';

export interface IGitHub {
  octokit: Octokit;
}

export interface IGitHubProps {
  auth: string;
  octokit: Octokit;
}

export class GitHub implements IGitHub {
  public octokit: Octokit;

  constructor(props?: IGitHubProps) {
    this.octokit = new Octokit();
  }
}
