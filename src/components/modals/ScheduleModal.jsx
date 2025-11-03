import Modal from "../ui/Modal";

export default function ScheduleModal({ open, onClose }) {
  return (
    <Modal isOpen={open} onClose={onClose} title="Schedule">
      <div>
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
      </div>
    </Modal>
  );
}
