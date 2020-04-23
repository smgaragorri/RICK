import React from 'react';
import PropTypes from 'prop-types';

const CharacterDetail = (props) => {
  const { id, name, image, specie, status, episode, origin } = props;
  return (
    <div key={id}>
      <img alt={name} src={image}></img>
      <h3>{name}</h3>
      <p>Status: {status}</p>
      <p>Species: {specie}</p>
      <p>Origin: {origin}</p>
      <p>Episodes: {episode}</p>
    </div>
  );
};

CharacterDetail.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  specie: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  episode: PropTypes.string.isRequired,
};

export default CharacterDetail;
