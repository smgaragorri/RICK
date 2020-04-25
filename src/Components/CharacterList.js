import React from 'react';
import CharacterCard from './CharacterCard';
import PropTypes from 'prop-types';
import CharacterNotFound from './CharacterNotFound';

const CharacterList = (props) => {
  const characterListFiltered = props.charactersList.filter((character) =>
    character.name.toLowerCase().includes(props.inputText.toLowerCase())
  );
  return (
    <div className='list'>
      <ul className='list-container'>
        {characterListFiltered.length > 0 ? (
          characterListFiltered
            .sort((prev, character) => prev.name.localeCompare(character.name))
            .map((character) => (
              <li className='list-el' key={character.id}>
                <CharacterCard
                  id={character.id}
                  name={character.name}
                  image={character.image}
                  specie={character.specie}
                />
              </li>
            ))
        ) : (
          <CharacterNotFound
            message={`No hay ningún personaje que coincida con la palabra '${props.inputText}'`}
          />
        )}
      </ul>
    </div>
  );
};

CharacterList.propTypes = {
  charactersList: PropTypes.arrayOf(PropTypes.object).isRequired,
  inputText: PropTypes.string.isRequired,
};

export default CharacterList;
