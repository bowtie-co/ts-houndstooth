import React, { Fragment, useEffect } from 'react';
// import { WithLoader } from '../Global';
import { pubnub } from '../../lib';
// import { createOrUpdate } from '../../lib/helpers';

export const WithServicePubnub = ({ children, api, serviceName, ...props }) => {
  useEffect(() => {
    if (!pubnub) {
      console.debug('Skip effect, PubNub is not configured');
      return;
    }

    const listener = {
      status: (statusEvent) => {
        console.debug('PN Status', statusEvent);
      },
      message: (msg) => {
        const { channel, message } = msg;
        const { action, subject } = message;

        if (message.service !== serviceName) {
          console.debug('Ignoring message', message);
          return;
        }

        console.debug('MSG', { channel, action, subject });

        switch (channel) {
          case 'builds':
            // setBuilds(createOrUpdate(builds, subject));
            break;
          case 'deploys':
            // setDeploys(createOrUpdate(deploys, subject));
            break;
          default:
            console.warn('Received message for unexpected channel:', channel);
            break;
        }
      }
    };

    pubnub.addListener(listener);

    return () => {
      pubnub.removeListener(listener);
    };
  }, [serviceName]);

  return <Fragment />;
};
