import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const socialLinks = [
  { icon: <FaFacebookF />, label: 'Facebook', href: '#' },
  { icon: <FaInstagram />, label: 'Instagram', href: '#' },
  { icon: <FaTwitter />,   label: 'Twitter',  href: '#' },
  { icon: <FaYoutube />,   label: 'YouTube',  href: '#' },
];

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <footer className="footer" role="contentinfo">

        {/* ── Editorial headline strip ── */}
        <div className="footer__headline">
          <div>
            <h2 className="footer__brand-word">
              Events<em>Bridge</em>
            </h2>
            <span className="footer__brand-sub">Odisha's Premier Event Platform</span>
          </div>
          <div className="footer__cta-block">
            <p>Book premium event services anywhere across Odisha.</p>
            <button className="footer__btn">
              Get Started <span>→</span>
            </button>
          </div>
        </div>

        {/* ── Columns ── */}
        <div className="footer__grid">

          {/* About */}
          <div className="footer__col">
            <div className="footer__col-label">About</div>
            <p className="footer__desc">
              Your trusted platform for seamless, reliable, and unforgettable
              event experiences across the state of Odisha.
            </p>
            <ul className="footer__social">
              {socialLinks.map(({ icon, label, href }) => (
                <li key={label}>
                  <a href={href} aria-label={label} target="_blank" rel="noopener noreferrer">
                    {icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="footer__col">
            <div className="footer__col-label">Company</div>
            <ul className="footer__links">
              {['About Us', 'Services', 'FAQs', 'Help Desk'].map(link => (
                <li key={link}><a href="#">{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="footer__col">
            <div className="footer__col-label">Legal</div>
            <ul className="footer__links">
              {['Terms & Conditions', 'Privacy Policy', 'Refund Policy'].map(link => (
                <li key={link}><a href="#">{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <div className="footer__col-label">Contact</div>
            <ul className="footer__contact">
              <li>
                <span className="footer__contact-lbl">Email</span>
                <a href="mailto:techsupport@eventsbridge.com">
                  techsupport@eventsbridge.com
                </a>
              </li>
              <li>
                <span className="footer__contact-lbl">Phone</span>
                <a href="tel:+919348605002">+91 93486 05002</a>
              </li>
              <li>
                <span className="footer__contact-lbl">Location</span>
                <span>Bhubaneswar, Odisha</span>
              </li>
            </ul>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className="footer__bottom">
          <p className="footer__copy">
            © {new Date().getFullYear()} EventsBridge. All rights reserved.
          </p>
          <ul className="footer__bottom-links">
            {['Privacy', 'Terms', 'Sitemap'].map(link => (
              <li key={link}><a href="#">{link}</a></li>
            ))}
          </ul>
        </div>

      </footer>

      <button className="footer__scroll-top" onClick={scrollToTop} aria-label="Back to top">
        ↑
      </button>
    </>
  );
};

export default Footer;
