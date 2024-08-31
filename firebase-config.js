import admin from 'firebase-admin';


const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY_JSON);


const firebaseConfig = {
  credential: admin.credential.cert(serviceAccount),
  databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`,
};


admin.initializeApp(firebaseConfig);

export default admin;
