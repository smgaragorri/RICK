import React from 'react';
import CharacterCard from './CharacterCard';
import PropTypes from 'prop-types';

const CharacterList = (props) => {
  return (
    <ul className='list-container'>
      {props.charactersList
        .filter((character) =>
          character.name.toLowerCase().includes(props.inputText.toLowerCase())
        )
        .map((character) => (
          <li className='list-el' key={character.id}>
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
