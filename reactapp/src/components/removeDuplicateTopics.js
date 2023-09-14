// src/utils/articleUtils.js

export function removeDuplicateTopics(articles) {
    const uniqueArticles = articles.map((article) => ({
        ...article,
        topic: [...new Set(article.topic)],
    }));
    return uniqueArticles;
}
