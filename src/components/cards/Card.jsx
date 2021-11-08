import React from 'react';
import dislike from '../../assets/img/Rectangle_9_copy.png';
import like from '../../assets/img/Rectangle_9_copy_like.png';
import LikeButton from '../likeButton/LikeButton';
import VoteContainer from '../vote/VoteContainer';

const Card = () => {
  const vote = {
    positive: 418,
    negative: 233,
  };
  const calculateRate = () => {
    const total = vote.negative + vote.positive;
    const percentagePositive = (vote.positive * 100) / total;
    return percentagePositive;
  };
  return (
    <div className="container-card">
      <div className="container-card__title">
        <LikeButton icon={dislike} backgroundClass="card-like__dislikebutton" />
        <h3>Kanye West</h3>
      </div>
      <p>Vestibulum diam ante, porttitor a odio eget, rhoncus. Eu velit…</p>
      <span>1 month ago in Entertainment</span>
      <VoteContainer />
      <div
        className="card-container-rate"
        style={{
          background: `linear-gradient(to right,  rgba(var(--color-green-positive), 0.6) 0%, rgba(var(--color-green-positive), 0.6) ${calculateRate()}%, rgba(var(--color-yellow-negative), 0.6) ${calculateRate()}%, rgba(var(--color-yellow-negative), 0.6) 100%`,
        }}
      >
        <div className="like">
          <img src={like} alt="like" />
          <p>25%</p>
        </div>
        <div className="dislike">
          <img src={dislike} alt="dislike" />
          <p>75%</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
