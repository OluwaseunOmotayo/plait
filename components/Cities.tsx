
import React from 'react';

const Cities: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-[#0D0B0A] border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="font-display text-4xl md:text-6xl mb-16 text-white leading-tight">
          Coming to <span className="italic text-primary">New York</span> and Beyond
        </h2>

        <div className="flex flex-wrap justify-center gap-12 md:gap-24">
          {['NYC', 'Philly', 'New Jersey'].map((city, i) => (
            <div key={i} className="flex flex-col items-center gap-6 group">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full glass-badge flex items-center justify-center transition-all duration-500 group-hover:scale-105 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(163,107,66,0.2)]">
                <span className="font-display text-xl md:text-3xl text-white tracking-widest text-center px-4">
                  {city}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cities;
