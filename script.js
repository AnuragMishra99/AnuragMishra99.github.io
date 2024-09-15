// Fetch news articles based on the search query
function fetchNews() {
    const query = document.getElementById('searchQuery').value;
    const newsArticles = document.getElementById('newsArticles');
    newsArticles.innerHTML = ''; // Clear previous search results

    if (!query) {
        alert('Please enter a keyword to search');
        return;
    }

    // API call to the proxy server
    const url = `https://your-proxy-server.com/news?q=${query}`; // Update with your actual proxy server URL

    // Fetch news articles from the proxy server
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.articles && data.articles.length > 0) {
                data.articles.forEach(article => {
                    const articleDiv = document.createElement('div');
                    articleDiv.classList.add('article');

                    const title = document.createElement('h3');
                    title.innerHTML = article.title;
                    articleDiv.appendChild(title);

                    const description = document.createElement('p');
                    description.innerHTML = article.description ? article.description : 'No description available';
                    articleDiv.appendChild(description);

                    const link = document.createElement('a');
                    link.href = article.url;
                    link.target = '_blank';
                    link.innerHTML = 'Read more';
                    articleDiv.appendChild(link);

                    newsArticles.appendChild(articleDiv);
                });
            } else {
                newsArticles.innerHTML = 'No articles found for this keyword.';
            }
        })
        .catch(error => {
            console.error('Error fetching the news:', error);
        });
}
