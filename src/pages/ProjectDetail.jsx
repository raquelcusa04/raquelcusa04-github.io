import { useParams, Link } from 'react-router-dom'; 
import { useState, useRef, useEffect } from 'react'; 
import { projectsData } from '../data/projectsData.js'; 
import './ProjectDetail.css'; 
import { motion, AnimatePresence, inView } from 'framer-motion'; 

export default function ProjectDetail() { 
const [activeSlide, setActiveSlide] = useState(0); 
const [activeProductionSlide, setActiveProductionSlide] = useState(0); 
const [activeGameSlide, setActiveGameSlide] = useState(0); 
const [selectedModal, setSelectedModal] = useState(null); 
const [modalImageIndex, setModalImageIndex] = useState(0); 


const [isMobile, setIsMobile] = useState( 
typeof window !== 'undefined' ? window.innerWidth < 768 : true 
); 

useEffect(() => { 
const handleResize = () => setIsMobile(window.innerWidth < 768); 
window.addEventListener('resize', handleResize); 
return () => window.removeEventListener('resize', handleResize); 
}, []); 

const resolveAsset = (asset) => 
{ 
if (!asset) return ''; 
if (typeof asset === 'object' && !Array.isArray(asset)) { 
    return isMobile ? (asset.mobile || asset.desktop) : (asset.desktop || asset.mobile); 
} 
return asset; 
}; 

const sliderRef = useRef(null); 
const productionSliderRef = useRef(null); 
const gameSliderRef = useRef(null); 

const { id } = useParams(); 
const project = projectsData.find((item) => item.id === id); 

if (!project) { 
return ( 
    <div className="project-not-found"> 
    <h2>Project not found</h2> 
    <Link to="/work">Back to Work</Link> 
    </div> 
); 
} 


const handleOpenModal = (item) => { 
setModalImageIndex(0); 
setSelectedModal(item); 
}; 

const prevModalImage = () => { 
setModalImageIndex((prev) => (prev === 0 ? modalImages.length - 1 : prev - 1)); 
}; 

const nextModalImage = () => { 
setModalImageIndex((prev) => (prev === modalImages.length - 1 ? 0 : prev + 1)); 
}; 

// Scroll Nimbo Slider 
const handleSlideScroll = () => { 
if (sliderRef.current) { 
    const { scrollLeft, offsetWidth } = sliderRef.current; 
    const index = Math.round(scrollLeft / offsetWidth); 
    setActiveSlide(index); 
} 
}; 

const scrollToSlide = (idx) => { 
if (sliderRef.current) { 
    sliderRef.current.scrollTo({ 
    left: idx * sliderRef.current.offsetWidth, 
    behavior: 'smooth' 
    }); 
    setActiveSlide(idx); 
} 
}; 

// Scroll Sofa Production Slider 
const handleProductionScroll = () => { 
if (productionSliderRef.current) { 
    const { scrollLeft, offsetWidth } = productionSliderRef.current; 
    const index = Math.round(scrollLeft / offsetWidth); 
    setActiveProductionSlide(index); 
} 
}; 

const scrollToProductionSlide = (idx) => { 
if (productionSliderRef.current) { 
    productionSliderRef.current.scrollTo({ 
    left: idx * productionSliderRef.current.offsetWidth, 
    behavior: 'smooth' 
    }); 
    setActiveProductionSlide(idx); 
} 
}; 

// Scroll Games Slider (Poketes / MediRush) 
const handleGameScroll = () => { 
if (gameSliderRef.current) { 
    const { scrollLeft, offsetWidth } = gameSliderRef.current; 
    const index = Math.round(scrollLeft / offsetWidth); 
    setActiveGameSlide(index); 
} 
}; 

const scrollToGameSlide = (idx) => { 
if (gameSliderRef.current) { 
    gameSliderRef.current.scrollTo({ 
    left: idx * gameSliderRef.current.offsetWidth, 
    behavior: 'smooth' 
    }); 
    setActiveGameSlide(idx); 
} 
}; 

// Visual Identity Slider
const handleScrollVisual = (direction) => {
if (sliderRef.current) {
    const amount = direction === 'left' ? -sliderRef.current.clientWidth : sliderRef.current.clientWidth;
    sliderRef.current.scrollBy({ left: amount, behavior: 'smooth' });
}
};

// Production Slider
const handleScrollProduction = (direction) => {
if (productionSliderRef.current) {
    const amount = direction === 'left' ? -productionSliderRef.current.clientWidth : productionSliderRef.current.clientWidth;
    productionSliderRef.current.scrollBy({ left: amount, behavior: 'smooth' });
}
};

// Game Slider
const handleScrollGame = (direction) => {
if (gameSliderRef.current) {
    const amount = direction === 'left' ? -gameSliderRef.current.clientWidth : gameSliderRef.current.clientWidth;
    gameSliderRef.current.scrollBy({ left: amount, behavior: 'smooth' });
}
};

const formatText = (content) => { 
if (!content) return null; 
const parts = content.split(/\*\*(.*?)\*\*/g); 

return parts.map((part, index) => 
    index % 2 === 1 ? ( 
    <span key={index} className="highlighted-word"> 
        {part} 
    </span> 
    ) : ( 
    part 
    ) 
); 
}; 

const galleryImages = project.gallery || []; 

const hasSecondScreen = Boolean(project.demo || galleryImages.length > 0); 
const hasExplanationScreen = Boolean( 
project.explanation1 || project.explanation2 || project.question || project.icon3 
); 

const getModalImages = () => { 
    if (!selectedModal || !selectedModal.fullImage) return []; 

    let target = selectedModal.fullImage; 

    if (typeof target === 'object' && !Array.isArray(target)) { 
    target = isMobile ? (target.mobile || target.desktop) : (target.desktop || target.mobile); 
    } 

    if (Array.isArray(target)) { 
    return target.map(resolveAsset).flat(); 
    } 

    if (typeof target === 'string' && target.trim() !== '') { 
    return [target]; 
    } 

    return []; 
}; 

const modalImages = getModalImages(); 

return ( 
<div className="project-detail-wrapper"> 
<section className="project-detail-container"> 
    <motion.svg 
    viewBox="0 0 393 729" 
    preserveAspectRatio="none" 
    className="bg-project-detail-svg" 
    initial={{ y: '-70%', opacity: 1 }} 
    animate={{ y: 0, opacity: 1 }} 
    transition={{ duration: 0.8, ease: [0.16, 0.5, 0.3, 1] }} 
    > 
    <path 
        d="M394.83 728.594C313.666 711.482 279.747 652.096 196.799 651.81C113.2 651.522 78.7758 711.587 -3 728.536L-3 -71C148.663 -70.149 247.027 -69.6794 396.12 -70.8184L396.12 728.862C395.691 728.773 395.261 728.685 394.83 728.594Z" 
        fill="#4D2030" 
    /> 
    </motion.svg> 

    {/* FIRST SCREEN : Cover*/} 
    <div className="scroll-section"> 
    <motion.div 
        className="project-ticket-body" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }} 
    > 
        <header className="project-header"> 
        <div className="project-title-header"> 
            <h1 className="project-title">{project.title}</h1> 
            {project.icon && <img src={project.icon} alt={project.title} className="img-svg" />} 
        </div> 

        <div className="subtitle"> 
        {project.tag && <h2 className="project-tag">{project.tag}</h2>} 
        <h2 className="project-tag">{project.year}</h2> 
        </div> 
        <div className="items-wrap"> 
            {project.softwares && project.softwares.length > 0 && ( 
            <> 
                <h5 className="used">SOFTWARES USED</h5> 
                {project.softwares.map((imgSrc, index) => ( 
                <img 
                    key={index} 
                    src={imgSrc} 
                    alt={`${project.title} software ${index + 1}`} 
                    className="item-svg" 
                /> 
                ))} 
            </> 
            )} 

            {project.languages && project.languages.length > 0 && ( 
            <> 
                <h5 className="used">PROGRAMMING LANGUAGES USED</h5> 
                {project.languages.map((imgSrc, index) => ( 
                <img 
                    key={index} 
                    src={imgSrc} 
                    alt={`${project.title} language ${index + 1}`} 
                    className="item-svg" 
                /> 
                ))} 
            </> 
            )} 
        </div> 

        {project.introduction && ( 
            <p className="project-summary">{formatText(project.introduction)}</p> 
        )} 
        </header> 
    </motion.div> 

    {(project.imageSequence || project.detail || project.cover) && ( 
        <motion.div 
        className="nimbo-delay" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.7, duration: 1, ease: 'easeOut' }} 
        > 
        {project.imageSequence ? ( 
            <img 
            src={project.imageSequence} 
            alt={`${project.title} animation`} 
            className="project-gif-media" 
            /> 
        ) : ( 
            <img 
            src={project.detail || project.cover} 
            alt={project.title} 
            className="project-cover-default" 
            /> 
        )} 
        </motion.div> 
    )} 
    </div> 

    {/* SECOND SCREEN: Bezel Demo (Video) OR Grid 2 Columns (Frames)*/} 
    {hasSecondScreen && ( 
    <div className="scroll-section-demo"> 
        <section className="project-body"> 
        {project.demo ? ( 
            <div className={!isMobile && project.id === 'nimbo' ? 'desktop-mockup-wrapper' : 'phone-mockup-wrapper'}> 
                <img 
                src={ 
                    project.bezel 
                    ? resolveAsset(project.bezel) 
                    : !isMobile && project.id === 'nimbo' 
                    ? '/work/desktop-frame.svg' 
                    : '/work/iphone18-bezel-glacier.svg' 
                } 
                alt={!isMobile && project.id === 'nimbo' ? 'Desktop Frame' : 'Phone Bezel'} 
                className={!isMobile && project.id === 'nimbo' ? 'desktop-bezel-frame' : 'phone-bezel-frame'} 
                loading="lazy" 
                decoding="async" 
                /> 
                <video 
                key={resolveAsset(project.demo)} 
                src={resolveAsset(project.demo)} 
                className={!isMobile && project.id === 'nimbo' ? 'video-presentation-desktop' : 'video-presentation'} 
                preload="auto" 
                autoPlay 
                loop 
                muted 
                playsInline 
                webkit-playsinline="true" 
                /> 
            </div> 
            ) : ( 
            <div className="images-flex-grid"> 
            {galleryImages.slice(0, 12).map((imgUrl, idx) => ( 
                <div key={idx} className="grid-item"> 
                <img 
                    src={imgUrl.startsWith('/') ? imgUrl : `/${imgUrl}`} 
                    alt={`${project.title} visual ${idx + 1}`} 
                    loading="lazy" 
                    decoding="async" 
                /> 
                </div> 
            ))} 
            </div> 
        )} 
        </section> 
    </div> 
    )} 

    {/* THIRD SCREEN: EXPLANATIONS (1,2) */} 
    {hasExplanationScreen && ( 
    <div className="scroll-section-description"> 
        <section className="project-description"> 
        {project.explanation1 && ( 
            <motion.div 
            className="explanation1-ticket-body" 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, amount: 0.1 }} 
            transition={{ duration: 0.6, delay: 0.2 }} 
            > 
            <h4>{formatText(project.explanation1)}</h4> 
            </motion.div> 
        )} 

        {(project.explanation2 || project.icon2) && ( 
            <motion.div 
            className="explanation2-ticket-body" 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, amount: 0.1 }} 
            transition={{ duration: 0.6, delay: 0.4 }} 
            > 
            {project.id === 'nimbo' && <h5>THREE MAIN AREAS</h5>} 

            <div className="project-summary"> 
                {project.explanation2 && ( 
                <p className="project-explanation2">{formatText(project.explanation2)}</p> 
                )} 
                {project.icon2 && ( 
                <img 
                    src={project.icon2} 
                    alt={project.title} 
                    className="img-icons-svg" 
                    loading="lazy" 
                    decoding="async" 
                /> 
                )} 
            </div> 
            </motion.div> 
        )} 

        {project.question && ( 
            <div className="project-question-box"> 
            <p className="question-text">{formatText(project.question)}</p> 
            </div> 
        )} 

        {project.icon3 && ( 
            <img 
                src={project.icon3} 
                alt={project.title} 
                className="img-icon3-svg" 
                loading="lazy" 
                decoding="async" 
            /> 
        )} 
        </section> 
    </div> 
    )} 

    {/* FOURTH SCREEN (A): NIMBO VISUAL IDENTITY*/} 
    {project.visualIdentitySlides && ( 
    <div className="scroll-section-visual-identity"> 
        <div className="visual-identity-wrapper"> 
            <h3 className="section-main-heading">Design System</h3> 

            <div className="visual-identity-desktop-layout"> 
                {/* left column PC >= 1440px */} 
                <div className="visual-left-col"> 
                    <div className="top-card-container"> 
                        <button 
                            className="slider-nav-btn prev" 
                            onClick={() => handleScrollVisual('left')} 
                            aria-label="Previous slide"
                        >
                            ‹
                        </button>
                        <button 
                            className="slider-nav-btn next" 
                            onClick={() => handleScrollVisual('right')} 
                            aria-label="Next slide"
                        >
                            ›
                        </button>

                        <div 
                            className="slides-track" 
                            ref={sliderRef} 
                            onScroll={handleSlideScroll} 
                        > 
                            {project.visualIdentitySlides.map((slide, index) => { 
                                const isFull = !slide.font || slide.type === 'palette'; 

                                return ( 
                                    <div key={index} className={`slide-item ${isFull ? 'item-full-space' : ''}`}> 
                                        <h4 className="slide-title">{slide.title}</h4> 

                                        <div className={`slide-media-box ${isFull ? 'media-box-full' : ''}`}> 
                                            {slide.isPanning ? ( 
                                                <div className="panning-viewport"> 
                                                    <motion.div 
                                                        className="panning-track" 
                                                        animate={{ x: ["0%", "-50%"] }} 
                                                        transition={{ 
                                                            repeat: Infinity, 
                                                            ease: "linear", 
                                                            duration: 27 
                                                        }} 
                                                    > 
                                                        <img src={slide.src} alt={slide.title} className="panning-img" loading="lazy" decoding="async" /> 
                                                        <img src={slide.src} alt={slide.title} className="panning-img" loading="lazy" decoding="async" /> 
                                                        <img src={slide.src} alt={slide.title} className="panning-img" loading="lazy" decoding="async" /> 
                                                    </motion.div> 
                                                </div> 
                                            ) : Array.isArray(slide.src) ? ( 
                                                <div className="multi-img-wrap"> 
                                                    {slide.src.map((s, i) => ( 
                                                        <img key={i} src={s} alt="" className="slide-img-multi" loading="lazy" decoding="async" /> 
                                                    ))} 
                                                </div> 
                                            ) : ( 
                                                <img 
                                                    src={slide.src} 
                                                    alt={slide.title} 
                                                    className={`slide-img ${isFull ? 'slide-img-full' : ''}`} 
                                                    loading="lazy" 
                                                    decoding="async" 
                                                /> 
                                            )} 
                                        </div> 

                                        {slide.font && ( 
                                            <div className="slide-font-tag"> 
                                                <span className="font-lbl">Font</span> 
                                                <span className="font-val">{slide.font}</span> 
                                            </div> 
                                        )} 
                                    </div> 
                                ); 
                            })} 
                        </div> 
                    </div>

                    <div className="slider-dots"> 
                        {project.visualIdentitySlides.map((_, dotIdx) => ( 
                            <button 
                                key={dotIdx} 
                                className={`dot-pill ${activeSlide === dotIdx ? 'is-active' : ''}`} 
                                onClick={() => scrollToSlide(dotIdx)} 
                                aria-label={`Go to slide ${dotIdx + 1}`} 
                            /> 
                        ))} 
                    </div> 

                    {project.extraSections && project.extraSections.find(item => item.id === 'dashboard') && (() => { 
                        const item = project.extraSections.find(item => item.id === 'dashboard'); 
                        return ( 
                            <div 
                                className="bento-card card-wide" 
                                onClick={() => handleOpenModal(item)} 
                            > 
                                <h4 className="bento-card-title">{item.title}</h4> 
                                <div className="dashboard-preview-wrap"> 
                                    {item.previewIcon && ( 
                                        <img src={item.previewIcon} alt="" className="dash-icons" loading="lazy" decoding="async" /> 
                                    )} 
                                    {item.previewMap && ( 
                                        <img src={item.previewMap} alt="" className="dash-map" loading="lazy" decoding="async" /> 
                                    )} 
                                </div> 
                            </div> 
                        ); 
                    })()} 
                </div> 

                {/* COLUMNA DRETA PC >= 1440px */} 
                <div className="visual-right-col"> 
                    {project.extraSections && project.extraSections.filter(item => item.id !== 'dashboard').map((item) => ( 
                        <div 
                            key={item.id} 
                            className="bento-card card-half" 
                            onClick={() => handleOpenModal(item)} 
                        > 
                            <div className="card-top-content"> 
                                {item.previewPlay && ( 
                                    <img 
                                        src={item.previewPlay} 
                                        alt={`${item.title} play icon`} 
                                        className="bento-play-svg" 
                                        loading="lazy" 
                                        decoding="async" 
                                    /> 
                                )} 
                                {item.previewData && ( 
                                    <img 
                                        src={item.previewData} 
                                        alt={`${item.title} data icon`} 
                                        className="bento-data-svg" 
                                        loading="lazy" 
                                        decoding="async" 
                                    /> 
                                )} 
                            </div> 
                            <h4 className="bento-card-title">{item.title}</h4> 
                        </div> 
                    ))} 
                </div> 
            </div> 
        </div> 
    </div> 
    )} 

    {/*  FOURTH SCREEN (B): THE FLAT'S SOFA PRODUCTION */} 
    {project.productionSlides && ( 
    <div className="scroll-section-production"> 
        <div className="production-wrapper"> 
            <h3 className="production-main-heading">Production Process</h3> 

            <div className="production-desktop-layout"> 
                {/* COLUMNA ESQUERRA PC >= 1440px: Card gran + Dots */} 
                <div className="production-left-col"> 
                    <div className="production-top-card"> 
        {/* Botons de navegació (visibles només en PC via CSS) */}
        <button 
            className="slider-nav-btn prev" 
            onClick={() => handleScrollProduction('left')} 
            aria-label="Previous slide"
        >
            ‹
        </button>
        <button 
            className="slider-nav-btn next" 
            onClick={() => handleScrollProduction('right')} 
            aria-label="Next slide"
        >
            ›
        </button>

        <div 
            className="production-slides-track" 
            ref={productionSliderRef} 
            onScroll={handleProductionScroll} 
        > 
            {project.productionSlides.map((slide, index) => ( 
                <div key={index} className="production-slide-item"> 
                    <h4 className="production-slide-title">{slide.title}</h4> 

                    <div className="production-media-box"> 
                        {Array.isArray(slide.src) ? ( 
                            <div className="production-multi-wrap"> 
                                {slide.src.map((s, i) => ( 
                                    <img key={i} src={s} alt="" className="production-img-half" loading="lazy" decoding="async" /> 
                                ))} 
                            </div> 
                        ) : ( 
                            <img 
                                src={slide.src} 
                                alt={slide.title} 
                                className="production-img" 
                                loading="lazy" 
                                decoding="async" 
                            /> 
                        )} 
                    </div> 

                    <div className="production-footer"> 
                        {slide.software ? ( 
                            <div className="production-tag-info"> 
                                <span className="prod-lbl">Software</span> 
                                <span className="prod-val">{slide.software}</span> 
                            </div> 
                        ) : ( 
                            <div className="production-tag-info is-empty" aria-hidden="true" /> 
                        )} 
                    </div> 
                </div> 
            ))} 
        </div> 
    </div> 

                    <div className="production-slider-dots"> 
                        {project.productionSlides.map((_, dotIdx) => ( 
                            <button 
                                key={dotIdx} 
                                className={`prod-dot-pill ${activeProductionSlide === dotIdx ? 'is-active' : ''}`} 
                                onClick={() => scrollToProductionSlide(dotIdx)} 
                                aria-label={`Go to slide ${dotIdx + 1}`} 
                            /> 
                        ))} 
                    </div> 
                </div> 

                {/* RIGHT COLUMN PC >= 1440px: bento cards */} 
                <div className="production-right-col"> 
                    {project.productionSections && project.productionSections.map((item) => ( 
                        <div 
                            key={item.id} 
                            className="production-bento-card" 
                            onClick={() => handleOpenModal(item)} 
                        > 
                            <div className="production-card-top"> 
                                {item.previewPlay && ( 
                                    <img src={item.previewPlay} alt="" className="prod-play-icon" loading="lazy" decoding="async" /> 
                                )} 
                            </div> 
                            <h4 className="production-card-title">{item.title}</h4> 
                        </div> 
                    ))} 
                </div> 
            </div> 
        </div> 
    </div> 
    )} 

    {/*  FOURTH SCREEN (C): POKETES & MEDIRUSH (games) */} 
    {project.gameSlides && ( 
    <div className="scroll-section-game"> 
        <div className="game-wrapper"> 
            <h3 className="game-main-heading"> 
                {project.id === 'poketes' ? 'App Assets' : 'Game Assets'} 
            </h3> 

            <div className="game-desktop-layout"> 
                {/* LEFT COLUMN PC >= 1440px */} 
                <div className="game-left-col"> 
                    <div className="game-top-card"> 
        {/* Botons de navegació (visibles només en PC via CSS) */}
        <button 
            className="slider-nav-btn prev" 
            onClick={() => handleScrollGame('left')} 
            aria-label="Previous slide"
        >
            ‹
        </button>
        <button 
            className="slider-nav-btn next" 
            onClick={() => handleScrollGame('right')} 
            aria-label="Next slide"
        >
            ›
        </button>

        <div 
            className="game-slides-track" 
            ref={gameSliderRef} 
            onScroll={handleGameScroll} 
        > 
            {project.gameSlides.map((slide, index) => ( 
                <div key={index} className="game-slide-item"> 
                    <h4 className="game-slide-title">{slide.title}</h4> 

                    <div className="game-media-box"> 
                        {Array.isArray(slide.src) ? ( 
                            <div className="game-multi-wrap"> 
                                {slide.src.map((s, i) => ( 
                                    <img key={i} src={s} alt="" className="game-img-half" loading="lazy" decoding="async" /> 
                                ))} 
                            </div> 
                        ) : ( 
                            <img 
                                src={slide.src} 
                                alt={slide.title} 
                                className="game-img" 
                                loading="lazy" 
                                decoding="async" 
                            /> 
                        )} 
                    </div> 

                    <div className="game-footer"> 
                        {slide.software ? ( 
                            <div className="game-tag-info"> 
                                <span className="game-lbl">Software</span> 
                                <span className="game-val">{slide.software}</span> 
                            </div> 
                        ) : ( 
                            <div className="game-tag-info is-empty" aria-hidden="true" /> 
                        )} 
                    </div> 
                </div> 
            ))} 
        </div> 
    </div>

                    <div className="game-slider-dots"> 
                        {project.gameSlides.map((_, dotIdx) => ( 
                            <button 
                                key={dotIdx} 
                                className={`game-dot-pill ${activeGameSlide === dotIdx ? 'is-active' : ''}`} 
                                onClick={() => scrollToGameSlide(dotIdx)} 
                                aria-label={`Go to slide ${dotIdx + 1}`} 
                            /> 
                        ))} 
                    </div> 
                </div> 

                {/* Right column PC >= 1440px: bento cards*/} 
                <div className="game-right-col"> 
                    {project.gameSections && project.gameSections.map((item) => ( 
                        <div 
                            key={item.id} 
                            className="game-bento-card" 
                            onClick={() => handleOpenModal(item)} 
                        > 
                            <div className="game-card-top"> 
                                {item.previewPlay && ( 
                                    <img src={item.previewPlay} alt="" className="game-play-icon" loading="lazy" decoding="async" /> 
                                )} 
                            </div> 
                            <h4 className="game-card-title">{item.title}</h4> 
                        </div> 
                    ))} 
                </div> 
            </div> 
        </div> 
    </div> 
    )} 

    {/* PROCESS SCREEN: PROTOTYPE & PROCESS (ONLY FOR NIMBO) */} 
    {project.processSections && ( 
    <div className="scroll-section-process"> 
        <div className="process-wrapper"> 
            <h3 className="section-main-heading">Website Development</h3> 

            <div className="process-desktop-layout"> 
                {/* Left column PC >= 1440px: card-wide (Dashboard / Interactive Prototype) */} 
                <div className="process-left-col"> 
                    {project.processSections.filter(item => item.layout === 'wide').map((item) => ( 
                        <div 
                            key={item.id} 
                            className="bento-card card-wide process-card-dashboard" 
                            onClick={() => handleOpenModal(item)} 
                        > 
                            <div className="arch-info-preview-wrap"> 
                                {item.previewIcon && ( 
                                    <img src={item.previewIcon} alt="" className="info-arch-icons" loading="lazy" decoding="async" /> 
                                )} 
                            </div> 
                            <h4 className="bento-card-title">{item.title}</h4> 
                        </div> 
                    ))} 
                </div> 

                {/* Right column PC >= 1440px: 2 card-half (Wireframes & Hi-Fi Prototype) */} 
                <div className="process-right-col"> 
                    {project.processSections.filter(item => item.layout === 'half').map((item) => ( 
                        <div 
                            key={item.id} 
                            className="bento-card-process card-process" 
                            onClick={() => handleOpenModal(item)} 
                        > 
                            <div className="card-top-content"> 
                                {item.previewPlay && ( 
                                    <img 
                                        src={item.previewPlay} 
                                        alt={`${item.title} play icon`} 
                                        className="bento-play-svg" 
                                        loading="lazy" 
                                        decoding="async" 
                                    /> 
                                )} 
                                {item.previewData && ( 
                                    <img 
                                        src={item.previewData} 
                                        alt={`${item.title} data icon`} 
                                        className="bento-data-svg" 
                                        loading="lazy" 
                                        decoding="async" 
                                    /> 
                                )} 
                            </div> 
                            <h4 className="bento-card-title">{item.title}</h4> 
                        </div> 
                    ))} 
                </div> 
            </div> 
        </div> 
    </div> 
    )} 

    { /*POP-UP MODAL*/ } 
    <AnimatePresence> 
    {selectedModal && ( 
        <motion.div 
        className="modal-backdrop" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }} 
        onClick={() => setSelectedModal(null)} 
        > 
        <motion.div 
            className="modal-dialog-content" 
            initial={{ scale: 0.9, y: 30 }} 
            animate={{ scale: 1, y: 0 }} 
            exit={{ scale: 0.9, y: 30 }} 
            onClick={(e) => e.stopPropagation()} 
        > 
            <div className="modal-header"> 
            <h4 className="modal-title">{selectedModal.title}</h4> 
            <button className="modal-close" onClick={() => setSelectedModal(null)}>✕</button> 
            </div> 

            <div className="modal-body-scroll"> 
            {selectedModal.videoSrc ? ( 
                /* VIDEO */ 
                <video 
                src={selectedModal.videoSrc} 
                preload="metadata" 
                controls 
                autoPlay 
                playsInline 
                webkit-playsinline="true" 
                className="modal-video-player" 
                /> 
            ) : modalImages.length > 1 ? ( 
                <div className="modal-carousel-container"> 
                <div className="modal-image-viewport"> 
                    <img 
                    key={modalImageIndex} 
                    src={modalImages[modalImageIndex]} 
                    alt={`${selectedModal.title} ${modalImageIndex + 1}`} 
                    className="modal-img modal-img-slide" 
                    loading="lazy" 
                    decoding="async" 
                    /> 
                </div> 

                <div className="modal-controls-bar"> 
                    <button 
                    className="modal-arrow-btn modal-arrow-prev" 
                    onClick={prevModalImage} 
                    aria-label="Previous image" 
                    > 
                    ‹ 
                    </button> 

                    <span className="modal-pagination-counter"> 
                    {modalImageIndex + 1} / {modalImages.length} 
                    </span> 

                    <button 
                    className="modal-arrow-btn modal-arrow-next" 
                    onClick={nextModalImage} 
                    aria-label="Next image" 
                    > 
                    › 
                    </button> 
                </div> 
                </div> 
            ) : modalImages.length === 1 ? ( 
                <div className="modal-single-image-wrap"> 
                <img 
                    src={modalImages[0]} 
                    alt={selectedModal.title} 
                    className="modal-img modal-img-single" 
                    loading="lazy" 
                    decoding="async" 
                /> 
                </div> 
            ) : ( 
                <div className="modal-placeholder">Building content...</div> 
            )} 
            </div> 
        </motion.div> 
        </motion.div> 
    )} 
    </AnimatePresence> 

    {/* FINAL SCREEN */} 
        <section className="scroll-section-final"> 
        <motion.svg 
        viewBox="0 0 393 764" 
        preserveAspectRatio="none" 
        className="bg-project-detail-final-svg" 
        initial={{ y: '-70%', opacity: 1 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.8, ease: [0.16, 0.5, 0.3, 1] }} 
        > 
        <path 
            d="M0 0H393L393 763.493C312.878 746.596 279.394 687.953 197.51 687.671C114.891 687.386 80.9237 746.834 0.000976562 763.493L0 763.494L0 0Z" 
            fill="#4D2030" 
        /> 
        </motion.svg> 

            <motion.div 
                className="project-ticket-body" 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }} 
            > 
                <div className="final-wrapper"> 
                <h3 className="final-main-heading">{project.final || "Thanks for watching!"}</h3> 

                {/* Icon Animation */} 
                {project.finalIcon && ( 
                    project.finalLink ? ( 
                    <div className="final-interactive-anchor"> 
                        <motion.a 
                        href={project.finalLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="final-icon-link" 
                        aria-label="Visit the final project" 
                        animate={{ 
                            scale: [1, 1.08, 1], 
                        }} 
                        transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            repeatDelay: 1.5, 
                            ease: "easeInOut", 
                        }} 
                        whileHover={{ 
                            scale: 1.12, 
                            transition: { duration: 0.2 } 
                        }} 
                        whileTap={{ 
                            scale: 0.94, 
                            transition: { duration: 0.1 } 
                        }} 
                        > 
                        <img src={project.finalIcon} alt="Final Icon" className="final-icon" loading="lazy" decoding="async" /> 
                        </motion.a> 
                        </div> 
                    ) : ( 
                    <img src={project.finalIcon} alt="Final Icon" className="final-icon" loading="lazy" decoding="async" /> 
                    ) 
                )} 
                </div> 
            </motion.div> 
            </section> 
</section> 

</div> 
); 
}