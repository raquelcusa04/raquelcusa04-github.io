import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData.js';
import './Work.css'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
    opacity: 1,
    transition: {
    staggerChildren: 0.08, 
    },
    },
};

const itemVariants = {
hidden: { opacity: 0, y: 20 },
visible: {
opacity: 1,
y: 0,
transition: { duration: 0.5, ease: 'easeOut' },
},
};

export default function Work() {
return(

<section className="work-section">
    <header className="work-header-container">
    <motion.svg
    viewBox="0 0 393 260" 
    preserveAspectRatio="none"
    className="bg-work"
    initial={{ y: '-70%', opacity: 1 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, ease: [0.16, 0.5, 0.3, 1] }}
    >
    <path
        d="M392.543 259.403C312.42 242.506 278.936 183.863 197.052 183.581C114.588 183.297 80.5948 242.52 0 259.308L0 0L393.001 0L393.001 259.498C392.848 259.466 392.696 259.436 392.543 259.403Z"
        fill="#4D2030"
    />
    </motion.svg>
    <motion.div
        className="work-ticket-body"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
        >
    <h5 className="text-header">A selection of projects I have worked on.</h5>
    </motion.div>
    </header>
    
    {/* wrap cards */}
    <section className="work-cards">
    <motion.div
    className="work-grid"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    >
        {projectsData.map((project) => (
        <motion.div 
            key={project.id} 
            variants={itemVariants}
            whileTap={{ scale: 0.96 }}
            className="grid-item-wrapper"
        >
            <Link to={`/work/${project.id}`} className="project-grid-card">
            {/* cover */}
            <div className="card-thumb">
                {project.cover && (
                <img src={project.cover} alt={project.title} loading="lazy" />
                )}
            </div>

            {/*Bottom wave zone */}
            <div className="card-details">
                <h6 className="card-title-work">{project.title}</h6>
                
                {project.icon && (
                <div className="card-center-icon">
                    <img src={project.icon} alt="" />
                </div>
                )}

                <h6 className="card-tag-work">{project.tag}</h6>
            </div>
            </Link>
        </motion.div>
        ))}
    </motion.div>
        
    </section>
</section>
);

}