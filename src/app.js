const express = require('express');
const app = express();

// Defina o limite para aceitar grandes payloads (por exemplo, 10mb)
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

module.exports = app;
