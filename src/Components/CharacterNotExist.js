import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CharacterNotExist = (props) => (
  <div>
    <div className='not-found-container'>
      <img
        src='https://media.giphy.com/media/da0NgyClHpA4jqUoav/giphy.gif'
        alt='Rick'
        className='not-found-img'
      ></img>
      <h3 className='not-found-title'>{props.message}</h3>
    </div>
    <Link className='link-detail' to={`/`}>
      <div className='not-found-return'>
        <button className='not-found-return-btn'>Back to Homepage</button>
      </div>
    </Link>
  </div>
);

CharacterNotExist.propTypes = {
  message: PropTypes.string.isRequired,
};

export default CharacterNotExist;
