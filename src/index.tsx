import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import { auth, routes } from './lib';
import { WithRoutes, WithErrorBoundary } from './ecosystems';

const props = {
  auth,
  routes
};

const AppWithErrorBoundary: FC<{}> = () => (
  <WithErrorBoundary>
    <WithRoutes {...props} />
  </WithErrorBoundary>
);

ReactDOM.render(<AppWithErrorBoundary />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
