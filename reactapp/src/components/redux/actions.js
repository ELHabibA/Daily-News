// src/components/redux/actions.js
export const setArticles = (articles) => ({
    type: 'SET_ARTICLES',
    payload: articles,
});

export const setSelectedTopic = (topic) => ({
    type: 'SET_SELECTED_TOPIC',
    payload: topic,
});
