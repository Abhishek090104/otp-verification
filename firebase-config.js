import admin from 'firebase-admin';
import { readFileSync } from 'fs';
import { join } from 'path';


const serviceAccountPath = join(process.cwd(), 'serviceAccountKey.json');
const serviceAccount = JSON.parse(readFileSync(serviceAccountPath, 'utf8'));

const firebaseConfig = {
  credential: admin.credential.cert(serviceAccount),
  databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`,
};

admin.initializeApp(firebaseConfig);

export default admin;
