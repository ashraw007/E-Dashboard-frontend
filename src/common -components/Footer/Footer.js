import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="social-icons">
          <a href="/facebook.com"><i className="fab fa-facebook-f"></i></a>
          <a href="/twitter.com"><i className="fab fa-twitter"></i></a>
          <a href="/instagram.com"><i className="fab fa-instagram"></i></a>
          <a href="/linkedin.com"><i className="fab fa-linkedin-in"></i></a>
        </div>
        <p>&copy; 2024 Ashish Singh Rawat. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
