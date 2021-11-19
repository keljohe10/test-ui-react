import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';

const CardsContainer = () => {
  const { entities } = useSelector((state) => state.celebrities);

  return (
    <>
      <h2 className="container-title">Previous Rulings</h2>
      <div className="cards-container-slider">
        {entities.length > 0 &&
          entities.map((celebrity) => <Card key={celebrity.id} data={celebrity} />)}
      </div>
    </>
  );
};

export default CardsContainer;
