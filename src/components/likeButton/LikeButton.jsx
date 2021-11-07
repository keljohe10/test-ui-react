import React from 'react';
import PropTypes from 'prop-types';
import dislike from '../../assets/img/Rectangle_9_copy.png';

const LikeButton = ({ icon, backgroundClass }) => (
  <div className={`card-like ${backgroundClass}`}>
    <img className="card-like__img" src={icon} alt="vote button" />
  </div>
);

LikeButton.defaultProps = {
  icon: dislike,
  backgroundClass: '',
};

LikeButton.propTypes = {
  icon: PropTypes.string,
  backgroundClass: PropTypes.string,
};

export default LikeButton;
