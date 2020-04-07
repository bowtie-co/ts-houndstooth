import { Notifier } from '@airbrake/browser';

const {
  REACT_APP_ENV,
  REACT_APP_PROFILE,
  REACT_APP_VERSION,
  REACT_APP_AIRBRAKE_ID = '1234',
  REACT_APP_AIRBRAKE_KEY = 'abc123'
} = process.env;

const airbrake = new Notifier({
  projectId: parseInt(REACT_APP_AIRBRAKE_ID),
  projectKey: REACT_APP_AIRBRAKE_KEY
});

airbrake.addFilter((notice) => {
  if (notice) {
    notice.context.profile = REACT_APP_PROFILE;
    notice.context.version = REACT_APP_VERSION || '0';
    notice.context.environment = REACT_APP_ENV || 'development';

    if (notice.context.environment === 'development') {
      notice.context.severity = 'warn';
    }
  }

  return notice;
});

export { airbrake };
