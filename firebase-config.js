import admin from 'firebase-admin';
import * as dotenv from 'dotenv';
dotenv.config();

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

const firebaseConfig = {
  credential: admin.credential.cert(serviceAccount),
  databaseURL: `https://${projectId}.firebaseio.com`,
};

admin.initializeApp(firebaseConfig);

export default admin;