import React from 'react';
import './Footer.scss';
import { FaFacebook, FaInstagram, FaTelegram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__content">
        <div className="footer__about">
          <h2>Dehqonobod</h2>
          <p>
            A beautiful and peaceful village surrounded by nature.
            We aim to share its culture, people, and the beauty of our land.
          </p>
        </div>

        <div className="footer__links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Nature</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer__social">
          <h3>Follow Us</h3>
          <div className="footer__icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTelegram /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Dehqonobod. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
