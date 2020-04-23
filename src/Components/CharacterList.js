import React from 'react';
import CharacterCard from './CharacterCard';
import PropTypes from 'prop-types';

const CharacterList = (props) => {
  return (
    <ul>
      {props.charactersList
        .filter((character) =>
          character.name.toLowerCase().includes(props.inputText.toLowerCase())
        )
        .map((character) => (
          <li key={character.id}>
            <CharacterCard
              id={character.id}
              name={character.name}
              image={character.image}
              specie={character.specie}
            />
          </li>
        ))}
    </ul>
  );
};

CharacterList.propTypes = {
  data: PropTypes.object,
};

export default CharacterList;
