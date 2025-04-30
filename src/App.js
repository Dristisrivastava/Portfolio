import React from 'react';
import './App.css';

import Nav from './components/Nav';
import About from './components/About';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Splash from './components/Splash';

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
