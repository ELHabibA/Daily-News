import React, { useState, useEffect } from 'react';
import './LatestNews.css';

const LatestNews = () => {
    const [latestArticles, setLatestArticles] = useState([]);

    useEffect(() => {
        fetchLatestArticles();
    }, []);

    const fetchLatestArticles = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch('/home/LatestNews', { headers: { 'Authorization': `Bearer ${token}` } });
            if (response.ok) {
                const data = await response.json();
                setLatestArticles(data);
            } else {
                console.error('Failed to fetch latest articles');
            }
        } catch (error) {
            console.error('Error fetching latest articles:', error);
        }
    };

    return (
        <div className="latest-news">
            <h2 className="latest-title">Senaste nytt</h2>
            {latestArticles.map((article) => (
                <div key={article.title} className="latest-article">
                    <h3>{article.title}</h3>
                    <p>{article.summary}</p>
                    <a href={article.link} target="_blank" rel="noopener noreferrer">
                        Läs mer
                    </a>
                </div>
            ))}
        </div>
    );
};

export default LatestNews;