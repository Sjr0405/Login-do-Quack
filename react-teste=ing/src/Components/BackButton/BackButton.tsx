import React from 'react';
import './BackButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const BackButton: React.FC = () => {
  return (
    <button className="back-button">
      <FontAwesomeIcon icon={faArrowLeft} className="arrow" /> Voltar
    </button>
  );
};

export default BackButton;
