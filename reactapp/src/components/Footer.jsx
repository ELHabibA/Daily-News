import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <nav>
                <ul>
                    <li><a href="/kundservice">Kundservice</a></li>
                    <li><a href="/vanliga-fragor">Vanliga fragor</a></li>
                    <li><a href="/villkor">Villkor</a></li>
                    <li><a href="/bli-medlem">Bli medlem</a></li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;