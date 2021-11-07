import React from 'react';
import LikeButton from '../likeButton/LikeButton';
import dislike from '../../assets/img/Rectangle_9_copy.png';
import like from '../../assets/img/Rectangle_9_copy_like.png';

const VoteContainer = () => (
  <div className="container-vote">
    <LikeButton icon={like} backgroundClass="card-like__likebutton" />
    <LikeButton icon={dislike} backgroundClass="card-like__dislikebutton" />
    <button type="button" className="card-button">
      Vote now
    </button>
  </div>
);

export default VoteContainer;
