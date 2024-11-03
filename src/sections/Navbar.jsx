import { useState, useEffect } from 'react';
import { navLinks } from '../constants';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Background effect
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Section detection
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY;
      const offset = 300; // Sesuaikan nilai ini sesuai kebutuhan

      // Dapatkan section feedback
      const feedbackSection = document.getElementById('feedback');
      const feedbackTop = feedbackSection.offsetTop - (window.innerHeight / 4);

      // Deteksi untuk semua section
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - offset;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          // Jika dalam section work, set about
          if (section.id === 'work') {
            setActive('about');
          }
          // Jika sudah mencapai feedback
          else if (scrollPosition >= feedbackTop) {
            setActive('feedback');
          }
          // Untuk section portfolio, pastikan belum mencapai feedback
          else if (section.id === 'portfolio') {
            const portfolioSection = document.getElementById('portfolio');
            const contactSection = document.getElementById('contact');
            
            // Tentukan batas portfolio yang lebih spesifik
            const portfolioStart = portfolioSection.offsetTop - offset;
            const portfolioEnd = contactSection.offsetTop - (offset * 2);
            
            if (scrollPosition < portfolioStart || scrollPosition >= portfolioEnd) {
              setActive('portfolio');
            }
          }
          // Untuk section lainnya
          else {
            setActive(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId, e) => {
    e.preventDefault(); // Prevent default anchor behavior
    
    const section = document.getElementById(sectionId);
    const navHeight = 80; // Sesuaikan dengan tinggi navbar Anda
    
    if (section) {
      const sectionTop = section.offsetTop - navHeight;
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
    }
    
    setActive(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-20 transition-all duration-300 ${
      scrolled ? 'bg-black/90 backdrop-blur-sm' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a 
            href="#home" 
            onClick={(e) => handleNavClick('home', e)} 
            className="text-2xl font-bold text-white"
          >
            <img src="assets/whiteicon.png" alt="logo" className="w-10 h-10" />
          </a>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={`nav-link text-sm font-medium transition-all duration-300 ${
                    active === link.href.slice(1) ? 'active' : ''
                  }`}
                  onClick={(e) => handleNavClick(link.href.slice(1), e)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu */}
          <div className={`md:hidden fixed top-0 right-0 w-1/4 h-screen bg-black-500/95 backdrop-blur-sm transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out shadow-xl`}>
            <div className="flex flex-col items-center justify-start pt-20">
              {navLinks.map((link, index) => (
                <a
                  key={link.id}
                  href={link.href}
                  style={{ '--index': index }}
                  className={`nav-link-mobile text-sm font-medium my-4 ${
                    active === link.href.slice(1) ? 'active' : ''
                  }`}
                  onClick={(e) => handleNavClick(link.href.slice(1), e)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </button>
        </div>

        {/* Overlay untuk menutup menu saat klik di luar */}
        {isMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
