import './PartnerLogos.css';

export default function PartnerLogos({ title = "Our Partners", logos = [] }) {
  return (
    <section className="partners-section">
      <h3>{title}:</h3>

      <div className="partners-grid">
        {logos.map((l, i) => {
          const img = (
            <img
              src={l.src}
              alt={l.alt}
              loading="lazy"
              decoding="async"
              className="partner-img"
            />
          );
          return (
            <div className="partner-cell" key={i} title={l.alt}>
              {l.href ? (
                <a href={l.href} target="_blank" rel="noreferrer noopener">
                  {img}
                </a>
              ) : (
                img
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
