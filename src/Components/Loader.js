import React from 'react';

const Loader = () => {
  return (
    <div className='loader-container'>
      <h3 className='loader-title'>Cargando los datos . . .</h3>
      <img
        className='loader-img'
        alt='Cargando'
        src='https://media.giphy.com/media/i2tLw5ZyikSFdkeGHT/giphy.gif'
      ></img>
    </div>
  );
};

export default Loader;
