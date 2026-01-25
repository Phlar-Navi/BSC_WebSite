/* import { useState } from 'react' */
/* import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import './App.css'
import HeroSection from './HeroSection.jsx'
import Navbar from './Navbar.jsx'
import DiseaseSection from './DiseaseSection.jsx'
import StatisticsSection from './StatisticsSection.jsx'
import ProgramsSection from './ProgramsSection.jsx'
import TeamSection from './TeamSection.jsx'
import SocialSection from './SocialSection.jsx'
import AboutSection from './AboutSection.jsx'
import Footer from './Footer.jsx'
import GallerySection from './GallerySection.jsx'

function App() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <StatisticsSection />
      <DiseaseSection />
      <ProgramsSection />
      <TeamSection />
      <SocialSection />
      <AboutSection />
      <GallerySection />
      <Footer />
    </>
  )
}

export default App
