/*
- Set up a Node.js project with the necessary dependencies (express, axios, cheerio, etc.).
- $ npm install express axios cheerio
*/

const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

const app = express();
const port = process.env.PORT || 3000;

// Serve static 'public'
app.use(express.static("public"));

// Define a route for the scraping functionality
app.get("/api/scrape", async (req, res) => {
    try {
        const keyword = req.query.keyword;
        if (!keyword) {
            res.status(400).json({ error: "A keyword must be provided" });
            return;
        }

        // Construct the Amazon search URL
        const amazonURL = `https://www.amazon.com/s?k=${keyword}`;
        const response = await axios.get(amazonURL);

        // Load the HTML content of the search results page using Cheerio
        const html = response.data;
        const $ = cheerio.load(html);

        // Array product
        const products = [];

        // Iterate over each product element on the page
        $("div.s-result-item").each((_, element) => {
            // Extract product details: title, rating, reviews, and image URL
            const title = $(element).find("h2 a span").text();
            const rating = $(element).find("span.a-icon-alt").text();
            const reviews = $(element).find("span.a-size-base").text();
            const image = $(element).find("img.s-image").attr("src");

            // Push the extracted details to the 'products' array
            products.push({
                title,
                rating,
                reviews,
                image,
            });
        });

        // Send the extracted product details as a JSON response
        res.json(products);
    } catch (error) {
        // errors
        res.status(500).json({
            error: "An error occurred while scraping Amazon",
        });
    }
});

// Start the listen
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
