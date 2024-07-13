import React from 'react';
import Logo from '../img/logo.png';

const Footer = () => {
    return (
        <footer>
            <img src={Logo} alt="logo" />
            <span className="text">All Rights Reserved 2024</span>
        </footer>
    );
}

export default Footer;
