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
              <td>8:00 AM - 8:30 AM</td>
            </tr>
            <tr>
              <td>Coding Time:</td>
              <td>8:30 AM - 6:00 PM</td>
            </tr>
            <tr>
              <td>Workshop on AI Image Recognition:</td>
              <td>9:00 AM - 9:45 AM</td>
            </tr>
            <tr>
              <td>Workshop on Tech Job Market:</td>
              <td>11:00 AM - 11:45 AM</td>
            </tr>
            <tr>
              <td>Lunch Break:</td>
              <td>12:00 PM - 13:00 PM</td>
            </tr>
            <tr>
              <td>Workshop on Deployment:</td>
              <td>03:00 PM - 3:45 PM</td>
            </tr>
            <tr>
              <td>Judging:</td>
              <td>6:30 PM - 7:30 PM</td>
            </tr>
            <tr>
              <td>Closing Ceremony:</td>
              <td>7:30 PM - 8:00 PM</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Modal>
  );
}
