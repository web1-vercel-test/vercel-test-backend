const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/ping', (req, res) => res.json({ message: 'Backend connected!' }));

module.exports = app;  // Vercel serverless export
