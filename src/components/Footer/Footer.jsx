import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h4>Social Media</h4>
        <ul>
          <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Contact Us</h4>
        <ul>
          <li>Email: <a href="mailto:info@careerguidance.com">info@careerguidance.com</a></li>
          <li>Phone: +91 532 1234567</li>
          <li>Address: A68 Delta-1, New Delhi</li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Policy</h4>
        <ul>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/terms-and-conditions">Terms & Conditions</a></li>
          <li><a href="/cookie-policy">Cookie Policy</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="/about-us">About Us</a></li>
          <li><a href="/careers">Careers</a></li>
          <li><a href="/faq">FAQ</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
