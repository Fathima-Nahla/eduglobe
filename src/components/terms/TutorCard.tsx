import Link from "next/link";
import React from "react";

const TutorCard = ({ tutor }: any) => {
  return (
    <div className="grades-card">
      <div className="grades-image">
        <img src={tutor.image} alt={tutor.title} />
      </div>

      <div className="grades-info">
        <h3 className="grades-name">{tutor.title}</h3>
        <p className="grades-expertise">{tutor.desc}</p>
      </div>

      <div className="btn-wrapper fade-anim" suppressHydrationWarning={true}>
        <div className="t-btn-group">
          <Link className="t-btn t-btn-circle" href={tutor?.link || "#"}>
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
          <Link className="t-btn t-btn-primary" href={tutor?.link || "#"}>
            View Course
          </Link>
          <Link className="t-btn t-btn-circle" href={tutor?.link || "#"}>
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TutorCard;
