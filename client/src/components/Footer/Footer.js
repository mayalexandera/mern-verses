import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const links = [
  "Gift Cards",
  "Promotions",
  "Find a Store",
  "Become a Member",
  "Verses Journal",
];

const helpLinks = [
  "Order Status",
  "Shipping and Delivery",
  "Returns",
  "Payment Options",
  "Gift Card Balance",
  "Contact Us",
];

const aboutLinks = [
  "News",
  "Careers",
  "Investors",
  "Purpose",
  "Sustainability",
];

const subFooterMenu = [
  "Guides",
  "Terms of State",
  "Terms of Use",
  "Verses Privacy Policy",
  "CA Supply Chains Act",
];

const socialLinks = ["Twitter", "Facebook", "Youtube", "Instagram"];
const Footer = (props) => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-row'>
          <div className='footer-col col-md-9'>
            <div className='accordion-group'>
              <div className='footer-accordion'>
                <ul className='footer-links'>
                  {links.map((link, key) => (
                    <li key={key}>
                      <Link id='bold' to='/'>
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className='footer-accordion'>
                <ul className='footer-links'>
                  <li id='bold'>Get help</li>
                  {helpLinks.map((link, key) => (
                    <li key={key}>
                      <Link to='/'>{link}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className='footer-accordion'>
                <ul className='footer-links'>
                  <li id='bold'>About Verses</li>
                  {aboutLinks.map((link, key) => (
                    <li key={key}>
                      <Link to='/'>{link}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className='social-menu'>
            {/* <ul className='social-links'>
              {socialLinks.map((link, i) => (
                <li key={i}>
                  <a>{link.slice(0, 3)}</a>
                </li>
              ))}
            </ul> */}
          </div>
        </div>
        <div className='sub-footer'>
          <div className='sub-footer-col_1 '>
            © 2021 Verses, Inc. All Rights Reserved
          </div>
          <div className='sub-footer-col_2'>
            <ul className='sub-footer-menu'>
              {subFooterMenu.map((item, i) => (
                <li key={i}>
                  <Link to='/'>{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
