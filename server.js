const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Use CORS to allow requests from your frontend
app.use(cors());

// Route to handle news requests
app.get('/news', async (req, res) => {
    const query = req.query.q;
    const apiKey = 'YOUR_NEWS_API_KEY'; // Replace with your actual NewsAPI key

    // Construct the News API URL
    const newsApiUrl = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;

    try {
        // Fetch data from the News API
        const response = await axios.get(newsApiUrl);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching news:', error);
        res.status(500).json({ message: 'Error fetching news' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Proxy server is running on port ${port}`);
});
