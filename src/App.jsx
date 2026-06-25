import { Routes, Route } from 'react-router-dom'
import ContactPage from './pages/ContactPage'
import Portfoliopage from './pages/Portfoliopage'
import TechStackPage from './pages/TechStackpage'
import AboutUsPage from './pages/AboutUspage'
import ServicePage from './pages/Servicepage'
import ServiceDetail from './components/ServiceDetail'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import AboutUs from './components/AboutUs'
import ServicesSection from './components/ServicesSection'
import Portfolio from './components/Portfolio'
import HowIWork from './components/HowIWork'
import TechStack from './components/TechStack'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Contact from './components/Contact'

function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <AboutUs />
      <ServicesSection />
      <Portfolio />
      <HowIWork />
      <TechStack />
      <Testimonials />
      <Pricing />
      <Contact />
    </>
  )
}

function App() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service/:serviceId" element={<ServiceDetail /> } />
        <Route path="/contact" element={<div className="pt-20"><ContactPage /></div>} />
        <Route path="/Portfolio" element={<div className="pt-20"><Portfoliopage /></div>} />
        <Route path="/Servicesection" element={<div className="pt-20"><ServicePage /></div>} />
        <Route path="/TechStack" element={<div className="pt-20"><TechStackPage /></div>} />
        <Route path="/AboutUs" element={<div className="pt-20"><AboutUsPage /></div>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App