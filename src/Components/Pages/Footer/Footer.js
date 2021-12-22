import React from 'react';
import footer from './../../../Images/footer.jpg';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <p className="fst-italic mt-4 footer-desc">Copyright &copy; 2021 CodersWorld. All Rights Reserved</p>
            <img src={footer} alt=""/>
        </div>
    );
};

export default Footer;