import { FaEnvelopeOpenText } from "react-icons/fa";
import ornamenDaun from "/ornamen-bg.png";

export default function RSVP() {
  return (
    <section id="rsvp" className="event-card-premium rsvp-card">
        <img
          src={ornamenDaun}
          className="leaf-ornament top-left"
          alt=""
        />
      <h2 className="rsvp-title">
        RSVP
      </h2>

      <div className="rsvp-icon">
        <FaEnvelopeOpenText />
      </div>

      <p className="rsvp-subtitle">
        Mohon konfirmasi kehadiran dan doa restu Anda
      </p>

      <form className="rsvpForm">

        <input
          type="text"
          placeholder="Nama Lengkap"
          className="rsvp-input"
        />

        <select className="rsvp-input">
          <option value="">
            Konfirmasi Kehadiran
          </option>
          <option value="hadir">
            Hadir
          </option>
          <option value="tidak-hadir">
            Tidak Hadir
          </option>
        </select>

        <textarea
          rows="4"
          placeholder="Tulis ucapan dan doa restu..."
          className="rsvp-input"
        />

        <button
          type="submit"
          className="btn-rsvp"
        >
          Kirim RSVP
        </button>

      </form>
    </section>
  );
}