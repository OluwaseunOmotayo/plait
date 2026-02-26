
import React, { useState } from 'react';
import Navbar from './Navbar.js';
import Footer from './Footer.js';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const AboutUs: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'CONTACT',
          ...formData,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Something went wrong');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong');
    }
  };

  return (
    <div className="relative min-h-screen bg-background-dark">
      <Navbar />

      {/* Page Header */}
      <section className="pt-32 pb-16 px-6 text-center">
        <h1 className="font-display text-4xl md:text-6xl text-white mb-4">
          PLAIT
        </h1>
        <p className="text-lg md:text-xl text-primary font-medium">
          Beauty Powered by Community
        </p>
      </section>

      {/* Content Sections */}
      <div className="max-w-3xl mx-auto px-6 pb-24 space-y-12">

        {/* Who We Are */}
        <div className="glass-badge rounded-3xl p-8 md:p-10">
          <h2 className="font-display text-2xl md:text-3xl text-white mb-6">
            Who We <span className="italic text-primary">Are</span>
          </h2>
          <p className="text-slate-300 leading-relaxed">
            PLAIT was founded by a team of young professionals bonded through a passion for services enabling powerful presentations of cultural identity. As people who have relied on word-of-mouth, social media networks and shared experiences to make beauty care decisions, we are building a platform we've wished always existed.
          </p>
        </div>

        {/* What is PLAIT */}
        <div className="glass-badge rounded-3xl p-8 md:p-10">
          <h2 className="font-display text-2xl md:text-3xl text-white mb-6">
            What is <span className="italic text-primary">PLAIT</span>
          </h2>
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              PLAIT is a community-driven platform that makes discovering, booking, and sharing beauty care experiences effortless. We put real people's experiences front and center, helping you find stylists, products, and services that truly meet your beauty goals.
            </p>
            <p>
              Track your looks, rank your experiences, and see what your community is loving in real time. It's your space to document, discover, and connect so that every style is part of your story.
            </p>
          </div>
        </div>

        {/* Our Mission */}
        <div className="glass-badge rounded-3xl p-8 md:p-10">
          <h2 className="font-display text-2xl md:text-3xl text-white mb-6">
            Our <span className="italic text-primary">Mission</span>
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Our mission is to build the trusted decision engine for Black and textured beauty care, starting with hair. We help people answer one core question: <span className="text-primary font-medium">"Who will actually do my hair well?"</span>
          </p>
        </div>

        {/* Contact Us */}
        <div className="glass-badge rounded-3xl p-8 md:p-10">
          <h2 className="font-display text-2xl md:text-3xl text-white mb-6">
            Contact <span className="italic text-primary">Us</span>
          </h2>

          {status === 'success' ? (
            <div className="text-center py-8">
              <span className="material-symbols-outlined text-primary text-5xl mb-4 block">check_circle</span>
              <p className="text-white text-lg font-semibold mb-2">Message Sent!</p>
              <p className="text-slate-400 text-sm">We'll get back to you soon.</p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-6 text-primary text-sm font-semibold hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 mb-2">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors resize-none"
                  placeholder="What would you like to tell us?"
                />
              </div>

              {status === 'error' && (
                <p className="text-red-400 text-sm">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-4 bg-primary hover:bg-primary/90 disabled:opacity-50 text-white rounded-full font-semibold text-sm tracking-widest transition-all uppercase"
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
