import React from 'react';
import Rick from '../Stylesheets/rick-facepalm.jpg';
// import PropTypes from 'prop-types';

const CharacterNotFound = (props) => (
  <div className='not-found-container'>
    <h3 className='not-found-title'>
      No hay ningún personaje que coincida con la palabra {props.inputText}
    </h3>
    <img src={Rick} alt='Rick' className='not-found-img'></img>
  </div>
);

export default CharacterNotFound;
