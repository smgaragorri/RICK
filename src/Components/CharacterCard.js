import React from 'react';
import PropTypes from 'prop-types';

const CharacterCard = (props) => {
  const { id, name, image, specie } = props;
  return (
    <div key={id}>
      <img alt={name} src={image}></img>
      <h3>{name}</h3>
      <p>{specie}</p>
    </div>
  );
};

CharacterCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  specie: PropTypes.string.isRequired,
};

export default CharacterCard;
