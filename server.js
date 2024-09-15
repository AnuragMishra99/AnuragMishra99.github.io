const express = require('express');
const fetch = require('node-fetch');
const app = express();

// Your News API key
const apiKey = '4afa6e063794448b8bd10dd27bed94ee';

// Enable CORS for all requests
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

// Route to fetch news
app.get('/news', async (req, res) => {
    const query = req.query.q;
    const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch news' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
