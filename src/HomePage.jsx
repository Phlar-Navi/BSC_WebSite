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

function HomePage() {
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

export default HomePage
