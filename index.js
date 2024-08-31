import express from 'express';
import bodyParser from 'body-parser';
import  sendOtp from './otp-service.js';
import { verifyOtp } from './otp-service.js';

const app = express();
app.use(bodyParser.json());

app.post('/send-otp', async (req, res) => {
  const { phoneNumber } = req.body;
  try {
    const result = await sendOtp(phoneNumber);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

app.post('/verify-otp', async (req, res) => {
  const { verificationId, otp } = req.body;
  try {
    const result = await verifyOtp(verificationId, otp);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
