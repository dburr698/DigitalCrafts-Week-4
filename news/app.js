const articlesUL = document.getElementById("articlesUL")

function displayArticles(articlesToDisplay) {
    let articles = articlesToDisplay.map(function(article) {
        return `
            <li>
                <div class="content">
                <h3>${article.title}</h3>
                <em>${article.author}</em>
                <p>${article.description}</p>
                <a href="${article.url}">Link to Article</a>
                <p>${article.publishedAt}</p>
                </div>
                <img src="${article.urlToImage}">    
            </li>
        `
    })
    articlesUL.innerHTML =articles.join("")

}

displayArticles(news.articles)


console.log(sources.sources)

