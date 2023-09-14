import React, { useEffect } from 'react';
import './articles.css';
import Header from '../../components/Header'; // Import the Header component
import CommentSection from '../../components/CommentSection'; // Import the CommentSection component
import ScrollToTopButton from '../../components/ScrollToTopButton'; // Import the ScrollToTopButton component
import LatestNews from '../../components/LatestNews';
import { removeDuplicateTopics } from '../../components/removeDuplicateTopics'; // Update the import path

import Footer from '../../components/Footer';
import { useSelector, useDispatch } from 'react-redux';
import { setArticles, setSelectedTopic } from '../../components/redux/actions'; // Update the import path


// In order to use react hooks like the `useCookies` hook, the must use functional components.
// Functional components are the industry standard for the react components at the moment.
// Class components vs Functional components: https://www.geeksforgeeks.org/differences-between-functional-components-and-class-components/
const Articles = () => {
    const articles = useSelector(state => state.articles);
    const selectedTopic = useSelector(state => state.selectedTopic);
    const dispatch = useDispatch();
    const uniqueArticles = removeDuplicateTopics(articles);

    useEffect(() => {
        populateArticleData();
    }, [selectedTopic]);

    const populateArticleData = async () => {
        dispatch(setArticles([])); // Update Redux state with articles
        const url = selectedTopic ? `/home?topic=${selectedTopic}` : '/home';
        const token = localStorage.getItem('token');
        const response = await fetch(url, { headers: { 'Authorization': `Bearer ${token}` } });
        const data = await response.json();
        dispatch(setArticles(data)); // Update Redux state with articles
    };

    const renderArticlesTable = (uniqueArticles) => {
    const sortedArticles = articles.slice().sort((a, b) => {
        // Sort articles from newest to oldest based on the 'published' date
        return new Date(b.published) - new Date(a.published);
    });

    return (
        <div className="article-grid">
            {sortedArticles.map(article => (
                <div key={article.title} className="article-card">
                    {/* Visa respektiv bild baserat på ämne */}
                    {article.topic.includes('SamhalleKonflikter') && (
                        <img src="../../images/image1.jpg" alt="SamhalleKonflikter" />
                    )}
                    {article.topic.includes('Ekonomi') && (
                        <img src="/images/image2.jpg" alt="Ekonomi" />
                    )}
                    {article.topic.includes('Idrott') && (
                        <img src="/images/image3.jpg" alt="Idrott" />
                    )}
                    {article.topic.includes('Politik') && (
                        <img src="/images/image4.jpg" alt="Politik" />
                    )}
                    <h3 className="card-title">{article.title}</h3>
                    <div className="card-info">
                        <p className="card-summary">{article.summary}</p>
                        <p className="card-published">{article.published}</p>
                        <p className="card-topic">{article.topic.join(", ")}</p>
                        <a className="card-link" href={article.link} target="_blank" rel="noopener noreferrer">
                            Read more
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

    let contents = articles.length === 0
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        : renderArticlesTable(articles);

        return (
            <div>
                <Header /> {/* Include the Header component */}
                <div className="container">
                    <div className="article-list">
                        <h1 id="tabelLabel">Article List</h1>
                        <p>This component demonstrates fetching data from the server.</p>
                        {contents}
                    </div>
                    <div className="comment-section">
                        <LatestNews latestArticles={articles} /> {/* Pass articles as prop */}
                        <CommentSection /> {/* Include the CommentSection component */}
                    </div>
                    <div className="scroll-to-top-container">
                        <ScrollToTopButton /> {/* Include the ScrollToTopButton component */}
                    </div>
                </div>
                <footer>
                    <nav>
                        <ul>
                            <li><a href="/kundservice">Kundservice</a></li>
                            <li><a href="/vanliga-fragor">Vanliga fragor</a></li>
                            <li><a href="/villkor">Villkor</a></li>
                            <li><a href="/bli-medlem">Bli medlem</a></li>
                        </ul>
                    </nav>
                </footer>
            </div>


        );
    
}
export default Articles;

