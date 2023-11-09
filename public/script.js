//  click event "scrapeButton"
document.getElementById("scrapeButton").addEventListener("click", async () => {
    // Extract the keyword from the input field
    const keyword = document.getElementById("keyword").value;

    // Display an alert if no keyword is provided
    if (!keyword) {
        alert("Please enter a keyword");
        return;
    }

    try {
        const response = await fetch(`/api/scrape?keyword=${keyword}`);
        const data = await response.json();

        // Access the HTML container element
        const resultsContainer = document.getElementById("results");
        resultsContainer.innerHTML = "";

        // Display a message if no products are found
        if (data.length === 0) {
            resultsContainer.innerHTML = "<p>No products found.</p>";
        } else {
            // Create a list and populate it with product details h2, p , p e img
            const ul = document.createElement("ul");
            data.forEach((product) => {
                const li = document.createElement("li");
                li.innerHTML = `
                  <h2>${product.title}</h2>
                  <p>Rating: ${product.rating}</p>
                  <p>Reviews: ${product.reviews}</p>
                  <img src="${product.image}" alt="${product.title}">
              `;
                ul.appendChild(li);
            });
            resultsContainer.appendChild(ul);
        }
    } catch (error) {
        // errors
        console.error(error);
        alert("An error occurred while scraping Amazon");
    }
});
