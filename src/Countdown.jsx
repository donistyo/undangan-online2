import { useEffect, useState } from "react";

export default function Countdown() {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date("2026-04-14").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = target - now;

      setTime({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) /
          (1000 * 60 * 60)
        ),
        minutes: Math.floor(
          (distance % (1000 * 60 * 60)) /
          (1000 * 60)
        ),
        seconds: Math.floor(
          (distance % (1000 * 60)) /
          1000
        ),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown-wrapper">

      <div className="countdown-box">
        <span>{time.days}</span>
        <p>Hari</p>
      </div>

      <div className="countdown-box">
        <span>{time.hours}</span>
        <p>Jam</p>
      </div>

      <div className="countdown-box">
        <span>{time.minutes}</span>
        <p>Menit</p>
      </div>

      <div className="countdown-box">
        <span>{time.seconds}</span>
        <p>Detik</p>
      </div>

    </div>
  );
}