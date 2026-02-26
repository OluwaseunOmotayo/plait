
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import Features from './components/Features.js';
import Cities from './components/Cities.js';
import Referral from './components/Referral.js';
import Footer from './components/Footer.js';
import Modal from './components/Modal.js';
import AboutUs from './components/AboutUs.js';

export enum ModalType {
  USER_WAITLIST = 'USER_WAITLIST',
  STYLIST_WAITLIST = 'STYLIST_WAITLIST',
  NOMINATE = 'NOMINATE',
  LEARN_MORE = 'LEARN_MORE',
  NONE = 'NONE'
}

const LandingPage: React.FC = () => {
  const [activeModal, setActiveModal] = useState<ModalType>(ModalType.NONE);

  const openModal = (type: ModalType) => setActiveModal(type);
  const closeModal = () => setActiveModal(ModalType.NONE);

  return (
    <div className="relative">
      <Navbar />

      <main>
        <Hero onOpenModal={openModal} />
        <Features />
        <Cities />
        <Referral onOpenModal={openModal} />
      </main>

      <Footer />

      {activeModal !== ModalType.NONE && (
        <Modal type={activeModal} onClose={closeModal} />
      )}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
