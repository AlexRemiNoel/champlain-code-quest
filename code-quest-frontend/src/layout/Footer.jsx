import LINKS from "../constants/links";

import "./Footer.css";

export default function Footer({ onOpenModal, onRegister }) {
  const openNew = (url) => window.open(url, "_blank", "noopener,noreferrer");
  const handleRegister = () =>
    typeof onRegister === "function" ? onRegister() : openNew(LINKS.register);

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="brand-row">
            <span className="brand-dot" />
            <h4>Champlain Code Quest</h4>
          </div>
          <p>
            A beginner-friendly hackathon where students learn, collaborate, and
            ship something amazing — all in one day.
          </p>
        </div>

        <div className="footer-col">
          <h5>Explore</h5>
          <nav className="footer-links" aria-label="Explore">
            <button className="footer-link" onClick={() => onOpenModal?.("aboutModal")}>
              About
            </button>
            <button className="footer-link" onClick={() => onOpenModal?.("scheduleModal")}>
              Schedule
            </button>
            <button className="footer-link" onClick={handleRegister}>
              Register
            </button>
            <button className="footer-link" onClick={() => onOpenModal?.("contactModal")}>
              Contact
            </button>
          </nav>
        </div>

        <div className="footer-col">
          <h5>Support</h5>
          <nav className="footer-links" aria-label="Support">
            <a className="footer-a" href="#faq">FAQ</a>
            <a className="footer-a" href="#about">About the Event</a>
            <button className="footer-link" onClick={handleRegister}>
              Registration Help
            </button>
          </nav>
        </div>

        <div className="footer-col">
          <h5>Connect</h5>
          <div className="footer-social" aria-label="Social">
            <a className="footer-a" href={LINKS.discord} target="_blank" rel="noopener noreferrer">
              Discord
            </a>
            <a className="footer-a" href={LINKS.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="footer-divider" />

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Champlain Code Quest</span>
        <span>
          Made with <span aria-hidden="true">❤️</span> by the Champlain Programming Club
        </span>
      </div>
    </footer>
  );
}
