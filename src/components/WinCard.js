import React from 'react';
import './WinCard.css';
import correct from '../assets/correct.png';
import incorrect from '../assets/wrong.png';

const WinCard = ({
  modalData,
  setIsOpen,
  message,
  currentIndex,
  setCurrentIndex,
}) => {
  return (
    <div className="card-container">
      <img src={modalData.image} alt="Mars-view" />
      <div className="card-banner">
        <img
          className="card-icon"
          src={message ? correct : incorrect}
          alt="Mars-Helicopter"
        />
      </div>
      <div className="card-article">
        <h2 className="card-title">{message ? `Congrats!!!` : `Wrong!`}</h2>

        <p className="card-paragraph">{modalData.text}</p>
        <button
          className="card-btn"
          onClick={() => {
            setIsOpen(false);
            setCurrentIndex(currentIndex + 1);
          }}
        >
          Go back to the Questions
        </button>
      </div>
    </div>
  );
};

export default WinCard;
