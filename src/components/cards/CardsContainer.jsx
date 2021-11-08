import React from 'react';
// import Card from './Card';
import CardList from './CardList';

const CardsContainer = () => (
  <>
    <h2 className="container-title">Previous Rulings</h2>
    <div className="cards-container-slider">
      {/* <Card /> */}
      <CardList />
      <CardList />
    </div>
  </>
);

export default CardsContainer;
