const express = require('express');

const app = express();

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK' });
});

app.post("/login", (req, res) => {
    const { username, password } = req.body;
    if (username && password) {
        res.status(200).json({ message: "Login successful", user: { username } });
    } else {
        res.status(401).json({ message: "Invalid credentials" });
    }
});

module.exports = app;
