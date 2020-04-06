import { Api, ApiConfig } from '@bowtie/ts-api';
// import { navigate } from 'hookrouter';
// import { auth } from '.';

export const api = new Api({
  base: process.env.REACT_APP_API_BASE_URL || 'http://localhost:4000',
  defaultOptions: {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + process.env.REACT_APP_API_AUTH_TOKEN
    }
  }
});

// api.on('401', (resp) => {
//   console.warn('401 - Unauthorized', resp);
//   auth.logout();
//   // navigate('/');
// });
