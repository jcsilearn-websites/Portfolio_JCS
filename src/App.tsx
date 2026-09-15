import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import BackToTopButton from './components/BackToTopButton'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Programs from './pages/Programs'
import Services from './pages/Services'
import Trainers from './pages/Trainers'
import Contact from './pages/Contact'
import Careers from './pages/Careers'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsConditions from './pages/TermsConditions'
import CookiePolicy from './pages/CookiePolicy'
import CareerGuides from './pages/CareerGuides'
import StudentHandbook from './pages/StudentHandbook'
import FAQ from './pages/FAQ'
import SupportCenter from './pages/SupportCenter'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/programs/:slug" element={<Programs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/career-guides" element={<CareerGuides />} />
        <Route path="/student-handbook" element={<StudentHandbook />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/support-center" element={<SupportCenter />} />
      </Routes>
      <Footer />
      <BackToTopButton />
    </BrowserRouter>
  )
}

export default App
