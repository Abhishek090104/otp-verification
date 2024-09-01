import admin from 'firebase-admin';
import * as dotenv from 'dotenv';
dotenv.config();

<<<<<<< HEAD
const serviceAccountKeyBase64 = process.env.FIREBASE_SERVICE_ACCOUNT_KEY_JSON;
const projectIdBase64 = process.env.FIREBASE_PROJECT_ID;

if (!serviceAccountKeyBase64 || !projectIdBase64) {
  throw new Error('Required environment variables are not set');
}

let serviceAccount;
let projectId;
try {
  
  const serviceAccountKey = Buffer.from(serviceAccountKeyBase64, 'base64').toString('utf8');
  serviceAccount = JSON.parse(serviceAccountKey);

  
  projectId = Buffer.from(projectIdBase64, 'base64').toString('utf8');
} catch (error) {
  throw new Error('Error parsing environment variables');
}
=======
// Read and parse the service account key JSON from environment variables
const serviceAccount = JSON.parse(Buffer.from(process.env.FIREBASE_SERVICE_ACCOUNT_KEY_JSON, 'base64').toString('utf8'));
>>>>>>> bca432266664ada233c25e619927e11a9a994d91

const firebaseConfig = {
  credential: admin.credential.cert(serviceAccount),
  databaseURL: `https://${projectId}.firebaseio.com`,
};

// Initialize Firebase Admin SDK
admin.initializeApp(firebaseConfig);

<<<<<<< HEAD
export default admin;
=======
export default admin;

>>>>>>> bca432266664ada233c25e619927e11a9a994d91
