import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './App.jsx'
import Hero from './Hero.jsx'
import Intro from './Intro.jsx'
import Footer from './Footer.jsx'

createRoot(document.getElementById('root')).render(
  <div>
    <Home />
    <Hero />
    <Intro />
    <Footer />
 </div>
)
