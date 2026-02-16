"use client";
import React from "react";



const TheTutors = ({tutor}: any) => {
  return (
    <div className="tutor-card-item">
      {/* Banner with image background */}
      <div
        className="tutor-banner-section"
        style={{
          backgroundImage: `url(${tutor?.background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        {/* Profile Image */}
        <div className="tutor-profile-container">
          <div className="tutor-profile-wrapper">
            <img
              src={tutor?.image}
              alt={tutor?.name}
              className="tutor-profile-image"
            />
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="tutor-card-content">
        <div className="tutor-name-row">
          <h3 className="tutor-name">{tutor?.name}</h3>
          <img
            src="/assets/images/science/icon.svg"
            alt="info"
            className="tutor-info-icon"
          />
        </div>

        <p className="tutor-qualification">{tutor?.degree}</p>
        <div className="tutor-teaching-badge">Interactive & Practical</div>

        <div className="tutor-stats">
          <div className="stat-item">
            <div className="stat-value">
              <span className="text-black text-lg">★</span>

              {tutor?.rating}
            </div>
            <p className="stat-label">rating</p>
          </div>
          <div className="stat-item">
            <div className="stat-value">${tutor?.rate}/hr</div>
            <p className="stat-label">rate</p>
          </div>
          <div className="stat-item">
            <div className="stat-value">{tutor?.experience}</div>
            <p className="stat-label">experience</p>
          </div>
        </div>

        <button className="booking-button">Book a Session Now</button>
      </div>
    </div>
  );
};

export default TheTutors;
