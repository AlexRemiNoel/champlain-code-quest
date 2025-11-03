import { useCallback, useState } from 'react';
import './App.css';

import Navbar from './layout/NavBar';
import Footer from './layout/Footer';

import PartnerLogos from './components/ui/PartnerLogos';

import AboutModal from './components/modals/AboutModal';
import ScheduleModal from './components/modals/ScheduleModal';
import ContactModal from './components/modals/ContactModal';

import LINKS from './constants/links';

export default function App() {
  const [openModal, setOpenModal] = useState(null);

  const handleOpenModal = useCallback(name => setOpenModal(name), []);
  const handleCloseModal = useCallback(() => setOpenModal(null), []);

  const handleRegister = useCallback(() => {
    window.open(LINKS.register, '_blank', 'noopener,noreferrer');
  }, []);
  const openDiscord = useCallback(() => {
    window.open(LINKS.discord, '_blank', 'noopener,noreferrer');
  }, []);
  const openInstagram = useCallback(() => {
    window.open(LINKS.instagram, '_blank', 'noopener,noreferrer');
  }, []);

  return (
    <>
      <Navbar onOpenModal={handleOpenModal} onRegister={handleRegister} />

      <div className="orange-background">
        <img className="hero-logo" src="/logo.png" alt="Code Quest Logo" />

        <section className="gradient-background">
          <h2>Champlain Code Quest</h2>
          <p>
            Build, learn, and compete—join us for a day of code and creativity.
          </p>

          <div className="actions">
            <button type="button" onClick={() => handleOpenModal('aboutModal')}>
              Learn More
            </button>
            <button
              type="button"
              className="mainButton"
              onClick={handleRegister}
            >
              Register Now
            </button>
          </div>
        </section>
      </div>

      <section className="info" id="about">
        <h3>About the Event</h3>
        <p>
          The Champlain Code Quest brings together coders, students, innovators,
          and entrepreneurs from across the college to tackle exciting
          challenges, collaborate, and showcase their skills. Whether you're a
          first-time programmer or a seasoned developer, there's a place for you
          to learn, create, and grow.
        </p>
      </section>

      <section className="faq" id="faq">
        <h3>FAQ</h3>

        <details>
          <summary>How much does it cost?</summary>
          <div className="answer">
            It’s totally free — and yes, there will be free pizza!
          </div>
        </details>

        <details>
          <summary>What is the theme?</summary>
          <div className="answer">
            The theme will be revealed during the opening ceremony.
          </div>
        </details>

        <details>
          <summary>Do I need to know how to program?</summary>
          <div className="answer">
            No experience required! If you’re even a little bit curious, you’re
            welcome. We’ll run beginner-friendly workshops during the hackathon
            to help you learn.
          </div>
        </details>

        <details>
          <summary>How long will it last?</summary>
          <div className="answer">
            The event runs from <strong>8:00 AM to 8:00 PM</strong>.
          </div>
        </details>

        <details>
          <summary>When and where is it?</summary>
          <div className="answer">
            Champlain Code Quest takes place at{' '}
            <strong>Champlain College</strong> on
            <strong> November 13</strong>.
          </div>
        </details>
      </section>

      <PartnerLogos
        title="Our Partners"
        logos={[
          { src: '/logos/tail.png', alt: 'Tail-Ed', href: '#' },
          { src: '/logos/kleff.png', alt: 'Kleff Hosting', href: '#' },
          { src: '/logos/vimpact.png', alt: 'Visual Impact', href: '#' },
          { src: '/logos/synqo.png', alt: 'Synq', href: 'https://synqtogether.com' },
        ]}
      />

      <Footer onOpenModal={handleOpenModal} onRegister={handleRegister} />

      <AboutModal
        open={openModal === 'aboutModal'}
        onClose={handleCloseModal}
      />
      <ScheduleModal
        open={openModal === 'scheduleModal'}
        onClose={handleCloseModal}
      />
      <ContactModal
        open={openModal === 'contactModal'}
        onClose={handleCloseModal}
        onOpenDiscord={openDiscord}
        onOpenInstagram={openInstagram}
      />
    </>
  );
}
