import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { sendOtp, verifyOtp } from './otp-service.js';

const app = express();

// Detailed CORS options
const corsOptions = {
  origin: 'http://127.0.0.1:5500',  // Your frontend URL
  methods: 'GET,POST',
  allowedHeaders: 'Content-Type',
};

app.use(cors(corsOptions));
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
