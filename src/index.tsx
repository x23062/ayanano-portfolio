import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './pages/Header/Header.tsx'
import Main from './pages/Main/main.tsx'
import Footer from './pages/Footer/Footer.tsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './pages/scrollToTop.tsx';
import Ehho from './pages/Main/Products/Products_about/Ehho.tsx';
import Yofukashi from './pages/Main/Products/Products_about/Yofukashi.tsx'
import Omasuke from './pages/Main/Products/Products_about/Omasuke.tsx';
import Idea from './pages/Main/Products/Products_about/Idea.tsx';
import Cake from './pages/Main/Products/Products_about/Cake.tsx';
import Color from './pages/Main/Products/Products_about/Color.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='background'></div>
    <Header />
          <Router>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/products/ehho" element={<Ehho />} />
              <Route path="/products/yofukashi" element={<Yofukashi />} />
              <Route path="/products/omasuke" element={<Omasuke />} />
              <Route path="/products/idea" element={<Idea />} />
              <Route path="/products/cake" element={<Cake />} />
              <Route path="/products/color" element={<Color />} />
            </Routes>
          </Router>
    {/* <Main /> */}
    <Footer />
  </StrictMode>,
)
