import './App.css';
import { useState } from 'react';

function App() {
  
  const routeChange = () => {
    const path = 'https://forms.gle/LXMuzZaSp6gxr9UX9';
    window.location.href = path;
  };

  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalId) => {
    setActiveModal(modalId);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains('modal')) {
      closeModal();
    }
  };

  return (
    <>
      <header>
        <h1>Champlain Code Quest</h1>
        <div className='nav-links'>
        <a onClick={() => openModal('aboutModal')}>About</a>
        <a onClick={() => openModal('scheduleModal')}>Schedule</a>
        <a onClick={() => openModal('registerModal')}>Register</a>
        <a onClick={() => openModal('contactModal')}>Contact</a>
        </div>
      </header>
      <div className="orange-background">
        <img src="./logo.png" alt="Code Quest Logo" />
      
      <section className="gradient-background">
        <div id="aboutModal" class="modal">
    <div class="modal-content">
      <span class="close-btn">&times;</span>
      <h3>About the Hackathon</h3>
      <p>The Champlain Code Quest brings together the brightest minds to collaborate, innovate, and code their way to victory. No experience required — just bring your creativity and passion for tech!</p>
    </div>
          </div>

       <div id="aboutModal" className="modal" style={{display: activeModal === 'aboutModal' ? 'flex' : 'none'}} onClick={handleOutsideClick}>
          <div className="modal-content">
            <span className="close-btn" onClick={closeModal}>&times;</span>
            {/* ...rest of aboutModal content... */}
          </div>
        </div>

        <div id="scheduleModal" className="modal" style={{display: activeModal === 'scheduleModal' ? 'flex' : 'none'}} onClick={handleOutsideClick}>
          <div className="modal-content">
            <span className="close-btn" onClick={closeModal}>&times;</span>
            {/* ...rest of scheduleModal content... */}
          </div>
        </div>

        <div id="registerModal" className="modal" style={{display: activeModal === 'registerModal' ? 'flex' : 'none'}} onClick={handleOutsideClick}>
          <div className="modal-content">
            <span className="close-btn" onClick={closeModal}>&times;</span>
            {/* ...rest of registerModal content... */}
          </div>
        </div>

        <div id="contactModal" className="modal" style={{display: activeModal === 'contactModal' ? 'flex' : 'none'}} onClick={handleOutsideClick}>
          <div className="modal-content">
            <span className="close-btn" onClick={closeModal}>&times;</span>
            {/* ...rest of contactModal content... */}
          </div>
        </div>


        <h2>Join on us November 13</h2>
        <p>Join the Champlain Code Quest Hackathon — where innovation, creativity, and teamwork collide. Build something incredible in 24 hours!</p>
        <button onClick={routeChange}>Register Now</button>
      </section>
      </div>
      <section className="info" id="about">
        <h3>About the Event</h3>
        <p>The Champlain Code Quest brings together coders, designers, and innovators from across the region to tackle exciting challenges, collaborate, and showcase their skills. Whether you're a first-time hacker or a seasoned pro, there's a place for you here.</p>
      </section>
      <footer>
        © 2025 Champlain College • Code Quest Hackathon
      </footer>
    </>
  );
}

export default App;