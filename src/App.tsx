import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import BackToTopButton from './components/BackToTopButton'
import Home from './pages/Home'
import About from './pages/About'
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
        <Route path="/programs" element={<Programs />} />
        <Route path="/programs/:slug" element={<Programs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
      <Footer />
      <BackToTopButton />
    </BrowserRouter>
  )
}

export default App
