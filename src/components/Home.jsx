import ornamenDaun from "/ornamen-bg.png";
import { FaRing, FaUsers } from "react-icons/fa";

export default function Home() {
  return (
    <section className="event-card-premium">

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

      <div className="event-content">

        <h2 className="event-title">
          Acara Pernikahan
        </h2>

        <div className="horizontal-divider">
          <div className="line"></div>
          <div className="dot"></div>
          <div className="line"></div>
        </div>

        <div className="event-grid-container">

          <div className="event-column">

            <div className="event-icon-circle">
              <FaRing />
            </div>

            <h3>Akad Nikah</h3>

            <p className="event-date">
              Minggu, 14 April 2026
            </p>

            <p className="event-time">
              Pukul 08.00 WIB
            </p>

            <div className="event-location-detail">
              <strong>Masjid Al-Ikhlas</strong>
              <p>Jl. Merdeka No. 1</p>
              <p>Banjarmasin Barat</p>
            </div>

          </div>

          <div className="vertical-dashed-line"></div>

          <div className="event-column">

            <div className="event-icon-circle">
              <FaUsers />
            </div>

            <h3>Resepsi</h3>

            <p className="event-date">
              Minggu, 14 April 2026
            </p>

            <p className="event-time">
              Pukul 11.00 WIB
            </p>

            <div className="event-location-detail">
              <strong>Gedung Mahligai</strong>
              <p>Jl. Veteran No. 25</p>
              <p>Banjarmasin Barat</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}