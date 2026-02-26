
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const isAboutPage = location.pathname === '/about';

  return (
    <nav className="fixed top-0 w-full z-50 px-4 md:px-8 py-6 flex justify-between items-center bg-transparent backdrop-blur-sm">
      <Link to="/" className="flex items-center gap-2">
        <span className="material-symbols-outlined text-primary text-3xl">auto_awesome</span>
        <span className="logo-text text-2xl md:text-3xl uppercase text-white">Plait</span>
      </Link>
      <div className="flex items-center gap-4">
        {isAboutPage ? (
          <Link
            to="/"
            className="px-6 md:px-8 py-2 border border-white/20 rounded-full text-[10px] md:text-xs font-semibold tracking-widest hover:bg-white/10 transition-all uppercase text-white"
          >
            Home
          </Link>
        ) : (
          <>
            <Link
              to="/about"
              className="text-[10px] md:text-xs font-semibold tracking-widest hover:text-primary transition-colors uppercase text-slate-400"
            >
              About
            </Link>
            <div className="relative">
              <button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => setIsHovered(true)}
                className="px-6 md:px-8 py-2 border border-white/20 rounded-full text-[10px] md:text-xs font-semibold tracking-widest hover:bg-white/10 transition-all uppercase text-white min-w-[120px]"
              >
                {isHovered ? 'Coming Soon' : 'Log In'}
              </button>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
