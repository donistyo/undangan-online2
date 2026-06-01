import ornamenDaun from "/ornamen-bg.png";

export default function OurStory() {
  return (
    <div className="event-card-premium story-card">
      <img src={ornamenDaun} className="leaf-ornament top-left" alt="" />
      <img src={ornamenDaun} className="leaf-ornament bottom-right" alt="" />

      <h2 className="event-title">Our Story</h2>

      <div className="story-timeline">

        <div className="story-item">
          <div className="story-year">2021</div>
          <h4>Pertemuan Pertama</h4>
          <p>
            Awal perkenalan kami dimulai dari sebuah pertemuan sederhana
            yang kemudian menjadi cerita panjang penuh makna.
          </p>
        </div>

        <div className="story-item">
          <div className="story-year">2023</div>
          <h4>Menjalin Komitmen</h4>
          <p>
            Seiring waktu kami semakin mengenal satu sama lain dan
            memutuskan untuk melangkah bersama.
          </p>
        </div>

        <div className="story-item">
          <div className="story-year">2026</div>
          <h4>Menuju Pernikahan</h4>
          <p>
            Dengan restu keluarga dan ridho Allah SWT,
            kami memutuskan untuk menyempurnakan perjalanan ini
            dalam ikatan suci pernikahan.
          </p>
        </div>

      </div>
    </div>
  );
}