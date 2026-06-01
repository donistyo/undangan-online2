import { useEffect, useState } from "react";

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

  useEffect(() => {
    // preload semua gambar
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    const timer = setInterval(() => {
      setIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="gallery-card event-card-premium">
      <h2 className="event-title">Prewedding Moment</h2>

      <div className="gallery-slider">
        <img
          key={index}
          src={images[index]}
          alt=""
          className="gallery-image"
          onError={(e) => {
            console.log("Gagal load:", images[index]);
            e.target.src = "/fallback.jpg";
          }}
        />
      </div>
    </div>
  );
}