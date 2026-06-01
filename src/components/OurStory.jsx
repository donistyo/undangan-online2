import { useEffect, useState, useRef } from "react";
import ornamenDaun from "/ornamen-bg.png";

const stories = [
  {
    year: "2021",
    title: "Pertemuan Pertama",
    desc:
      "Awal perkenalan kami dimulai dari sebuah pertemuan sederhana yang kemudian menjadi cerita panjang penuh makna.",
  },
  {
    year: "2023",
    title: "Menjalin Komitmen",
    desc:
      "Seiring waktu kami semakin mengenal satu sama lain dan memutuskan untuk melangkah bersama.",
  },
  {
    year: "2026",
    title: "Menuju Pernikahan",
    desc:
      "Dengan restu keluarga dan ridho Allah SWT, kami memutuskan untuk menyempurnakan perjalanan ini dalam ikatan suci pernikahan.",
  },
];

export default function OurStory() {
  const [visibleCount, setVisibleCount] = useState(0);
  const ref = useRef(null);

  // reset + autoplay setiap masuk section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCount(0); // reset tiap masuk
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  // auto reveal step-by-step
  useEffect(() => {
    if (visibleCount >= stories.length) return;

    const timer = setTimeout(() => {
      setVisibleCount((v) => v + 1);
    }, 900);

    return () => clearTimeout(timer);
  }, [visibleCount]);

  return (
    <div ref={ref} className="event-card-premium story-card">
      <img src={ornamenDaun} className="leaf-ornament top-left" />
      <img src={ornamenDaun} className="leaf-ornament bottom-right" />

      <h2 className="event-title">Our Story</h2>

      <div className="story-timeline">
        {stories.slice(0, visibleCount).map((item, i) => (
          <div key={i} className="story-item">
            <div className="story-year">{item.year}</div>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}