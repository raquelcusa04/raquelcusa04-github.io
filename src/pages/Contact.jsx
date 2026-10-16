import { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

export default function Contact() {
return (
<div className="contact-section">
    <motion.svg
    viewBox="0 0 393 517"
    preserveAspectRatio="none"
    className="bg-contact"
    initial={{ y: '100%', opacity: 1 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, ease: [0.16, 0.5, 0.3, 1] }}
    >
    <path
        d="M0.458008 0.0947266C80.5807 16.9917 114.065 75.6345 195.949 75.917C278.414 76.2012 312.407 16.9781 393.003 0.19043L393.003 516.998H0L0 0C0.152501 0.0320578 0.305325 0.0625277 0.458008 0.0947266Z"
        fill="#4D2030"
    />
    </motion.svg>

    <motion.div
    className="contact-ticket-body"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
    >

    <div className="contact-bottom">
        <div className="header-bottom">
        <p className="availability-text">AVAILABLE FOR NEW PROJECTS!</p>
        <p className="place-text">Barcelona, ES</p>
        </div>

        <div className="contact-content">
        <img src="/contact/photo-contact.JPEG" alt="Line" className="contact-svg" />
        <div>
            <p className="name-contact">Raquel Cuenca Santed</p>
            <p className="mail-contact">raquelcusa04@gmail.com</p>
        </div>
        </div>
        
        <h6 className="cta-text">Let's connect & explore my background ;)</h6>
        <div className="contact-links">
        
        {/* LinkedIn */}
        <a
            href="https://www.linkedin.com/in/raquel-cuenca-santed/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-logo-link"
            aria-label="LinkedIn profile"
        >
            <img src="/contact/linkedin-logo.svg" alt="Linkedin Logo" className="svg-icon" />
        </a>

        {/* CV link pdf*/}
        <a
            href="/CV-Raquel-Cuenca.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="cv-logo-link"
            aria-label="Download CV"
        >
            <img src="/contact/cv-logo.svg" alt="CV Logo" className="svg-icon" />
        </a>
        </div>
    </div>
    </motion.div>
</div>
);
}