import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import dislike from '../../assets/img/Rectangle_9_copy.png';
import like from '../../assets/img/Rectangle_9_copy_like.png';
import LikeButton from '../likeButton/LikeButton';
import VoteContainer from '../vote/VoteContainer';
import { votePostive, voteNegative } from '../../features/celebrities/celebrities';
import request from '../../api/requests';

const Card = ({ data }) => {
  const [option, setOption] = useState(null);
  const [isVote, setIsVote] = useState(false);
  const dispatch = useDispatch();
  const { votes } = data;
  const { positive, negative } = votes;

  const calculateRate = () => {
    const total = negative + positive;
    const percentagePositive = (positive * 100) / total;
    return {
      positive: percentagePositive,
      negative: 100 - percentagePositive,
    };
  };

  const showDate = (date) => {
    let diff;
    const dateFormate = new Date(date);
    const today = new Date();
    if (dateFormate.getFullYear() !== today.getFullYear()) {
      diff = `${today.getFullYear() - dateFormate.getFullYear()} year ago in`;
    } else if (dateFormate.getMonth() !== today.getMonth()) {
      diff = `${today.getMonth() - dateFormate.getMonth()} month ago in`;
    } else {
      diff = `${today.getDate() - dateFormate.getDate()} day ago in`;
    }
    return diff;
  };

  const truncate = (source, size) =>
    source.length > size ? `${source.slice(0, size - 1)}…` : source;

  const onVote = async () => {
    if (option === 1) {
      dispatch(
        votePostive({
          id: data.id,
        }),
      );
      await request.patch(`/celebrities/${data.id}?vote=1`);
    } else if (option === 0) {
      dispatch(
        voteNegative({
          id: data.id,
        }),
      );
      await request.patch(`/celebrities/${data.id}?vote=0`);
    }
    setIsVote(!!(option === 1 || option === 0));
    setOption(null);
  };

  const optionVote = (value) => {
    setOption(value === 'like' ? 1 : 0);
  };

  return (
    <div
      className="container-card"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.6) 100%),
    url('${data.picture}')`,
      }}
    >
      <div className="container-card__title">
        <LikeButton
          icon={calculateRate().negative > 50 ? dislike : like}
          backgroundClass={`card-like__margin ${
            calculateRate().negative > 50 ? 'card-like__dislikebutton' : 'card-like__likebutton'
          }`}
        />
        <h3>{data.name}</h3>
      </div>
      <p>{truncate(data.description, 40)}</p>
      <span>
        {isVote ? 'Thank you for your vote!' : `${showDate(data.lastUpdated)} ${data.category}`}
      </span>
      <VoteContainer onClick={onVote} optionVote={optionVote} option={option} isVote={isVote} />
      <div
        className="card-container-rate"
        style={{
          background: `linear-gradient(to right,  rgba(var(--color-green-positive), 0.6) 0%, rgba(var(--color-green-positive), 0.6) ${
            calculateRate().positive
          }%, rgba(var(--color-yellow-negative), 0.6) ${
            calculateRate().negative
          }%, rgba(var(--color-yellow-negative), 0.6) 100%`,
        }}
      >
        <div className="like">
          <img src={like} alt="like" />
          <p>{calculateRate().positive.toFixed(2)}%</p>
        </div>
        <div className="dislike">
          <img src={dislike} alt="dislike" />
          <p>{calculateRate().negative.toFixed(2)}%</p>
        </div>
      </div>
    </div>
  );
};

Card.defaultProps = {
  data: {},
};

Card.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    picture: PropTypes.string,
    lastUpdated: PropTypes.string,
    votes: PropTypes.objectOf(PropTypes.number),
    id: PropTypes.string,
  }),
};

export default Card;
