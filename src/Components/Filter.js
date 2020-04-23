import React from 'react';

const Filter = (props) => {
  function HandleFilter(ev) {
    props.handleInputData({
      value: ev.currentTarget.value,
      name: ev.currentTarget.name,
    });
  }
  return (
    <form className='input-text'>
      <input
        placeholder='Search'
        type='text'
        name='name'
        key='search'
        value={props.value}
        onChange={HandleFilter}
      ></input>
    </form>
  );
};

export default Filter;
