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

export default function OurStory({
  autoScrollEnabled = false,
}) {
  const [visibleCount, setVisibleCount] =
    useState(0);

  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        if (autoScrollEnabled) {
          setVisibleCount(1);
        } else {
          setVisibleCount(stories.length);
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [autoScrollEnabled]);

  useEffect(() => {
    if (!autoScrollEnabled) return;

    if (
      visibleCount === 0 ||
      visibleCount >= stories.length
    )
      return;

    const timer = setTimeout(() => {
      setVisibleCount((prev) => prev + 1);
    }, 900);

    return () => clearTimeout(timer);
  }, [visibleCount, autoScrollEnabled]);

  return (
    <div
      ref={ref}
      className="event-card-premium story-card"
    >
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

      <h2 className="event-title">
        Our Story
      </h2>

      <div className="story-timeline">
        {stories
          .slice(0, visibleCount)
          .map((item, i) => (
            <div
              key={i}
              className="story-item show"
            >
              <div className="story-year">
                {item.year}
              </div>

              <h4>{item.title}</h4>

              <p>{item.desc}</p>
            </div>
          ))}
      </div>
    </div>
  );
}