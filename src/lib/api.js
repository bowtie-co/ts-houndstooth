import Api from '@bowtie/api';
import { navigate } from 'hookrouter';
import { auth } from '.';

export const api = new Api({
  root: process.env.REACT_APP_API_BASE_URL || 'http://localhost:4000',
  stage: 'dev',
  prefix: 'api',
  version: 'v1',
  secureOnly: false,
  authorization: 'Bearer'
});

api.on('401', (resp) => {
  console.warn('401 - Unauthorized', resp);
  auth.logout();
  // navigate('/');
});
