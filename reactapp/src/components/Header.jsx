import React from 'react';
import Navigation from './Navigation';
import SocialButtons from './SocialButtons';
import './Header.css';



const Header = () => {
    return (
        <header>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />

            <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-red bg-black border-bottom box-shadow mb-3">
                <div className="header-container">
                    <a className="navbar-brand" href="/">
                        <span className="logo-decoration">Daily News</span>
                    </a>

                    <div className="custom-header-items">
                        <Navigation />
                    </div>

                    <div className="custom-header-items">
                        <SocialButtons />
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header; 
