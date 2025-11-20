import { useState } from "react";

import LINKS from "../constants/links";

import './NavBar.css';

export default function Navbar({ onOpenModal, onRegister }) {
  const [open, setOpen] = useState(false);

  const openInNewTab = (url) => window.open(url, '_blank', 'noopener,noreferrer');

  const handleRegister = () => {
    if (typeof onRegister === 'function') return onRegister();
    openInNewTab(LINKS.register);
  };

  const LinkBtn = ({ children, onClick }) => (
    <button type="button" className="linklike nav-link" onClick={onClick}>
      {children}
    </button>
  );

  return (
    <nav className="site-nav" role="navigation" aria-label="Main">
      <div className="nav-inner">
        <div className="brand" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <span className="brand-title">Champlain Code Quest</span>
        </div>

        <div className="links desktop">
          <LinkBtn onClick={() => onOpenModal?.("aboutModal")}>About</LinkBtn>
          <LinkBtn onClick={() => onOpenModal?.("scheduleModal")}>Schedule</LinkBtn>
          <LinkBtn onClick={handleRegister}>Register</LinkBtn>
          <LinkBtn onClick={() => onOpenModal?.("contactModal")}>Contact</LinkBtn>
        </div>

        <button
          className="hamburger"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(v => !v)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`mobile ${open ? "open" : ""}`}
        onClick={() => setOpen(false)}
      >
        <LinkBtn onClick={() => onOpenModal?.("aboutModal")}>About</LinkBtn>
        <LinkBtn onClick={() => onOpenModal?.("scheduleModal")}>Schedule</LinkBtn>
        <LinkBtn onClick={handleRegister}>Register</LinkBtn>
        <LinkBtn onClick={() => onOpenModal?.("contactModal")}>Contact</LinkBtn>
      </div>
    </nav>
  );
}
