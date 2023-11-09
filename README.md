# Amazon Scraper - Web

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.0/css/all.min.css">
<h1 align="center">
  <img src="./public/AmazonLogo.png" alt="Imagem da amazon" width="250" height="200" style="border-radius: 50;">
</h1>

# This is an Amazon product scraper, consisting of a Node.js backend and frontend in a web interface Node.js

## Objective

Create a simple script to scrape Amazon product listings from the first page of search results for a given keyword.

-   for the vacancy - Full Stack Developer Internship Task

## 🔎 How to use instructions

### Make sure you have Node.js installed

<pre>
 Link: https://nodejs.org/en
</pre>

### Clone this repository

<pre>
$ git clone https://github.com/GabrielAlvesGit/AmazonScraperNode.js.git
</pre>

### Navigate to the directory

<pre>
$ cd your-repository
</pre>

### Install dependencies

<pre>
$ npm init -y
$ npm install express axios cheerio
</pre>

### Start the project with the command - ( Start the server)

<pre>
$ node server.js
</pre>

### the page will be available at

<pre>
 Google chrome: http://localhost:3000
</pre>

## 🔧 Task Requirements

1. **Backend (Node.js):**
    - Set up a Node.js project with the necessary dependencies (`express`, `axios`, `cheerio`, etc.).
    - Write a script using `axios` to fetch the contents of the Amazon search results page for a given keyword.
    - Use `cheerio` to parse the HTML content and extract the following details for each product listing on the first page:
        - Product Title
        - Rating (stars out of five)
        - Number of reviews
        - Product image URL
    - Create an endpoint `/api/scrape` where a GET request with a query parameter `?keyword=yourKeyword` initiates the scraping process and returns the extracted data in JSON format.
2. **Frontend (HTML, CSS, JavaScript):**
    - Develop a simple webpage with:
        - An input field to enter the search keyword.
        - A button to initiate the scraping process.
    - Style the webpage to be user-friendly and presentable.
    - Implement JavaScript to make an AJAX call to the backend endpoint when the button is clicked, and display the results formatted cleanly on the page.

**Documentation:**

-   Provide comments within your code to offer clarity on your logic and process.
-   Include a [README.md](http://readme.md/) file with the setup and running instructions.

**Submission:**

-   Push your code to a GitHub repository and ensure it is accessible publicly.
-   Provide the link to the repository for evaluation.

**Considerations:**

-   Ensure you handle errors gracefully both on the backend and frontend.
-   Do not attempt to circumvent any of Amazon's scraping protections or Terms of Service.
-   Provide clear instructions on how to run the application.

## Project Development 💡

The project construction was divided into three stages. Initially, I dedicated time to fully comprehend what was being proposed. After this phase, I sought information by exploring documentation and videos to gain a better understanding of the proposed model.

The implementation posed challenges, especially because most of the documentation focused on bringing results to the console when accessing the Amazon site. Nevertheless, I persisted in the development, progressing to the practical part of the project.

In the third stage, I applied my logic to devise how the results would be returned to the web page after the user entered the product's name.

## 💻 Layout Node.js


https://github.com/GabrielAlvesGit/AmazonScraperNode.js/assets/102634725/e459d768-70ea-455d-8312-77576e824e82

