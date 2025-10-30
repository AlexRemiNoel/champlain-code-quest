import './App.css';

function App() {
  const routeChange = () => {
    const path = 'https://forms.gle/LXMuzZaSp6gxr9UX9';
    window.location.href = path;
  };

  return (
    <>
      <header>
        <h1>Champlain Code Quest</h1>
      </header>
      <div className="orange-background">
        <img src="./logo.png" alt="Code Quest Logo" />
      
      <section className="gradient-background">
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
