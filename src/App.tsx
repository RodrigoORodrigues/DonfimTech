/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Sobre from './components/Sobre';
import Systems from './components/Systems';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import BackgroundEffects from './components/BackgroundEffects';

export default function App() {
  return (
    <div className="min-h-screen font-sans bg-slate-950 text-white overflow-hidden relative">
      <BackgroundEffects />
      
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <Services />
          <Sobre />
          <Systems />
          <Faq />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
}
