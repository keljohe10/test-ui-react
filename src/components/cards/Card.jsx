import React from 'react';
import dislike from '../../assets/img/Rectangle_9_copy.png';
import LikeButton from '../likeButton/LikeButton';
import VoteContainer from '../vote/VoteContainer';

const Card = () => (
  <div className="container-card">
    <div className="container-card__title">
      <LikeButton icon={dislike} backgroundClass="card-like__dislikebutton" />
      <h3>Kanye West</h3>
    </div>
    <p>Vestibulum diam ante, porttitor a odio eget, rhoncus. Eu velit…</p>
    <span>1 month ago in Entertainment</span>
    <VoteContainer />
  </div>
);

export default Card;
