// src/App.jsx
import React from 'react';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Portfolio from './components/Portfolio.jsx';
import Talent from './components/Talent.jsx';
import Services from './components/Services.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <Router>
      <Helmet>
        <title>Face Off Model & Cast Management</title>
        <meta name="description" content="Talent that drives brands." />
      </Helmet>
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Talent />
        <Services />
        <Contact />
      </main>
      <Footer />
    </Router>
    
  );
}

export default App;