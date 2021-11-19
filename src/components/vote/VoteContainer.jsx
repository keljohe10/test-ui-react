import React from 'react';
import PropTypes from 'prop-types';
import LikeButton from '../likeButton/LikeButton';
import dislike from '../../assets/img/Rectangle_9_copy.png';
import like from '../../assets/img/Rectangle_9_copy_like.png';

const VoteContainer = ({ onClick, optionVote, option, isVote }) => {
  const onVote = () => {
    onClick(isVote);
  };
  const onSelectedIcon = (value) => {
    optionVote(value);
  };
  return (
    <div className="container-vote">
      {!isVote && (
        <>
          <LikeButton
            icon={like}
            onSelected={() => onSelectedIcon('like')}
            backgroundClass={`card-like__likebutton card-like__margin ${
              option === null || option === 0 ? 'unselected-button' : 'selected-button'
            }`}
          />
          <LikeButton
            icon={dislike}
            onSelected={() => onSelectedIcon('dislike')}
            backgroundClass={`card-like__dislikebutton card-like__margin ${
              option === null || option === 1 ? 'unselected-button' : 'selected-button'
            }`}
          />
        </>
      )}

      <button
        disabled={option === null && !isVote}
        onClick={onVote}
        type="button"
        className="card-button"
      >
        {!isVote ? 'Vote Now' : 'Vote Again'}
      </button>
    </div>
  );
};

VoteContainer.defaultProps = {
  onClick: () => {},
  optionVote: () => {},
  option: null,
  isVote: null,
};

VoteContainer.propTypes = {
  onClick: PropTypes.func,
  optionVote: PropTypes.func,
  option: PropTypes.number,
  isVote: PropTypes.bool,
};

export default VoteContainer;
