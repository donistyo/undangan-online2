import bgCover from "../assets/cover.jpg"; // Import background
import ornamenDaun from "/ornamen-bg.png";
import prewed from "/prewed.jpg";
import { FaEnvelope } from "react-icons/fa";

function Cover({ openInvitation }) {
  return (
    <section 
      className="cover-container"
      style={{ 
        backgroundImage: `url(${bgCover})`, // Gunakan variabel import
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <p className="welcome-text">YOU ARE CORDIALLY INVITED TO</p>
      <p className="welcome-text" style={{fontWeight: 'bold'}}>THE WEDDING OF</p>
      
      <h1 className="main-title">Adam & Nara</h1>

      <div className="ornamen-frame-wrapper">
        <img src={ornamenDaun} className="ornamen-img" alt="frame" />
        <img src={prewed} className="photo-inside-frame" alt="Pasangan" />
      </div>

      <div className="guest-info">
        <p style={{color: '#1e3529'}}>Kepada Yth.</p>
        <h3 style={{color: '#1e3529'}}>Nama Tamu</h3>
      </div>

      <button className="open-btn" onClick={openInvitation}>
        <FaEnvelope /> Buka Undangan
      </button>
    </section>
  );
}
export default Cover;
