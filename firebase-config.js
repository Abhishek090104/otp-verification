import admin from 'firebase-admin';
import * as dotenv from 'dotenv';
dotenv.config();

// Read and parse the service account key JSON from environment variables
const serviceAccount = JSON.parse(Buffer.from(process.env.FIREBASE_SERVICE_ACCOUNT_KEY_JSON, 'base64').toString('utf8'));

const firebaseConfig = {
  credential: admin.credential.cert(serviceAccount),
  databaseURL: `https://${projectId}.firebaseio.com`,
};

// Initialize Firebase Admin SDK
admin.initializeApp(firebaseConfig);

export default admin;


