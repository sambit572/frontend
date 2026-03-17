import React from 'react';
import {
  FaFacebookF, FaInstagram, FaTwitter,
  FaYoutube, FaLinkedinIn,
} from 'react-icons/fa';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import './Footer.css';

const quickLinks   = ['Our Approach', 'FAQs'];
const legalLinks   = ['Terms and Conditions', 'Refund Policy', 'Privacy Policy'];
const companyLinks = ['About Us', 'Awards & Reviews', 'Services', 'Help Desk'];
const categories   = ['DJ Services & Brass Band','Music Concert & Orchestra','Decor & Tenthouse','Photo & Videography','Food & Catering','Makeup & Beauty'];
const locations    = ['Bhubaneswar','Cuttack','Rourkela','Berhampur (Brahmapur)','Sambalpur','Balasore'];

const socialLinks = [
  { icon: <FaFacebookF />,  label: 'Facebook',  href: '#' },
  { icon: <FaInstagram />,  label: 'Instagram', href: '#' },
  { icon: <FaTwitter />,    label: 'Twitter',   href: '#' },
  { icon: <FaYoutube />,    label: 'YouTube',   href: '#' },
  { icon: <FaLinkedinIn />, label: 'LinkedIn',  href: '#' },
];

const AccordionRow = ({ label }) => (
  <li>
    <span>{label}</span>
    <i className="chev" aria-hidden="true">›</i>
  </li>
);

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <footer className="footer" role="contentinfo">

        {/* Animated background orbs */}
        <div className="footer__orb footer__orb--1" aria-hidden="true" />
        <div className="footer__orb footer__orb--2" aria-hidden="true" />
        <div className="footer__orb footer__orb--3" aria-hidden="true" />
        <div className="footer__scan"               aria-hidden="true" />

        {/* Top accent line */}
        <div className="footer__topline" aria-hidden="true" />

        {/* 1. App strip */}
        <div className="footer__app-strip">
          <p className="footer__app-label">Get the App</p>
          <div className="footer__app-buttons">
            <a href="#" className="footer__app-btn" aria-label="Download on the Apple App Store">
              <FaApple className="store-icon" />
              <span className="store-text">
                <small>Download on the</small>
                <strong>App Store</strong>
              </span>
            </a>
            <a href="#" className="footer__app-btn" aria-label="Get it on Google Play">
              <FaGooglePlay className="store-icon" />
              <span className="store-text">
                <small>Get it on</small>
                <strong>Google Play</strong>
              </span>
            </a>
          </div>
        </div>

        {/* 2. Main grid */}
        <div className="footer__main">
          <div className="footer__col">
            <h3 className="footer__col-title">Contact</h3>
            <div className="footer__contact-item">
              <span className="contact-icon"><MdEmail color="#F5A623" /></span>
              <a href="mailto:techsupport@eventsbridge.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                techsupport@eventsbridge.com
              </a>
            </div>
            <div className="footer__contact-item">
              <span className="contact-icon"><BsTelephoneFill color="#a78bfa" /></span>
              <a href="tel:+919348605002" style={{ color: 'inherit', textDecoration: 'none' }}>+91 9348605002</a>
            </div>
            <div className="footer__contact-item">
              <span className="contact-icon"><BsTelephoneFill color="#a78bfa" /></span>
              <a href="tel:+917008912849" style={{ color: 'inherit', textDecoration: 'none' }}>+91 70089 12849</a>
            </div>
            <div className="footer__contact-item">
              <span className="contact-icon"><MdLocationOn color="#06b6d4" /></span>
              <span>Bhubaneswar, Odisha</span>
            </div>
          </div>

          <div className="footer__col">
            <h3 className="footer__col-title">Quick Links</h3>
            <ul className="footer__link-list">
              {quickLinks.map(l => <li key={l}><a href="#">{l}</a></li>)}
            </ul>
          </div>

          <div className="footer__col">
            <h3 className="footer__col-title">Legal</h3>
            <ul className="footer__link-list">
              {legalLinks.map(l => <li key={l}><a href="#">{l}</a></li>)}
            </ul>
          </div>
        </div>

        {/* 3. Bottom grid */}
        <div className="footer__bottom-grid">
          <div className="footer__col">
            <h3 className="footer__col-title">Categories</h3>
            <ul className="footer__accordion-list">
              {categories.map(c => <AccordionRow key={c} label={c} />)}
            </ul>
          </div>
          <div className="footer__col">
            <h3 className="footer__col-title">Company</h3>
            <ul className="footer__link-list">
              {companyLinks.map(l => <li key={l}><a href="#">{l}</a></li>)}
            </ul>
          </div>
          <div className="footer__col">
            <h3 className="footer__col-title">Locations</h3>
            <ul className="footer__accordion-list">
              {locations.map(l => <AccordionRow key={l} label={l} />)}
            </ul>
          </div>
        </div>

        {/* 4. Brand + Social */}
        <div className="footer__social-bar">
          <span className="footer__brand" aria-label="EventsBridge">EventsBridge</span>
          <p className="footer__tagline">Bringing every event to life</p>
          <ul className="footer__social-icons" aria-label="Social media links">
            {socialLinks.map(({ icon, label, href }) => (
              <li key={label}>
                <a href={href} aria-label={label} target="_blank" rel="noopener noreferrer">{icon}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* 5. Copyright */}
        <div className="footer__copyright">
          <span>© {new Date().getFullYear()} EventsBridge. All rights reserved.</span>
          <span>
            <a href="#">Privacy</a><span className="dot" />
            <a href="#">Terms</a><span className="dot" />
            Made with ❤️ in <a href="#">Odisha</a>
          </span>
        </div>

      </footer>

      <button className="footer__scroll-top" onClick={scrollToTop} aria-label="Back to top">↑</button>
    </>
  );
};

export default Footer;
