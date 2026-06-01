import {
  FaHome,
  FaHeart,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaEnvelope
} from "react-icons/fa";

export default function BottomNav() {
  return (
    <nav className="bottomNav">

      <a href="#home">
        <FaHome />
        <span>Home</span>
      </a>

      <a href="#mempelai">
        <FaHeart />
        <span>Mempelai</span>
      </a>

      <a href="#acara">
        <FaCalendarAlt />
        <span>Acara</span>
      </a>

      <a href="#maps">
        <FaMapMarkerAlt />
        <span>Maps</span>
      </a>

      <a href="#rsvp">
        <FaEnvelope />
        <span>RSVP</span>
      </a>

    </nav>
  );
}