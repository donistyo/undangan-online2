import { useState, useEffect } from "react";
import { FaEnvelopeOpenText } from "react-icons/fa";
import ornamenDaun from "/ornamen-bg.png";

import { supabase } from "../lib/supabase";

export default function RSVP() {
  const [nama, setNama] = useState("");
  const [kehadiran, setKehadiran] = useState("");
  const [ucapan, setUcapan] = useState("");
  const [loading, setLoading] = useState(false);
  const [ucapanList, setUcapanList] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

  const [showGift, setShowGift] = useState(false);

  const loadUcapan = async () => {
    const { data, error } = await supabase
      .from("rsvp")
      .select("*")
      .order("created_at", {
        ascending: false,
      });

    if (!error) {
      setUcapanList(data || []);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await loadUcapan();
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!successMessage) return;

    const timer = setTimeout(() => {
      setSuccessMessage("");
    }, 3000);

    return () => clearTimeout(timer);
  }, [successMessage]);

  useEffect(() => {
    const channel = supabase
      .channel("rsvp-realtime")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "rsvp",
        },
        () => {
          loadUcapan();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const submitRSVP = async (e) => {
    e.preventDefault();

    if (!nama || !kehadiran) {
        setSuccessMessage("⚠️ Mohon lengkapi data terlebih dahulu");
      return;
    }

    setLoading(true);

      try {
        const { error } = await supabase
          .from("rsvp")
          .insert([
            {
              nama,
              kehadiran,
              jumlah_hadir:
                kehadiran === "hadir" ? 1 : 0,
              ucapan,
            },
          ]);

        if (error) throw error;

        await loadUcapan();

        setSuccessMessage(
          "Terima kasih atas konfirmasi kehadirannya ❤️"
        );

        setNama("");
        setKehadiran("");
        setUcapan("");

      } catch (err) {
        console.error(err);

        setSuccessMessage("❌ Gagal menyimpan RSVP");
      } finally {
        setLoading(false);
      }
    };
  return (
    <section
      id="rsvp"
      className="event-card-premium rsvp-card"
    >
      <img
        src={ornamenDaun}
        className="leaf-ornament top-left"
        alt=""
      />

      <h2 className="rsvp-title">
        RSVP
      </h2>

      <div className="rsvp-icon">
        <FaEnvelopeOpenText />
      </div>

      <p className="rsvp-subtitle">
        Mohon konfirmasi kehadiran dan doa restu Anda
      </p>

      <form
        className="rsvpForm"
        onSubmit={submitRSVP}
      >
        <input
          type="text"
          placeholder="Nama Lengkap"
          className="rsvp-input"
          value={nama}
          onChange={(e) =>
            setNama(e.target.value)
          }
        />

        <select
          className="rsvp-input"
          value={kehadiran}
          onChange={(e) =>
            setKehadiran(e.target.value)
          }
        >
          <option value="">
            Konfirmasi Kehadiran
          </option>

          <option value="hadir">
            Hadir
          </option>

          <option value="tidak-hadir">
            Tidak Hadir
          </option>
        </select>

        <textarea
          rows="4"
          placeholder="Tulis ucapan dan doa restu..."
          className="rsvp-input"
          value={ucapan}
          onChange={(e) =>
            setUcapan(e.target.value)
          }
        />

        <button
          type="submit"
          className="btn-rsvp"
          disabled={loading}
        >
          {loading
            ? "Mengirim..."
            : "Kirim RSVP"}
        </button>
      </form>
      <div className="gift-section">
        <h3 className="gift-title">
          🎁 Kirim Hadiah
        </h3>

        <p className="gift-subtitle">
          Doa restu Anda merupakan hadiah terindah bagi kami.
          Namun jika ingin memberikan tanda kasih, dapat melalui:
        </p>

        <button
          className="btn-gift"
          onClick={() => setShowGift(!showGift)}
        >
          {showGift
            ? "Sembunyikan Rekening"
            : "Lihat Rekening"}
        </button>

        {showGift && (
          <div className="gift-card">
            <div className="bank-item">
              <h4>BCA</h4>
              <p>1234567890</p>
              <small>a.n. Adam Pratama</small>
            </div>

            <div className="bank-item">
              <h4>Mandiri</h4>
              <p>9876543210</p>
              <small>a.n. Nara Putri</small>
            </div>
          </div>
        )}
      </div>
      <div className="guestbook-section">
        <h3 className="guestbook-title">
          Ucapan & Doa Restu
        </h3>

        <div className="guestbook-list">
          {ucapanList.length === 0 ? (
            <p className="guestbook-empty">
              Belum ada ucapan.
            </p>
          ) : (
            ucapanList.map((item) => (
              <div
                key={item.id}
                className="guestbook-item"
              >
                <div className="guestbook-header">
                  <strong>
                    {item.nama}
                  </strong>

                  <span
                    className={`guest-status ${
                      item.kehadiran === "hadir"
                        ? "hadir"
                        : "tidak-hadir"
                    }`}
                  >
                    {item.kehadiran === "hadir"
                      ? "✓ Hadir"
                      : "✕ Tidak Hadir"}
                  </span>
                </div>

                <p className="guestbook-message">
                  {item.ucapan}
                </p>

                <small>
                  {new Date(
                    item.created_at
                  ).toLocaleString("id-ID")}
                </small>
              </div>
            ))
          )}
        </div>
      </div>
      {successMessage && (
        <div className="rsvp-success">
          {successMessage}
        </div>
      )}
    </section>
  );
}