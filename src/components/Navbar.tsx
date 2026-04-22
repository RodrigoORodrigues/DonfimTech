import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${isScrolled ? 'bg-[#050810]/85 backdrop-blur-[20px] border-b border-[#00D4FF]/15 py-0' : 'bg-transparent py-2'}`}>
      <div className="max-w-[1200px] mx-auto px-6 h-[80px] flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group nav-logo">
          <img src="/Donfimtech.png" alt="Donfim Tech" className="h-[48px] md:h-[56px] object-contain" referrerPolicy="no-referrer" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-9">
          <a href="#servicos" className="text-[14px] font-medium text-[#8899AA] hover:text-[#F0F4FF] tracking-[0.04em] uppercase transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[1px] after:bg-[#00D4FF] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left">Serviços</a>
          <a href="#sobre" className="text-[14px] font-medium text-[#8899AA] hover:text-[#F0F4FF] tracking-[0.04em] uppercase transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[1px] after:bg-[#00D4FF] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left">Sobre</a>
          <a href="#sistemas" className="text-[14px] font-medium text-[#8899AA] hover:text-[#F0F4FF] tracking-[0.04em] uppercase transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[1px] after:bg-[#00D4FF] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left">Sistemas</a>
          <a href="#faq" className="text-[14px] font-medium text-[#8899AA] hover:text-[#F0F4FF] tracking-[0.04em] uppercase transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[1px] after:bg-[#00D4FF] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left">FAQ</a>
          <a href="#contato" className="btn-primary">
            Falar com Especialista
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-[#050810]/95 backdrop-blur-[20px] flex flex-col items-center justify-center gap-8 pt-20">
          <a href="#servicos" className="text-[#F0F4FF] font-display text-2xl font-semibold tracking-[0.08em] uppercase hover:text-[#00D4FF] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Serviços</a>
          <a href="#sobre" className="text-[#F0F4FF] font-display text-2xl font-semibold tracking-[0.08em] uppercase hover:text-[#00D4FF] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Sobre</a>
          <a href="#sistemas" className="text-[#F0F4FF] font-display text-2xl font-semibold tracking-[0.08em] uppercase hover:text-[#00D4FF] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Sistemas</a>
          <a href="#faq" className="text-[#F0F4FF] font-display text-2xl font-semibold tracking-[0.08em] uppercase hover:text-[#00D4FF] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
          <a href="#contato" className="btn-primary mt-4" onClick={() => setIsMobileMenuOpen(false)}>
            Falar com Especialista
          </a>
        </div>
      )}
    </nav>
  );
}
