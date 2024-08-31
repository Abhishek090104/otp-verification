import admin from './firebase-config.js';

export const sendOtp = async (phoneNumber) => {
  try {
    
    const userRecord = await admin.auth().createUser({ phoneNumber });
    return { message: 'OTP sent', userId: userRecord.uid };
  } catch (error) {
    throw new Error(error.message);
  }
};

export const verifyOtp = async (verificationId, otp) => {
  try {
    const credential = admin.auth.PhoneAuthProvider.credential(verificationId, otp);
    const user = await admin.auth().signInWithCredential(credential);
    return { message: 'OTP verified', user };
  } catch (error) {
    throw new Error(error.message);
  }
};
export default {sendOtp,verifyOtp};
