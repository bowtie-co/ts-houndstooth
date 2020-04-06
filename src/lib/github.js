import { GitHub } from '@bowtie/houndstooth-sdk';
import { storage } from './storage';

export const github = new GitHub({ token: storage.get('access_token') });
