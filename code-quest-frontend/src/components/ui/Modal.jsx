import { useEffect } from "react";

import './Modal.css';

export default function Modal({ isOpen, onClose, title, children, footer, labelledBy }) {
  useEffect(() => {
    if (!isOpen) return;
    
    const onKey = (e) => { if (e.key === "Escape") onClose?.(); };
    document.addEventListener("keydown", onKey);

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const titleId = labelledBy || "modal-title";

  return (
    <div
      className="modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onClick={onClose}
      style={{ display: "flex" }}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          {title && <h3 id={titleId} className="modal-title">{title}</h3>}
          <button className="close-btn" aria-label="Close" onClick={onClose}>×</button>
        </div>
        <div className="modal-body">
          {children}
        </div>
        {footer ? <div className="modal-footer">{footer}</div> : null}
      </div>
    </div>
  );
}
