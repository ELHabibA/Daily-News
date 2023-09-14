import React from 'react';
import './SocialButtons.css'; // Import the custom CSS file for social buttons

const SocialButtons = () => {
    const shareOnFacebook = () => {
        var articleUrl = encodeURIComponent(window.location.href);
        window.open('https://www.facebook.com/sharer/sharer.php?u=' + articleUrl, '_blank');
    };

    const shareOnTwitter = () => {
        var articleUrl = encodeURIComponent(window.location.href);
        var articleTitle = encodeURIComponent(document.title);
        window.open('https://twitter.com/intent/tweet?url=' + articleUrl + '&text=' + articleTitle, '_blank');
    };

    const printPage = () => {
        window.print();
    };

    return (
        <div className="custom-social-buttons">
            <button onClick={shareOnFacebook} className="btn btn-default btn-facebook"><i className="fab fa-facebook-f"></i></button>
            <button onClick={shareOnTwitter} className="btn btn-default btn-twitter"><i className="fab fa-twitter"></i></button>
            <button onClick={printPage} className="btn btn-default btn-print"><i className="fas fa-print text-primary"></i></button>
        </div>
    );
};

export default SocialButtons;
