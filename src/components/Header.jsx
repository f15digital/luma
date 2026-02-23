import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

import logo from '../assets/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Quem Somos', path: '/quem-somos' },
    { name: 'Notícias', path: '/noticias' },
    { name: 'Trabalhe Conosco', path: '/trabalhe-conosco' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-secondary/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}
      style={{
        backgroundColor: scrolled ? 'rgba(8, 8, 8, 0.9)' : 'transparent',
        padding: scrolled ? '1rem 0' : '1.5rem 0'
      }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="Grupo Luma" style={{ height: '50px', objectFit: 'contain' }} />
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'none', gap: '2rem', alignItems: 'center' }} className="desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                fontWeight: 500,
                color: location.pathname === link.path ? 'var(--primary)' : 'white',
                fontSize: '0.95rem'
              }}
            >
              {link.name}
            </Link>
          ))}
          <a href="tel:1931133737" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>
            <Phone size={16} /> (19) 3113-3737
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{ display: 'block', color: 'white', background: 'transparent' }}
          className="mobile-toggle"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          backgroundColor: 'var(--secondary)',
          zIndex: 40,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2rem'
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              style={{
                fontSize: '1.5rem',
                fontWeight: 600,
                color: location.pathname === link.path ? 'var(--primary)' : 'white'
              }}
            >
              {link.name}
            </Link>
          ))}
          <a href="tel:1931133737" className="btn btn-primary">
            <Phone size={20} /> (19) 3113-3737
          </a>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
};

export default Header;
