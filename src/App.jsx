import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Work from './pages/Work.jsx';
import Contact from './pages/Contact.jsx';
import Navbar from './components/Navbar.jsx';
import TopHeader from './components/TopHeader.jsx';
import ProjectDetail from './pages/ProjectDetail';

export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <div className="app-container">
        
        <TopHeader />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/work/:id" element={<ProjectDetail />} />
          </Routes>
        </main>
        
        <Navbar />
      </div>
    </BrowserRouter>
  );
}
