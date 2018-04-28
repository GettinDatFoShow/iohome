import { PRIVATE_CONFIG } from './app.properties';

export const FIREBASE_CONFIG = {
    apiKey: PRIVATE_CONFIG.apiKey,
    authDomain: PRIVATE_CONFIG.authDomain,
    databaseURL: PRIVATE_CONFIG.databaseURL,
    projectId: PRIVATE_CONFIG.projectId,
    storageBucket: PRIVATE_CONFIG.storageBucket,
    messagingSenderId: PRIVATE_CONFIG.messagingSenderId
  };