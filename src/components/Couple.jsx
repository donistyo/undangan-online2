import ornamenDaun from "/ornamen-bg.png";

export default function Couple() {
  return (
    <section id="mempelai" className="couple-section fade-section">
      <div className="couple-row">

        <div className="couple-card">
          
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

          <p className="couple-role">Mempelai Pria</p>

          <div className="arch-frame">
            <img
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600"
              alt="Doni"
            />
          </div>

          <h3>Doni Pratama</h3>

          <p className="couple-desc">Putra dari</p>
          <p className="couple-parent">Bapak Ahmad</p>
          <p className="couple-parent">& Ibu Siti</p>
        </div>

        <div className="couple-card">
         
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
          <p className="couple-role">Mempelai Wanita</p>

          <div className="arch-frame">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600"
              alt="Naura"
            />
          </div>

          <h3>Naura Azzahra</h3>

          <p className="couple-desc">Putri dari</p>
          <p className="couple-parent">Bapak Yusuf</p>
          <p className="couple-parent">& Ibu Rina</p>
        </div>

      </div>
    </section>
  );
}