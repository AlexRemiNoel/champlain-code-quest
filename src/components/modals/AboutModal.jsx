import Modal from "../ui/Modal";

export default function AboutModal({ open, onClose }) {
  return (
    <Modal isOpen={open} onClose={onClose} title="About">
      <div className="about-body">
        <p className="about-description">
          <strong>Champlain Code Quest</strong> is a beginner-friendly hackathon
          designed to bring together college students who are passionate about
          technology, innovation, and teamwork. Whether you're writing your
          first line of code or refining your next big idea, Code Quest is the
          perfect place to learn, collaborate, and build something amazing.
        </p>

        <h4 className="about-subtitle">Prize Categories</h4>
        <ul className="about-list">
          <li>🏆 Best Overall Project</li>
          <li>🎨 Most Creative Project</li>
          <li>🌱 Best Beginner Project</li>
        </ul>
      </div>
    </Modal>
  );
}
