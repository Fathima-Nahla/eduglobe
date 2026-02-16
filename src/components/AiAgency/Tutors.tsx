"use client";
import React, { useRef, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Tutor {
  name: string;
  degree: string;
  image: string;
  background: string;
  rating: number;
  rate: number;
  experience: string;
}

const tutors: Tutor[] = [
  {
    name: "Alexandra Moore",
    degree: "MSC, Physics",
    image: "/assets/images/tutors/tutor1.jpg",
    background: "/assets/images/science/img1.jpg",
    rating: 4.9,
    rate: 45,
    experience: "10yr",
  },
  {
    name: "Alexandra Moore",
    degree: "MSC, Physics",
    image: "/assets/images/tutors/tutor2.jpg",
    background: "/assets/images/science/img2.jpg",
    rating: 4.9,
    rate: 45,
    experience: "10yr",
  },
  {
    name: "Alexandra Moore",
    degree: "MSC, Physics",
    image: "/assets/images/tutors/tutor3.jpg",
    background: "/assets/images/science/img3.jpg",
    rating: 4.9,
    rate: 45,
    experience: "10yr",
  },
  {
    name: "Alexandra Moore",
    degree: "MSC, Physics",
    image: "/assets/images/tutors/tutor3.jpg",
    background: "/assets/images/science/img3.jpg",
    rating: 4.9,
    rate: 45,
    experience: "10yr",
  },
];

const ScienceTutors: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    setIsMobile(window.innerWidth <= 480);

    const handleResize = () => setIsMobile(window.innerWidth <= 480);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll function for arrows
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="tutors-wrapper section-spacing-top section-spacing-bottom">
      <div className="container">
        {/* Header */}
        <div className="tutors-header-section">
          <h2 className="tutors-title">Meet Our Science Tutors</h2>

          {/* Arrows only on desktop */}
          {!isMobile && (
            <div className="tutors-navigation">
              <button className="nav-button" onClick={() => scroll("left")}>
                <ArrowLeft size={16} />
              </button>
              <button className="nav-button" onClick={() => scroll("right")}>
                <ArrowRight size={16} />
              </button>
            </div>
          )}
        </div>

        {/* Scrollable Tutor Cards */}
        <div
          className={`tutors-slider ${isMobile ? "mobile-slider" : ""}`}
          ref={scrollRef}
        >
          {tutors.map((tutor, index) => (
            <div className="tutor-card-item" key={index}>
              {/* Banner */}
              <div
                className="tutor-banner-section"
                style={{
                  backgroundImage: `url(${tutor.background})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              {/* Profile */}
              <div className="tutor-profile-container">
                <div className="tutor-profile-wrapper">
                  <img
                    src={tutor.image}
                    alt={tutor.name}
                    className="tutor-profile-image"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="tutor-card-content">
                <div className="tutor-name-row">
                  <h3 className="tutor-name">{tutor.name}</h3>
                  <img
                    src="/assets/images/science/icon.svg"
                    alt="info"
                    className="tutor-info-icon"
                  />
                </div>
                <p className="tutor-qualification">{tutor.degree}</p>
                <div className="tutor-teaching-badge">
                  Interactive & Practical
                </div>
                <div className="tutor-stats">
                  <div className="stat-item">
                    <div className="stat-value">
                      <span className="text-black text-lg">★</span>
                      {tutor.rating}
                    </div>
                    <p className="stat-label">rating</p>
                  </div>
                  <div className="stat-item">
                    <div className="stat-value">${tutor.rate}/hr</div>
                    <p className="stat-label">rate</p>
                  </div>
                  <div className="stat-item">
                    <div className="stat-value">{tutor.experience}</div>
                    <p className="stat-label">experience</p>
                  </div>
                </div>
                <button className="booking-button">Book a Session Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScienceTutors;
