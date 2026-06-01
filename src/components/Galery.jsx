import { useEffect, useState } from "react";

const images = [
  "/prewed1.jpg",
  "/prewed2.jpg",
  "/prewed3.jpg",
  "/prewed4.jpg",
];

export default function Gallery() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
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
        <img src={images[index]} alt="" />
      </div>
    </div>
  );
}