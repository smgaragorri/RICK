import React from 'react';
import PropTypes from 'prop-types';

const CharacterNotFound = (props) => (
  <div className='not-found-container'>
    <img
      src='https://media.giphy.com/media/da0NgyClHpA4jqUoav/giphy.gif'
      alt='Rick'
      className='not-found-img'
    ></img>
    <h3 className='not-found-title'>{props.message}</h3>
  </div>
);

CharacterNotFound.propTypes = {
  message: PropTypes.string.isRequired,
};

export default CharacterNotFound;
