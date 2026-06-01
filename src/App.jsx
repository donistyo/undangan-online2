import { useState, useEffect, useRef } from "react";
import {
  FaPlay,
  FaPause,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import "./App.css";

import Cover from "./components/Cover";
import Home from "./components/Home";
import Couple from "./components/Couple";
import Event from "./components/Event";
import Maps from "./components/Maps";
import RSVP from "./components/RSVP";
import OurStory from "./components/OurStory";
import Gallery from "./components/Galery";
import ThankYou from "./components/ThankYou";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);
  const [offsetY, setOffsetY] = useState(0);

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Loading Screen
  useEffect(() => {
    audioRef.current = new Audio("/wedding-music.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);

      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Handle Play/Pause
  const toggleMusic = async () => {
    try {
      if (!audioRef.current) return;

      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (err) {
      console.error("Audio gagal diputar:", err);
    }
  };

  const handleNavClick = () => {
    setAutoScrollEnabled(false);
    setMenuOpen(false);
  };

  // Open Invitation
  const handleOpenInvitation = async () => {
    setIsInvitationOpen(true);

    try {
      if (audioRef.current) {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.log("Autoplay dicegah:", error);
    }

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  };

  useEffect(() => {
    const stopAutoScroll = () => {
      setAutoScrollEnabled(false);
    };

    window.addEventListener("wheel", stopAutoScroll);
    window.addEventListener("touchstart", stopAutoScroll);

    return () => {
      window.removeEventListener("wheel", stopAutoScroll);
      window.removeEventListener("touchstart", stopAutoScroll);
    };
  }, []);

  // Reveal Animation
  useEffect(() => {
    if (!isInvitationOpen) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    const sections =
      document.querySelectorAll(".fade-section");

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [isInvitationOpen]);

  // Progress Bar + Parallax
  useEffect(() => {
    const handleScroll = () => {
      const winScroll =
        document.documentElement.scrollTop;

      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress =
        (winScroll / height) * 100;

      setScrollProgress(progress);
      setOffsetY(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  useEffect(() => {
    if (!isInvitationOpen) return;
    if (!autoScrollEnabled) return;

    console.log("AUTO SCROLL SMOOTH START");

    const speed = 0.5; // px per frame

    const autoScroll = setInterval(() => {

      const scrollTop =
        window.pageYOffset;

      const maxScroll =
        document.documentElement.scrollHeight -
        window.innerHeight;

      if (scrollTop >= maxScroll) {
        clearInterval(autoScroll);
        return;
      }

      window.scrollTo({
        top: scrollTop + speed,
        behavior: "auto",
      });

    }, 16);

    return () => clearInterval(autoScroll);

  }, [isInvitationOpen, autoScrollEnabled]);

  return (
    <div className="app">

      {/* Tombol Kontrol Musik (Muncul saat undangan dibuka) */}
      {isInvitationOpen && (
        <button
          className={`music-control-btn ${
            isPlaying ? "playing" : ""
          }`}
          onClick={toggleMusic}
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
      )}
      {/* Loading */}
      <div
        className={`curtain-loader ${
          !isLoading ? "open" : ""
        }`}
      >
        <div className="curtain-left"></div>
        <div className="curtain-right"></div>

        <div className="loader-content">
          <p>Wedding of</p>
          <h1>Doni & Naura</h1>
          <div className="loading-bar"></div>
        </div>
      </div>

      {!isInvitationOpen ? (
        <Cover
          openInvitation={
            handleOpenInvitation
          }
        />
      ) : (
        <div
          className="main-menu-wrapper page-enter"
          style={{
            backgroundPositionY: `${
              offsetY * 0.25
            }px`,
          }}
        >
          <div className="floating-menu">
            <button
              className="menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

            <div className={`menu-dropdown ${menuOpen ? "show" : ""}`}>
              <a
                href="#home"
                onClick={handleNavClick}
              >
                Home
              </a>

              <a
                href="#mempelai"
                onClick={() => {
                  handleNavClick();
                  setMenuOpen(false);
                }}
              >
                Mempelai
              </a>

              <a
                href="#acara"
                onClick={() => {
                  handleNavClick();
                  setMenuOpen(false);
                }}
              >
                Acara
              </a>

              <a
                href="#story"
                onClick={() => {
                  handleNavClick();
                  setMenuOpen(false);
                }}
              >
                Our Story
              </a>

              <a
                href="#gallery"
                onClick={() => {
                  handleNavClick();
                  setMenuOpen(false);
                }}
              >
                Gallery
              </a>

              <a
                href="#maps"
                onClick={() => {
                  handleNavClick();
                  setMenuOpen(false);
                }}
              >
                Maps
              </a>

              <a
                href="#rsvp"
                onClick={() => {
                  handleNavClick();
                  setMenuOpen(false);
                }}
              >
                RSVP
              </a>
            </div>
          </div>
          {/* Progress Bar */}
          <div className="scroll-progress">
            <div
              className="scroll-progress-bar"
              style={{
                width: `${scrollProgress}%`,
              }}
            />
          </div>

          {
            autoScrollEnabled && (
              <div className="auto-scroll-badge">
                Auto Story Mode
              </div>
            )
          }

          <div className="main-menu-container">
            <section
              id="home"
              className="fade-section delay-1"
            >
              <Home />
            </section>

            <section
              id="mempelai"
              className="fade-section delay-2"
            >
              <Couple />
            </section>

            <section
              id="acara"
              className="fade-section delay-3"
            >
              <Event />
            </section>

            <section
              id="story"
              className="fade-section delay-4"
            >
              <OurStory />
            </section>

            <section
              id="gallery"
              className="fade-section delay-5"
            >
              <Gallery />
            </section>

            <section
              id="maps"
              className="fade-section delay-6"
            >
              <Maps />
            </section>

            <section
              id="rsvp"
              className="fade-section delay-7"
            >
              <RSVP />
            </section>

            <section
              id="thanks"
              className="fade-section delay-8"
            >
              <ThankYou />
            </section>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;