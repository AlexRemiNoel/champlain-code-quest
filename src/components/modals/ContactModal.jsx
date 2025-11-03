import Modal from "../ui/Modal";

export default function ContactModal({
  open,
  onClose,
  onOpenDiscord,
  onOpenInstagram,
}) {
  const openNewTab = (url) => window.open(url, "_blank", "noopener,noreferrer");
  const handleDiscord = () =>
    (typeof onOpenDiscord === "function"
      ? onOpenDiscord()
      : openNewTab("https://discord.gg/P8rdJ4XmJB"));
  const handleInstagram = () =>
    (typeof onOpenInstagram === "function"
      ? onOpenInstagram()
      : openNewTab("https://www.instagram.com/champlain_programming_club/"));

  return (
    <Modal isOpen={open} onClose={onClose} title="Contact us:">
      <table>
        <tbody>
          <tr>
            <td>Discord: </td>
            <td>Join our discord </td>
            <td>
              <button onClick={handleDiscord}>here</button>
              <br />
            </td>
          </tr>
          <tr>
            <td>Instagram: </td>
            <td>Follow us </td>
            <td>
              <button onClick={handleInstagram}>here</button>
              <br />
            </td>
          </tr>
        </tbody>
      </table>
    </Modal>
  );
}
