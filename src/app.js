const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'Node.js CI/CD Lab',
        status: 'running',
    });
});

app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'ok',
    });
});

module.exports = app;