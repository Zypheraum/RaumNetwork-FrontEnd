import React from 'react';
import { Scene } from './components/Scene';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Vision } from './components/Vision';
import { Footer } from './components/Footer';
import { Ecosystem } from './components/Ecosystem';
import { FAQ } from './components/FAQ';
import { Testimonials } from './components/Testimonials';

function App() {
  return (
    <div className="relative min-h-screen">
      <Scene />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Vision />
        <Ecosystem />
        <Testimonials/>
        <FAQ />
      </div>
      <Footer/>
    </div>
  );
}

export default App;