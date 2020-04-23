import React from 'react';
import PropTypes from 'prop-types';
import portalIcon from '../Stylesheets/portalIcon.png';
import { Link } from 'react-router-dom';

const deadStauts = (status) => {
  return (
    <>
      {status} <i className='fas fa-cross'></i>
    </>
  );
};
const CharacterDetail = (props) => {
  console.log(props);
  // let status;
  // if (props.character.status === 'Alive') {
  //   return (status = `${props.character.status} ${cross} `);
  // }
  return (
    <div className='character-detail-card' key={props.character.id}>
      <div>
        <img
          className='character-detail-img'
          alt={props.character.name}
          src={props.character.image}
        ></img>
      </div>
      <div className='character-detail-text'>
        <h3 className='character-detail-name'>{props.character.name}</h3>
        <p className='character-detail-info'>
          Status:{' '}
          {props.character.status === 'Dead'
            ? deadStauts(props.character.status)
            : props.character.status}
        </p>
        <p className='character-detail-info'>
          Species: {props.character.specie}
        </p>
        <p className='character-detail-info'>
          Origin: {props.character.origin}
        </p>
        <p className='character-detail-info'>
          Episodes: {props.character.episode}
        </p>
      </div>
      <div className='character-detail-icon-container'>
        <Link className='link-detail' to={`/`}>
          <img
            className='character-detail-icon'
            alt='Volver'
            src={portalIcon}
          ></img>
        </Link>
      </div>
    </div>
  );
};

CharacterDetail.propTypes = {
  character: PropTypes.object.isRequired,
};

export default CharacterDetail;
