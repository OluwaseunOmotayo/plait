
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-dark border-t border-white/5 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 mb-12">
            <span className="material-symbols-outlined text-primary text-4xl">auto_awesome</span>
            <span className="logo-text text-3xl md:text-4xl uppercase text-white">Plait</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-12">
            <Link
              to="/about"
              className="text-[10px] tracking-[0.3em] font-bold text-slate-500 hover:text-white transition-colors"
            >
              ABOUT
            </Link>
            {['CAREERS', 'PRIVACY', 'TERMS', 'CONTACT'].map((link) => (
              <a
                key={link}
                href="#"
                className="text-[10px] tracking-[0.3em] font-bold text-slate-500 hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          <p className="text-[9px] text-slate-600 tracking-[0.2em] uppercase font-bold text-center">
            &copy; 2026 PLAIT Inc. New York.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
