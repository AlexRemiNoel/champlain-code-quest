import { useState } from "react";

import './NavBar.css';

export default function Navbar({ onOpenModal, onRegister }) {
  const [open, setOpen] = useState(false);

  const LinkBtn = ({ children, onClick }) => (
    <button type="button" className="linklike nav-link" onClick={onClick}>
      {children}
    </button>
  );

  return (
    <nav className="site-nav" role="navigation" aria-label="Main">
      <div className="nav-inner">
        <div className="brand">
          <span className="brand-title">Champlain Code Quest</span>
        </div>

        <div className="links desktop">
          <LinkBtn onClick={() => onOpenModal("aboutModal")}>About</LinkBtn>
          <LinkBtn onClick={() => onOpenModal("scheduleModal")}>Schedule</LinkBtn>
          <LinkBtn onClick={onRegister}>Register</LinkBtn>
          <LinkBtn onClick={() => onOpenModal("contactModal")}>Contact</LinkBtn>
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
          <span className="sr-only">Menu</span>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`mobile ${open ? "open" : ""}`}
        onClick={() => setOpen(false)}
      >
        <LinkBtn onClick={() => onOpenModal("aboutModal")}>About</LinkBtn>
        <LinkBtn onClick={() => onOpenModal("scheduleModal")}>Schedule</LinkBtn>
        <LinkBtn onClick={onRegister}>Register</LinkBtn>
        <LinkBtn onClick={() => onOpenModal("contactModal")}>Contact</LinkBtn>
      </div>
    </nav>
  );
}
