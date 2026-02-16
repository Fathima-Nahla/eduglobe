import React from 'react';

const TutorCard = ({ tutor }: any) => {
  return (
    <div className="tutor-card">
      <div className="tutor-image">
        <img src={tutor.image} alt={tutor.name} />
      </div>
      
      <div className="tutor-info">
        <h3 className="tutor-name">{tutor.name}</h3>
        <p className="tutor-expertise">{tutor.expertise}</p>
      </div>
      
      <div className="tutor-action">
        <button className="book-btn">Book a session now</button>
        <div className="price-tag">${tutor.price}</div>
      </div>
    </div>
  );
};

export default TutorCard;