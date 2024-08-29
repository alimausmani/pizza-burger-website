

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>Pizz'a and Burgers Hurt</h2>
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="https://policies.google.com/privacy?hl=en-US">Privacy</a></li>
            <li><a href="https://policies.google.com/privacy?hl=en-US#infochoices">Policy</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/facebook.png" alt="Facebook" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="/twitter.png" alt="Twitter" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/instagram.png" alt="Instagram" />
          </a>
          <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
            <img src="/github.png" alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin.png" alt="LinkedIn" />
          </a>
        </div>
        <div className="footer-menu">
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/gallery">Our Gallery</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright 2018. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;