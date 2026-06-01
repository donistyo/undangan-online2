import Countdown from "../Countdown";
import ornamenDaun from "/ornamen-bg.png";

export default function Event() {
  return (
    <section id="acara" className="event-card-premium">

      <div className="save-date-header">
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

        <span className="save-date-subtitle">
          WE ARE GETTING MARRIED
        </span>

        <h2 className="save-date-title">
          Save The Date
        </h2>

        <p className="save-date-date">
          14 April 2026
        </p>

      </div>

      <div className="save-date-divider">
        <span></span>
      </div>

      <Countdown />

    </section>
  );
}