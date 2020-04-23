import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CharacterCard = (props) => {
  const { id, name, image, specie } = props;
  return (
    <Link className='link' to={`/character/${id}`}>
      <div className='list-card' key={id}>
        <img className='list-img' alt={name} src={image}></img>
        <h3 className='list-title'>{name}</h3>
        <p className='list-subtitle'>{specie}</p>
      </div>
    </Link>
  );
};

CharacterCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  specie: PropTypes.string.isRequired,
};

export default CharacterCard;
