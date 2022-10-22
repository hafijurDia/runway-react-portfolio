import { useState } from 'react'
import Layout from './components/layouts/Layout'
import About from './sections/About'
import Banner from './sections/Banner'
import Contact from './sections/Contact'
import Portfolio from './sections/Portfolio'
import Services from './sections/Services'
import Blog from './sections/Blog'
import Skill from './sections/Skill'
import Testimonial from './sections/Testimonial'
import Experiances from './sections/Experiances'
import { motion, AnimatePresence } from "framer-motion"

function App() {

  return (
    
    <Layout>
      <Banner />
      <About />
      <Skill />
      <Experiances />
      <Services />
      <AnimatePresence>
      <Portfolio />
      </AnimatePresence>
      <Testimonial />
      <Blog />
      <Contact />
    </Layout>
   

  )
}

export default App
