import React, { useEffect, useState } from 'react';

import '../css/AnimalCard.css';

const AnimalCard = ({animal, showdetails}) => {
  const [selectedCardId, setSelectedCardId] = useState(null);

  // Função para alternar o card selecionado
  const handleCardClick = (id) => {
    console.log(id);
    setSelectedCardId(prevSelectedCardId => (prevSelectedCardId === id ? null : id));
  };

  useEffect(() => {
    console.log(selectedCardId);
  }, [selectedCardId]);

  return (
    <>
      <div className={`card ${selectedCardId === animal.ID ? 'selected' : ''}`}>
        <img 
          src={animal.Picture.src} 
          alt={animal.Picture.alt} 
          className="card-image" 
          onClick={() => handleCardClick(animal.ID)} 
        />

        <p className='card-title'>{animal.Name}</p>

        {showdetails && selectedCardId === animal.ID && (
          <div className="card-details">
            <p>{animal.Text}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default AnimalCard;
