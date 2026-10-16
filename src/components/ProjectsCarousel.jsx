import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData.js';
import './ProjectCarousel.css';

export default function ProjectsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);


  const displayedProjects = projectsData.slice(0, 3);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % displayedProjects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + displayedProjects.length) % displayedProjects.length);
  };


  const handleDragEnd = (_, info) => {
    if (info.offset.x < -35) handleNext();
    else if (info.offset.x > 35) handlePrev();
  };

  const currentProject = displayedProjects[currentIndex];

  return (
    <div className="carousel-wrapper">
      {/* Interactive track */}
      <motion.div 
        className="carousel-track"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragEnd={handleDragEnd}
      >
        {displayedProjects.map((project, index) => {
          const offset = index - currentIndex;
          const isCenter = offset === 0;

          return (
            <motion.div
              key={project.id}
              className={`project-card ${isCenter ? 'is-active' : ''}`}
              animate={{
                x: offset * 135, 
                scale: isCenter ? 1.2 : Math.abs(offset) === 1 ? 0.88 : 0.72,
                opacity: isCenter ? 1 : Math.abs(offset) === 1 ? 0.6 : 0.35,
                zIndex: 10 - Math.abs(offset),
              }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="card-image-wrapper">
                <img src={project.cover} alt={project.title} />
                <h2 className="card-tag">{project.tag}</h2>
              </div>
              
            </motion.div>    
          );
        })}
      </motion.div>

      {currentProject && (
        <div className="card-info">
          <h3 className="card-title">{currentProject.title}</h3>
          <p className="card-description">{currentProject.description}</p><br/>
          <Link to={`/work/${currentProject.id}`} className="view-project-btn">
            Open
          </Link>
        </div>
      )}
    </div>
  );
}