import React from 'react';

const CharacterCard = (props) => {
  console.log(props);
  return (
    <li key={props.data.id}>
      <img alt={props.data.name} src={props.data.image}></img>
      <h3>{props.data.name}</h3>
      <p>{props.data.specie}</p>
      <p>{props.data.episode}</p>
    </li>
  );
};

export default CharacterCard;
