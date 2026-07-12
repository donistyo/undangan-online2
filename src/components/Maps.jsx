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
          Jl. Balaikota No.17-19
          <br />
          Kandangsapi, Kec. Panggungrejo
          <br />
          Kota Pasuruan, Jawa Timur 67125
        </p>

        <a
          href="https://www.google.com/maps/dir/?api=1&destination=Jl.+Balaikota+No.17-19,+Kandangsapi,+Kec.+Panggungrejo,+Kota+Pasuruan,+Jawa+Timur+67125"
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