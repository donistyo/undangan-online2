import { FaMapMarkerAlt } from "react-icons/fa";
import ornamenDaun from "/ornamen-bg.png";

export default function Maps() {
  return (
    <section id="maps" className="event-card-premium maps-card">
      <h2 className="maps-title">Lokasi</h2>

      <div className="mapsFrame">
        <img
          src={ornamenDaun}
          className="leaf-ornament top-left"
          alt=""
        />

        <img
          src={ornamenDaun}
          className="leaf-ornament bottom-right"
          alt=""
        />
        <div className="maps-icon">
          <FaMapMarkerAlt />
        </div>

        <p>
          Gedung Bahagia
          <br />
          Jakarta Selatan
        </p>

        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noreferrer"
          className="btn-maps"
        >
          Buka Maps
        </a>
      </div>
    </section>
  );
}