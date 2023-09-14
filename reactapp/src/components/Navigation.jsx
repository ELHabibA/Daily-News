import React from 'react';
import './Navigation.css'; // Import the custom CSS file for navigation
import { useDispatch } from 'react-redux'; // Import useDispatch from react-redux
import { setSelectedTopic } from '../components/redux/actions'; // Import the action
import { Link } from 'react-router-dom';

const Navigation = () => {
    const dispatch = useDispatch(); // Get the dispatch function from Redux

    const handleTopicClick = (topic) => {
        dispatch(setSelectedTopic(topic)); // Dispatch the action to set the selected topic
    };

    const handleHomeClick = () => {
        dispatch(setSelectedTopic('')); // Reset selected topic to empty string
    };

    return (
        <ul className="navbar-nav flex-grow-1 custom-navigation">
            <li className="nav-item">
                <a className="nav-link text-light" onClick={handleHomeClick}>Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-light" onClick={() => handleTopicClick('SamhalleKonflikter')}>SamhalleKonflikter</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-light" onClick={() => handleTopicClick('Ekonomi')}>Ekonomi</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-light" onClick={() => handleTopicClick('Politik')}>Politik</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-light" onClick={() => handleTopicClick('Idrott')}>Idrott</a>
            </li>
        </ul>
    );
};


    export default Navigation;


/*
import React from 'react';
import './Navigation.css'; // Import the custom CSS file for navigation
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; // Import PropTypes

const Navigation = ({ handleTopicClick }) => {
    return (
        <ul className="navbar-nav flex-grow-1 custom-navigation">
            <li className="nav-item">
                <Link to="/" onClick={() => handleTopicClick('')}>Home</Link>
            </li>
            <li className="nav-item">
                <Link to="/" onClick={() => handleTopicClick('SamhalleKonflikter')}>SamhalleKonflikter</Link>
            </li>
            <li className="nav-item">
                <Link to="/" onClick={() => handleTopicClick('Ekonomi')}>Ekonomi</Link>
            </li>
            <li className="nav-item">
                <Link to="/" onClick={() => handleTopicClick('Politik')}>Politik</Link>
            </li>
            <li className="nav-item">
                <Link to="/" onClick={() => handleTopicClick('Miljo')}>Miljo</Link>
            </li>
        </ul>
    );
};

// Add prop validation
Navigation.propTypes = {
    handleTopicClick: PropTypes.func.isRequired
};

export default Navigation; */