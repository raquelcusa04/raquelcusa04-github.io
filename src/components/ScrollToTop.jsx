import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
const { pathname } = useLocation();

useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    const scrollableContainers = document.querySelectorAll(
    '.home-wrapper, .about-section, .work-section, .project-detail-container, .contact-section'
    );

    scrollableContainers.forEach((container) => {
    container.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    });
}, [pathname]);

return null;
}