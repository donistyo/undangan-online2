import ornamenDaun from "/ornamen-bg.png";

export default function ThankYou() {
  return (
    <div className="event-card-premium thankyou-card">
      <img src={ornamenDaun} className="leaf-ornament top-left" alt="" />
      <img src={ornamenDaun} className="leaf-ornament bottom-right" alt="" />

      <h2 className="thankyou-title">Thank You</h2>

      <p className="thankyou-text">
        Merupakan suatu kehormatan dan kebahagiaan bagi kami
        apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.
      </p>

      <h3 className="thankyou-couple">
        Doni & Naura
      </h3>
    </div>
  );
}