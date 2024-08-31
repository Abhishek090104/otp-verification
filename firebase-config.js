import admin from 'firebase-admin';
import { readFileSync } from 'fs';
import { join } from 'path';

// Read and parse the service account key JSON from environment variables
const serviceAccount = JSON.parse(Buffer.from(process.env.FIREBASE_SERVICE_ACCOUNT_KEY_JSON, 'base64').toString('utf8'));

const firebaseConfig = {
  credential: admin.credential.cert(serviceAccount),
  databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`,
};

// Initialize Firebase Admin SDK
admin.initializeApp(firebaseConfig);

export default admin;

