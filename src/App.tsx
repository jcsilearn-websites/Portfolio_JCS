import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import AboutJourney from './pages/AboutJourney'
import AboutFounders from './pages/AboutFounders'
import AboutVision from './pages/AboutVision'
import AboutIdentity from './pages/AboutIdentity'
import Programs from './pages/Programs'
import Services from './pages/Services'
import Trainers from './pages/Trainers'
import Contact from './pages/Contact'
import Careers from './pages/Careers'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/journey" element={<AboutJourney />} />
        <Route path="/about/founders" element={<AboutFounders />} />
        <Route path="/about/vision" element={<AboutVision />} />
        <Route path="/about/identity" element={<AboutIdentity />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
