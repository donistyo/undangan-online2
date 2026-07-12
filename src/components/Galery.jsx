import { useEffect, useState, useCallback } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import prewed1 from "../assets/prewed1.jpg";
import prewed2 from "../assets/prewed2.jpeg";
import prewed3 from "../assets/prewed3.jpg";
import prewed4 from "../assets/prewed4.png";

const images = [
  prewed1,
  prewed2,
  prewed3,
  prewed4,
];

export default function Gallery() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, []);

  const prev = useCallback(() => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    const timer = setInterval(next, 3500);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="gallery-card event-card-premium">
      <h2 className="event-title">Prewedding Moment</h2>

      <div className="gallery-slider-wrapper">
        <button className="gallery-btn gallery-btn-left" onClick={prev}>
          <FaChevronLeft />
        </button>

        <div className="gallery-slider">
          <div
            className="gallery-track"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {images.map((src, i) => (
              <div className="gallery-slide" key={i}>
                <img
                  src={src}
                  alt=""
                  className="gallery-image"
                  onError={(e) => {
                    console.log("Gagal load:", src);
                    e.target.src = "/fallback.jpg";
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        <button className="gallery-btn gallery-btn-right" onClick={next}>
          <FaChevronRight />
        </button>
      </div>

      <div className="gallery-dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={`gallery-dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}