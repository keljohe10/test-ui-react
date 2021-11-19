import React from 'react';
import PropTypes from 'prop-types';
import dislike from '../../assets/img/Rectangle_9_copy.png';

const LikeButton = ({ icon, backgroundClass, onSelected }) => {
  const onChecked = () => {
    onSelected();
  };
  return (
    <button type="button" className={`card-like ${backgroundClass}`} onClick={onChecked}>
      <img className="card-like__img" src={icon} alt="vote button" />
    </button>
  );
};

LikeButton.defaultProps = {
  icon: dislike,
  backgroundClass: '',
  onSelected: () => {},
};

LikeButton.propTypes = {
  icon: PropTypes.string,
  backgroundClass: PropTypes.string,
  onSelected: PropTypes.func,
};

export default LikeButton;
