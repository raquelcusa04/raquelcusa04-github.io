import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './About.css';

export default function About() {
const [isEducationOpen, setIsEducationOpen] = useState(false);
return (
    <section className="about-section">
    {/* 1. bg-about tiquet movement */}
        <motion.svg
        viewBox="0 0 393 1604" 
        preserveAspectRatio="none" 
        className="bg-about"
        initial={{ y: '70%', opacity: 1 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 0.5, 0.3, 1] }}
        >
        <path
            d="M393 1604H0V0C80.1222 16.8972 113.606 75.539 195.49 75.8213C278.109 76.1059 312.078 16.6596 393 0V1604Z"
            fill="#4D2030"
        />
        </motion.svg>
    {/* header fixed */}
    <section className="about-header-container">
        
        <div className="about-photo">
        <img src="/about/bg-profile.svg" alt="Logo Raquel" className="bg-svg" />
        <img src="/about/photo-cv.png" alt="Profile" className="profile-image" />
        </div>

        <div className="about-title">
            <h3 className="about-name">Raquel<br />Cuenca Santed</h3>
            <h4 className="about-profession">Digital Media Designer</h4>
        </div>   
    </section>
    
    {/* Content fade-in*/}
    <motion.div
        className="about-ticket-body"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
    >
        <section className="about-education">
        <h5 className="title">EDUCATION</h5>
        <div 
        className="degree-card" 
        onClick={() => setIsEducationOpen(!isEducationOpen)}
        >
        <div className="degree-header">
            <p className="degree">
            Digital Design and Multimedia Technologies | UPC - CITM, Terrassa | 2022 - 2026
            </p>
            <motion.span 
            className="accordion-icon"
            animate={{ rotate: isEducationOpen ? 180 : 0 }}
            transition={{ duration: 0.25 }}
            >
            ▼
            </motion.span>
        </div>

        {/* Hided content */}
        <AnimatePresence initial={false}>
            {isEducationOpen && (
            <motion.div
                className="degree-details"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
            >
                <div className="degree-inner-content">
                <p><strong>Studies:</strong> Data Visaulization, Graphic Interface Design (UI/UX), Audiovisual Production and Realization</p>
                <p><strong>Focus Area:</strong> Strategic Communication, Audiovisual Design, Creative Direction</p>
                </div>
            </motion.div>
            )}
        </AnimatePresence>
        </div>
    </section>
    
    <section className="skills-grid"> 
        
        <h5 className="title">TECHNICAL SKILLS</h5>
        <section className="technical-skills">
        <div className="card">
        <h6 className="software-skills">SOFTWARES</h6>

            <div className="marquee-container">
            <motion.div
                className="marquee-track"
                animate={{ x: ['0%', '-50%'] }}
                transition={{
                repeat: Infinity,
                ease: 'linear',
                duration: 60, 
                }}
            >
                {/* loop*/}
                <img src="/about/softwares-skills.svg" alt="Softwares Skills" className="marquee-item" />
                <img src="/about/softwares-skills.svg" alt="Softwares Skills" className="marquee-item" />
                <img src="/about/softwares-skills.svg" alt="Softwares Skills" className="marquee-item" />
                <img src="/about/softwares-skills.svg" alt="Softwares Skills" className="marquee-item" />
            </motion.div>
            </div>
            <motion.div
            className="program-delayed"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
                    >
            <h6 className="languages-skills">PROGRAMMING LANGUAGES</h6> 
            <img src="/about/languages-skills.svg" alt="Languages Skills" className="languages-skills-svg" />
            </motion.div>
            
        </div>
        </section>  

            <h5 className="title">SOFT SKILLS</h5>
            <section className="soft-skills">
            <div className="card">
                <div className="soft-skills-cluster">
                
                {/* 1. DALT ESQUERRA */}
                <motion.div
                    className="pill-bubble pill-outline"
                    initial={{ x: 0, y: 0, scale: 0.4, opacity: 0 }}
                    whileInView={{ x: -80, y: -55, scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.8, margin: "-170px" }}
                    transition={{ duration: 2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                <img src="/about/border-soft-skills.svg" alt="" className="pill-svg" />
                <span className="pill-text pill-text-outline">Collaborative</span>
            
                </motion.div>

                {/* 2. DALT DRETA */}
                <motion.div
                    className="pill-bubble pill-outline"
                    initial={{ x: 0, y: 0, scale: 0.4, opacity: 0 }}
                    whileInView={{ x: 80, y: -55, scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.8, margin: "-170px" }}
                    transition={{ duration: 2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                <img src="/about/border-soft-skills.svg" alt="" className="pill-svg" />
                <span className="pill-text pill-text-outline">Polyvalent</span>
                </motion.div>

                {/* 3. CENTRE: Píndola farcida */}
                <motion.div
                    className="pill-bubble pill-filled"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.65 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                <img src="/about/bg-soft-skills.svg" alt="" className="pill-svg" />
                <span className="pill-text pill-text-filled">Resourceful</span>
                </motion.div>

                {/* 4. BAIX ESQUERRA */}
                <motion.div
                    className="pill-bubble pill-outline"
                    initial={{ x: 0, y: 0, scale: 0.4, opacity: 0 }}
                    whileInView={{ x: -80, y: 55, scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.8, margin: "-170px" }}
                    transition={{ duration: 2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                <img src="/about/border-soft-skills.svg" alt="" className="pill-svg" />
                <span className="pill-text pill-text-outline">Communication</span>
                </motion.div>

                {/* 5. BAIX DRETA */}
                <motion.div
                    className="pill-bubble pill-outline"
                    initial={{ x: 0, y: 0, scale: 0.4, opacity: 0 }}
                    whileInView={{ x: 80, y: 55, scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.8, margin: "-170px" }}
                    transition={{ duration: 2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                <img src="/about/border-soft-skills.svg" alt="" className="pill-svg" />
                <span className="pill-text pill-text-outline">Empathetic</span>
                </motion.div>

                </div>
            </div>
            </section>

            <h5 className="title">LANGUAGES</h5>
            <section className="languages">
            <div className="card">
                <div className="card-languages">
                <p className="language-name">Spanish</p>
                <p className="language-name">Catalan</p>
                <p className="language-name">English</p>
                
                <p className="language-level">Native</p>
                <p className="language-level">Native</p>
                <p className="language-level">C1</p>
                </div>
            
            </div>
            </section>
    </section>
    </motion.div>
    </section>
);
}