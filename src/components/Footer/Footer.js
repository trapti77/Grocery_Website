// Footer.js
import React from "react";
import {
  FaTelegramPlane,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaTelegram,
  FaTumblr,
  FaWordpress,
  FaLinkedin,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Newsletter Subscription Section */}
      <div className="newsletter">
        <FaTelegramPlane className="newsletter-icon" />
        <span>Sign Up to Newsletter</span>
        <span className="highlight">
          ...and receive Rs. 20 coupon for first shopping
        </span>
        <div className="newsletter-input">
          <input type="email" placeholder="Your E-mail" />
          <button>SUBMIT</button>
        </div>
      </div>

      {/* Links and Information Section */}
      <div className="footer-content">
        <div className="footer-links">
          {/* <div className="link-group">
            <h4>About Agricoma</h4>
            <ul>
              <li>Agricoma Inside</li>
              <li>About Us</li>
              <li>Company</li>
              <li>Careers</li>
              <li>Brands</li>
            </ul>
          </div>

          <div className="link-group">
            <h4>Quick Links</h4>
            <ul>
              <li>Agricoma Inside</li>
              <li>About Us</li>
              <li>Company</li>
              <li>Careers</li>
              <li>Brands</li>
            </ul>
          </div>

          <div className="link-group">
            <h4>Quick Helps</h4>
            <ul>
              <li>Order Tracking</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Tutorials</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div className="link-group">
            <h4>Policies</h4>
            <ul>
              <li>Agricoma Inside</li>
              <li>About Us</li>
              <li>Company</li>
              <li>Careers</li>
              <li>Brands</li>
            </ul>
          </div>

          <div className="link-group">
            <h4>Brands</h4>
            <ul>
              <li>Agricoma Inside</li>
              <li>About Us</li>
              <li>Company</li>
              <li>Careers</li>
              <li>Brands</li>
            </ul>
          </div>

          <div className="link-group">
            <h4>Bestseller</h4>
            <ul>
              <li>Order Tracking</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Tutorials</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div className="link-group">
            <h4>Top Rated</h4>
            <ul>
              <li>Order Tracking</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Tutorials</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div className="link-group">
            <h4>Featured</h4>
            <ul>
              <li>Order Tracking</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Tutorials</li>
              <li>FAQ</li>
            </ul>
          </div>*/}
        </div>

        {/* Quality Section */}
        <div className="quality-section">
          <h4>Don't compromise on quality!</h4>
          <p>
            The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters. On the other hand, we denounce with
            righteous indignation ...
          </p>
          <div className="social-icons">
            <FaFacebook />
            <FaTwitter />
            <FaYoutube />
            <FaTelegram />
            <FaTumblr />
            <FaWordpress />
            <FaLinkedin />
          </div>
          <div className="contact-info">
            <p>Need help? Call now!</p>
            <p className="phone-number">+91 9893358946</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>@ Created By Pratima Gupta</p>
      </div>
    </footer>
  );
};

export default Footer;
