import './App.css';
import { useState } from 'react';

function App() {
  
  const routeChangeForm = () => {
    const path = 'https://forms.gle/LXMuzZaSp6gxr9UX9';
    window.location.href = path;
  };
  const routeChangeInsta = () => {
    const path = 'https://www.instagram.com/champlain_programming_club/';
    window.location.href = path;
  };
  const routeChangeDiscord = () => {
    const path = 'https://discord.gg/P8rdJ4XmJB';
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
    <head>
    <link rel="icon" type="image/x-icon" href="./logo192.ico"/>
    </head>
      <header>
        <h1>Champlain Code Quest</h1>
        <div className='nav-links'>
        <a onClick={() => openModal('aboutModal')}>About</a>
        <a onClick={() => openModal('scheduleModal')}>Schedule</a>
        <a onClick={routeChangeForm}>Register</a>
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
            {<div><h4>About:</h4>
              <p>
              Code-Quest Champlain aims to be a beginner friendly event where college students can improve and put into practice their programming knowledge.<br/><br/> </p>
              <h4>3 prize categories:</h4>
              <ul>  
                <li>Best overall project</li>
                <li>Most creative project</li>
                <li>Best beginner project</li>
             
                </ul>
             </div>}
          </div>
        </div>

        <div id="scheduleModal" className="modal" style={{display: activeModal === 'scheduleModal' ? 'flex' : 'none'}} onClick={handleOutsideClick}>
          <div className="modal-content">
            <span className="close-btn" onClick={closeModal}>&times;</span>
            {<div>

             <h4>Schedule</h4> 
<h5>Thursday, November 13th, 2025</h5>
<table>
  <tbody>
    <tr>
      <td>Opening Ceremony:</td>
      <td>8:00 AM - 9:00 AM</td>
    </tr>
    <tr>
      <td>Coding Time:</td>
      <td>8:30 AM - 8:00 PM</td>
    </tr>
    <tr>
      <td>Lunch Break:</td>
      <td>12:00 PM - 13:00 PM</td>
    </tr>
    <tr>
      <td>Closing Ceremony:</td>
      <td>6:30 PM - 8:00 PM</td>
    </tr>
  </tbody>
</table>
            </div>}
          </div>
        </div>

  

        <div id="contactModal" className="modal" style={{display: activeModal === 'contactModal' ? 'flex' : 'none'}} onClick={handleOutsideClick}>
          <div className="modal-content">
            <span className="close-btn" onClick={closeModal}>&times;</span>
            {<div><h4>Contact us:</h4>
              <table>
              <tbody>
              <tr><td>Discord: </td><td> Join our discord  </td><td><button onClick={routeChangeDiscord}>here</button><br/></td></tr>
              <tr><td>Instagram: </td><td>Follow us  </td><td><button onClick={routeChangeInsta}>here</button><br/></td></tr>
              </tbody>
              </table>
              </div>}
          </div>
        </div>


        <h2>Join on us November 13</h2>
        <p>Join the Champlain Code Quest Hackathon — where innovation, creativity, and teamwork collide. Build something incredible in 24 hours!</p>
        <button className="mainButton" onClick={() => openModal('aboutModal')}>Learn More</button>
        <button className="mainButton" onClick={routeChangeForm
      
        }>Register Now</button>
      </section>
      </div>
      <section className="info" id="about">
        <h3>About the Event</h3>
        <p>The Champlain Code Quest brings together coders, students, innovators and entrepreneur from across the college to tackle exciting challenges, collaborate, and showcase their skills. Whether you're a first-time programmer or a 10x enginner, there's a place for you here to participate.</p>
      </section>
        <div className='faq' id='faq'>
        <h3>FAQ</h3>
        <h4>How much does it cost?</h4>
        <p>It’s totally free! and there will be free pizza!!</p>
         <h4>What is the theme?</h4>
        <p>The theme will be revealed during the opening ceremony</p>
         <h4>Do I need to know how to program?</h4>
        <p>No, as long as you have even the slightest interest, you are welcome to come to have fun. Workshops will be held to teach the participants about various programming concepts during the hackathon itself!</p>
           <h4>How long will it last?</h4>
        <p>The Code Quest will be held from 8am to 8pm</p>
        <h4>HWhen and where is it?</h4>
        <p>The Code Quest will be held at Champlain College on November 13th</p></div>
       <section className="info" id="about">
         <h3>Our Partner:</h3>
        <img src='./tail.png' alt='tail-ed'/>
        <img src='./vimpact.png' alt='visual-impact' width={300}/>
      </section>
      <footer>
        © 2025 Champlain College • Code Quest Hackathon
      </footer>
    </>
  );
}

export default App;