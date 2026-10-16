import { motion } from 'framer-motion';
import './Home.css';
import ProjectsCarousel from '../components/ProjectsCarousel';

export default function Home() {

const handleScrollClick = () => {
  document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' });
};

return (
  <div className="home-wrapper">

    <section className="home-section">
    
      <div className="hero-text">
        <h1>Digital Media Designer</h1><br/><br/>
        <h2>Portfolio</h2> 
        <motion.div
        className="delayed-intro"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
      >
        <h3>Hi, I'm Raquel!</h3>
      </motion.div>
      </div>
      
      <svg
      viewBox="0 0 393 764" 
      preserveAspectRatio="none" 
      className="bg-home"
      >
      <path
          d="M0 0H393L393 763.493C312.878 746.596 279.394 687.953 197.51 687.671C114.891 687.386 80.9237 746.834 0.000976562 763.493L0 763.494L0 0Z"
          fill="#4D2030" 
      />
      </svg>
      
        <motion.div
          className="scroll-indicator"
          onClick={handleScrollClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.7 }}
          style={{ cursor: 'pointer' }}
        >

          <p className="scroll-word">Scroll</p>
          <motion.span
            className="arrow-down"
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            ↓
          </motion.span>
        </motion.div>     
    </section>

    <section id="projects-section" className="scroll-section">
      <h4 className="projects-title">OUTSTANDING PROJECTS</h4>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        
        <ProjectsCarousel />
        
      </motion.div>

      <motion.svg
      viewBox="0 0 393 78" 
      preserveAspectRatio="none" 
      className="bg-home-footer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
      >
      <path
          d="M0 77.6836C73.5656 61.8184 115.437 -0.281821 197.5 0.000976562C279.385 0.283258 312.877 61.103 393 78L0 78V77.6836Z"
          fill="#4D2030" 
      />
    </motion.svg>
      <motion.div
        className="home-footer-cta"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="text-footer">Raquel Cuenca Santed</p>
      </motion.div>

    </section>

  </div>
);
}