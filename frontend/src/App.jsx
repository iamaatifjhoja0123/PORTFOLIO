import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Saare sections import karein
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-950">
      
      {/* Navbar humesha top par fixed rahega */}
      <Navbar />
      
      {/* Main content jisme saare sections ek ke neeche ek hain */}
      <main className="flex-grow">
        
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="certifications">
          <Certifications />
        </section>

        <section id="contact">
          <Contact />
        </section>

      </main>
      
      {/* Footer sabse last mein */}
      <Footer />
      
    </div>
  );
}

export default App;