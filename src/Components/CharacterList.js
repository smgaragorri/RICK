import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
  console.log(props);
  return (
    <ul>
      {props.data.map((character) => (
        <li key={character.id}>
          <CharacterCard data={character} />
        </li>
      ))}
    </ul>
  );
};

export default CharacterList;
